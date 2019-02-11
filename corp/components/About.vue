<template lang="pug">
container(:id="sections[0].link")
  section-title.mb64.align {{sections[0].title}}
  h3.big-copy ありのまま生きろ。
    br
    | 夢を追い求めろ。
    br
    | 走り続けろ。
    br
    | 不可能なんてない。
  p.about この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
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
import nav from '~/assets/data/nav.json'

export default {
  components: {
    Container,
    SectionTitle
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

.big-copy {
  font-size: 4.8rem;
  margin-bottom: 80px;
  line-height: 1.6;
  letter-spacing: 0.05em;
  @include mq(md) {
    font-size: 3.2rem;
    margin-bottom: 40px;
  }
  @include mq(sm) {
    font-size: 2.4rem;
    margin-bottom: 32px;
  }
}

.about {
  font-size: 2.4rem;
  @include mq(md) {
    font-size: 1.8rem;
  }
  @include mq(sm) {
    font-size: 1.4rem;
  }
}

.mb64 {
  margin-bottom: 64px;
  @include mq(md) {
    margin-bottom: 32px;
  }
}
.align {
  text-align: left;
}
</style>
