<template lang="pug">
main
  component-header
  nuxt
</template>
<script>
import ComponentHeader from '~/components/ComponentHeader'

export default {
  components: {
    ComponentHeader
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
