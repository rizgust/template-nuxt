<template>
    <mounting-portal mount-to="body" append v-if="mountDom">
        <transition
            enter-active-class="v-easy-dialog--transition-ease-in"
            enter-class="v-easy-dialog--opacity-0"
            enter-to-class="v-easy-dialog--opacity-100"
            leave-active-class="v-easy-dialog--transition-ease-out"
            leave-class="v-easy-dialog--opacity-100"
            leave-to-class="v-easy-dialog--opacity-0"
        >
            <div
                role="dialog"
                v-show="isOpen"
                :aria-hidden="!isOpen"
                class="v-easy-dialog--backdrop"
                :class="backdropClass"
                :style="backdropStyle"
            >
                <component
                    tabindex="-1"
                    :is="backgroundBtnTag"
                    @click="attemptClose"
                    class="v-easy-dialog--backdrop-btn"
                ></component>

                <div
                    tabindex="-1"
                    :id="`v-easy-dialog--content-${_uid}`"
                    ref="dialogContent"
                    role="document"
                    :class="{
                        'v-easy-dialog--content-grow': growContent,
                        'v-easy-dialog--persist': showPersistence,
                        'v-easy-dialog--fullscreen': fullscreen
                    }"
                    class="v-easy-dialog--content-container"
                    :style="{
                        width: fullscreen ? '100%' : width,
                        maxHeight: fullscreen ? '100%' : maxHeight,
                        'max-width': !fullscreen && '90%'
                    }"
                >
                    <transition
                        enter-active-class="v-easy-dialog--transition-ease-in"
                        enter-class="v-easy-dialog--content-transition-closed"
                        enter-to-class="v-easy-dialog--content-transition-opened"
                        leave-active-class="v-easy-dialog--transition-ease-out"
                        leave-class="v-easy-dialog--content-transition-opened"
                        leave-to-class="v-easy-dialog--content-transition-closed"
                        @after-enter="attemptFocus"
                        @after-leave="mountDom = false"
                    >
                        <slot v-if="isOpen" :deactivate="attemptClose"></slot>
                    </transition>
                </div>
            </div>
        </transition>
    </mounting-portal>
</template>

<script>
import { MountingPortal } from 'portal-vue'
export default {
    props: {
        value: { type: Boolean, default: false },
        width: { type: String, default: '600px' },
        growContent: { type: Boolean, default: true },
        maxHeight: { type: String, default: '90%' },
        fullscreen: { type: Boolean, default: false },
        backgroundBtnTag: { type: String, default: 'button' },
        persistent: { type: Boolean, default: false },
        backdropClass: { type: undefined },
        backdropStyle: { type: undefined },
        focusOn: { type: String, default: undefined }
    },
    components: {
        MountingPortal
    },
    data() {
        return {
            isOpen: false,
            mountDom: false,
            showPersistence: false
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.$nextTick(() => {
                    if (val) {
                        this.mountDom = val
                    } else {
                        this.isOpen = false
                    }
                })
            }
        },
        mountDom: {
            immediate: true,
            handler(val) {
                if (!document.body.dataset.openedDialogs) {
                    document.body.dataset.openedDialogs = JSON.stringify([])
                }
                this.$nextTick(() => {
                    this.isOpen = val
                })
                if (val) {
                    this.pushOpenedDialogsAttr()
                } else {
                    this.cleanOpenedDialogsAttr()
                    const openedDialogs = this.openedDialogs()
                    const lastDialogId = openedDialogs[openedDialogs.length - 1]
                    if (lastDialogId) {
                        const dialog = document.querySelector(
                            `#v-easy-dialog--content-${lastDialogId}`
                        )
                        dialog.focus()
                    }
                }
                this.$emit('input', val)
            }
        }
    },
    methods: {
        attemptClose() {
            if (this.persistent) {
                this.showPersistence = true
                setTimeout(() => {
                    this.showPersistence = false
                }, 300)
            } else {
                this.isOpen = false
            }
        },
        attemptFocus() {
            const { dialogContent } = this.$refs
            if (this.focusOn) {
                const preferredFocusEl = dialogContent.querySelector(
                    this.focusOn
                )
                if (preferredFocusEl) return preferredFocusEl.focus()
            }
            dialogContent.focus()
        },
        cleanOpenedDialogsAttr() {
            const currentlyOpenedDialogs = this.openedDialogs()
            const newOpenedDialogs = currentlyOpenedDialogs.filter(
                vmId => vmId !== this._uid
            )
            this.updateOpenedDialogsAttr(newOpenedDialogs)
        },
        pushOpenedDialogsAttr() {
            const currentlyOpenedDialogs = this.openedDialogs()
            const newOpenedDialogs = [
                ...new Set([...currentlyOpenedDialogs, this._uid])
            ]
            this.updateOpenedDialogsAttr(newOpenedDialogs)
        },
        updateOpenedDialogsAttr(newOpenedDialogs) {
            document.body.dataset.openedDialogs = JSON.stringify(
                newOpenedDialogs
            )
            document.body.style.overflow =
                newOpenedDialogs.length > 0 ? 'hidden' : ''
        },
        openedDialogs() {
            return JSON.parse(document.body.dataset.openedDialogs)
        },
        escHandler(event) {
            const vmIds = this.openedDialogs()
            if (
                event.key === 'Escape' &&
                vmIds[vmIds.length - 1] === this._uid
            ) {
                this.attemptClose()
            }
        },
        tabHandler(event) {
            const openedDialogs = this.openedDialogs()
            if (
                event.key === 'Tab' &&
                openedDialogs.length > 0 &&
                openedDialogs[openedDialogs.length - 1] === this._uid
            ) {
                const focusableEls = this.$refs.dialogContent.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
                if (focusableEls.length > 0) {
                    const firstFocusableEl = focusableEls[0]
                    const lastFocusableEl =
                        focusableEls[focusableEls.length - 1]
                    if (event.shiftKey) {
                        if (
                            [firstFocusableEl, this.$refs.dialogContent].some(
                                el => el === document.activeElement
                            )
                        ) {
                            lastFocusableEl.focus()
                            event.preventDefault()
                        }
                    } else {
                        if (
                            [lastFocusableEl, this.$refs.dialogContent].some(
                                el => el === document.activeElement
                            )
                        ) {
                            firstFocusableEl.focus()
                            event.preventDefault()
                        }
                    }
                }
            }
        }
    },
    created() {
        window.addEventListener('keydown', this.escHandler)
        window.addEventListener('keydown', this.tabHandler)
    },
    beforeDestroy() {
        this.cleanOpenedDialogsAttr()
        window.removeEventListener('keydown', this.escHandler)
        window.removeEventListener('keydown', this.tabHandler)
    }
}
</script>

