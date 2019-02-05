<template lang="pug">
.mv
  .copy
    h1.big COLOR THE WORLD
    p.small 感動とワクワクで世界を彩る
  .wrapper
    .top.flex
      .square(style='width: 2.55em')
        img(src='~/assets/img/draw.jpg')
      .square.black(style='width: 1.7em')
      .square(style='width: 2.08em')
        img(src='~/assets/img/code.jpg')
      .square(style='width: 3em')
        img(src='~/assets/img/camera.jpg')
    .bottom.flex
      .left.flex
        .square.yellow(style='width: 2.08em')
        .square(style='width: 4.24em')
          img(src='~/assets/img/live.jpg')
      .right.flex
        .right-top.flex
          .square(style='width: 3.16em')
            img(src='~/assets/img/sticker.jpg')
          .square(style='width: 3.16em')
            img(src='~/assets/img/load.jpg')
        .right-bottom.flex
          .square(style='width: 5em')
            img(src='~/assets/img/studio.jpg')
          .square(style='width: 3.55em')
            img(src='~/assets/img/frontman.jpg')
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.mv {
  display: flex;
  height: 100vh;
  text-align: center;
  position: relative;
  font-size: 100px;
  margin-bottom: 200px;
  @include mq(tb) {
    font-size: 70px;
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
  @include mq(tb) {
    font-size: 5rem;
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
  @include mq(tb) {
    font-size: 1.8rem;
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
  img {
    transform: scale(1.01);
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
