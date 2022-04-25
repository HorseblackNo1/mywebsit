<template>
  <div>
    <h2 class="title">vue-LogicFlow</h2>
    <p class="note">
      logicFlow 是一款流程可视化的前端框架，提供了一系列流程图交互，编辑所必须的功能和简单灵活的节点自定义插件等拓展机制，
      <br />方便快速在业务系统内满足流程图需求
      <br />安装
      <br />npm install @logicflow/core --save
      <br />yarn add @logicflow/core
      <br />核心能力
      <br />提供了一个流程图编辑所必需的各项能力，
      <br />图的绘制能力，基于SVG 来绘制形状各异的节点和线，并提供了基础的节点(矩形，圆形，多边形)和线(直线，折线，曲线)
      <br />各类交互能力，让图动起来，根据节点，线，图的各类鼠标事件(hover,点击，拖拽)等，做出反应，比如节点拖拽，拖拽出创建连线
      <br />线的调整，双击编辑文本等
      <br />提升边际效率的能力，提供网络，对齐线，上一步，下一步键盘快捷键，图放大缩小等配套能力，帮助用户提升编辑效率
      <br />基于业务场景拓展
      <br />设置图上所有元素的样式，比如各种点，线，锚点，箭头，对齐线的样色等，满足对前端样式调整的需求
      <br />API拓展。支持LogicFlow 上注册自定义的方法，比如通过API 拓展提供图片下载方法
      <br />自定义节点、线。内置的矩形、圆形等图形类节点往往无法满足实际的业务需求，需要定义具有业务意义的节点。LogicFlow 提供了 的方式让用户定制具有自定义图形、业务数据的节点，比如流程审批场景中的 “审批” 节点
      <br />拓展组件。LogicFlow 在 SVG 图层上提供了 HTML 层和一系列坐标转换逻辑，并支持在 HTML 层注册组件。宿主研发可以通过 LogicFlow 的 API，基于任何 View 框架开发组件，比如节点的右键菜单、控制面板等
      <br />数据转换 adapter。LogicFlow 默认导出的图数据不一定适合所有业务，此时可以通过 adapter API，在图数据从 LogicFlow 输入、输出的时候做自定义转换，比如转换成 BPMN 规范的图数据
      <br />内置部分拓展能力。基于上述拓展能力，我们还单独提供了 extension 的包，用来存放当前业务下沉淀出的具有通用性的节点、组件等，比如面向 BPMN 规范的节点和数据 adapter，默认菜单。注意 extension 可以单独安装，并支持按需引入
      <br />

      <br />
    </p>
    <div class="LogicFlowBox">
      <div id="container"></div>
      <!-- <add-panel :lf="lf"></add-panel> -->
      <tools v-if="lf" :lf="lf"  :nodeData="addClickNode"  @catData="catData"></tools>
      <node-panel v-if="lf" :lf="lf" :nodeList="nodeList"></node-panel>
    </div>
  </div>
</template>


<script>
const demoData = require('./data.json')
import {
  registerStart,
  registerUser,
  registerEnd,
  registerPush,
  registerDownload,
  registerPolyline,
  registerTask,
  registerConnect,
} from './registerNode'
import LogicFlow from "@logicflow/core";
// import addPanel from "@/components/addPanel";
import NodePanel from "@/components/NodePanel";
import tools from "@/components/lftools";
import {nodeList} from "@/components/nodeList.js";
import "@logicflow/core/dist/style/index.css";
export default {
  name: "vuelogicFlow",
  components: {
    // addPanel,
    tools,
    NodePanel
  },
  data() {
    return {
      lf: null,
      msg: "vue-Draggable",
      list: [
        { id: 0, name: "test1" },
        { id: 1, name: "test2" },
        { id: 2, name: "test3" },
        { id: 3, name: "test4" }
      ],
      graphData:'',
      addClickNode: null,
      nodeList,
      LogicData: {
        // 节点
        nodes: [
          {
            id: 21,
            type: "rect",
            x: 200,
            y: 200,
            text: {
              value: "矩形节点",
              x: 200,
              y: 200
            }
          },
          {
            id: 50,
            type: "circle",
            x: 300,
            y: 400,
            text: {
              value: "圆形节点",
              x: 300,
              y: 400
            }
          }
        ],
        // 边
        edges: [
          {
            type: "polyline",
            sourceNodeId: 50,
            targetNodeId: 21
          }
        ]
      }
    };
  },
  mounted() {
    this.init_logicFlow();
  },
  methods: {
    init_logicFlow() {
      const lf = new LogicFlow({
        container: document.querySelector("#container"),
        stopScrollGraph: true,
        stopZoomGraph: true,
        grid: {
          type: "dot",
          size: 20
        }
      });
      lf.render(this.LogicData);
      this.lf = lf

       this.registerNode()
      console.log("sssssssssssssssss",lf)
    },

    catData(){
        this.graphData = this.$data.lf.getGraphData();
        console.log("输出的数据=>:",JSON.stringify(this.graphData))
    },
    // 自定义
    registerNode () {
      registerStart(this.lf)
      registerUser(this.lf)
      registerEnd(this.lf)
      registerPush(this.lf, this.clickPlus, this.mouseDownPlus)
      registerDownload(this.lf)
      registerPolyline(this.lf)
      registerTask(this.lf)
      registerConnect(this.lf)
      this.render()
    },
     render () {
      this.lf.render(demoData)
      this.LfEvent()
    },
    LfEvent () {
      this.lf.on('node:click', ({data}) => {
        console.log('node:click', data)
        this.$data.clickNode = data
        this.$data.dialogVisible = true
      })
      this.lf.on('edge:click', ({data}) => {
        console.log('edge:click', data)
         this.$data.clickNode = data
          this.$data.dialogVisible = true
      })
      this.lf.on('element:click', () => {
        this.hideAddPanel()
      })
      this.lf.on('edge:add', ({data}) => {
        console.log('edge:add', data)
      })
      this.lf.on('node:mousemove', ({data}) => {
        console.log('node:mousemove')
        this.moveData = data
      })
      this.lf.on('blank:click', () => {
        this.hideAddPanel()
      })
      this.lf.on('connection:not-allowed', (data) => {
        this.$message({
          type: 'error',
          message: data.msg
        })
      })
      this.lf.on('node:mousemove', () => {
        console.log('on mousemove')
      })
    },
     hideAddPanel () {
      this.$data.showAddPanel = false
      this.$data.addPanelStyle.top = 0
      this.$data.addPanelStyle.left = 0
      this.$data.addClickNode = null
    },
    clickPlus (e, attributes) {
      e.stopPropagation()
      console.log('clickPlus', e, attributes)
      const { clientX, clientY } = e
      console.log(clientX, clientY)
      this.$data.addPanelStyle.top = (clientY - 40) + 'px'
      this.$data.addPanelStyle.left = clientX + 'px'
      this.$data.showAddPanel = true
      this.$data.addClickNode = attributes
    },
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
.LogicFlowBox {
  position: relative;
}
#container {
  width: 100%;
  height: 800px;
  outline: none;
  margin-left: 10px;
}
</style>