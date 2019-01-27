<template lang="pug">
.back
  .news
    section-title.mb64(align='center') NEWS
    .wrapper
      a.item
        tag.override 2019.01.20
        p.text ファンクラブ作成アプリ「CHIP」運営のRINACITA、総額4600万円の資金調達を実施
      a.item
        tag.override 2019.01.20
        p.text ファンクラブ作成アプリ「CHIP」運営のRINACITA、総額4600万円の資金調達を実施
      a.item
        tag.override 2019.01.20
        p.text ファンクラブ作成アプリ「CHIP」運営のRINACITA、総額4600万円の資金調達を実施
      a.item
        tag.override 2019.01.20
        p.text ファンクラブ作成アプリ「CHIP」運営のRINACITA、総額4600万円の資金調達を実施
      a.item
        tag.override 2019.01.20
        p.text ファンクラブ作成アプリ「CHIP」運営のRINACITA、総額4600万円の資金調達を実施

</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle'
import Tag from '~/components/atoms/Tag'
export default {
  components: {
    SectionTitle,
    Tag
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.back {
  width: 100%;
  padding: 160px 24px;
  background: url(~assets/img/dummy.jpg) no-repeat center;
  background-size: cover;
  text-align: center;
}
.news {
  display: inline-block;
  text-align: left;
  background: #fff;
  max-width: 1000px;
  padding: 80px 100px 100px;
}
.item {
  display: flex;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}
.override {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
}
.text {
  padding-top: 1px;
}
.mb64 {
  margin-bottom: 64px;
  @include mq(sp) {
    margin-bottom: 32px;
  }
}
</style>
