/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.15 BY RIZGUST
    FUNCTION  : PURPOSE IMAGE GROUP BOX DESIGN STANDARD
    UPDATED   : -
*/

<template>
  <div>
    <div class="image-groupbox-container">
      <img :class="imageGrouping1Class" :src="media[0]" @error="setAltImg"/>
      <div class="flex-wrapper-two">
        <img :class="imageGrouping2Class" :src="media[1]" @error="setAltImg"/>
        <div class="flex-wrapper-one">
          <img :class="imageGrouping3Class" :src="media[2]" @error="setAltImg"/>
          <div :class="imageGrouping4Class">
            <p class="more-image">{{ moreImage() }}+</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentsPostMediaMoreMedia",
  props: {
    media: {
      type: Array,
      default:
        [
          "https://fujifilm-x.com/wp-content/uploads/2019/08/ff_gfx100_sample02.jpg"
        ],
    },
  },
  methods: {
    moreImage() {
      return this.media.length - 3;
    },
    setAltImg(event) { 
      event.target.src = '/icons/placeholder.svg'
    } 
  },
  computed: {
    imageGrouping1Class() {
      return `media-groupbox-item ${this.media.length == 1 ? "full" : "half left"}`;
    },
    imageGrouping2Class() {
      var position = 'half'
      const mediaSize = this.media.length;
      switch(mediaSize) {
        case 1:
          position = 'media-groupbox-item hidden'
          break;
        case 2:
          position = 'half right'
          break;
        default:
          position = 'quarter top-right'
      }
      return `media-groupbox-item ${position}`;
    },
    imageGrouping3Class() {
      var position = 'half'
      const mediaSize = this.media.length;
      switch(true) {
        case (mediaSize<=2):
          position = 'media-groupbox-item hidden'
          break;
        default:
          position = 'quarter bottom-right'
      }
      return `media-groupbox-item ${position}`;
    },
    imageGrouping4Class() {
      var position = 'half'
      const mediaSize = this.media.length;
      switch(true) {
        case (mediaSize<=3):
          position = 'media-groupbox-item hidden'
          break;
        default:
          position = 'media-groupbox-item more quarter bottom-right'
      }
      return `media-groupbox-item ${position}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-groupbox-container{
  display: flex;
  align-items: flex-start;
  max-width: 120px;
  max-height: 120px;
}
.media-groupbox-item{
  object-fit: cover;
}
.media-groupbox-item.hidden{
  display: none;
}
.media-groupbox-item.full{
  width: 120px;
  height: 120px;
  border-radius: 4px;
}
.media-groupbox-item.half{
  width: 59px;
  height: 120px;
}
.media-groupbox-item.quarter{
  width: 59px;
  height: 59px;
}
.media-groupbox-item.half.left{
  border-radius: 4px 0 0 4px;
  margin-right: 1px;
}
.media-groupbox-item.half.right{
  border-radius: 0 4px 4px 0;
  margin-left: 1px;
}
.media-groupbox-item.top-right{
  border-radius: 0 4px 0 0;
  margin-left: 1px;
  margin-bottom: 1px;
}
.media-groupbox-item.top-left{
  border-radius: 4px 0 0 0;
  margin-right: 1px;
  margin-bottom: 1px;
}
.media-groupbox-item.bottom-right{
  border-radius: 0 0 4px 0;
  margin-left: 1px;
  margin-top: 1px;
}
.media-groupbox-item.bottom-left{
  border-radius: 0 0 0 4px;
  margin-right: 1px;
  margin-top: 1px;
}
.flex-wrapper-two {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.flex-wrapper-one {
  display: flex;
  align-items: flex-start;
  position: relative;
}
.more {
  background-color: $alpha-black-04;
  position: absolute;       
  display: flex;
  align-items: center;
  justify-content: center;
}
.more-image {
  @include roboto-16-semibold;
  color: $text-white;
}
</style>