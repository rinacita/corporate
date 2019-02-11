<template lang="pug">
container(:id="sections[4].link")
  section-title {{sections[4].title}}
  .wrapper
    .item
      .title 会社名
      .text 株式会社Rinacita
    .item
      .title 会社名
      .text 株式会社Rinacita
    .item
      .title 会社名
      .text 株式会社Rinacita
    .item
      .title 会社名
      .text 株式会社Rinacita
    .item
      .title 会社名
      .text 株式会社Rinacita
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
</style>
