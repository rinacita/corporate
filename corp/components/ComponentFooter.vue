<template lang="pug">
footer
  .wrapper
    p © 2019 rinacita, inc.
    .link
      a.sns(href='#')
        i.fab.fa-twitter
      a.sns(href='#')
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
}
.wrapper {
  display: inline-flex;
  align-items: center;
}
.link {
  margin-left: 64px;
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
