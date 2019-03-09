<template lang="pug">
footer
  .wrapper
    p © 2019 rinacita, inc.
    .link
      a.sns(href='https://twitter.com/rinacita_jp' target="_blank")
        i.fab.fa-twitter
      a.sns(href='https://www.instagram.com/chip_app/' target="_blank")
        i.fab.fa-instagram
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

footer {
  background: $black;
  color: #fff;
  text-align: center;
  padding: 80px 24px;
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  @include mq(md) {
    padding: 60px 24px;
  }
  @include mq(sm) {
    padding: 32px 24px;
  }
}
.wrapper {
  display: inline-flex;
  align-items: center;
}
.link {
  margin-left: 64px;
  @include mq(sm) {
    margin-left: 32px;
  }
}
.sns {
  font-size: 1.2em;
  color: #fff;
  margin-left: 32px;
  &:first-child {
    margin-left: 0;
  }
  i {
    @include scaleHover();
  }
}
</style>
