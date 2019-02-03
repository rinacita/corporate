<template lang="pug">
.menu-icon
  .menu-icon__inner
    .menu-icon__bar.menu-icon__bar--normal
    .menu-icon__bar.menu-icon__bar--normal
    .menu-icon__bar.menu-icon__bar--normal
    .menu-icon__bar.menu-icon__bar--close
    .menu-icon__bar.menu-icon__bar--close
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.menu-icon {
  cursor: pointer;
  &__inner {
    width: 24px;
    height: 22px;
    position: relative;
    @include mq(tb) {
      width: 20px;
      height: 16px;
    }
  }
  &__bar {
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $black;
      transform: translate3d(0, 0, 0);
      transition: 0.3s;
    }
    @include mq(tb) {
      height: 2px;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translate3d(0, -50%, 0);
      transition: 0.3s;
      &::after {
        transition-delay: 0.1s;
      }
    }
    &:nth-child(3) {
      top: auto;
      bottom: 0;
      &::after {
        transition-delay: 0.2s;
      }
    }
    &--close {
      top: 0;
      bottom: 0;
      margin: auto;
      transform: rotate(45deg);
      cursor: pointer;
      @include layer(close);
      &::after {
        background: #fff;
        transform: translate3d(100%, 0, 0);
        transition: none;
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
  &:hover {
    .menu-icon__bar--normal::after {
      animation: bar 0.3s;
    }
    .menu-icon__bar--normal:nth-child(2)::after {
      animation-delay: 0.05s;
    }
    .menu-icon__bar--normal:nth-child(3)::after {
      animation-delay: 0.1s;
    }
  }
}
@keyframes bar {
  0% {
    transform: translate3d(0, 0, 0);
  }
  49% {
    transform: translate3d(100%, 0, 0);
  }
  50% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
