<template lang="pug">
div
  about
  service
  team
  news
  company
  contact
</template>

<script>
import About from '~/components/About'
import Service from '~/components/Service'
import Team from '~/components/Team'
import News from '~/components/News'
import Company from '~/components/Company'
import Contact from '~/components/Contact'

export default {
  components: {
    About,
    Service,
    Team,
    News,
    Company,
    Contact
  }
}
</script>
<style lang="scss" scoped>
</style>
