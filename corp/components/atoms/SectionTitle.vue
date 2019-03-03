<template lang="pug">
u-animate-container.align
  u-animate(name="text-animation" :offset="100")
    .section-title(:class="{ white: this.isWhite }" data-splitting)
      slot
</template>
<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'
import Splitting from 'splitting'

export default {
  components: {
    UAnimateContainer,
    UAnimate
  },
  props: {
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    Splitting()
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
    transition: 0.6s;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
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
.text-animation {
  .section-title::after {
    transform: scale3d(1, 1, 1);
  }
}
</style>
