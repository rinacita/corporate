<template lang="pug">
a(href='#').button
  slot
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.button {
  display: inline-block;
  color: $black;
  background: $yellow;
  white-space: nowrap;
  min-width: 140px;
  padding: 16px 24px;
  letter-spacing: 0.05em;
  @include scaleHover();
}
</style>
