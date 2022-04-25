<template>
  <div>
    <!-- <h2 class="title">addPanel</h2> -->
    <!-- <p class="note">addPanel <br/></p> -->
    <div class="addPanel">

        <div class="addPanel_i" v-for="(item,index) in nodeList" :key="index" @click="SelectPanel(item.type)">{{item.text}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "addPanel",
   props: {
    nodeData: Object,
    lf: Object || String
  },
  data() {
    return {
      msg: "addPanel",
      list: [
        { id: 0, name: "test1" },
        { id: 1, name: "test2" },
        { id: 2, name: "test3" },
        { id: 3, name: "test4" }
      ],

      nodeList:[
          { id:0,class:"node-start",text:"开始",type:"start" },
          { id:1,class:"node-rect",text:"矩形",type:"rect" },
          { id:2,class:"node-user",text:"用户",type:"user" },
          { id:3,class:"node-push",text:"推送",type:"push" },
          { id:4,class:"node-download",text:"位置",type:"download" },
          { id:5,class:"node-end",text:"结束",type:"end" },

      ]
    };
  },
  methods:{
      SelectPanel(type){
          console.log("type=>:",type)
           const {lf, nodeData} = this.$props
           const { id, x, y } = nodeData

           console.log(id,x,y,lf)
      }
  }
};
</script>
<style scoped>
    .addPanel{
        position: absolute;
        top: 80px;
        left: 50px;
        width: 70px;
        padding-bottom: 20px;
        background-color: #fff;
        box-shadow: 0 0 10px 1px rgb(228 224 219);
        border-radius: 6px;
        text-align: center;
        z-index: 101;
    }
    .addPanel_i{
        padding: 20px 10px;
        border-bottom: 1px solid #ddd;
        cursor: default;
    }
    .addPanel_i:last-child{
        border:none;
    }
</style>