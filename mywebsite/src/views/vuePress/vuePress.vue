<template>
  <div>
    <h2 class="title">VuePress</h2>
    
    <p class="note">
      介绍
      <br />VuePress 有两部组成：极简静态网站生成器， 包含Vue驱动的主题系统和插件API，另一部分是为了书写技术文档儿优化的主题，
      他的诞生初衷是为了支持Vue及其子项目的文档需求
      <br />每一个由VuePress 生成的页面，都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化SEO。同时，一旦页面被加载
      <br />Vue将接管这些静态内容，并将其转换成一个完整的单页应用SPA
    </p>
    Three Dotsasdfadfadfasdf
    <div class="dot-elastic">dddddddddddddd</div>
     


    <canvas id="waterMark" width="200" height="100"></canvas>

    <div class="getcolor">

      
    </div>
    <div class="photo"></div>
    <div v:if="imgSrc" class="box" :style="'background:url('+imgSrc +')'">
  asdfasdfasdfasdfasfadsff


    </div>
   

  </div>
</template>
<script>
export default {
  name: "vuepress",
  data() {
    return {
      msg: "vuePress",
      useName: "maDechao",
      imgSrc:''
    };
  },
  mounted() {
    console.log("ssssss");
    var c = document.getElementById("waterMark");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#fff0";
    ctx.fillRect(0, 0, 200, 200);
    ctx.fillStyle = "#e2e0e0";
    ctx.font = "15px Arial";
    ctx.translate(0, 0);
    ctx.rotate((350 * Math.PI) / 180);
    ctx.fillText(`${this.useName}`, 25, 50);


    var img = new Image()
    img.setAttribute("id",'Img')

    img.src = c.toDataURL("image/png");

    document.getElementsByClassName('photo')[0].appendChild(img);

    console.log(document.getElementsByClassName('photo')[0])
    let boxSrc= document.getElementById('Img').src
    console.log("boxSrc",boxSrc)
    this.imgSrc = boxSrc




    
  },
  methods: {
    convertCanvasToImage(canvas) {
      //新Image对象，可以理解为DOM
      var image = new Image();
      // canvas.toDataURL 返回的是一串Base64编码的URL
      // 指定格式 PNG
      image.src = canvas.toDataURL("image/png");
      return image;
    }
  }
};
</script>
<style scoped>
#waterMark {
  width: 200px;
  height: 200px;
}
.getcolor {
  margin-top: 100px;
  width: 100px;
  height: 100px;
  background: red;
}
.box{
    height: 800px;
    background: green;
    background-repeat:repeat ;
}
.title {
  padding-top: 20px;
  text-align: center;
}
.note {
  padding: 20px;
  font-size: 16px;
}

</style>

