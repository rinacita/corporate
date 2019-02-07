<template lang="pug">
a.button
  span.label
    slot
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.button {
  display: inline-block;
  position: relative;
  color: $black;
  background: $yellow;
  white-space: nowrap;
  min-width: 140px;
  padding: 16px 24px;
  letter-spacing: 0.05em;
  text-align: center;
  cursor: pointer;
  @include scaleHover();
  transition: 0.3s ease-in-out 0.1s;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 120%;
    height: 100%;
    background: $black;
    transition: 0.3s ease-in-out;
    transform: translate3d(-110%, 0, 0) skewX(-30deg);
  }
  &:hover {
    &::after {
      transform: translate3d(-7%, 0, 0) skewX(-30deg);
    }
    color: #fff;
  }
  @include mq(sm) {
    min-width: 100%;
  }
}
.label {
  position: relative;
  z-index: 1;
}
</style>
