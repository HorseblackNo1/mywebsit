<template>
    <div>
        <h2 class="title">wxs</h2>


        <div class="con_item">
            <h2 class="titlelevel">wxs</h2>
            <p class="note">WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>
        </div>
        <div class="con_item">
            <h2 class="titlelevel">注意事项</h2>
            <div>
                <p class="note_item">1.WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行</p>
                <p class="note_item">2.WXS与JavaScript 是不同的语言，有自己的语法，并不和JavaScript 一致</p>
                <p class="note_item">3.WXS的运行环境和其他JavaScript代码里隔离的，wxs中不能调用其他JavaScript文件中定义的函数，也不能调用小程序提供的API</p>
                <p class="note_item">4.WXS函数不能作为组件的时间回调</p>
                <p class="note_item">5.由于运行环境的差异，在IOS设备上小程序的WXS会比JavaScript代码快2~20倍。在android设备上二者运行效率无差异</p>
            </div>
           
        </div>

        <div class="con_item">
            <h2 class="titlelevel">页面渲染</h2>
            <div class="codeBox">
                <pre>
                    
                </pre>
               
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    name:'wxs',
    data(){
        return{
            msg:"小程序"
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
    .note_item{
        padding-left: 40px;
        padding-top: 20px;
        font-size: 16px; 
    }
    .titlelevel{
        font-size: 20px;
        padding-left: 20px;
    }
    .con_item{
        padding-bottom: 20px;
    }
    .codeBox{
        margin:20px;
        padding: 20px;
        border-radius: 10px;
        background:#f9f9fa ;
    }
</style>