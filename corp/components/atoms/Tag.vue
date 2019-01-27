<template lang="pug">
.tag
  slot
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.tag {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background: $black;
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  padding: 4px 6px;
  letter-spacing: 0.1em;
  white-space: nowrap;
}
</style>
