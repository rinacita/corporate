<template lang="pug">
container
  section-title.mb64(align="center") TEAM
  .flex
    member(v-for="member in activeMembers" :key="member.id")
      img(slot='image' :src="require('~/assets/img/' + member.image + '.jpg')")
      h3(slot='name') {{member.name}}
      tag(v-for="position in member.position").margin-right(slot='position') {{position}}
</template>
<script>
import Container from '~/components/atoms/Container'
import SectionTitle from '~/components/atoms/SectionTitle'
import Member from '~/components/Member'
import Tag from '~/components/atoms/Tag'
import teamData from '~/assets/data/team.json'

export default {
  components: {
    Container,
    SectionTitle,
    Member,
    Tag
  },
  data: () => {
    return {
      members: teamData
    }
  },
  computed: {
    activeMembers: function() {
      return this.members.filter(member => {
        return member.isActive
      })
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
</style>
