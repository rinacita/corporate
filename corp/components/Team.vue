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
      .modal-inner
        .modal-image
          img(:src="require('~/assets/img/' + members[modalIndex].image + '.jpg')")
        .modal-info
          .modal-top
            .modal-name {{members[modalIndex].name}}
            tag(v-for="position in members[modalIndex].position").margin-right {{position}}
            .link
              a.sns(v-if="members[modalIndex].twitter" :href="'https://twitter.com/' + members[modalIndex].twitter" target="blank")
                i.fab.fa-twitter
              a.sns(v-if="members[modalIndex].facebook" :href="'https://www.facebook.com/' + members[modalIndex].facebook" target="blank")
                i.fab.fa-instagram
          .modal-text(v-if="members[modalIndex].history") {{members[modalIndex].history}}
        .direction
          div(@click="previous")
            i.fab.fa-twitter
          div(@click="next")
            i.fab.fa-instagram

</template>
<script>
import Container from '~/components/atoms/Container'
import SectionTitle from '~/components/atoms/SectionTitle'
import Tag from '~/components/atoms/Tag'
import teamData from '~/assets/data/team.json'

export default {
  components: {
    Container,
    SectionTitle,
    Tag
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
</style>
