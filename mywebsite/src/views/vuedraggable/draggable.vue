<template>
  <div>
    <h2 class="title">vue-Draggable</h2>
    <p class="note">
        vue-Draggable <br/>
        
        单列 拖动<br/>
        表单拖动<br/>
        多列表拖动<br/>
        grpup 拖拽分组<br/>
        delay 响应时间<br/>
        disabled 启用禁用<br/>
        scroll 是否允许滚动<br/>
        animation 过度效果<br/>
        handle 可拖动元素<br/>
        filter 排除元素<br/>
        chosenClass 选中样式<br/>
        ghostClass 位符样式<br/>
        clone 拷贝拖拽<br/>

    </p>
    <div class="listBox">
      <draggable v-model="list" force-fallback="true" animation="500" tag="url">
        <transition-group>
          <div class="list_item" v-for="element in list" :key="element.id">{{element.name}}</div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>


<script>
import draggable from "vuedraggable";
export default {
  name: "vueDraggable",
  components: {
    draggable
  },
  data() {
    return {
      msg: "vue-Draggable",
      list: [
        { id: 0, name: "test1" },
        { id: 1, name: "test2" },
        { id: 2, name: "test3" },
        { id: 3, name: "test4" }
      ]
    };
  }
};
</script>
<style scoped>
.title {
  padding-top: 20px;
  text-align: center;
}
.note {
  padding: 20px;
  font-size: 16px;
}
.listBox {
  width: 800px;
  margin: 100px auto;
  border: 1px solid #333;
  background: green;
}
.list_item {
  margin-top: 20px;
  padding: 20px;
  background: #fff;
}
</style>