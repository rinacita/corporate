<template lang="pug">
.container
  slot
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.container {
  max-width: 1200px;
  width: 100%;
  padding: 240px 48px;
  margin: auto;
  @include mq(md) {
    padding: 120px 48px;
  }
  @include mq(sm) {
    padding: 80px 32px;
  }
}
</style>
