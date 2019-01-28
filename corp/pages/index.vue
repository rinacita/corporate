<template lang="pug">
div
  about
  team
  news
  company
  contact
</template>

<script>
import About from '~/components/About'
import Team from '~/components/Team'
import News from '~/components/News'
import Company from '~/components/Company'
import Contact from '~/components/Contact'

export default {
  components: {
    About,
    Team,
    News,
    Company,
    Contact
  }
}
</script>
<style lang="scss" scoped>
</style>
