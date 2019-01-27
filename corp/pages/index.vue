<template lang="pug">
main
  about
  team
  news
</template>

<script>
import About from '~/components/About'
import Team from '~/components/Team'
import News from '~/components/News'

export default {
  components: {
    About,
    Team,
    News
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

main {
  color: $black;
}
</style>
