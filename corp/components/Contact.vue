<template lang="pug">
.back
  .wrapper
    section-title(align='center' isWhite) CONTACT
    p.text 共催・提携や取材のご依頼、採用に関するお問い合わせは下記よりお気軽にお問い合わせください。
      br
      | お問い合わせ内容の確認後、担当者よりご連絡させて頂きます。
    primary-button 問い合わせする
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
  background: rgba(0, 0, 0, 0.7);
  position: relative;
  color: #fff;
  padding: 160px 24px;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: no-repeat center;
    background-image: url(~assets/img/dummy.jpg);
    z-index: -1;
  }
}
.text {
  margin-bottom: 32px;
}
</style>
