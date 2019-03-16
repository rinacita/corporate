<template lang="pug">
container(:id="sections[4].link")
  section-title {{sections[4].title}}
  .wrapper
    .item
      .title 会社名
      p.text 株式会社RINACITA
    .item
      .title 代表名
      p.text 代表取締役CEO 小澤昂大
    .item
      .title 所在地
      p.text 150-0045
        br
        | 東京都渋谷区神泉町11-9
        br
        |ワインアパートメント702号室
    .item
      .title 事業内容
      p.text アプリ・Webサービスの開発・運営
    .item
      .title 設立日
      p.text 2018年3月27日
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle'
import Container from '~/components/atoms/Container'
import nav from '~/assets/data/nav.json'

export default {
  components: {
    SectionTitle,
    Container
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

.wrapper {
  max-width: 1000px;
  margin: auto;
  text-align: center;
  letter-spacing: 0.05em;
}
.item {
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}
.title {
  font-size: 1.8rem;
  margin-bottom: 12px;
  letter-spacing: 0.1em;
  font-weight: 900;
  @include mq(md) {
    font-size: 1.6rem;
  }
  @include mq(sm) {
    font-size: 1.4rem;
    margin-bottom: 6px;
  }
}
.text {
  line-height: 1.5;
}
</style>
