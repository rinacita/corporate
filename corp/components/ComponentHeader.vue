<template lang="pug">
header
  a.logo(href='/')
    img(src='~/assets/img/logo.svg')
  .menu
    a.link(href='#') ABOUT US
    a.link(href='#') SERVICE
    a.link(href='#') TEAM
    a.link(href='#') NEWS
    a.link(href='#') COMPANY
    a.link(href='#') CONTACT
</template>
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
}
.logo {
  width: 150px;
  @include scaleHover();
}
.menu {
  display: flex;
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
}
.link {
  display: inline-block;
  color: $black;
  margin-left: 32px;
  white-space: nowrap;
  font-size: 1.8rem;
  position: relative;
  transition: 0.5s;
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
</style>
