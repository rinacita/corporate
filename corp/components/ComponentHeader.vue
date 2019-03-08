<template lang="pug">
header(v-scroll="handleScroll" :class="{isScroll: this.isScroll}")
  a.logo(href='/')
    img(src='~/assets/img/logo.svg')
  .menu
    a.link(v-for="item in items" :key="item.id" v-scroll-to="'#' + item.link") {{item.title}}
  .mobile-menu(@click="handleToggle" :class="{isOpen: this.isOpen}")
    hamburger(v-bind:isClose="isOpen" isMenu)
    transition(name="open-animation")
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
      isOpen: false,
      isScroll: false
    }
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen
    },
    handleScroll: function(evt, el) {
      window.scrollY > 0 ? (this.isScroll = true) : (this.isScroll = false)
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
  z-index: 500;
  background: rgba(255, 255, 255, 0);
  transition: 0.3s;
  @include mq(lg) {
    padding: 24px;
  }
  @include mq(sm) {
    padding: 12px 12px 12px 24px;
  }
}
.isScroll {
  background: rgba(255, 255, 255, 1);
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
  text-shadow: #fff 2px 0px, #fff -2px 0px, #fff 0px -2px, #fff 0px 2px,
    #fff 2px 2px, #fff -2px 2px, #fff 2px -2px, #fff -2px -2px, #fff 1px 2px,
    #fff -1px 2px, #fff 1px -2px, #fff -1px -2px, #fff 2px 1px, #fff -2px 1px,
    #fff 2px -1px, #fff -2px -1px;
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
  transform-origin: top right;
}
.link-mobile {
  display: block;
  color: #fff;
  margin-bottom: 32px;
  letter-spacing: 0.05em;
  transition: 0.3s ease-out;
  transition-delay: 0.2s;
  &:last-child {
    margin-bottom: 0;
  }
}
.closeIcon {
  .bar {
    background: #fff;
  }
}
.open-animation {
  &-enter-active {
    transition: 0.3s ease-out;
    transition-delay: 0.05s;
  }
  &-leave-active {
    transition: 0.1s ease-out;
  }
  &-enter,
  &-leave-to {
    transform: scale3d(0, 0, 1);
    .link-mobile {
      opacity: 0;
    }
  }
  &-enter-to,
  &-leave {
    transform: scale3d(1, 1, 1);
    .link-mobile {
      opacity: 1;
    }
  }
}
</style>
