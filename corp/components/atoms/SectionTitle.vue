<template lang="pug">
.align
  .section-title(:class="{ white: this.isWhite }")
    slot
</template>
<script>
export default {
  props: {
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
  text-align: center;
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
  @include mq(md) {
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
