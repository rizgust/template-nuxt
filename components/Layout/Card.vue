<template>
  <div :class="cardClasses" @mouseover="onHoverHandler(true)"  @mouseleave="onHoverHandler(false)">    
    <div class="card-overlay"/>
    <div class="card-header">
        <slot name="card-header"></slot>
    </div>
    <div class="card-body">
        <slot name="card-body"></slot>
    </div>
    <div class="card-footer">
        <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    bodyType: { type: String, default: "card" },
  },
  computed: {
    cardClasses() {
      return `card ${this.bodyType}`;
    },
  },
  methods:{
    onHoverHandler(state){
      this.$emit(state?'onHover':'onHoverLeave',this.value)
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(158, 158, 158, 0.2);
    display: flex;
    min-height: 280px;
    padding: 15px;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 8px;
    position: relative;
    top: 0;
    transition: top 0.1s ease, box-shadow .1s ease;
}

.card.full {
    padding: 0px;
    .card-body{
      padding: 15px 15px 0 15px;
    }
    .card-footer{
      padding: 0 15px 15px 15px;
      position: relative;
    }
    .card-header{
      position: relative;
    }
}
.card-overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.card:hover {
    top: -5px;
    box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.2);
    .add-indicator{
      opacity: 1;
    }
}
</style>