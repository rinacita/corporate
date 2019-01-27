<template lang="pug">
container
  section-title.mb64(align="center") TEAM
  .flex
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
    member
      img(slot='image' src='~/assets/img/ceo.jpg')
      h3(slot='name') 小澤 昂大
      tag.margin-right(slot='position') CEO
      tag.margin-right(slot='position') FOUNDER
</template>
<script>
import Container from '~/components/atoms/Container'
import SectionTitle from '~/components/atoms/SectionTitle'
import Member from '~/components/Member'
import Tag from '~/components/atoms/Tag'

export default {
  components: {
    Container,
    SectionTitle,
    Member,
    Tag
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.mb64 {
  margin-bottom: 64px;
  @include mq(sp) {
    margin-bottom: 32px;
  }
}
.margin-right {
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
