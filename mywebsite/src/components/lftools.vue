<template>
  <div>
    <div class="tools">
        <Button class="toolsbtn" v-for="(item,index) in buttonGroup" :key="index" type="success" @click="action(item.type)">{{item.title}}</Button>
    </div>
  </div>
</template>


<script>
export default {
  name: "addPanel",
  props:{
       lf: Object || String,
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
      buttonGroup:[
          { id:0,type:'zoomIn',title:'放大',disable:false, },
          { id:1,type:'zoomOut',title:'缩小',disable:false, },
          { id:2,type:'zoomReset',title:'大小适应',disable:false, },
          { id:3,type:'translateRest',title:'定位还原',disable:false, },
          { id:4,type:'reset',title:'还原(大小&定位)',disable:false, },
          { id:5,type:'undo',title:'上一步(ctrl+z)',disable:false, },
          { id:6,type:'redo',title:'下一步(ctrl+y)',disable:false, },
          { id:7,type:'download',title:'下载图片',disable:false, },
          { id:8,type:'catData',title:'查看数据',disable:false, },
      ]
    };
  },
  mounted(){},

  methods:{
      action(type){
          console.log("type=>:",type)
          switch(type){
              case 'zoomIn':
                  this.zoomIn()
                  break;
              case 'zoomOut':
                  this.zoomOut()
                  break;
              case 'zoomReset':
                  this.zoomReset()
                  break;
              case 'translateRest':
                  this.translateRest()
                  break;
              case 'reset':
                  this.reset()
                  break;
              case 'undo':
                  this.zoomIn()
                  break;
              case 'redo':
                  this.redo()
                  break;
              case 'download':
                  this.download()
                  break;
              case 'catData':
                this.catData()
                  break;
          }
      },

    zoomIn(){
      this.$props.lf.zoom(true);
    },
    zoomOut(){
      this.$props.lf.zoom(false);
    },
    zoomReset(){
      this.$props.lf.resetZoom();
    },
    translateRest(){
      this.$props.lf.resetTranslate();
    },
    reset(){
      this.$props.lf.resetZoom();
      this.$props.lf.resetTranslate();
    },
    undo(){
      this.$props.lf.undo();
    },
    redo(){
      this.$props.lf.redo();
    },
    download(){
      this.$props.lf.getSnapshot();
    },
    catData(){
      this.$emit('catData');
    },
    catTurboData(){
      this.$emit('catTurboData');
    }
  }
};
</script>
<style scoped>
    .tools{
        position: absolute;
        top: 20px;
        right: 50px;
        z-index: 2;
    }
    .toolsbtn + .toolsbtn{
        margin-left: 5px;
    }
</style>