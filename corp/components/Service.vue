<template lang="pug">
.back(:id="sections[1].link")
  .wrapper
    .info
      section-title.override {{sections[1].title}}
      .logo
        img(src='~/assets/img/logo.svg')
      p.text この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
      primary-button サービスサイトへ
    .image
      img(src='~/assets/img/chip_mock.png')
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle'
import PrimaryButton from '~/components/atoms/PrimaryButton'
import nav from '~/assets/data/nav.json'

export default {
  components: {
    SectionTitle,
    PrimaryButton
  },
  data: () => {
    return {
      sections: nav
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.back {
  background: $gray;
}
.wrapper {
  display: flex;
  align-items: flex-end;
  max-width: 1200px;
  margin: auto;
  padding: 0 48px;
  @include mq(sm) {
    flex-direction: column;
    padding: 0 32px;
  }
}
.info {
  width: 50%;
  margin: 200px 48px 200px 0;
  @include mq(md) {
    width: 70%;
    margin: 120px 16px 120px 0;
  }
  @include mq(sm) {
    width: 100%;
    margin: 80px 0 32px;
  }
}
.logo {
  width: 200px;
  margin-bottom: 32px;
  @include mq(md) {
    width: 160px;
  }
  /* @include mq(sm) {
    margin-left: auto;
    margin-right: auto;
  } */
}
.text {
  margin-bottom: 32px;
}
.image {
  position: relative;
  left: 130px;
  margin-top: 32px;
  max-width: 560px;
  @include mq(md) {
    left: 80px;
  }
  @include mq(sm) {
    left: 12%;
  }
}
.override {
  margin-bottom: 48px;
  @include mq(sm) {
    margin-bottom: 32px;
  }
}
</style>
