<template lang="pug">
.mv
  .copy
    h1.big COLOR THE WORLD
    p.small 感動とワクワクで世界を彩る
  .wrapper
    .top.flex
      .square(style='width: 2.55em')
        .cover
        img.image(src='~/assets/img/draw.jpg')
      .square(style='width: 1.7em')
        .cover
        .black.image
      .square(style='width: 2.08em')
        .cover
        img.image(src='~/assets/img/code.jpg')
      .square(style='width: 3em')
        .cover
        img.image(src='~/assets/img/camera.jpg')
    .bottom.flex
      .left.flex
        .square(style='width: 2.08em')
          .cover
          .yellow.image
        .square(style='width: 4.24em')
          .cover
          img.image(src='~/assets/img/live.jpg')
      .right.flex
        .right-top.flex
          .square(style='width: 3.16em')
            .cover
            img.image(src='~/assets/img/sticker.jpg')
          .square(style='width: 3.16em')
            .cover
            img.image(src='~/assets/img/load.jpg')
        .right-bottom.flex
          .square(style='width: 5em')
            .cover
            img.image(src='~/assets/img/studio.jpg')
          .square(style='width: 3.55em')
            .cover
            img.image(src='~/assets/img/frontman.jpg')
</template>
<script>
import { TweenMax } from 'gsap'

export default {
  mounted() {
    console.log('test')
    TweenMax.staggerFromTo(
      '.cover',
      0.4,
      {
        yPercent: 0
      },
      {
        yPercent: 100,
        ease: Expo.easeInOut
      },
      0.1
    )
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.mv {
  display: flex;
  height: 100vh;
  text-align: center;
  position: relative;
  font-size: 90px;
  margin-bottom: 200px;
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
  }
  @include mq(xs) {
    font-size: 30px;
    margin-bottom: 0;
  }
}
.copy {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.big {
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  font-size: 7rem;
  padding: 4px 24px;
  background: #fff;
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
  background: #fff;
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
  /* &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: $black;
    position: absolute;
    top: 0;
    left: 0;
  } */
}
.image {
  /* opacity: 0; */
}
.cover {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
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