<style lang="scss" scoped>
.v-easy-dialog--transition-ease-in {
    opacity: 1;
    right: 0;

}
.v-easy-dialog--transition-ease-out {
    opacity: 0;
    right: 0;
}
/* .v-easy-dialog--transition-ease-in {
    transform: scale(1);
    transition: opacity cubic-bezier(0.4, 0, 1, 1) 0.15s,
        transform cubic-bezier(0.25, 0.1, 0.25, 1) 10s;

}
.v-easy-dialog--transition-ease-out {
    transform: scale(1);
    transition: opacity cubic-bezier(0, 0, 0.2, 1) 0.15s,
        transform cubic-bezier(0, 0, 0.2, 1) 0.15s;
} */
.v-easy-dialog--content-transition-opened {
    opacity: 1;
    transform: scale(1);
}
.v-easy-dialog--content-transition-closed {
    opacity: 0;
    transform: scale(0);
}
.v-easy-dialog--opacity-0 {
    opacity: 0;
}
.v-easy-dialog--opacity-100 {
    opacity: 100;
}
.v-easy-dialog--backdrop {
    z-index: 1050;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    touch-action: none;
}
.v-easy-dialog--backdrop-btn {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    cursor: default;
    background-color: transparent;
    border-color: transparent;
    outline: none;
}
.v-easy-dialog--backdrop-btn.btn:focus {
    outline: none;
    border-color: transparent;
}
.v-easy-dialog--fullscreen {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
}
.v-easy-dialog--content-grow *:first-child {
    // flex-grow: 1;
}
.v-easy-dialog--content-container {
    display: flex;
    overflow-y: auto;
    position: absolute;
    touch-action: none;
}
.v-easy-dialog--content-container:focus {
    outline: none;
}
// .v-easy-dialog--persist {
//     animation: shake 0.15s;
// }
// @keyframes shake {
//     0% {
//         box-shadow: 10px  $solid-danger-50;
//     }
//     20% {
//         box-shadow: 10px  $solid-danger-50;
//     }
//     40% {
//         box-shadow: 10px  $solid-danger-50;
//     }
//     60% {
//         box-shadow: 10px  $solid-danger-50;
//     }
//     80% {
//         box-shadow: 10px  $solid-danger-50;
//     }
//     100% {
//         box-shadow: 10px  $solid-danger-50;
//     }
// }
</style>