<template lang="pug">
div
  main-visual
  about
  service
  team
  news
  company
  contact
</template>

<script>
import MainVisual from '~/components/MainVisual'
import About from '~/components/About'
import Service from '~/components/Service'
import Team from '~/components/Team'
import News from '~/components/News'
import Company from '~/components/Company'
import Contact from '~/components/Contact'

export default {
  components: {
    MainVisual,
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
