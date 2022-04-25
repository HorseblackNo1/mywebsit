<template>
  <div class="Panel">
    <div class="Panel_top">
      <h2 class="Panel_top_text">一起走过的岁月 </h2>
      <img class="Panel_top_img" :src="topImg" alt="">
    </div>
    <div class="Panel_con">
       <div class="menu_left">
        <Menu :theme="theme3" active-name="sites_enable" mode="vertical" @on-select="selectMenu">
          <Menu-group title="apache">
            <Menu-item name="sites_enable" key="sites-enable">sites-enable</Menu-item>
          </Menu-group>
          <Menu-group title="linux">
            <Menu-item name="order" key="order1">命令1</Menu-item>
          </Menu-group>
          <Menu-group title="php">
            <Menu-item name="php" key="php1">php1</Menu-item>
          </Menu-group>
          <Menu-group title="xcx">
            <Menu-item name="xcxIntro">小程序介绍</Menu-item>
            <Menu-item name="wxs">wxs</Menu-item>
            
          </Menu-group>
          <Menu-group title="Vue">
            <Menu-item name="VueIntro">Vue介绍</Menu-item>
          </Menu-group>
          <Menu-group title="node">
            <Menu-item name="nodeIntro">node介绍</Menu-item>
          </Menu-group>
           <Menu-group title="vueDraggable">
            <Menu-item name="vueDraggable">draggable介绍</Menu-item>
          </Menu-group>
          <Menu-group title="vueLogicFlow">
            <Menu-item name="vueLogicFlow">vueLogicFlow介绍</Menu-item>
          </Menu-group>
           <Menu-group title="飞书">
            <Menu-item name="fsmp">fsmp小程序</Menu-item>

          </Menu-group>
           <Menu-group title="前端框架模板">
            <Menu-item name="offtemplates">模板</Menu-item>

          </Menu-group>
          <Menu-group title="vuepress">
            <Menu-item name="vuepress">极简静态网站生成器</Menu-item>
          </Menu-group>
          
        </Menu>
      </div>
      
      <div class="con_right">
        <router-view />
      </div>
      
    </div>
    <div class="footer">
      <a href="https://beian.miit.gov.cn/" target="_blank">备案号：京ICP备2021025146号-1</a> 
    </div>
  </div>
</template>
<script>
import apache from '@/assets/img/apache.webp'
export default {
  data() {
    return {
      msg: "测试内容",
      theme3: "light",
      topImg:apache,
      NodeTopImg:"https://pic1.zhimg.com/v2-6ec5a335faa4981d59cefad902fd44d0_r.jpg?source=172ae18b"
    };
  },
  methods: {
    selectMenu(e) {
      console.log("e=>", e);
      console.log(this.$router);
      if(e=="nodeIntro"){
        this.topImg = this.NodeTopImg
      }
      if(e=="sites_enable"){
        this.topImg = apache
      }
      this.$router.push({
        name: e
      });
    }
  }
};
</script>
<style scoped>
.Panel {
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.footer{
  height: 50px;
  background: #f6f6f6; 
  border-top: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer a{
  color: #999;
}
.Panel_con {
  display: flex;
  flex: 1;
  position: relative;
  background: red;
  overflow: hidden;
}

.Panel_top {
  position: relative;  
  height: 300px;
  overflow: hidden;
}
.Panel_top_text{
  position: absolute;
  left: 20px;
  top: 20px;
  color: #fff;
}
.menu_left {
  width: 240px;
  background: #fff;
}

/* .con_right::-webkit-scrollbar */
.ivu-menu-light::-webkit-scrollbar {
        display: none;
    }
.ivu-menu-light {
  height:100%;
  overflow: hidden;
  overflow-y: auto;
   border-right: 1px solid #dcdee2;
}
.ivu-menu-vertical.ivu-menu-light:after{
      content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}
.con_right {
  left: 240px;
  position: absolute;
  width: 80%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;

}
.Panel_top_img{
  width: 100%;
  height: auto;
}
</style>