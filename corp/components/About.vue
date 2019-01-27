<template lang="pug">
container
  section-title.mb64 ABOUT US
  h3.big-copy ありのまま生きろ。
    br
    | 夢を追い求めろ。
    br
    | 走り続けろ。
    br
    | 不可能なんてない。
  .about この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
    br
    | この文章はダミーです。
    br
    br
    | 文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
    br
    | この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
    br
    | この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
    br
    br
    | 文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字
</template>
<script>
import Container from '~/components/atoms/Container'
import SectionTitle from '~/components/atoms/SectionTitle'

export default {
  components: {
    Container,
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.big-copy {
  font-size: 4.8rem;
  margin-bottom: 80px;
  line-height: 1.6;
  letter-spacing: 0.05em;
}

.about {
  font-size: 2.4rem;
  line-height: 2;
}

.mb64 {
  margin-bottom: 64px;
  @include mq(sp) {
    margin-bottom: 32px;
  }
}
</style>
