<template lang="pug">
.back(:id="sections[5].link")
  .wrapper
    section-title(align='center' isWhite) {{sections[5].title}}
    p.text 共催・提携や取材のご依頼、採用に関するお問い合わせは下記よりお気軽にお問い合わせください。
      br
      | お問い合わせ内容の確認後、担当者よりご連絡させて頂きます。
    primary-button 問い合わせする
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
  background: rgba(0, 0, 0, 0.7);
  position: relative;
  color: #fff;
  padding: 160px 48px;
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
    background-size: cover;
    z-index: -1;
  }
  @include mq(md) {
    padding: 120px 48px;
  }
}
.text {
  margin-bottom: 32px;
}
</style>
