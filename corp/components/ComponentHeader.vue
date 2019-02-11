<template lang="pug">
header
  a.logo(href='/')
    img(src='~/assets/img/logo.svg')
  .menu
    a.link(v-for="item in items" :key="item.id" v-scroll-to="'#' + item.link") {{item.title}}
  .mobile-menu(@click="handleToggle" :class="{isOpen: this.isOpen}")
    hamburger(v-bind:isClose="isOpen" isMenu)
    .menu-wrap(v-if="isOpen")
      a.link-mobile(v-for="item in items" :key="item.id" v-scroll-to="'#' + item.link") {{item.title}}
</template>
<script>
import Hamburger from '~/components/atoms/Hamburger'
import nav from '~/assets/data/nav.json'

export default {
  components: {
    Hamburger
  },
  data: () => {
    return {
      items: nav,
      isOpen: false
    }
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 48px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  @include mq(lg) {
    padding: 24px;
  }
  @include mq(sm) {
    padding: 12px 12px 12px 24px;
  }
}
.logo {
  width: 150px;
  display: flex;
  align-items: center;
  @include scaleHover();
  @include mq(sm) {
    width: 100px;
  }
}
.menu {
  display: flex;
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  @include mq(lg) {
    display: none;
  }
}
.link {
  display: inline-block;
  color: $black;
  margin-left: 32px;
  white-space: nowrap;
  font-size: 1.8rem;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 2px;
    background: $black;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
    transition: 0.3s;
  }
  &:hover {
    transform: translate3d(0, -4px, 0);
    &::after {
      transform: scale3d(1, 1, 1);
    }
  }
}
.mobile-menu {
  display: none;
  position: relative;
  transition: 0.3s;
  @include mq(lg) {
    display: block;
  }
  &.isOpen {
    background: $black;
  }
}
.menu-wrap {
  position: absolute;
  top: 100%;
  right: 0;
  background: $black;
  padding: 40px;
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
}
.link-mobile {
  display: block;
  color: #fff;
  margin-bottom: 32px;
  letter-spacing: 0.05em;
  &:last-child {
    margin-bottom: 0;
  }
}
.closeIcon {
  .bar {
    background: #fff;
  }
}
</style>
