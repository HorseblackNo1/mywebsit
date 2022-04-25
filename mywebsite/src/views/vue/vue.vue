<template>
    <div>
         <h2 class="title">vue</h2>
        <p class="note">
           Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。

如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。<br/>

            vuex 是什么<br/>
            vuex是一个专门为Vue.js应用程序开发的状态管理模式。台采用集中式存储管理应用的所有组件的状态<br/>
            并以相应的规则保证状态以一种可预测的方式发生改变。vuex也集中到Vue 的官方调试工具devtools<br/>

            <br/>
            <br/>
            什么是状态管理模式？<br/>

            new Vue({<br/>
                //state<br/>
                data(){<br/>
                    return{<br/>
                        count:0<br/>
                    }<br/>
                },<br/>
                //view
                <!-- tempalte:`<div> {{count}}</div>` -->
                
                //actions<br/>
                methods:{<br/>
                    increment(){<br/>
                        this.count++<br/>
                    }<br/>
                }<br/>

            })<br/>


            state 驱动 应用的数据源：<br/>
            view 以声明的方式将state 映射到视图<br/>
            actions 响应在view 上的用户输入导致的状态变化<br/>
                             
            view======>  actions ====> state =====>view<br/>
            当应用遇到多个组件共享状态时，单项数据流的间接性很容易被破坏<br/>
            对个视图依赖同一个状态<br/>
            来自不同视图的行为需要变更同一状态<br/>
            对于问题一，传参的方法对于多层嵌套的组件将会是非常频繁，并且对于兄弟组件件的状态传递无能为力<br/>
            对于问题二，经常采用父子组件直接引用或者通过事件来变更和同步状态的多分拷贝，<br/>
            莫纳什<br/>

            <br/>
            forEach() 
            forEach 方法 用于调用数组的每个元素，并将元素传递给回调函数，数组中的每个值都会调用回到函数<br/>

            arr.forEach(function(currentValue,index,arr),this.value)<br/>
            currentValue:必须当前元素<br/>
            index：可选 当前元素的索引值<br/>
            arr：可选当前元素所属的数组对象<br/>

            let arr=[1,2,3,4,5]<br/>
            arr.forEach((item,index,arr)=>{<br/>
                console.log(index+':'+item)<br/>
            })<br/>
            还可以接受第二个参数，用来绑定回调函数内部的this 变量， 前提是回调函数不能是箭头函数，箭头函数没有this<br/>

            arr.forEach(function(item,index,arr){<br/>
                console.log(this[index])<br/>
            },arr1)<br/>

            forEach 不会该改变原数组，也没有返回值<br/>
            forEach 无法使用break，continue 跳出循环，使用return，效果和 在for 循环中使用continue 一样<br/>
            forEach 无法便利对象，仅适用于数组遍历<br/>


            map() 
            map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值，该方法按照原始数组元素顺序依次处理元素<br/>

            arr.map(function(currentValue,index,arr),thisValue)
            currentValue:必须当前元素的值<br/>
            index：可选 当前元素的索引值<br/>
            arr：可选 当前元素属于的数组对象<br/>

            let arr=[1,2,3]<br/>
            arr.map(item=>{<br/>
                return item+1<br/>
            })<br/>
            接受第二个传参数<br/>
            let arr=['a','b','c'];<br/>
            [1,2].map(function(e){<br/>
                return this[e]<br/>
            })<br/>
            map 方法不会对空数组进行检测<br/>
            map 方法便利数组时返回一个新数组，不会改变原始数组<br/>
            map 有返回值 可以 return 出来，map 的回调函数中支持return 返回值<br/>
            map 方法无法便利对象，仅适用数组的便利<br/>

            for of 
            for ...of 语句创建一个迭代可的迭代的对象，在ES6 中引用 for ...of 循环 以替代 for...in 和 forEach()
            并支持新的迭代协议<br/>
            for(variable of iterable){<br/>
                statement<br/>
            }<br/>
            variable :每个迭代的属性值被分配给该变量<br/>
            iterable:一个具有可枚举属性并且可迭代的对象<br/>
           
            let arr = [<br/>
                {id:1, value:'hello'},<br/>
                {id:2, value:'world'},<br/>
                {id:3, value:'JavaScript'}<br/>
            ]
            for( let item of arr ){<br/>
                console.log(item)<br/>
            }<br/>

            for of 方法 只会便利当前对象的属性，不会便利其原型链上的属性；<br/>
            for of 方法 是用于便利数组 类数组 字符串 map set 等拥有迭代器对象的集合<br/>
            for of 方法 不支持便利普通对象，因为其没有迭代器对象，如果想要便利一个对象的属性，可以用for in 方法<br/>
            可以使用 break continue return 来中断循环便利<br/>

            filter
            filter()
            




        </p>
    </div>
</template>
<script>
export default {
    name:'VueIntro',
    data(){
        return{
            msg:"vue"
        }
    }
}
</script>
<style scoped>
 .title{
        padding-top: 20px;
        text-align: center;
    }
    .note{
        padding: 20px;
        font-size: 16px;
    }
</style>