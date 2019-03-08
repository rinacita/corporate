<template lang="pug">
main
  component-header
  nuxt
  component-footer
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
  font-size: 1.6rem;
  @include mq(md) {
    font-size: 1.4rem;
  }
  @include mq(sm) {
    font-size: 1.2rem;
  }
}

a {
  color: $black;
  &:hover {
    color: $black;
  }
}
</style>
