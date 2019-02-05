<template lang="pug">
.align(:style="{ textAlign: this.align }")
  .section-title(:class="{ white: this.isWhite }")
    slot
</template>
<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
.align {
  margin-bottom: 32px;
}
.section-title {
  display: inline-block;
  position: relative;
  font-size: 3.2rem;
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  padding-bottom: 4px;
  text-transform: uppercase;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: $black;
  }
  @include mq(tb) {
    font-size: 2.4rem;
  }
}
.white {
  color: #fff;
  &::after {
    background: #fff;
  }
}
</style>
