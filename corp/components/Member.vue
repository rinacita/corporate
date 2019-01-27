<template lang="pug">
.member
  .image
    img(src='~/assets/img/ceo.jpg')
  .meta
    h3.name 小澤 昂大
    Tag.margin-right CEO
    Tag.margin-right FOUNDER
</template>
<script>
import Tag from '~/components/atoms/Tag'
export default {
  components: {
    Tag
  }
}
</script>
<style lang="scss" scoped>
.member {
  width: 21.666%;
  margin-bottom: 48px;
}
.image {
  width: 100%;
  margin-bottom: 12px;
}
.meta {
}
.name {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}
.margin-right {
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
