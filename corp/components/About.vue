<template lang="pug">
container(:id="sections[0].link")
  section-title.mb64.align {{sections[0].title}}
  h3.big-copy 感動とワクワクで
    br
    | 世界を彩る
  p.about アーティストやクリエイターが生み出す作品には、
    br.sm-br
    | 人々を感動させ、幸せにする力があります。
    br
    | そんな感動やワクワクで、世界をもっと夢で溢れる場所にしていきたい。
    br
    br
    | ルネサンスの最盛期、 パトロンの支援によって
    br.sm-br
    | 多くのアーティストが活躍したように、
    br.sm-br
    | 私たちはテクノロジーを駆使し、 個人がもっと自由に創造し、
    br.sm-br
    | 活躍できる社会を目指します。
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
  margin-bottom: 48px;
  line-height: 1.6;
  letter-spacing: 0.05em;
  font-weight: 900;
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
  margin-bottom: 48px;
  @include mq(md) {
    margin-bottom: 32px;
  }
}
.align {
  text-align: left;
}
</style>
