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
.member {
  width: 21.666%;
  margin-bottom: 48px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: translate3d(0, -2px, 0) scale3d(1.02, 1.02, 1);
  }
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
