<template>
  <div class="Panel">
    <div class="menu_left">
      <Menu :theme="theme3" active-name="apache1" mode="vertical">
        <Menu-group title="apache">
          <Menu-item name="apache1">sites-enable</Menu-item>
          <Menu-item name="apache2">apache2</Menu-item>
          <Menu-item name="apache3">apache3</Menu-item>
          <Menu-item name="apache4">apache4</Menu-item>
          <Menu-item name="apache5">apache5</Menu-item>
        </Menu-group>
        <Menu-group title="linux">
          <Menu-item name="order1">命令1</Menu-item>
          <Menu-item name="order2">命令2</Menu-item>
          <Menu-item name="order3">命令3</Menu-item>
          <Menu-item name="order4">命令4</Menu-item>
          <Menu-item name="order5">命令5</Menu-item>
        </Menu-group>
        <Menu-group title="php">
          <Menu-item name="php1">php1</Menu-item>
          <Menu-item name="php2">php2</Menu-item>
          <Menu-item name="php3">php3</Menu-item>
          <Menu-item name="php4">php4</Menu-item>
          <Menu-item name="php5">php5</Menu-item>
        </Menu-group>
        <Menu-group title="xcx">
          <Menu-item name="xcx1">xcx1</Menu-item>
          <Menu-item name="xcx2">xcx2</Menu-item>
          <Menu-item name="xcx3">xcx3</Menu-item>
          <Menu-item name="xcx4">xcx4</Menu-item>
          <Menu-item name="xcx5">xcx5</Menu-item>
        </Menu-group>
        <Menu-group title="acc">
          <Menu-item name="acc1">acc1</Menu-item>
          <Menu-item name="acc2">acc2</Menu-item>
          <Menu-item name="acc3">acc3</Menu-item>
          <Menu-item name="acc4">acc4</Menu-item>
          <Menu-item name="acc5">acc5</Menu-item>
        </Menu-group>
      </Menu>
    </div>
    <div class="con_right">
        <router-view></router-view>
    </div>
  </div>
</template>>
<script>
export default {
  data() {
    return {
      msg: "测试内容",
      theme3: "light"
    };
  }
};
</script>
<style scoped>
.Panel {
  display: flex;
}
.menu_left {
  width: 240px;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;
}
.ivu-menu-light {
  height: 100vh;
}
</style>