<template lang="pug">
.wrapper
  .icon
    .slider(:class="{ slide: this.isClose }")
      .inner.openIcon
        .bar
        .bar
        .bar
      .inner.closeIcon
        .bar
        .bar
</template>
<script>
export default {
  props: {
    isClose: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
.wrapper {
  padding: 12px;
  transition: 0.3s;
  cursor: pointer;
}
.icon {
  display: flex;
  width: 18px;
  height: 18px;
  overflow: hidden;
  align-items: center;
}
.inner {
  width: 18px;
  min-width: 18px;
  height: 18px;
  display: flex;
  position: relative;
  &:first-child {
    margin-right: 16px;
  }
}
.bar {
  width: 100%;
  height: 2px;
  background: $black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.closeIcon {
  .bar {
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
}
.openIcon {
  .bar {
    &:first-child {
      top: 0;
      bottom: auto;
    }
    &:last-child {
      top: auto;
      bottom: 0;
    }
  }
}
.slider {
  display: flex;
  transition: 0.3s;
}
.slide {
  transform: translate3d(-34px, 0, 0);
}
</style>
