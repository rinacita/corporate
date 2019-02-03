<template lang="pug">
main
  component-header
  nuxt
  component-footer
  modal-portal
</template>
<script>
import ComponentHeader from '~/components/ComponentHeader'
import ComponentFooter from '~/components/ComponentFooter'

export default {
  components: {
    ComponentHeader,
    ComponentFooter
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
