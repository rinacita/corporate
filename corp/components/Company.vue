<template lang="pug">
container
  section-title(align='center') COMPANY
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
export default {
  components: {
    SectionTitle,
    Container
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
  @include mq(tb) {
    font-size: 1.6rem;
  }
}
</style>
