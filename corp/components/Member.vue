<template lang="pug">
.member(@click="open")
  .image
    slot(name='image')
  div
    .name
      slot(name='name')
    slot(name='position')
  no-ssr
    modal(
      name='detail'
      pre-mount=true
    )
      .modal-inner
        .modal-image
          img(src="~/assets/img/ceo.jpg")
        .modal-info
          .modal-top
            .modal-name
              slot(name='name')
            slot(name='position')
          .modal-text aaaaaaaaaaaaa
</template>
<script>
export default {
  methods: {
    open() {
      this.$modal.push('detail')
    },
    close() {
      this.$modal.pop()
    }
  }
}
</script>

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
