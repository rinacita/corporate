<template lang="pug">
.member
  .image
    slot(name='image')
  div
    .name
      slot(name='name')
    slot(name='position')
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.member {
  width: 21.666%;
  margin-bottom: 48px;
  @include scaleHover();
}
.image {
  width: 100%;
  margin-bottom: 12px;
}
.name {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}
</style>
