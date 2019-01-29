<template lang="pug">
.back
  .wrapper
    .info
      section-title.override SERVICE
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

export default {
  components: {
    SectionTitle,
    PrimaryButton
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
}
.info {
  width: 50%;
  margin: 200px 48px 200px 0;
}
.logo {
  width: 200px;
  margin-bottom: 32px;
}
.text {
  margin-bottom: 32px;
}
.image {
  position: relative;
  left: 130px;
  margin-top: 32px;
  max-width: 560px;
}
.override {
  margin-bottom: 48px;
}
</style>
