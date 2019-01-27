<template lang="pug">
.align(:style="{ textAlign: this.align }")
  .section-title
    slot
</template>
<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
.align {
  margin-bottom: 32px;
  &.mb80 {
    margin-bottom: 80px;
  }
  &.mb64 {
    margin-bottom: 64px;
  }
}
.section-title {
  display: inline-block;
  position: relative;
  font-size: 3.2rem;
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  padding-bottom: 4px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: $black;
  }
  &.mb80 {
    margin-bottom: 80px;
  }
  &.mb64 {
    margin-bottom: 64px;
  }
}
</style>
