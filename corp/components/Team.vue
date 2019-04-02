<template lang="pug">
container(:id="sections[2].link")
  section-title.mb64 {{sections[2].title}}
  .flex
    .member(v-for="(member, index) in activeMembers" :key="member.id" @click="open(index)")
      .image
        img(:src="require('~/assets/img/member/' + member.image + '.jpg')")
      div
        .name {{member.name}}
        tag(v-for="position in member.position").margin-right.mobile {{position}}
  el-dialog(:visible.sync="dialogVisible")
    el-carousel(
      :autoplay="false"
      arrow="always"
      ref="carousel"
      :initial-index="this.modalIndex"
      :top="0"
    )
      el-carousel-item(v-for="(member, index) in activeMembers" :key="member.id" name="index")
        .modal-inner
          //- .transition-cover
          .modal-image
            img(:src="require('~/assets/img/member/' + member.image + '.jpg')")
          .modal-info
            .modal-top
              .modal-name {{member.name}}
              tag.override(v-for="position in member.position").margin-right {{position}}
              .modal-link
                a.sns(v-if="member.twitter" :href="'https://twitter.com/' + member.twitter" target="blank")
                  i.fab.fa-twitter
                a.sns(v-if="member.facebook" :href="'https://www.facebook.com/' + member.facebook" target="blank")
                  i.fab.fa-facebook
            p.modal-text(v-if="member.history") {{member.history}}
</template>
<script>
import { TweenMax } from 'gsap'
import Container from '~/components/atoms/Container'
import SectionTitle from '~/components/atoms/SectionTitle'
import Tag from '~/components/atoms/Tag'
import Hamburger from '~/components/atoms/Hamburger'
import teamData from '~/assets/data/team.json'
import nav from '~/assets/data/nav.json'

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
      modalIndex: 0,
      sections: nav,
      dialogVisible: false
    }
  },
  computed: {
    activeMembers: function() {
      return this.members.filter(member => {
        return member.isActive
      })
    }
  },
  updated() {
    if (this.dialogVisible) {
      this.setActiveItem(this.modalIndex)
    }
  },
  methods: {
    setActiveItem(index) {
      this.$refs.carousel.setActiveItem(index)
    },
    open(index) {
      this.modalIndex = index
      this.dialogVisible = true
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
    @include mq(md) {
      width: 30%;
    }
    @include mq(sm) {
      width: 47%;
    }
    order: 1;
  }
  &::after {
    content: '';
    display: block;
    width: 21.666%;
    @include mq(md) {
      width: 30%;
    }
    @include mq(sm) {
      width: 47%;
    }
  }
}
.mb64 {
  margin-bottom: 64px;
  @include mq(md) {
    margin-bottom: 48px;
  }
  @include mq(sm) {
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
  @include mq(md) {
    width: 30%;
  }
  @include mq(sm) {
    width: 47%;
    margin-bottom: 32px;
  }
}
.image {
  width: 100%;
  margin-bottom: 12px;
}
.name {
  font-size: 1.8rem;
  font-family: 'Noto Sans JP black';
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
  @include mq(md) {
    font-size: 1.6rem;
  }
  @include mq(sm) {
    font-size: 1.4rem;
  }
}
.modal {
  &-inner {
    display: flex;
    background: #fff;
    height: 100%;
    @include mq(md) {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      flex-direction: column;
    }
  }
  &-image {
    max-width: 40%;
    min-width: 40%;
    overflow: hidden;
    img {
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    @include mq(md) {
      max-width: 100%;
      min-height: 60%;
      max-height: 60%;
    }
    @include mq(sm) {
      min-height: 300px;
      max-height: 300px;
    }
  }
  &-info {
    padding: 64px 64px 80px;
    height: 100%;
    overflow: auto;
    @include mq(md) {
      overflow: visible;
    }
    @include mq(sm) {
      overflow: visible;
      padding: 7.5% 7.5% 80px;
    }
  }
  &-name {
    font-size: 2.4rem;
    font-family: 'Noto Sans JP black';
    font-weight: 900;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
    @include mq(md) {
      font-size: 2rem;
    }
  }
  &-link {
    margin-top: 18px;
  }
  &-text {
    margin-top: 24px;
  }
}
.sns {
  font-size: 1.4em;
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
.mobile {
  font-size: 1rem;
}
.transition-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: -100%;
}
</style>
