<template lang="pug">
.back(:id="sections[3].link")
  .news
    section-title.mb64 {{sections[3].title}}
    .wrapper
      a.item(v-for="newsItem in activeNewsItems" :key="newsItem.id" :href="newsItem.link" target="blank")
        tag.override {{newsItem.date}}
        p.text {{newsItem.title}}
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle'
import Tag from '~/components/atoms/Tag'
import newsData from '~/assets/data/news.json'
import nav from '~/assets/data/nav.json'

export default {
  components: {
    SectionTitle,
    Tag
  },
  data: () => {
    return {
      newsItems: newsData,
      sections: nav
    }
  },
  computed: {
    activeNewsItems: function() {
      return this.newsItems
        .filter(newsItem => {
          return newsItem.isActive
        })
        .slice(0, 5)
        .reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.back {
  width: 100%;
  padding: 160px 24px;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: no-repeat center;
    background-image: url(~assets/img/news.jpg);
    background-size: cover;
    z-index: -1;
  }
  @include mq(md) {
    padding: 120px 24px;
  }
  @include mq(sm) {
    padding: 64px 24px;
  }
}
.news {
  display: inline-block;
  text-align: left;
  background: #fff;
  max-width: 1000px;
  padding: 80px 100px 100px;
  @include mq(md) {
    padding: 60px;
  }
  @include mq(sm) {
    padding: 32px 24px 48px;
  }
}
.item {
  display: flex;
  margin-bottom: 24px;
  color: $black;
  &:last-child {
    margin-bottom: 0;
  }
  @include scaleHover();
  @include mq(sm) {
    flex-direction: column;
    align-items: flex-start;
  }
}
.override {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  @include mq(sm) {
    font-size: 1rem;
    padding: 6px;
    margin-right: 0;
    margin-bottom: 6px;
  }
}
.text {
  padding-top: 1px;
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
</style>
