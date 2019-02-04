<template lang="pug">
.back
  .news
    section-title.mb64(align='center') NEWS
    .wrapper
      a.item(v-for="newsItem in activeNewsItems" :key="newsItem.id" :href="newsItem.link" target="blank")
        tag.override {{newsItem.date}}
        p.text {{newsItem.title}}
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle'
import Tag from '~/components/atoms/Tag'
import newsData from '~/assets/data/news.json'
export default {
  components: {
    SectionTitle,
    Tag
  },
  data: () => {
    return {
      newsItems: newsData
    }
  },
  computed: {
    activeNewsItems: function() {
      return this.newsItems
        .filter(newsItem => {
          return newsItem.isActive
        })
        .slice(0, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.back {
  width: 100%;
  padding: 160px 24px;
  background: url(~assets/img/dummy.jpg) no-repeat center;
  background-size: cover;
  text-align: center;
}
.news {
  display: inline-block;
  text-align: left;
  background: #fff;
  max-width: 1000px;
  padding: 80px 100px 100px;
}
.item {
  display: flex;
  margin-bottom: 24px;
  color: $black;
  &:last-child {
    margin-bottom: 0;
  }
  @include scaleHover();
}
.override {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
}
.text {
  padding-top: 1px;
}
.mb64 {
  margin-bottom: 64px;
  @include mq(sp) {
    margin-bottom: 32px;
  }
}
</style>
