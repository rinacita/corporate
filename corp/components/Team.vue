<template lang="pug">
container
  section-title(align="center") TEAM
  .flex
    member
    member
    member
    member
</template>
<script>
import Container from '~/components/atoms/Container'
import SectionTitle from '~/components/atoms/SectionTitle'
import Member from '~/components/Member'

export default {
  components: {
    Container,
    SectionTitle,
    Member
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
