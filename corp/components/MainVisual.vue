<template lang="pug">
.mv
  .copy
    h1.big COLOR THE WORLD
    p.small 感動とワクワクで世界を彩る
  .wrapper
    .top.flex
      .square(style='width: 13.28125vw')
        img(src='~/assets/img/draw.jpg')
      .square.black(style='width: 8.541667vw')
      .square(style='width: 10.8333333vw')
        img(src='~/assets/img/code.jpg')
      .square(style='width: 15.625vw')
        img(src='~/assets/img/camera.jpg')
    .bottom.flex
      .left.flex
        .square.yellow(style='width: 10.8333333vw')
        .square(style='width: 22.0833333vw')
          img(src='~/assets/img/live.jpg')
      .right.flex
        .right-top.flex
          .square(style='width: 16.4583333vw')
            img(src='~/assets/img/sticker.jpg')
          .square(style='width: 16.4583333vw')
            img(src='~/assets/img/load.jpg')
        .right-bottom.flex
          .square(style='width: 26.0416667vw')
            img(src='~/assets/img/studio.jpg')
          .square(style='width: 18.4895833vw')
            img(src='~/assets/img/frontman.jpg')
</template>
<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.mv {
  margin-bottom: 5%;
  text-align: center;
  position: relative;
}
.copy {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  text-align: left;
}
.big {
  font-family: futura-pt-bold;
  font-weight: 700;
  font-style: italic;
  font-size: 7rem;
  padding: 4px 24px;
  background: #fff;
  white-space: nowrap;
}
.small {
  display: inline-block;
  font-size: 2.4rem;
  font-weight: 900;
  padding: 0 24px 4px;
  background: #fff;
  letter-spacing: 0.08em;
  white-space: nowrap;
}
.wrapper {
  display: inline-flex;
  max-width: 1500px;
  margin: auto;
  flex-direction: column;
  align-items: flex-end;
  transform: rotate(45deg);
  position: relative;
  left: -3%;
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
  height: 8.541667vw;
}
.yellow {
  background: $yellow;
  height: 10.8333333vw;
}
.flex {
  display: flex;
}
.top {
  align-items: flex-end;
}
.bottom {
}
.right {
  flex-direction: column;
}
.left {
  flex-direction: column;
  align-items: flex-end;
}
</style>
