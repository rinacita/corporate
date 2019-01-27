<template lang="pug">
main
  about
  Team
</template>

<script>
import About from '~/components/About'
import Team from '~/components/Team'

export default {
  components: {
    About,
    Team
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

main {
  color: $black;
}
</style>
