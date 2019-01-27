<template lang="pug">
main
  about
  team
  news
  company
</template>

<script>
import About from '~/components/About'
import Team from '~/components/Team'
import News from '~/components/News'
import Company from '~/components/Company'

export default {
  components: {
    About,
    Team,
    News,
    Company
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

main {
  color: $black;
}

a {
  color: $black;
  &:hover {
    color: $black;
  }
}
</style>
