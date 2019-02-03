<template lang="pug">
container
  section-title.mb64(align="center") TEAM
  .flex
    .member(v-for="(member, index) in activeMembers" :key="member.id" @click="open(index)")
      .image
        img(:src="require('~/assets/img/' + member.image + '.jpg')")
      div
        .name {{member.name}}
        tag(v-for="position in member.position").margin-right {{position}}
  no-ssr
    modal(
      name='detail'
      pre-mount=true
    )
      div
        .modal-inner
          .modal-image
            img(:src="require('~/assets/img/' + members[modalIndex].image + '.jpg')")
          .modal-info
            .modal-top
              .modal-name {{members[modalIndex].name}}
              tag.override(v-for="position in members[modalIndex].position").margin-right {{position}}
              .modal-link
                a.sns(v-if="members[modalIndex].twitter" :href="'https://twitter.com/' + members[modalIndex].twitter" target="blank")
                  i.fab.fa-twitter
                a.sns(v-if="members[modalIndex].facebook" :href="'https://www.facebook.com/' + members[modalIndex].facebook" target="blank")
                  i.fab.fa-facebook
            p.modal-text(v-if="members[modalIndex].history") {{members[modalIndex].history}}
          .direction
            button.direction-item(@click="previous")
              i.fas.fa-angle-left
            button.direction-item(@click="next")
              i.fas.fa-angle-right
          .close(@click="close")
            hamburger
</template>
<script>
import Container from '~/components/atoms/Container'
import SectionTitle from '~/components/atoms/SectionTitle'
import Tag from '~/components/atoms/Tag'
import Hamburger from '~/components/atoms/Hamburger'
import teamData from '~/assets/data/team.json'

export default {
  components: {
    Container,
    SectionTitle,
    Tag,
    Hamburger
  },
  data: () => {
    return {
      members: teamData,
      modalIndex: 0
    }
  },
  computed: {
    activeMembers: function() {
      return this.members.filter(member => {
        return member.isActive
      })
    }
  },
  methods: {
    open(index) {
      this.modalIndex = index
      this.$modal.push('detail')
    },
    close() {
      this.$modal.pop()
    },
    previous() {
      if (this.modalIndex > 0) {
        this.modalIndex--
      }
    },
    next() {
      const length = this.activeMembers.length - 1
      if (this.modalIndex < length) {
        this.modalIndex++
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &::before {
    content: '';
    display: block;
    width: 21.666%;
    order: 1;
  }
  &::after {
    content: '';
    display: block;
    width: 21.666%;
  }
}
.mb64 {
  margin-bottom: 64px;
  @include mq(sp) {
    margin-bottom: 32px;
  }
}
.margin-right {
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }
}
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
.modal {
  &-inner {
    display: flex;
    position: relative;
    background: #fff;
  }
  &-image {
    max-width: 400px;
    min-width: 400px;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    padding: 64px 64px 80px;
  }
  &-top {
  }
  &-name {
    font-size: 2.4rem;
    font-weight: 900;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }
  &-link {
    margin-top: 18px;
  }
  &-text {
    margin-top: 24px;
  }
}
.direction {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: $yellow;
    color: $black;
    font-size: 1.2em;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.3s;
    &:hover {
      background: $black;
      color: #fff;
    }
  }
}
.close {
  position: absolute;
  top: 16px;
  right: 16px;
}
.sns {
  font-size: 1.2em;
  margin-left: 16px;
  color: $black;
  &:first-child {
    margin-left: 0;
  }
  i {
    @include scaleHover();
  }
}
.override {
  font-size: 1.4rem;
  padding: 6px;
}
</style>
