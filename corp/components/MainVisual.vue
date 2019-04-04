<template lang="pug">
.mv(v-bind:style="{ height: windowHeight + 'px' }")
  .copy
    div.text-wrap#big
      h1.big(data-splitting) COLOR THE WORLD
      .text-bg
    div.text-wrap#small
      p.small(data-splitting) 感動とワクワクで世界を彩る
      .text-bg
  .wrapper
    .top.flex
      .square.anime2(style='width: 2.55em')
        img(src='~/assets/img/shibuya.jpg')
      .square.anime1(style='width: 1.7em')
        .black
      .square.anime2(style='width: 2.08em')
        img(src='~/assets/img/visa.jpg')
      .square.anime1(style='width: 3em')
        img(src='~/assets/img/camera.jpg')
    .bottom.flex
      .left.flex
        .square.anime2(style='width: 2.08em')
          .yellow
        .square.anime1(style='width: 4.24em')
          img(src='~/assets/img/live.jpg')
      .right.flex
        .right-top.flex
          .square.anime1(style='width: 3.16em')
            img(src='~/assets/img/graffiti.jpg')
          .square.anime1(style='width: 3.16em')
            img(src='~/assets/img/load.jpg')
        .right-bottom.flex
          .square.anime2(style='width: 5em')
            img(src='~/assets/img/studio.jpg')
          .square.anime2(style='width: 3.55em')
            img(src='~/assets/img/frontman.jpg')
</template>
<script>
import { TweenMax } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import Splitting from 'splitting'
import { UAnimateContainer, UAnimate } from 'vue-wow'

export default {
  components: {
    UAnimateContainer,
    UAnimate
  },
  data: () => {
    return {
      windowHeight: window.innerHeight
    }
  },
  methods: {
    window: (onload = function() {
      Splitting()
      const timeLine = new TimelineMax()
      timeLine
        .add('big')
        .add('small')
        .set('.mv', {
          opacity: 1
        })
        .staggerFromTo(
          '.anime1',
          0.8,
          {
            scale: 0
          },
          {
            scale: 1,
            ease: Power4.easeInOut
          },
          0.05
        )
        .staggerFromTo(
          '.anime2',
          0.8,
          {
            scale: 0
          },
          {
            scale: 1,
            ease: Power4.easeInOut
          },
          0.05,
          '-=0.6'
        )
        .fromTo(
          '#big .text-bg',
          0.8,
          {
            scaleX: 0
          },
          {
            scaleX: 1,
            ease: Power2.easeInOut
          },
          '-=0.5'
        )
        .staggerFromTo(
          '.big .char',
          0.4,
          {
            yPercent: 110
          },
          {
            yPercent: 0
          },
          0.02,
          '-=0.5'
        )
        .fromTo(
          '#small .text-bg',
          0.8,
          {
            scaleX: 0
          },
          {
            scaleX: 1,
            ease: Power2.easeInOut
          },
          '-=0.6'
        )
        .staggerFromTo(
          '.small .char',
          0.4,
          {
            yPercent: 110
          },
          {
            yPercent: 0
          },
          0.02,
          '-=0.5'
        )
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.mv {
  display: flex;
  text-align: center;
  position: relative;
  font-size: 90px;
  margin-bottom: 200px;
  opacity: 0;
  @include mq(xl) {
    font-size: 70px;
    margin-bottom: 0;
  }
  @include mq(md) {
    font-size: 60px;
    margin-bottom: 0;
  }
  @include mq(sm) {
    font-size: 35px;
    margin-bottom: 0;
    /* padding-bottom: calc(constant(safe-area-inset-bottom) + 10%);
    padding-bottom: calc(env(safe-area-inset-bottom) + 10%); */
  }
  @include mq(xs) {
    font-size: 30px;
    margin-bottom: 0;
  }
}
.copy {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  text-align: left;
  line-height: 0;
}
.text-wrap {
  display: inline-block;
  position: relative;
}
.big {
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  font-size: 7rem;
  padding: 4px 24px;
  white-space: nowrap;
  @include mq(md) {
    font-size: 5rem;
  }
  @include mq(sm) {
    font-size: 2.8rem;
    padding: 4px 12px;
  }
}
.small {
  display: inline-block;
  font-size: 2.4rem;
  font-weight: 900;
  padding: 0 24px 4px;
  letter-spacing: 0.08em;
  white-space: nowrap;
  @include mq(md) {
    font-size: 1.8rem;
  }
  @include mq(sm) {
    font-size: 1.2rem;
    padding: 0 12px 4px;
  }
}
.text-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: -1;
  top: 0;
  left: 0;
  transform-origin: left;
}
.wrapper {
  display: inline-flex;
  max-width: 1500px;
  margin: auto;
  flex-direction: column;
  align-items: flex-end;
  transform: rotate(45deg);
  position: relative;
  left: -4%;
}
.square {
  width: 24.6785%;
  overflow: hidden;
  position: relative;
  img {
    transform: scale(1.01);
    /* opacity: 0; */
  }
}
.black {
  background: $black;
  height: 1.7em;
}
.yellow {
  background: $yellow;
  height: 2.08em;
}
.flex {
  display: flex;
}
.top {
  align-items: flex-end;
}
.right {
  flex-direction: column;
}
.left {
  flex-direction: column;
  align-items: flex-end;
}
</style>
