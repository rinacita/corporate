<template lang="pug">
.back
  section-title.override(align='center') CONTACT
  p 共催・提携や取材のご依頼、採用に関するお問い合わせは下記よりお気軽にお問い合わせください。
    br
    | お問い合わせ内容の確認後、担当者よりご連絡させて頂きます。
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle'
export default {
  components: {
    SectionTitle
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.back {
  background: no-repeat center;
  background-image: url(~assets/img/dummy.jpg);
  position: relative;
  color: #fff;
  z-index: -2;
  padding: 160px 24px;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $black;
    opacity: 0.7;
    z-index: -1;
  }
}
.override {
  .section-title {
    &::after {
      content: '';
      background: #fff;
    }
  }
}
</style>
