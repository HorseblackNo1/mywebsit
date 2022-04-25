<template>
    <div class="rightBox">
         <h2 class="title">node</h2>
        <p class="note">
            简单说Node.js 就是运行在服务端的JavaScript
            Node.js是一个基于Chrome JavaScript 运行时建立的一个平台
            Node.js是一个时间驱动I/O服务端JavaScript环境，基于Googlede V8引擎，V8引擎执行JavaScript
            的速度非常快，性能非常好
        </p>
         <p class="note">
            window 进入 node交互模式<br/>
            wdinow+r 输入 cmd <br/>
            控制台输入 node  进入node 模式<br/>
            退回：Ctrl+D<br/>
            ERPL 模式 <br/>
            Read-Eval-Print Pool  读取 执行 循环 输出<br/>
            
            进入helloworld.js 目录 命令：node helloworld.js 执行 hello world
            

        </p>
        <p class="note">
            NPM 是随同NodeJS 一起安装的包管理工具，能解决NodeJS 代码部署上的很多问题，
            允许影虎才NPM服务器下载别人的编写的第三方包到本地使用
            允许用户从NPM服务器下载并安装别人安装别写的命名行程序到本地使用
            允许用户将自己编写的包或命令行上传到NPM服务器共别人使用
            由于新版呢的node已经继承了npm，所以之前也一并安装好。
            同样可以通过输入npm-v 来测试是否安装成功
        </p>
         <p class="note">
           Node.js 应用是有哪几部分组成的:<br/>
           1.引入required 模块：使用require 指令引入node.js 模块<br/>
           2.创建服务器：服务器可以监听客户端的请求，类似于APache2，Niginx 等 Http服务器<br/>
           3.接收请求和响应请求:服务器很容易创建，客户端可以使用浏览器或终端发送HTTP请求，服务器接受请求后返回响应数据<br/>
        </p>
        <p class="note">
            分析node.jsde Http服务器<br/>
            1.第一行（require）Node.js 自带的http模块，并把它复制给http变量
            2. 调用http模块提供的函数：createServer。这个函数返回一个对象，这个对象有一个叫做listen方法
                ，这个方法有一个数值参数，指定这个http服务器监听的端口号
        </p>
        <p class="note">
            ps:<br/>
           1.修改代码后需要重启 node 服务， 文件才能更新为修改过的（最新的）
        </p>


         <h2 class="title">npm 使用介绍</h2>
          <p class="note">
            npm 使用介绍<br/>
            NPM 是随同用户nodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的实际用场景：<br/>

           1.允许用户从NPM服务器下载别人编写的第三方包本事使用<br/>
           2.允许用户从NPM服务器现在并安装别人编写的命令行程序到本地<br/>
           3.允许用户将自己编写的包或命令程序上上传到NPM服务器供别人使用<br/>

           输入 npm-v 来测试是否成功安装<br/>

           使用 npm命令模块<br/>

            npm 安装 Node.js 模块语法： npm install module Name<br/>

            npm install express<br/>
            
            安装之后，express 包就放在工程目录下的node_modules目录中，
            因此在代码中通过 require('express')的方式就好了<br/>
            
            var express = require('express')<br/>

            全局安装 和 本地安装<br/>

            npm 的包安装分为本地安装 local 、全局安装 global 两种，差别 只是有没有 -g<br/>

            npm install express   本地安装<br/>

            npm install express -g  全局安装<br/>


            本地安装<br/>

            1.将安装包放在./node_modules下(运行npm命令时所在的目录)，如果没有 node_modules目录
            会在当前执行npm命令的目录下生成node_modules目录<br/>
            2.可以通过requrie() 来引用本地安装包<br/>


            全局安装<br/>
            1.将安装包放在/usr/local下或者你node的安装目录<br/>
            2.可以直接在命令行里使用<br/>

            查看某个模块的版本号<br/>

            npm list grunt<br/>

            使用 package.json<br/>

            package.json 位于模块的目录下，用于定义包的属性的，<br/>
            Package.json 属性说明<br/>
            name  包名<br/>
            version   包的版本<br/>
            description  包的描述<br/>
            homepage 包的官网 url<br/>
            author 包的作者姓名<br/>
            contributors 包的其他贡献者姓名<br/>
            dependencise  依赖包列表，如果依赖没有安装，npm会自动将依赖包装在node_module 目录下
            respository 包代码存放的地方的类型，可以是git 或svn git 可以放在 GitHub上<br/>
            main main字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件<br/>
            这个字段的默认值是模块根目录下面的index.js
            keywords 关键字<br/>
<br/>
            卸载模块<br/>

            npm uninstall express<br/>

            卸载后可以到/node_modules/目录下查看包是否还存在<br/>

            npm ls<br/>
<br/>
            更新模块<br/>

            npm update express<br/>
<br/>

            搜索模块<br/>

            npm search express<br/>
<br/>
            创建模块<br/>

            npm init<br/>
            name<br/>  version <br/>discription<br/> entry point<br/>  test command<br/>  git repository <br/> keywords<br/> author<br/>  license <br/>

            发布模块<br/>
            npm publish<br/>

<br/>
            npm 常用的命令<br/>

            npm install publish  使用 npm help 查看所有的命令<br/>

            使用npm help commad 可查看某条命令的详细帮助，例如 npm help install<br/>

            在package.json 所在目录下使用 npm install，-g可以先在本地安装当前命令行程序，可用于发布前的本地测试<br/>

            使用npm updage package -g 可以把全局对应命令行程序更新值最新版本<br/>

            使用npm cache clear 可以清空npm 本地缓存，用于对付适应想相同版本号发布新版代码的人<br/>

            使用npm unpublish package@version 可以撤销发布自己发布过的某个版本代码<br/>
        
        
        </p>


        <h2 class="title">Node.js REPL 交互式解析器</h2>

         <p class="note">
             Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似window系统的终端
             或unix/linux shell ,输入命令，并接受系统的响应<br/>

            Node 自带了交互式解释器，可以执行任务：<br/>

            读取-读取用户输入，解析输入的JavaScript 数据结构并储存在内存中<br/>

            执行-执行输入的数据结构<br/>

            打印-输出结果<br/>

            循环-循环操作上步骤直到用户两次按下 ctrl+c 退出<br/>

            node的交互式解释器可以很好的调用JavaScript代码<br/>
            启动Node的终端 node <br/>

            简单的表达式运算<br/>

            $node <br/> > 1+4  5<br/>
            > 5/2<br/>
            > 2.5<br/>
            > 3*6<br/>
            > 18<br/>
            > 1+(2*3)-4<br/>
            > 3<br/>
<br/>

            使用变量<br/>
            将数据存在变量中，并在需要的时候使用他<br/>
            变量声明需要使用var 关键字，如果没有使用var 关键字变量会直接打印出来<br/>
            使用var关键字的变量可以使用 console.log() 来输出变量<br/>

            <br/>
            $code <br/>
            > x =10 <br/>
            > 10 <br/>
            > var y=10 <br/>
            > undefined <br/>
            > x+y <br/>
            > 20 <br/>
            > console.log("hello world") <br/>
            > hello world <br/>
            > undefined <br/>
            > console.log("www.runroob.com") <br/>
            > www.runroob.com <br/>
            > undefined <br/>
             <br/>
             
             多行表达式<br/>

             Node REPL 支持输入多行表达式，类似于JavaScript  do-while循环<br/>

             $node <br/>
             > var x =0;<br/>
             > undefined<br/>
             > do{<br/>
             > ... x++;<br/>
             > ... console.log('x:'+x);<br/>
             > ... } whild(x 小于 5)<br/>
            
            ...三个点的符号是系统自动生成的，回车换行即可，Node会自定检测是否为连续的表达式<br/>

            <br/>

            下划线(_)变量<br/>

            使用下划线(_)获取上一个表达式的运算结果<br/>

            $ node<br/>
            > var x =10<br/>
            > undefined <br/>
            > x+y<br/>
            > 30<br/>
            > var sum= _<br/>
            > undefined<br/>
            > console.log(sum)<br/>
            > 30<br/>
            > undefined<br/>
         </p>

         <h2 class="title">REPL 命令</h2>
         <p class="note">
            ctrl+c 退出当前终端<br/>
            ctrl+c 按下两次 退出Node REPL<br/>
            ctrl+d 退出Node REPL<br/>
            向上/向下 键 查看输入的历史命令<br/>
            tab键 列出使用命令<br/> 
            .help 列出使用命令<br/>
            .break 退出多行表达式<br/>
            .clear 退出多行表达式<br/>
            .save filename 保存当前Node REPL会话到指定文件<br/>
            .load filename 载入当前Node REPL 会话的文件内容<br/>
         </p>

         <br/>
          <h2 class="title">停止 REPL</h2>
         <p class="note">
            按下ctrl+c键就会退出REPL<br/>
            node <br/>
            > 
         </p>

<br/>
<br/>

          <h2 class="title">Node.js 回调函数</h2>
         <p class="note">
            Node.js 异步编程的直接提现就是回调<br/>
            异步编程依托于回调来实现，但不能是使用了回调后程序就会异步化了<br/>
            回调函数在完成任务后就会别调用，Node使用了大量的回到函数，Node所有API都支持回调函数<br/>
            一边读取文件，一遍执行其他命令，在读取玩文件后，文件内容作为回调函数的参数返回，这样<br/>
            在执行代码时就会没有阻塞或者等待文件I/o操作，这样就大大提高了Node.js 的性能，可以处理大量的并发请求

            回调函数一般作为函数的最后一个参数出现：<br/>
            function foo1(name,age,callback){}
            function foo2(value,callback1,callback2){}
            > 
            <br/><br/>

            阻塞代码实例<br/>

            var fs = requrie('fs')
            var data = fs.readFileSync('input.txt');
            console.log(data.toString())
            console.log("程序执行结束")

            <br/><br/>

            非阻塞代码实例<br/>

            var fs= require("fs")

            fs.readFile('input.txt',functioin(err,data){
                if(err) return cosnole.log(err)
                console.log(data.toString())
            });
            console.log("程序执行结束")<br/>
            阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果处理回到函数的参数，需要写在回调函数内
         </p>
<br/><br/><br/>
           <h2 class="title">Node.js 事件循环</h2>
           <p class="note">
               Node.js 是单线程应用程序，但因为V8引擎提供的异步执行毁掉接口，通过这些接口可以处理
               大量的并发，所以性能非常高<br/>
               Node.js 几乎每一个API都支持回调函数<br/>
               Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现的<br/>
               Node.js 单线程类似进入一个 while true 的事件循环，直到没有事件观察者退出<br/>
               每个异步事件都生成一个事件观察者，如果有事件发生就会调用该回调函数
               <br/>


               <br/>
               事件驱动程序<br/>

               Node.js 使用事件驱动模型，当web server 接受请求，就会把它关闭然后进行处理，然后去服务下一个web请求<br/>
               当这个请求处理完成，它被放到处理队列，当到达列表开头，这个结果被返回给用户<br/>

               者模型非常搞笑可扩展性非常强，因为webserver 一直接受请求而不等待任何读写操作<br/>
               为非阻塞模式IO 或者 时间驱动IO<br/>
               在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数<br/>

               EventEmitters =>  Events     =>  Event Loop  =>  Event Handles<br/>


               Node.js 有多个内置的事件，可以通过引入events模块，并通过实例化 EventEmitter 类绑定和监听事件<br/>

               var events= require('events');<br/>
               var eventEmitter = new events.EventEmitter();<br/>

                //绑定事件及事件的处理程序<br/>

                eventEmitter.on('eventName',eventHandler)

                //触发事件
                eventEmitter.emit('eventName')<br/>


                var events = require('events');<br/>
                var eventEmitter = new events.EventEmitter()<br/>
                
                //创建事件处理程序
                var connectHandler = function connected){
                    console.log('链接成功')

                    eventEmitter.emit('data_received')
                }<br/>
                //板顶connection 事件处理程序
                eventEmitter.on('connectioin',connectHandler);<br/>

                eventEmitter.on('data_recevied',function(){
                    console.log('数据接受成功')
                })<br/>

                eventEmitter.emit('connection')<br/>
                console.log("程序执行完毕")<br/>
                <br/><br/><br/>


                Node 应用程序是如何工作的<br/>

                在Node应用程序中，执行异步操作的函数将回调函数作为最为最后一个参数，回调函数接受错误<br/>
                对象作为第一个参数<br/>

                var fs = require('fs')<br/>
                fs.readFile('input.txt',function(err,data){
                    if(err){ console.log(err.stack)return };
                    console.log(data.toString())
                })
                console.log("程序执行完毕")
           </p>

        <h2 class="title">Node.js EventEmitter</h2>
        <p class="note">
            Node.js 所有的异步I/o操作在完成时都会发送一个事件到事件队列<br/>
            Node.js 里面的许多对象都会触发事件：一个net.Server对象会在每次有新链接触发一个事件，一个fs.readStream <br/>
            对象会在文件打开时候触发一个事件。所有这些产生时间的对象都是events.EventEmitter的实例<br/>

            <br/>
            EventEmitter类<br/>
            events 模块只提供了一个对象：events.EventEmitter. EventEmitter 的核心就是事件触发与事件监听器功能的封装<br/>
            通过require('events')来访问模块<br/>
            var events= require('events')<br/>
            var eventEmitter = new events.EventEmitter();<br/>

            <br/>
            EventEmitter 对象如果在实例化时发生错误，会触发error事件，当天新的监听器时，newListener事件会触发，当监听器移除时<br/>
            removelistener 事件被触发<br/>

            var EventEmitter= rquire('events').eventEmitter<br/>
            var event = new EventEmitter()<br/>
            event.on('some_event',function(){<br/>
                console.log('some_event 事件触发')<br/>
            });<br/>
            setTimeout(function(){<br/>
                event.emit('some_event')<br/>
            },1000)<br/>

            <br/>
            原理event对象注册了事件some_event 的一个监听器，然后通过setTimeout 在1000ms后向event对象发送事件some_event,会调用some_event的监听器<br/>
            <br/>

            EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通过表达一定的语意，对于每个事件，EventEmitter<br/>
            支持若干个事件监听器<br/>

            当事件触发时，注册到这个事件的事假监听器被依次调用，事件参数作为回调函数参数传递<br/>

            var events = require('events')<br/>
            var emitter = new events.EventEmitter();<br/>
            emitter.on('someEvent',function(arg1,arg2){<br/>
                console.log('listener1',arg1,arg2)<br/>
            });<br/>
            emitter.on('someEvent',function(arg1,arg2){<br/>
                console.log('listener1',arg1,arg2)<br/>
            });<br/>

            emitter.emit('someEevent','arg1参数'.'arg2参数')<br/>

            <br/>
            EventEmitter 提供了多个属性，on 和 emit   。 on函数用于绑定事件函数，emit属性用于触发一个事件<br/>
            EventEmitter方法<br/>
            <br/>
            addListener(event,listener)<br/>
            为指定事件添加一个监听器到监听器数组的尾部<br/>
            <br/>

            on(event,listener)<br/>
            为指定事件注册一个监听器，接受一个字符串event 和 一个回调函数<br/>
            server.on('connection',function(stream){<br/>
                console.log('someone connected!')<br/>
            })<br/>

            <br/>
            once(event,listener)<br/>
            为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除该监听器<br/>
            server.once('connetion',function(stream){<br/>
                console.log('Ah,we have our first user')<br/>
            })<br/>


            <br/>

            removeListener(event,listener)<br/>
            移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器<br/>
            它接受两个参数，第一个是事件名称，第二个是回调函数名称<br/>
            var callback = function(stream){<br/>
                console.log('someone connected!')<br/>
            };<br/>
            server.on('connection',callback)<br/>
            server.re,overListener('connetion',callback)<br/>


            <br/>


            removerAllListener([event])<br/>
            移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器<br/>

            <br/>

            setMaxListener(n)<br/>
            默认情况下，EventEmitters 如果添加的监听超过10个就会输出警告信息，setMaxListener 函数用于改变监听器的默认权限的数量<br/>

            <br/>

            listeners(event)<br/>
            返回指定事件的监听器数组<br/>

            <br/>

            emit(event,[arg1],[arg2],[...])<br/>
            按监听器的顺序执行执行每个监听器，如果事件有注册监听器返回true，否则返回false<br/>


            <br/>


            类的方法<br/>

            listenerCount(emitter,event)<br/>
            返回指定事件的监听器数量<br/>


            events.EventEmitter.listenerCount(emitter,evetName)   //废弃<br/>
            evens.emitter.listenerCount(eventName) //推荐<br/>


            <br/>

            事件<br/>

            newListener  event 字符串 事件名称   <br/>
            listener     处理事件函数<br/>


            <br/>

            removeListener<br/>

            event    字符串 事件名称<br/>
            listener 处理事件函数<br/>

            从指定监听器数组中删除一个监听器，ps:此操作将会改变处于被删监听器之后的那些监听器的索引<br/>

            var events = require('events');<br/>
            var eventEmitter = new events.EventEmitter();<br/>

            var listener1  = function listener1(){<br/>
                console.log('监听器 listenner1 执行')<br/>
            }
            var listenner2 = function listenner2(){<br/>
                console.log('监听器 listener2 执行')<br/>
            }<br/>

            eventEmitter.addListener('connetction',listener1);<br/>

            var eventListeners = eventEmiter.listenerCount('connection');<br/>
            console.log(eventListeners + '个监听器监听链接事件')<br/>

            eventEmitter.emit('connection');<br/>

            eventEmiter.removeListener('connection',listener1)<br/>
            console.log("listener1 不再受监听")<br/>

            eventEmiter.emit('connection');<br/>

            eventListenners = eventEmitter.listenerCount('connection')<br/>
            console.log(eventListeners + " 个监听器听链接事件 ")<br/>

            console.log("程序执行完毕")<br/>



            error事件<br/>
            EventEmitter 定义了一个特殊的事件error，它包含了错误的语义，<br/>
            当error 被触发时，EventEmitter 规定如果没有响应的监听器，Node.js 会把他当做异常，退出程序并输出错误信息<br/>
            会触发error事件的对象设置监听器，避免遇到错误后这个程序崩溃<br/>

            var events = require('events');<br/>
            var emitter = new events.EventEmitter()<br/>
            emitter.emit('error')<br/>
            <br/><br/>

            继承EventEmitter<br/>
            不会直接使用EventEmitter，而是对象中继承他，包括fs、net、http在内的，只要是支持事件响应的核心模块都是<br/>
            EventEmitter的子类<br/>
            具有某个实际功能的对象实现事件符合语义，事件的监听和发生该是一个对象的方法<br/>
            其次JavaScript的对象机制是基于原型的，支持部分多重继承，继承EventEmitter 不会打乱对象原有的继承关系






            

        </p>


         <h2 class="title">Node.js Buffer 缓冲区</h2>
         <p class="note">
             JavaScript 语言本身只有字符串数据类型，没有二进制数据类型<br/>
             但在处理向TCP流或者文件流时，必须使用到二进制数据，因此在Node.js中，定义了一个Buffer类，该类用来创建<br/>
             一个专门存放二进制数据的缓存区<br/>
             在Node.js中，Buffer类是随着Node 内核一起发布的核心库。Buffer库为Node.js带来了一种存储原始数据的方法，可以让<br/>
             Node.js处理二进制数据，每当需要在Node.js中处理I/o操作中移动的数据时，就有可能使用Buffer库。原始数据存储在Buffer<br/>
             类的实例中，一个Buffer类似于一个整数数组，但它对应于V8 堆内存之外的一块原始内存<br/>
             V6.0 之前 创建buffer实例 使用 new Buffer()<br/>
             V6.0 后  使用 Buffer.from() 创建Buffer对象<br/>

             <br/>

             Buffer 与字符串编码<br/>
             Buffer 实例 一般用表示编码字符的序列，比如UTF-8、UCS2、Base64、或十六进制编码的数据。通过使用显示的字符编码<br/>
             就可以在buffer实例与普通的JavaSciprt字符串之间进行相互转化<br/>

             const buff  =Buffer('runoob','ascii');<br/>
             输出 23256e66f6f62<br/>
             console.log(buf.toString('base64'))<br/>

             <br/>
             Node.js 目前支持的字符编码包括<br/>

             ascii： 仅支持7位ASCII数据，如果设置去掉高位的话，这种编码是非常快的<br/>
             utf8：  多字节编码的Unicode字符，许多网页和其他的文档格式都使用UTF-8<br/>
             utf16le： 2或4个字节，小字节序编码Unicode字符，支持代理对(U+1000 至 U+10FFFF)<br/>
             ucs2： utf16le的别名<br/>
             base64： Base64编码<br/>
             latin1： 一种把Buffer编码成一字节编码的字符的方式<br/>
             binary： latin1 的别名<br/>
             hex： 将每个字节编程为两个十六进制字符<br/>

             <br/>

             创建Buffer 类<br/>
             Buffer 提供了 API 来创建Buffer 实例：

             Buffer.alloc(size[,fill[,encoding]]):返回一个指定大小的Buffer实例，如果没有设置fill，则默认填满0<br/>
             Buffer.allocUnsafe(size):返回一个指定打下的Buffer实例，但它不会初始化，所以它可能包含敏感的数据<br/>
             Buffer.allocUnsafeSlow(size)<br/>
             Buffer.from(array):返回一个被array的值初始化的新的Buffer实例传入的array元素只能是数字，不然就会自定被0覆盖<br/>
             Buffer.from(arrayBuffer[,byteOffset[,length]]):返回一个新建的与给定的ArrayBuffer共享同一内存的Buffer<br/>
             Buffer.from(buffer):复制传入的Buffer实例的数据，并返回一个新的Buffer实例<br/>
             Buffer.from(string[,encodeing]):返回一个被string的值初始化的新的Buffer实例<br/>
             



            <br/>
            未完成
            <br/>
         </p>

          <h2 class="title">Node.js Sstream 流</h2>
         <p class="note">
             Stream 是一个抽象的接口，Node中很多对象实现了这个接口。对http服务器发起请求的requrest对象就是一个Stream， <br/>
             还有stdout 保准输出 <br/>

             Node.js ,Stream 四种流类型： <br/>
             Readable  :可读操作 <br/>
             Writable  ：可写操作 <br/>
             Duplex    ：可读可写操作 <br/>
             Transform ：操作被写入数据，然后读出来 <br/>

             所有的Stream 对象都是 EventMiteer的实例 常用到的事件有： <br/>
             data  当有数据可读时触发 <br/>
             end   没有更多的数据可读时触发 <br/>
             error 在接受和写入过程中发生错误触发 <br/>
             fininsh 所有数据已别写入到底层系统时触发 <br/>
            <br/>

            从流中读取数据 <br/>

            var fs = require('fs'); <br/>
            var data=''; <br/>

            var readerStream = fs.createReadStream('input.txt'); <br/>

            readerStream.setEncoding('UTF8'); <br/>

            readerStream.on('data',function(chunk){ <br/>
                data +=chunk; <br/>
            }) <br/>
            readerStream.on('end',function(){ <br/>
                console.log(data) <br/>
            }) <br/>
            readerStream.('error',function(err){ <br/>
                console.log(err.stack) <br/>
            }) <br/>
            console.log("程序执行完成") <br/>

            <br/>


            var fs = require("fs")<br/>
            var data = '菜鸟昵称的还在'<br/>

            var writerStream = fs.createrWriteStream('output.txt');<br/>

            writerStream.write(data,'UTF8');<br/>

            writerStream.on('finish',function(){<br/>
                console.log('写入完成')<br/>
            });<br/>

            writerStream.on('error',function(){<br/>
                console.log(err.stack)<br/>
            })
            console.log("程序执行完毕")<br/>



            <br/><br/>

            管道流<br/>
            管道流提供了一个输出流到输入流的机制，通常从一个流中获取数据并将数据传递到另一个流中<br/>

            文件比作水桶的水，而水是文件的内容，用一个管子pipe链接两个桶是个水从一个桶流入另一个桶，这样实现了文件的复制过程<br/>

            var fs = require('fs')<br/>

            var readerStream  = fs.createReadStream('input.txt')<br/>

            var writeStream  = fs.createWriteStream('output.txt')<br/>

            readerStream.pipe(writeStream)<br/>
            console.log('程序执行完毕')<br/>



            链式流<br/>

            链式是通过链接输出流到另一个流并创建创建多个流操作链的机制。链式流一般用于管道操作<br/>
            用管道和链式来压缩和解压文件<br/>

            <br/>

            压缩文件<br/>
            var fs = require('fs');<br/>
            var zlib = require('zlib')<br/>
            //压缩input.txt 文件为 input.txt.gz<br/>
            fs.createReadStream('input.txt')<br/>
            .pipe(zlib.createGzip())<br/>
            .pipe(fs.createWriteStream('input.txt.gz'))<br/>
            console.log("文件压缩完成")<br/>


            解压文件<br/>

            var fs = require('fs');<br/>
            var zlib =require('zlib')<br/>
            //解压 input.txt.gz 文件为 input.txt<br/>

            fs.createReadStream('input.txt.gz')<br/>
            .pipe(zlib.createGunzip())<br/>
            .pipe(fs.createWriteStrem('input.txt'))<br/>
            console.log('文件解压完成')<br/>
         </p>


          <h2 class="title">Node.js 模块系统</h2>
         <p class="note">
            Node.js的文件相互调用，Node.js提供了一个简单的模块系统。<br/>
            模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应，一个Node.js问价就是一个模块，这文件可以是<br/>
            JavaScript代码，JSON或者编译过的C/C++扩展<br/>

            <br/>
            引入模块<br/>
            在Node.js 中，引入一个模块非常简单， <br/>
            var hello= require('./hello')<br/>
            hello.world();<br/>
            代码 require('./hello') 引入了当前目录下的hello.js文件(./为当前目，node.js默认后缀为js)<br/>
            Node.js 提供了 exprots 和 require 两个对象，其中exprots 是模块公开的接口，require 用于从外部娶一个<br/>
            模块的接口，即所获得模块的exprots对象<br/>
            exprots.world=function(){<br/>
                console.log('hello world')<br/>
            }<br/>

            hello.js 通过exprots 对象把world作为模块的访问接口，在main.js 中通过require('./hello')加载这个模块<br/>
            然后可以直接访问 hello.js 中exprots 对象的成员函数了<br/>

            module.exprots=function(){   }<br/>

            function Hello(){<br/>
                var name;<br/>
                this.setName= function(thyName){<br/>
                    name = thyName<br/>
                };<br/>
                this.sayHello = function(){<br/>
                    console.log('hello'+ name)<br/>
                }<br/>

            }<br/>
            module.exprots = hello<br/>

            //main.js<br/>
            var hello = require('./hello');<br/>
            hello = new Hello();<br/>
            hello.setName('asdfaf');<br/>
            hello.sayHello()<br/>

            服务器的模块放在哪里<br/>

            var http = require('http');<br/>
            http.createServer(...)<br/>

            Node.js 中自带了一个http的模块，需要赋值给本地变量<br/>
            本地变量变成一个拥有所有http模块所提供的的公共方法的对象<br/>

            Node.js 的require 方法中文件查找的策略<br/>
            由于Node.js中存在4类模块（原生模块 和 3种文件模块），尽管require方法极其简单，但是内部的加载却是十分复杂的<br/>
            其加载优先级也各自不同<br/>

            开始 requre   是否在文件模块缓存中   是    返回 exprots<br/>
                                               否    是否原生模块    是    是否在原生缓存中   是     返回 exprots<br/>
                                                                                           否     加载原生模块      缓存原生模块    返回exprots<br/>

<br/>
                                                                    否    查找文件模块    根据扩展名载入文件模块    缓存文件模块  返回exprots<br/>

            <br/>

            从文件模块缓存中加载<br/>
            尽管原生模块与文件模块的优先级不同，但是都会优先从文件模块的缓存中加载已经存在的模块<br/>

            从原生模块中加载<br/>
            原生模块的优先级仅次于文件模块缓存的优先级，rquire 方法在解析文件名之后，优先检查模块是否在原生模块列表中，<br/>
            http模块为例，尽管在目录下存在一个http/http.js.node/http.json 文件，require('http')都不会从这文件中加载<br/>
            而是从原生模块中加载<br/>
            原生模块也有一个缓存区，同样也是优先崇缓存区加载，如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行<br/>
            <br/>
            从文件加载<br/>
            当文件模块缓存中存在，而不是原生模块的时候，Node.js会解析require方法传入的参数，并从文件系统中加载实际的文件，<br/>
            加载过程中的包装和编译细节<br/>
            require 方法接受一下几种传参数的传递<br/>
            http 、fs、 path 等 原生模块<br/>
            ./mod 或../mod,相对路径的文件模块<br/>
            /pathtomodule/mod  绝对路径的文件<br/>
            mod，非原生模块的文件模块<br/>

            <br/>

            exprots 和 moudule.exprots 的使用<br/>
            如果要对外暴露属性和方法，就是用exprots 就行，要暴露对象类似class ，包含很对属性和方法，就用module.exprots<br/>

            <br/>
            不建议同时使用exprots 和 module.exprots<br/>
            如果使用exprots 对外暴露属性和方法，在使用module.exprots 暴露对象，会使得exprots上暴露的属性和方法失效
            原因在于，exprots仅仅是module.exprots的一个引用。<br/>
            function require(...){<br/>
                var module ={ exprot:{}  };<br/>

                ((module,exprots)=>{<br/>

                    function myfn(){}<br/>
                    exprots.myfn=myfn<br/>
                })(module,module.exprots)<br/>
                return module.exprots<br/>
            }<br/>






            <br/>
          


         </p>


         <h2 class="title">Node.js 函数</h2>
         <p class="note">
             在javaScript中，一个函数可以作为另一个函数的函数，可以先定义一个函数，然后传递，也可以传递参数的地方直接定义函数<br/>
             Node.js 中函数的使用与JavaScript类<br/>
             function say(word){<br/>
                 console.log(word)<br/>
             }<br/>
             function execute(someFunction,value){<br/>
                 someFunction(value)<br/>
             }
             execute(say,"hello")<br/>
             
             say函数作为execute 函数的第一个变量进行传递，传递的不是say的返回值，而是say本身<br/>
             say变成execute中的本地变量someFunction，execute可以通过调用someFunction() 带括号的形式来使用say函数<br/>
             当然，因为say有一个变量，execute在调用someFunction 时可以传递这样一变量<br/>

             匿名函数<br/>
             可以把一个函数作为变量传递，但是不一定要绕这个先定义，在传递的圈子，直接在另一个函数的括号中定义和传递这个函数<br/>


             function excute(someFunction,value){<br/>
                 someFunction(value)<br/>
             }
             excute(function(word){conosle.log(word)},hello)<br/>
             execute接受第一个参数的地方直接定义了准备传递给excute的函数<br/>
             不用给函数起名字，叫做匿名函数<br/>

             函数床底是如何让http服务器工作的<br/>

             var http = requrie('http')<br/>

             http.createServer(function(requrest,response){<br/>
                 response.writeHead(200,{ 'Content-Type':'text/plain' });<br/>
                 response.write("hello world");<br/>
                 response.end();<br/>
             }).listen(8888)<br/>
             

             向createServer函数传递一个匿名函数<br/>

             var http=require('http');<br/>
             function onRequest(request,response){<br/>
                 response(200,{'Content-Type':'text/plain'});<br/>
                 response.write('Hello world');<br/>
                 response.end();<br/>
             }<br/>
             http.createServer(onRequest).listen(8888)<br/>
             <br/>

         </p>

           <h2 class="title">Node.js 路由</h2>
         <p class="note">
             为路由提供请求的URL 和其他需要的GET以及POST参数，随后路由需要根据这些数据来执行相应的代码<br/>
             需要查看HTTP 请求，从中提取出请求的URL 以及GET/POST 参数，这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）<br/>
             暂定其为HTTP服务器的功能<br/>

             所有数据都包含在request对象中，该对象作为onRequest() 回调函数的第一个参数传递，但是为了解析这些数据，<br/>
             需要额外的Node.js 模块，它分别是url 和querystring 模块<br/>
            
             url.parse(string).query   foo=bar & hello=world 参数列表<br/> 
             url.parse(string).pathname  /start<br/> 路径文件件名称

             http://local:8888/star?foo=bar&hello=world<br/>

             querystring.parse(queryString)["foo"] foo 的value<br/>
             queryString.parse(queryString)["hello"] hello 的 value<br/>
             <br/>
             var http = require('http')<br/>
             var url = require('url')<br/>

             function start(){<br/>
                 function onRequest(requrest,response){<br/>
                     var pathname = url.parse(request.url).pathname<br/>
                     console.log("Request for"+ pathname+'received');<br/>
                     response.writeHead(200,{'Content-Type':'text/plan'})<br/>
                     response.write('hello world');<br/>
                     response.end()<br/>
                 }
                 http.createServer(onRequest).listen(8888)<br/>
                 conosle.log('Server has started')<br/>
             }
             exports.start = start<br/>
             <br/>

             通过请求的URL路径来区分不同请求了，使用路由来将请求以URL 路径为基准映射待处理程序上<br/>
             构建的应用中，意味着自 /start和/upload的请求可以使用不同的代码来处理，<br/>

             function route(pathname){<br/>
                 console.log('About to route a request for'+ pathname)<br/>
             }
             exports.route= route<br/>

            <br/>

             var http =require('http')<br/>
             var url  =require('url')<br/>
             function start(route){<br/>
                 function onRequest(request,response){<br/>
                     var pathname = url.parse(request.url).pathname<br/>
                     cosnole.log("Resquest for "+ pathname+"received")<br/>

                      route(pathname);<br/>
                     response.writeHeader(200,{ 'Content-Type':text/plan })<br/>
                     response.write('hello World')<br/>
                     response.end();<br/>
                 }<br/>
                http.createServer(onRequest).listen(8888)<br/>


             }<br/>
             exprots.start = start<br/>


             var server = require('./server');<br/>
             var router = require('./router')<br/>
             server.start(router)<br/>

             现在启动应用 node index.js 始终记得这个命令，随后请求一个URL，将会看到输出定义的信息，这表明HTTP服务已经使用<br/>
             路由模块了，并会吧请求的路径传递给路由<br/>

             
             

             <br/>
         </p>

           <h2 class="title">Node.js 全局对象</h2>
         <p class="note">
             JavaScript 中有一个特殊的对象，成为全局对象（Global Object），它及其所属性都可以再程序任何地方访问<br/>
             即全局变量<br/>
             在浏览器JavaScript，通常window是全局对象，而node.js 中全局对象就是global，所以全局变量除了global本身外都是<br/>
             global对象的属性<br/>
             Node.js可以直接访问到global的属性，而不是需要在应用中包含它<br/>

             全局对象与全局变量<br/>
             global做根本的作用是作为全局变量的宿主，按照ECMAScrit的定义，满足一下条件的变量是全局变量<br/>

              在最外层定义的变量<br/>
              全局对象的属性<br/>
              隐士定义的变量（未定义直接赋值的变量）<br/>
              定义一个全局变量时，这个变量同时也会变成为全局对象的属性，反之亦然。PS:Node.js中不能在最外层定义变量，<br/>
              因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文。<br/>
              ps:最好不要使用var定义变量以避免引用全局变量，因为全局变量会污染命名空间，提高代码的耦合风险<br/>
              <br/>
              __filename<br/>
              __filename 表示当前正在执行的脚本的文件名，他将输出文件所在的位置的绝对路径，且和命令行参数所制定的文件名<br/>
              不一定相同，如果在模块中，返回值是模块文件中的路径<br/>
              <br/>
              实例<br/>
              console.log(__filename)<br/>
            <br/>

            __dirname<br/>
            __dirname 表示当前执行脚本所在目录<br/>
            console.log(__dirname)<br/>

            setTimout(cb,ms)<br/>
            setTimeout(cb,ms) 全局函数在指定的毫秒ms数后执行指函数cb：setTtimeout() 只执行一次指定函数<br/>
             返回一个代表定时器的句柄值<br/>

             function printHello(){<br/>
                 console.log('hello world')<br/>
             }<br/>

             setTimeout(printHello,2000)<br/>


             clearTimeout(t)<br/>

             clearTimemout(t) 全局函数用于停止一个之前通过setTimeout() 创建的定时器，参数t是通过setTimeout()函数创建的定时器<br/>
             
             function printHello(){<br/>
                 conosle.log('hello world')<br/>
             }<br/>

             var  t =setTimeout(printHello,2000)<br/>

             cleartTimeout(t)<br/>

             setInterval(cb,ms)<br/>
             setInterval(cb,ms) 全局函数在指定的毫秒ms数后执行指定的函数cb<br/>
             返回一个代表定时器的句柄值，可以使用clearInterval(t)函数来清理定时器<br/>
             setInterval()方法不停地调用函数，直到clearInterval()被调用或者窗口被关闭<br/>

             function printHello(){<br/>
                 console.log("hello world")<br/>
             }<br/>
             setInterval(printHello,2000)<br/>


             console<br/>
             console.log用于提供控制台标准输出，他是有Internet Explorer 的JScript引擎提供的调试工具，后来逐渐成为浏览器<br/>
             实施标准<br/>
             Node.js沿用了这个标准，提供与习惯一致的console对象，用于向标准输出流stdout 或标准错误流 stderr输出符<br/>

             console 方法<br/>

             console.log([data],[...])<br/>
             向标准输出流打印字符并以换行符结束。该方法接收若干个参数，则输出这个参数的字符串形式，如果有多个参数，<br/>
             类似c语言printf()命令的格式输出<br/>
             console.info([data],[...])<br/>
             该命令的作用是返回消息性消息，这个命令与console.log() 差别不大，除了chrome值只会输出文本外，其余的会显示一个蓝色的惊叹号<br/>
             console.error([data],[...])<br/>
             输出错误消息，控制台在出现错误时会显示红色的叉子<br/>
             console.warn()<br/>
             输出警告消息，控制台输出黄色的惊叹号<br/>
             console.dir(obj,[options])<br/>
             用来对一个对象进行检查 inspect ，并以易与阅读和打印的格式显示<br/>
             console.time(label)<br/>
             输出时间，表示计时开始<br/>
             console.timeEnd(label)<br/>
             结束时间，便是计时结束<br/>
             console.trace(message[,...])<br/>
             当前执行的代码在堆栈中的调用路径，这个测试函数很有帮助，只要给想测试的函数里面键入console.trace就行了<br/>

             console.assert(value,[,message][...])<br/>

             用于判断某个表达式或者变量是否为真，接受两个参数，第一个参数是表达式，第二个参数是字符串，只有当第一个参数为false<br/>
             才会输出第二个参数，否则不会有任何结果<br/>
            
             console.log('body %d ', 1991)=>  body1991<br/>
             console.trace() 向保准错误流输出当前的调用栈<br/>
             console.trace();<br/>
             console.time()<br/>
             console.timeEnd()<br/>

             <br/><br/>

             process<br/>
             process 是一个全局变量，即global对象的属性<br/>
             它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口，通常写本地命令行程的时候，<br/>
             exit<br/>
             当进程准备退出是触发<br/>
             beforeExit<br/>
             当node 清空事件循环，并且没有其他安排时，触发这个事件，当没有进程安排时node退出，当时beforeExit 的监听<br/>
             器可以异步调用，这个node 就会继续执行<br/>
             uncaughtException<br/>
             当一个异常冒泡回到事件循环，触发这个事件，如果给异常添加监控器，默认的操作打印堆栈跟踪信息并退出就不会发生<br/>

             Signal 事件<br/>
             当进程接受到信号时就触发<br/>

            process.on('exit',functioin(code){<br/>
                setTimeout(function(){<br/>
                    console.log('改代码不会执行')<br/>
                },0)<br/>

                console.log('退出码为：'，code)<br/>
            });<br/>
            console.log('程序执行结束')<br/>

             <br/>
            退出状态码<br/>
            1  Uncaugth Fatal Exception<br/>
                未捕获异常，并且没有被域或uncaughtException 处理函数处理<br/>
            2  Unused<br/>
                保留<br/>
            3  Internal JavaScript Parse Error<br/>
                JavaScript 的源码启动Node进程时引起解析错误，非常罕见，仅会在开node 时才会有<br/>
            4  Internal JavaScript Evaluation Faiure<br/>
                JavaScriptd 的源码启动Node 进程，评估是返回函数失败<br/>
            5  Fatal Error
                V8里致命的不可恢复的错误
            6  Internal Exception Handler Run-Time Failure<br/>
                未捕获的异常，并且异常处理函数处理时自己抛出异常
            7   Unused <br/>
                保留<br/>
            9   Invalid Argument<br/>
                可能是给了未知的参数，或者给的参数没有值<br/>
            10  Internal JavaScript Run-Time Failure<br/>
                设置了参数 debug  debug--brk 选择了错误端口<br/>
            128 Signal Exits<br/>
                如果Node接受到致命信号，不如SIGKILL 或者 SIGHUP ，那么退出代码就是128 加信号代码，<br/>
            <br/>

            Process 属性<br/>
            Process 提供很多有用的属性，<br/>

            1 stdout   保准输出流<br/>
            2 stderr   标准错误流<br/>
            3 stdin    标准输入流<br/>
            4 argv     argv 属性返回一个数组，由于命令执行脚本是的各自参数组成，他的第一个成员总是node，第二个成员脚本文件名，其余成员是脚本文件的参数<br/>
            5 execPath 返回执行当前脚本的Node二进制文件的绝对路径
            6 execArgv 返回一个数组，成员是命令执行下执行脚本时，在Node可以执行文件与脚本文之间的命令行参数<br/>
            7 env      返回一个对象，成员当前shell 的环境变量
            8 exitCode 进程退出时的代码，如果进程优通过process.exit()退出，不需要指定退出码<br/>
            9 version  Node 的版本，比如 V0.10.18<br/>
            10versions 一个属性，包含node的版本和依赖<br/>
            11config   一个包含用来编译当前node 执行文件的JavaScript 配置选项的对象，它与运行./configure 脚本生成的 config.gypi文件相同<br/>
            12 pid     当前进程的进程号<br/>
            13 title   进程名，默认值为node 可以自定义该值<br/>
            14 arch    当前CPU 的架构 arm ia32 后者 x64<br/>
            15 platform 运行程序所在的平台 darwin  fressbsd linux  所属 win32
            16 mainModule require.main 的备选方法，不同点，如果主模块在运行时变化，require.main 可能会继续返回老的模块，可以认为，这二者引用同一个模块<br/>

            未完成<br/>

             <br/>
         </p>

           <h2 class="title">Node.js 常用的工具<br/></h2>
         <p class="note">
             util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补和JavaScript 的功能过于精简的不足<br/>
             const util= require('util')<br/>
             util.callbackify<br/>
             util.callbackify(original) 将saync 异步函数或者一个返回值为Promise的函数 转换成循环异常优先的回调风格<br/>
             的函数，(err,value)=>... 回调作为最后一个参数，在回调函数中，第一个参数为拒绝的原因（如果Promise 解决，则为null）<br/>
             第二个则是解决的值<br/>

             cosnt util =require('util')<br/>
             async function fn(){<br/>
                 return 'hello world'<br/>
             }<br/>
             const callbackFunction = util.callbackify(fn)<br/>
             callbackFunction((err,ret)=>{<br/>
                 if(err) throw err;<br/>
                 console.log(ret)<br/>
             })<br/>
             <br/>

             回调函数是异步执行的，并且有异常堆栈错误追踪，如果回到函数抛出一个异常，进程会触发一个'uncaughtException'<br/>
             异常，如果没有被捕获，进程将会退出<br/>
             null 在回调函数中作为一个参数有特殊的意义，如果回调函数的首个参数为Promise拒绝的原因且带有返回值，且值可以<br/>
             转换成布尔值false，这个值会被分装在Error 对象里，可以通过reson 获取<br/>

             function fn(){<br/>
                 return Primise.reject(null)<br/>
             }<br/>
             const callbackFunction = util.callbackify(fn)<br/>
             callbackFunction((err,ret)=>{<br/>
                 //当 Promsie 被以 null拒绝时，他被包装为Error 并且原始值存储在reason中<br/>
                 err&&err.hasOwnProperty('reason')&& err.reson===null  //true<br/>
             })<br/>
            <br/>

            util.inherts <br/>

            util.inherts(constructor,superConstructor) 是一个实现对象间原型继承的函数<br/>
            JavaScript 的面向对象特性是基于原型的，与常见的基础类同。JavaScript没有提供对象继承的语言级别特性，<br/>
            而是通过原型复制来实现的<br/>

            var  util = require('util');<br/>
            function Base(){<br/>
                this.name = 'base',<br/>
                this.base = 1991;<br/>
                this.sayHello = function(){<br/>
                    console.log('hello'+ this.name)<br/>
                }<br/>
            }<br/>

            Base.prototype.showName = funtion(){<br/>
                console.log(this.name)<br/>
            }<br/>

            function Sub(){<br/>
                this.name ='sub'<br/>
            }<br/>

            util.inherits(Sub,Base)<br/>
            var  objBase = new Base();<br/>
            objBase.sayHello();<br/>
            var objSub = new Sub()<br/>
            objSub.showNaname();<br/>
            console.log(objSub)<br/>

            定义一个基础对象Base和 一个继承自Base 的Sub ，Base 有三个在构造函数内定义的属性和一个原型中定的函数，通过<br/>
            通过util.inerits 实现继承<br/>

            <br/>
            util.inspect <br/>
            util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，通常用于调试和错误输出<br/>
            至少接受一个参数object ，即要装换的对象<br/>

            showHidden 是一个可选参数，如果值为true，将会输出更多隐藏信息。<br/>
            depth 表示最大递归的层数，如果对象很复杂，可以直接指定层数以控制输出信息多少，如果不指定depth，默认会递归2层，<br/>
            指定为null表示将不限递归层数完成便利对象，如果colors值为true 输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮<br/>
            特别要指出的是：util.inspect 并不会简单的直接把对象转为字符串，及时该对象定义了toString方法也不会调用<br/>

            var util= require('util');<br/>

            function Person(){<br/>
                this.name ='bou',<br/>
                this.toString= function(){<br/>
                    return this.name<br/>
                }<br/>
            }<br/>
            var obj = new Person();<br/>
            console.log(util.inspect(obj))<br/>
            console.log(util.inspect(obj,true))  <br/>

            <br/>

            util.isArray(object)<br/>
            如果给定的参数object是一个数组返回true，否则返回false<br/>

            var util= require('util')<br/>
            util.isArray([]) true<br/>
            util.isArray(new Array) true<br/>
            util.isArry({}) false<br/>

            <br/>

            utils.isRegExp(object)<br/>
            如果给定的参数 object 是一个正则表达式返回true 否则返回false<br/>

            var util = require('util')

            util.isRegExp(/some regexp/) true<br/>
            util.isRegExp('anohter regexp')<br/>
            util.isRegExp({})<br/>

            <br/>

            util.isDate(object)<br/>

            如果给定的object 是一个日期 返回true 否则返回false<br/>

            var util =require('util');<br/>
            util.isDate(new Date()) true <br/>
            util.isDate(Date()) false  whitout 'new' returns a string<br/>
            util.isDate({}) false <br/>

            <br/>

            var util = require('util');<br/>

            function Base(){<br/>
                this.name = 'name';<br/>
                this.base = 1995;<br/>
                this,sayHello  = function(){<br/>
                    console.log('hello'+this.name);<br/>
                }<br/>
            }<br/>
            Base.prototye.showName = function(){<br/>
                console.log(this.name)<br/>
            }<br/>

            function sub (){<br/>
                this.name = 'sub'<br/>
            }<br/>

            util.inherits(Base,sub)<br/>
            let baseObject= new Base()<br/>
            console.log(baseObject)<br/>
            baseObject.showName()<br/>

            let subObje = new sub()<br/>

            console.log(subObj)<br/>
            console.log(subObj.name)<br/>
            subObj.showName()<br/>
            

         </p>
           <h2 class="title">Node.js 文件系统</h2>
         <p class="note">
             Node.js 提供了一组类似Unix POSIX标准的文件操作API。Node.js 导入文件系统模块fs 语法如下<br/>
             var fs = require('fs')<br/>

             异步和同步<br/>
             Node.js文件系统 fs 模块 中的方法均为有异步和同步版本，例如读取文件内容的函数有异步的fs.readFile() 和同步的<br/>
             fs.readFileSync()。 <br/>
             
                异步的方法函数做后一个参数为回调函数，回调函数的第一个参数包含了错误信息（error）<br/>
                建议使用异步方法，比起同步方法，异步方法性能更高，速度更快，而且没有阻塞想<br/>
                //异步读取
                var fs = reqire('fs');<br/>
                fs.readFile('input.txt',function(err,data){<br/>
                    if(err){<br/>
                        return cosnole.error(err)<br/>
                    }<br/>
                    console.log('异步读取：'+ data.toString())<br/>
                })
                //同步读取
                var data= fs.readFileSync('input.txt')<br/>
                console.log('同步读取'+ data.toString())<br/>
                console.log('程序执行完毕')<br/>

                <br/><br/>
                打开文件<br/>
                异步模式下打开文件的语法格式：<br/>
                fs.open(path,flags[,mode],callback)<br/>
                参数：<br/>
                path: 文件的路径<br/>
                flags：问价打开的行为<br/>
                mode：设置文件模式权限 ，文件创建默认权限为0666可读可写<br/>
                callback 回到函数，带有2个参数 callback(err,fd)<br/>

                flages 参数值：<br/>

                r： 读取模式打开文件，如果文件不存在抛出异常<br/>
                r+: 读写模式打开文件，如果文件不存在抛出异常<br/>
                rs: 同步方式读取文件<br/>
                rs+:同步方式读取和写文件<br/>
                w： 写入模式打开文件，如果文件不存在 则创建<br/>
                wx: 类似w，但如果文件路径存在，文件写入失败<br/>
                w+: 以读写模式打开文件，如果文件不存在则创建<br/>
                wx+:类似w+ 但如果文件路径存在，则文件读写失败<br/>
                a ：追加模式打开文件，如果we年不存在则创建<br/>
                ax: 类似a 但是如果文件路径存在，则文件追加失败<br/>
                a+: 读取追加模式打开文件，如果文件不存在则创建<br/>
                ax+:类似a+ 但是如果文件路径存在，则文件读取追加失败<br/>
                <br/>
                var  fs = rqurie('fs')<br/>
                console.log("准备代开文件")<br/>
                fs.open('input.txt','r+',function(err,fd){
                    if(err){
                        return console.log(err);
                    }
                    console.log('文件打开成功了')
                })<br/>

                获取文件信息<br/>
                通过异步模式获取文件信息的语法格式<br/>
                fs.stat(path,callback)<br/>

                参数说明<br/>
                path 文件路径<br/>
                callback 回调函数，带有两个参数如：(err,stats), stats 是fs.Stats 对象<br/>
                fs.stat(path)执行后，会将stats类的实例返回给其回到函数，可以通过stats类中的提供方法判断问价的相关属性<br/>

                var fs = require('fs');<br/>

                fs.stat('xxxxx.js',function(err,stats){<br/>
                    console.log(stats.isFile())<br/>
                })<br/>

                stats.isFile()   如果文件 true  false<br/>
                stats.isDirectory 目录返回 true false<br/>
                stats.isBlockDevice  块设备返回true  false<br/>
                stats.isCharacterDevice 字符串设备 true  false<br/>
                stats.isSymbolicLink  软链接返回 true false<br/>
                stats.ifFIFO 如果FIFO 返回true  false<br/>
                stats.isSocket 如果是Socket 返回true  false<br/>

                <br/>

                var fs = require('fs');<br/>
                console.log('准备打开文件<br/>')
                fs.stat('./input.txt',function(err,stats){<br/>
                    if(err){ return cosnole.error(err) }<br/>
                    console.log(stats)<br/>
                    console.log('读取文件信息成功')<br/>

                    console.log(stats.isFile()) //是否为文件<br/>
                    console.log(stats.isDirectory)// 是否为目录<br/>
                })<br/>



                写入文件<br/>

                异步模式写入文件的语法格式：<br/>
                fs.writeFile(file,data[,options],callback)<br/>
                writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖进的文件内容<br/>
                参数：<br/>
                file 文件名或文件描述符<br/>
                data 要写入文件的数据，可以是String字符串 或者 Buffer 缓冲对象<br/>
                options 该参数是一个对象，包含{ encoding，mode，flag } 默认编码为 utf8： 模式：0666，flag:'w'<br/>
                callback 回调函数，回调函数值只包含错误信息参数err，写入失败的时候返回<br/>

                var fs = require('fs');

                console.log('准备写入文件<br/>')<br/>
                fs.writeFile('input.txt','通过fs.writeFile 写入文件的内容',function(err){<br/>
                    if(err){ return console.error(err) }<br/>
                    console.log('数据写入成功');<br/>
                    console.log("-------------------");<br/>
                    console.log("读取吸入的数据<br/>")

                    fs.readFile('input.txt',function(err,data){<br/>
                        if(err){<br/>
                            return console.error(err)<br/>
                        }<br/>
                        console.log("异步读取数据："+ data.toString())<br/>
                    })<br/>
                })<br/>

                读取文件<br/>
                语法<br/>
                异步模式下读取文件的语法<br/>
                fs.read(fd,buffer,offset,length,postion,callback)<br/>
                该方法使用了文件描述符来读取文件<br/>
                参数书名<br/>
                fd 通过fs.open()方法返回的文件描述<br/>
                buffer 数据写入的缓存区<br/>
                offset 缓冲区写入的写入偏移量<br/>
                length 要从文件中读取的字节数<br/>
                position 文件读取的起始位置，如果postion的值为null，则会从当前文件指针的位置读取<br/>
                callback 回调函数，有是三个参数err,byteRead,buffter,err 为错误信息，bytesRead表示读取的字节数，buffer为缓冲区对象<br/>

                var fs =require('fs');
                var buf = new Buffer.alloc(2014);

                console.log('准备打开已存在的文件')<br/>
                fs.open('input.txt','r+',function(err,fd){<br/>
                    if(err){ return console.error(err) }<br/>

                    console.log('文件打开成功')<br/>
                    console.log('准备读取文件')<br/>

                    fs.read(fd,buf,0,buf.length,0,function(err,bytyes){<br/>
                        if(err){ console.error(err) }<br/>
                        console.log(bytes +'字节被读取');<br/>
                        if(bytes>0){<br/>
                            console.log(buf.silce(0,bytes).toString())<br/>
                        }<br/>
                    })<br/>
                })<br/>

                <br/>

                关闭文件<br/>
                异步模式下关闭文件的语法格式<br/>

                fs.close(fd,callback)<br/>
                
                参数<br/>
                fd 通过fs.open() 方法 返回的文件描述符<br/>
                callback 回调函数 没有参数<br/>


                var fs = require('fs');<br/>
                var buf = new Buffer.alloc(1024);<br/>

                fs.open('input.txt','r+',function(err,fd){<br/>
                    if(err){ return console.error(err) }<br/>

                    fs.read(fd,buf,0,buf.length,0,function(err,bytes){<br/>
                        if(err){ conosle.log(err) }<br/>
                        if(bytes>0){<br/>
                            console.log(buf.slice(0,bytes).toString())<br/>
                        }<br/>

                        fs.close(fd,function(err){<br/>
                            if(err){ console.error(err) }<br/>
                            console.log("文件关闭成功")<br/>
                        })<br/>
                    })<br/>
                })<br/>

                <br/>

                截取文件<br/>
                fs.ftruncate(fd,len,callback)<br/>
                参数<br/>
                fd 通过fs.open()方法返回文件描述符<br/>
                len 文件内容截取的长度<br/>
                callback 回调函数，没有参数<br/>

                <br/>
                
                var fs= require('fs');<br/>
                var buf = new Buffer.alloc(1024)<br/>

                fs.open('input.txt','r+',function(err,fd){<br/>
                    if(err){<br/>
                        return console.error(err);<br/>
                    }<br/>

                    fs.ftruncate(fd,10,function(err){<br/>
                        if(err){ console.log(err) }<br/>

                        fs.read(fd,buf,0,buf.length,0,function(err,bytes){<br/>
                            if(err){ console.log(err) }<br/>

                            if(bytes>0){<br/>
                                conosle.log(buf.slice(0,bytes).toString())<br/>
                            }<br/>

                            fs.close(fd,function(err){<br/>
                                if(err){ console.log(err) }<br/>
                                console.log("文件关闭成功")<br/>
                            })<br/>
                        })<br/>
                    })<br/>
                })<br/>


                删除文件<br/>
                fs.unlink(path,calllback)<br/>
                参数说明<br/>
                path 文件路径<br/>
                callback 回调函数，没有参数<br/>

                var fs = require('fs')<br/>

                fs.unlink('input.txt',function(err){<br/>
                    if(err){ return console.err(err) }<br/>
                    console.log("删除文件成功")<br/>
                })<br/>

                <br/>

                创建目录<br/>

                fs.mkdir(path[,options],callback);
                参数：<br/>
                path 文件路径<br/>
                options <br/>
                    recursive 是否以递归方式创建目录 默认false<br/>
                    mode 设置目录权限 默认 0777<br/>
                callback 回调函数 没有参数<br/>

                var fs = requrie ('fs')<br/>
                fs.mkdir('/tmp/test/',function(err){<br/>
                    if(err){ console.error(err) }<br/>
                    console.log("创建目录成功")<br/>
                })<br/>

                可以添加recursive:true 参数，不管创建的目录/tmp 和 /tmp/a 是否存在<br/>

                fs.mkdir('/tmp/a/apple',{ recursive:true },(err)=>{<br/>
                    if(err) throw err<br/>
                })<br/>

                <br/><br/>

                读取目录<br/>
                fs.readdir(path,callback)<br/>
                参数<br/>
                path 文件路径<br/>
                callback 回调函数，回调函数带有两个参数err,files, err 为错误信息，files为目录下单文件数组列表<br/>

                var fs = rquire('fs');<br/>
                fs.readdir('/temp/',functioin(err,files)={<br/>
                    if(err){ return console.error(err) }<br/>
                    files.forEach(function(file){<br/>
                        console.log(file)<br/>
                    })<br/>
                })<br/>


                <br/>
                
                删除目录<br/>
                fs.rmdir(path,callback)<br/>
                参数说明<br/>
                path 文件路径<br/>
                callback 回调函数 没有参数<br/>

                var fs = require('fs');<br/>

                fs.rmdir('/temp/test',function(err){<br/>
                    if(err){ return console.err(err) };<br/>

                    fs.readdir('/tmp/',function(err,files)=>{<br/>
                        if(err){ return console.error(err) };<br/>
                        files.forEach((file)=>{ cosnole.log(file) })<br/>
                    })<br/>
                })<br/>

                文件模块方法参考手册<br/>

                fs.rename(oldPath,newPath,callback)<br/>
                异步 rename() 回调函数乜有参数，但可能抛出异常<br/>
                fs.ftruncate(fd,len,callback)<br/>
                异步ftruncate 回调函数没有参数，但可能抛出异常<br/>
                fstruncateSync(fd,len) 同步 ftruncate()<br/>
                fs.truncate(path,len,callback)<br/>
                异步truncate() 回调函数没有参数，但可能抛出异常<br/>
                fs.chown(path,uid,gid)<br/>
                异步chown<br/>

                





                <br/> 
             <br/>
         </p>

          <h2 class="title">Node.js GET/POST 请求</h2>
         <p class="note">

            在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如 表单提交 <br/> 
            表单提交道服务器一般都使用GET/POST请求 <br/> 

            获取GET请求内容 <br/> 
            由于GET请求直接嵌入在路径中，URL是完整的请求路径，包括了？后面的部分，因此可以手动解析的内容作为GET请求的参数 <br/> 
            node.js中URL模块中的parse 函数提供了这个功能 <br/> 

            var http = require('http')
            var url = reqire('url')
            var util = require('util')
            http.createServer(function(req,res){
                res.writHead(200,{'Content-Type':'text/plain;charset=urf-8'});
                res.end(util.inspect(url.parse(req.url,true)))
            }).listen(3000)
                 <br/> 


                 <br/> 
                 <br/> 

            
            获取 POST 请求内容<br/> 

            POST 请求的内容全部都在请求体中，http.ServerRequest 并没有这个属性内容为请求体，原因是等待请求体传输可能是一种耗时工作<br/> 
            比如上传文件，而很多时候我们可能不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所以node.js 默认是不会<br/> 
            解析请求体，当你需要的时候，需要手动来做<br/> 

            var http = require('http');<br/>
            var querystring = require('querystring');<br/>
            var util =requrie('util');<br/>

            http.createServer(function(req,res){<br/>
                //定义一个post 变量， 用于暂停请求体的信息<br/>
                var post='';<br/>
                req.on('data',function(chunk){<br/>
                    post+=chunk<br/>
                })<br/>
                req.on('end',function(){<br/>
                    post = querystring.parse(post)<br/>
                    res.end(util.inspect(post))<br/>
                })<br/>
            }).listen(3000)<br/>


            var http = require('http')<br/>
            var querystring = require('querystring')<br/>

            <!-- var postHTML =  `<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head><body><form method="post"> <input name="name"><br>网站 URL： <input name="url"><br><input type="submit"></form></body></html>`; -->


            http.createServer(function(req,res){<br/>
                body="";<br/>
                req.on('data',function(chunk){<br/>
                    body+=chunk<br/>
                })
                req.on('end',function(){<br/>
                    body = querystring.parse(body)<br/>
                    res.writeHead(200,{'Content-Type':'text/html;charset=urf8'})<br/>
                    if(body.url && body.url){<br/>
                        res.write('网站名称：'+body.name)<br/>
                        res.write('<br>')<br/>
                        res.wrire('网站url'+ body.url)<br/>
                    }else{<br/>
                        res.write(postHTML)<br/>
                    }<br/>

                    res.end()<br/>
                })<br/>
            }).listen(3000)<br/>
         
         </p>
            <h2 class="title">Node.js web模块</h2>
         <p class="note"> 
            什么是Web服务器<br/>
            Web 服务器一般值网站服务器，是指停留与因特网上某种类型计算机的程序，Web服务器的基本功能就是提供Web信息浏览服务<br/>
            它只需支持HTTP协议，HTML 文档格式即URL，与客户端的网络浏览器配合。<br/>
            但多数web浏览器都支持服务端的语言 php python ruby 等，并通过脚本语言从数据库获取数据，将结果返回给客服端浏览器<br/>
            目前最主流的三个Web服务器是 Apache Nginx  IIS<br/>

            Web 应用架构<br/>

            Client 客服端 ，一般指浏览器，浏览器可以通过HTTP协议向服务器请求数据<br/>
            Server 服务器，一般住Web服务器，可以接收客户端请求，并向客户端发送响应数据<br/>
            Business 业务层，通过Web 服务器处理应用程序,如与数据库交互，逻辑运算，调用外部程序<br/>
            Data 数据层，一般由数据库组成<br/>


            使用node创建 Web 服务器<br/>
             Node.js 提供了http模块，http 模块主要用于搭建HTTP服务端和客户端，使用HTTP服务器或客户端功能必须调用http模块<br/>

             var http = require('http')<br/>


             var http = require('http')<br/>
             var fs = require('fs');<br/>
             var url = requrie('url')<br/>

             http.createServer(function(request,response){<br/>
                 var pathname = url.parse(request.url).pathname;<br/>

                 console.log("Request for" + pathname + 'recevied');<br/>

                 fs.readFile(pathname.substr(1),function(err,data){<br/>
                     if(err){<br/>
                         console.log(err);<br/>
                         response.writeHead(404,{'Content-Type':'text/html'})<br/>
                     }else{<br/>
                         response.writeHead(200,{'Content-Type':'text/html'});<br/>

                         response.write(data.toString());<br/>
                     }<br/>

                     response.end()<br/>
                 })
             }).listen(8080)<br/>
             console.log('Server running at http://127.0.0.1:8080')<br/>



             使用Node创建Web客户端<br/>

             var http = require('http');

             //用于请求的选项<br/>

             var options = {
                 host:'localhost',
                 prot:'8080',
                 path:'/index.html',
             }

             //处理响应的回调函数<br/>

             var callback = function(response){<br/>
                 //不断更新数据<br/>
                 var body='';<br/>
                 response.on('data',function(data){<br/>
                     body+=data;<br/>
                 })
                 response.on('end',function(){<br/>
                     //数据接受完成<br/>
                     console.log(body)<br/>
                 })<br/>
             }<br/>

             var req = http.request(options,callback);<br/>
             req.end()<br/>




            <br/>

         </p>

          <h2 class="title">Node.js Express 框架</h2>
         <p class="note">
             Express 简介<br/>
             Express 是一个非常简介而灵活的node.js Web引用框架，通过了一系列强大特性帮助你创建各种Web引用，和丰富的HTTP工具<br/>
             使用Exprss 可以快速搭建一个完整功能的网站<br/>
             Express 核心框架特性：<br/>
              可以设置中间件来响应HTTP请求<br/>
              定义了路由表用于执行不同的HTTP请求动作<br/>
              可以通过向模板传递参数来动态渲染HTML页面<br/>

              安装Express<br/>
              安装Express 并将其保存在依赖列表中：<br/>
              npm installl express --save<br/>
              命令会将Express框架安装当前目录下的 node_modulesm目录下会自动创建express目录，parser
              与express 框架一起安装<br/>
              body-parser  node.js 中间件，用于处理 JSON Raw Text URL 编码的数据<br/>
              cookie-parser  是一个解析Cookie 的工具， 通过req.cookies 可以获取传过来的cookie，并把它们转成对象<br/>
              multer  node.js 中间件，用于出路 enctype="multipart/form-data" 设置表单的MIME编码的表单数据<br/>

              npm install body-parser --save  <br/>node.js 中间件，处理JSON Raw Text URL 编码能力<br/>
              npm install cookie-parser --save <br/> 解析Cookie 工具 ，通过 req.cookies 可以获取传过来的cookie 并把它们转成对象<br/>
              npm install multer --save<br/>   node.js 中间件，用于处理 enctype ="multerpatr/form-data" 设置表单的MIME编码的表单数据<br/>

              npm list express  查看express 使用的版本号<br/>
              <br/><br/>
              引入 express 模块，并在客户端发起请求后，响应hello World 字符串<br/>

              创建express_demo.js 文件<br/>

              var exprsson = require('express');<br/>
              var app = express()<br/>

              app.get('/',function(req,res){<br/>
                  res.send('hello world')<br/>
              })<br/>

              var server = app.listen(8081,function(){<br/>
                  var host = server.address().address<br/>
                  var port = server.address().port<br/>

                  console.log('应用实例，访问的地址为：'，host,port)<br/>
              })<br/>


              请求和响应<br/>
              Express 应用使用回调函数的参数：request 和 response 对象来处理请求和响应数据<br/>

              app.get('/',function(req,res){<br/>
                  ...<br/>
              })<br/>
              request 和 response 对象的具体介绍<br/>
              Response 对象  request 对象表示HTTP请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性，常见的属性有<br/>

             1. req.app: 当callback为外部文件时，用req.app 访问express 的实例<br/>
             2. req.baseUrl: 获取路由当前安装的url路径<br/>
             3. req.body/req.cookies:获取请求主体、Cookies<br/>
             4. req.fresh/req.state: 判断请求是否还 新鲜<br/>
             5. req.hostname /req.ip 获取主机名和IP地址<br/>
             6. req.params:获取路由的parameters<br/>
             7. req.path：获取请求路径<br/>
             8. req.originalUrl:获取原始请求地址<br/>
             9. req.protocol : 获取协议类型<br/>
             10. req.query:获取URL 的查询参数串<br/>
             11. req.route:获取当前匹配的路由<br/>
             12. req.subdomains: 获取子域名<br/>
             13. req.accepts(): 检查可接受的请求的文档类型<br/>
             14. req.accpetsCharsets / req.acceptsEncodings / req.acceptsLanguages: 返回指定字符集的第一个可接受字符串编码<br/>
             15. req.get() :获取指定的HTTP请求头<br/>
             16. req.is()：判断请求头Content-Type 的MIME类型<br/>


             <br/><br/>

             Resonse 对象 response 对象 表示hTTP 响应，即在接受请求是向客户端发送的HTTP响应数据，常见的属性<br/>

             1. res.app  同req.app 一样<br/>
             2. res.append()：追加指定HTTP头<br/>
             3. res.set() 在res.append() 后将重置之前设置的头<br/>
             4. res.cookie(name,value[,option]):设置Cookie<br/>
             5. option：domain/expires/httpOnly/maxAge/path/secure/signed<br/>
             6. clearCookie(): 清除Cookie<br/>
             7. res.donwload():传送指定路径文件<br/>
             8. res.get():返回指定的HTTP头<br/>
             9. res.json(): 传送JSON 响应<br/>
             10. res.jsonp():传送JSONP响应<br/>
             11. res.location():只设置响应的Location HTTP 头，不设置状态码或者close response<br/>
             12. res.redirect(): 设置相应的Loacation HTTP 头，并设置状态码<br/>
             13. res.render(view,[locals],callback):渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中，有错误<br/>
             发生next（err）将被自动调用，callback将会传入一个可能发发生的错误以及渲染后的页面，这样就不会自动输出了<br/>
             14. res.send(): 传送HTTP响应<br/>
             15. res.sendFile(path[,options][,fn]) :传送指定路径的文件，会自定根据文件extension 设置Content-Type<br/>
             16. res.set():设置HTTP头，传入object 可以一次设置多个头<br/>
             17. res.status(): 设置HTTP 状态码<br/>
             18. res.type():设置Content-Type的MIME 类型<br/>

             <br/><br/>

            路由<br/>
            
            在HTTP请求中，可以通过路由提取出请求的URL以及GET/POST 参数<br/>
            var express = require('express')<br/>
            var app = express();<br/>

            app.get('/',function(req,res){<br/>
                console.log("主页GET请求");<br/>
                res.send('hello GET');<br/>
            })<br/>

            app.post('/',function(req,res){<br/>
                console.log('主页post 请求');<br/>
                res.send('Hello post')<br/>
            })<br/>

            app.get('/del_user',function(req,res){<br/>
                console.log('/del_user 响应 DELETF 请求')<br/>
                res.send('删除页面')<br/>
            })<br/>

            app.get('list_user',function(req,res){<br/>
                console.log('/list_user get 请求');<br/>
                res.send('用户列表')<br/>
            })<br/>

            app.get('/ab*cd',function(req,res){<br/>
                console.log("/ab*cd GET 请求");<br/>
                res.send('正则匹配')<br/>
            })<br/>

            var server= app.listen(8081,function(){<br/>
                var host = server.address().address<br/>
                var port = server.address().port<br/>
            })<br/>

            <br/><br/>
            静态文件<br/>
            Express 提供了内置的中间件 express.static 来设置静态文件如：图片，CSS，JavaScript 等<br/>
            使用express.static  中间件设置静态文件路径，将图片，CSS，JavaScript 文件放在public目录下<br/>
            app.use('/public',express.static('public'));<br/>

            node_modules <br/>
            server.js<br/>
            public/images<br/>
            public/images/logo.png<br/>

            <br/>
            <br/>

            GET方法<br/>

            var express  = requrie('express');<br/>
            var app = express();<br/>

            app.use('/public',express.static('public'))<br/>

            app.get('/index.html',function(req,res){<br/>
                console.log('ssssss',__dirname)<br/>
                res.sendFile( __dirname + '/'+ 'index.html')<br/>
            })<br/>
            app.get('/process_get',function(req,res){<br/>
                var response = {<br/>
                    "first_name":req.query.first_name,<br/>
                    "last_name":req.query.last_name<br/>
                };<br/>
                console.log("respnse=>",response)<br/>
                res.end(JSON.stringify(response))<br/>
            })<br/>
            var server = app.listen(8081,function(){<br/>
                var host = server.address().address<br/>
                var port = server.address().port<br/>

                console.log("引用实例，访问地址为:http:// %s:%s",host,port)<br/>
            })<br/>
            <br/>
            <br/>
            POST 方法<br/>

            var express = require('express')<br/>
            var app = express();<br/>

            var bodyParser = require('body-parser')<br/>

            var urlencodedParser = bodyParser.urlencoded({extended:false})<br/>

            app.use('/public',express.static('public'))<br/>

            app.post('/process_post',function(req,res){<br/>
                var response={<br/>
                    "first_name":req.query.first_name,<br/>
                    "last_name":req.query.last_name,<br/>
                }
                console.log(response)<br/>
                res.end(JSON.stringify(response))<br/>
            })<br/>

            var server = app.listen(8081,function(){<br/>
                var host = server.address().address<br/>
                var port = server.address().port<br/>

                console.log('应用访问的地址为 http:// %s :%s',host,prot)<br/>
            })<br/>


            <br/><br/>

            上传文件<br/>
            var express= require('express')<br/>
            var app = express()<br/>

            var fs = require('fs')<br/>
            
            var bodyParser = require('body-parser')<br/>

            var multer = require('multer');<br/>

            app.use('/public',express.static('public'))<br/>

            app.use(bodyParser.urlencoded({extended:false}))    <br/>

            app.use(multer({dest:'/temp'}).array('image'))<br/>

            app.get('/index.html',function(req,res){<br/>
                res.sendFile(__dirname,+'/'+'index.html')<br/>
            })<br/>

            app.get('/file_upload',function(req,res){<br/>
                console.log(req.files[0])<br/>

                var des_file = __dirname+'/'+req.files[0].originalname;<br/>

                fs.readFile(des_file[0].path,function(err,data){<br/>
                    fs.writeFile(des_file,data,function(err){<br/>
                        if(err){ console.log(err) }<br/>
                        else{ resonse={
                            message:'File upload successfully',<br/>
                            filename:req.files[0].originalname<br/>
                        } }<br/>

                        console.log(response)<br/>
                        res.set({ 'Content-type':'application/json;charset = utf-8' }) //返回utf8 格式编码 <br/>
                        res.end(JSON.stringify(response))<br/>
                    })<br/>
                })<br/>

            }) <br/>

            var server = app.listen(8081,function(){<br/>
                var host = server.address().address<br/>
                var port = server.address().port<br/>
                console.log("应用实例，访问地址为 http://%s:%s", host, port)<br/>
            })   <br/>   


            <br/><br/>
            Cookie 管理<br/>

            可以使用中间件向Node.js 服务器发送cookie 信息<br/>

            var express = require('express')<br/>
            var cookieParser = require('cookie-parser')<br/>

            var util = require('util')<br/>

            var app = express();<br/>

            app.use(cookieParser)<br/>

            app.get('/',function(req,res){<br/>
                console.log('Cooies:' + util.insepect(req.cookies))<br/>
            }) <br/>
            app.listen(8081)<br/>
            <br/>
         </p>


          <h2 class="title">Node.js RESTful API</h2>
         <p class="note">
            什么是REST<br/>

            REST 表述性的传递 引文：Representational State Transfer 简称REST 是一种软件架构风格<br/>
            表属性状态转移是一组架构约束条件和原则，满足这些约束和原则的引用程序或设计就是RESTful。ps:REST是设计风格<br/>
            而不是标准。REST通常基于使用HTTP，URL 和XML 标准通用标记语言下的一个子集，以及HTML <br/>

            HTTP 方法<br/>
                REST 基于架构四个方法<br/>
                GET 用于获取数据<br/>
                PUT 用于获取数据<br/>
                DELETE 用户删除数据<br/>
                POST 用于添加数据<br/>
            <br/>
            RESTful web Services<br/>
            Web service 是一个平台独立的，低耦合，自包含、基于可编程的web的应用程序，可以使用开放XML 通用标记语言下的一个子集<br/>
            标准描述，发布，发现，协调，和配置这些应用程序，用于开发分布式的相互操作的应用程序<br/>
            基于REST 架构的web Services 即是 RESTful
            由于轻量级以及通过HTTP直接传输数据的特性，web服务的RESTful方法成为作为常见的替代方法，可以使用各种语言(Java 程序，Perl，Ruby，Python，PHP和JavaScript 包含 Ajax) 实现客户端<br/>
            RESTful Web服务通常可以通过自动客户端或代表用户的应用程序访问。但是这种服务的简便性让用户能够与之直接交互，使用他们的Web浏览器<br/>
            构建一个GET URL 并读取范湖的内容<br/>

            <br/>
        </p>

        <h2 class="title">Node.js 多线程</h2>
        <p class="note">
            Node.js 是以单线程的模式运行，但它使用的事件驱动来处理并发，这样多核cpu的系统上创建多个子进程，从而提高性能 <br/>
            每个进程总是带有单个对象：child.stdin, child.stdout, child.stderr 可能会共享父进程的stdio流，后者也可以独立的被 <br/>
            倒流对象 <br/>
            Node 提供了 child_process 模块创建子进程方法有： <br/>

            exec  child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回 <br/>
            spawn child_process.spawn 使用指定的命令行参数创建新进程， <br/>
            fork  child_process.fork  是spawn() 的特殊形式，用于在子进程中运行的模块，如 fork  相当于 spawn('node',['']) <br/>
            与spawn 方法不同的是，fork 会在父进程与 子进程之间，建立一个通讯管道，用于进程之间的通讯 <br/>

            exec() 方法 <br/>

            child.process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回 <br/>

            child_process.exec(command[,options],callback) <br/>

            参数说明： <br/>

            command：字符串，将要运行的命令，参数使用空格隔开 <br/>
            options：对象可以是： <br/>
                cwd 字符串，子进程的当前工作目录 <br/>
                env 对象 环境变量键值对
                encoding 字符串，字符编码 默认 utf8 <br/>
                shell 字符串 将要执行命令的Shell ( 默认：在UNIX 中为/bin/sh,在Windows 中为 cmd.exe, Shell 应当识别 <br/> )
                -c 开关在UNIX中，或/s /c 在Windows 中。 命令行解析应当兼容cmd.exe <br/>
                timeout 数字，超时时间 <br/>
                maxBuffer 数字在 stdout stderr 中允许存在的做大缓冲二进制，如果超出那子进程将会被杀死 默认 200*1024 <br/>
                killSignal 字符串结束信号  默认 SIGTERM <br/>
                uid 数字 用户几进程的ID <br/>
                gid 数组 设置进程组的ID <br/>

                callback： 回调函数 包含三个参数：error stdout stderr <br/>
                exec() 方法返回最大的缓冲区，并等待进程结束，一次性返回缓冲区的内容 <br/>

                实录 <br/>
                console.log('进程'+process.argv[2]+'执行') <br/>
                 <br/>
                const fs = require('fs') <br/>
                const child_process = require('child_process')<br/>
                
                for(var i=0;i+'小于'+3;i++){<br/>
                    var workProcess = child_process.exec('node support.js'+i,function(error,stdout,stderr){<br/>
                        if(error){<br/>
                            console.log(error.stack);<br/>
                            console.log('Error code'+error.code)<br/>
                            console.log('Signal received'+error.signal)<br/>
                        }<br/>
                        console.log('stdout'+stdout)<br/>
                        console.log('stderr'+stderr)<br/>
                    });<br/>

                    workerProcess.on('exit',function(code){<br/>
                        console.log('子进程已退出'+code)<br/>
                    })<br/>
                }<br/>
                未完成



            
         <br/>
        </p>

        <h2 class="title">Node.js JXcore 打包</h2>
        <p class="note">
            Node.js是一个开源代码，夸平台的，用于服务器端和网络应用环境，<br/>
            JXcore 是一个支持多线程的Node.js发行版本，基于不需要对现有的代码做任何改动就可以直接线程安全地以多线程运行<br/>
            JXcore 打包功能<br/>
            JXcore 安装<br/>
            下载JXcore 安装包，并解压，在解压的目录下提供了jx二进制文件命令，主要命令<br/>
            下载<br/>
            linux、osx 安装命令<br/>
            $ curl https://raw.githubusercontent.com/jxcore/jxcore/master/tools/jx_install.sh | bash<br/>
            $ curl https://raw.githubusercontent.com/jxcore/jxcore/master/tools/jx_install.sh | sudo bashbash<br/>
            $jx --version   => v0.10.32
            <br/>
        </p>

          <h2 class="title">Node.js 链接 MySQL </h2>
        <p class="note">
                安装驱动<br/>
                npm install mysql<br/>

                链接数据库<br/>

                var mysql = require('mysql');<br/>

                var connection = mysql.createConnection({<br/>
                    host :'',<br/>
                    user :'',<br/>
                    password:'',<br/>
                    database:'',<br/>
                })<br/>

                connection.connect();<br/>

                connection.query('SELECT 1+1 AS solution',function(error,result,fields){<br/>
                    if(error) throw error;<br/>
                    cosnole.log('The solution is:',results[0].solution)<br/>
                })<br/>

                参数：<br/>
                host 主机地址 默认 localhost<br/>
                user 用户名<br/>
                password 密码<br/>
                port     端口号 默认 3306<br/>
                database 数据库名称<br/>
                localAddress 此IP 用户TCP 链接可选<br/>
                charset 链接字符集 默认 utf8_GENERAL_Cl   注意字符集的字符都要大写<br/>
                socktPath 链接到unix域路径，当前使用host 和 port 是会被忽略<br/>
                timezone 时区<br/>
                connetTimeout  链接超时  默认不限制，单位毫秒<br/>
                stringifyObjects 是否序列化对象<br/>
                typeCast 是否将列值转化为本地JavaScript 类型值 默认true<br/>
                queryFormat 自定义query语句格式化方法<br/>
                supportBigNumbers 数据库支持bigin 或decimal 类型列，需要设置option 为 true 默认false<br/>
                bigNumberStrings supprotBigNumbers和bigNumberStrings 启用强制 bigin 或 decima 列以<br/>
                JavaScript 字符串返回 默认 false<br/>
                dataStrings 强制timestamp，datetime，data 类型以字符串类型返回，而不是JavaScript Data 类型 默认false<br/>
                debug 开启调试 默认false<br/>
                multipleStatements 允许一个query 中有多个MySQL 默认false<br/>
                flags 用于修改链接标志<br/>
                ssl 使用ssl 参数（与crypto.createCredenitals 参数格式一至） 或者一个包含ssl 配置文件名称的字符串<br/>
                目前捆绑 Amazon RDS的配置文件<br/>

                数据库操作 CURD<br/>

                查询数据库<br/>

                var mysql = require('mysql');<br/>

                var connection = mysql.createConnetction({<br/>
                    host:'xxx',<br/>
                    uesr:'xxx',<br/>
                    password:'xxx',<br/>
                    port:'3306',<br/>
                    database:'test',<br/>
                }) ;<br/>
                connetction.connect();<br/>

                var sql = 'SELECT * FROM websites';<br/>
                
                connection.query(sql,function(err,result){<br/>
                    if(err){<br/>
                        cosnole.log('[SELECT ERROR]-',err.message)<br/>
                    }<br/>
                    cosnole.log('-------------SELECT--------------')<br/>
                    cosnole.log(result)<br/>
                     cosnole.log('\n\n')<br/>
                })<br/>
                connection.end()<br/>
<br/><br/><br/>

                当Node.js 执行I/O 操作时 从网络读取，访问数据库，文件系统，Node.js 会在响应返回时恢复操作，而不是阻塞<br/>
                线程并浪费CPU 循环等待
                <br/>
                const http = require('http')<br/>
                const hostname = '127.0.0.1'<br/>
                const port = 3000<br/>

                const server = http.createServe((req,res)={<br/>
                    res.statusCode =200<br/>
                    res.setHeader('Content-Type','text/plin')<br/>
                    res.end('hello world')<br/>

                })<br/>

                server.listen(prot,hostname,()=>{<br/>
                    cosnole.log(`服务器运行在 http:// ${hostname}:${port}/`)<br/>
                })<br/>

                <br/>
                http 的createServer() 方法会创建新的http服务并返回它<br/>
                服务器被设置为监听指定的端口和主机名，当服务器就绪后，回调函数会被调用，<br/>
                每当接收到新的请求时，request 时间被调用，并提供两个对象  一个请求 http.IncomingMessge 对象<br/>
                和一个响应 http.ServerResponse 对象<br/>
                http.IncomingMessage    http.ServerResponse<br/>
                http.IncomingMessage 提供了请求的详细信息，可以访问请求的头和 请求数据<br/>

                http.ServerResponse 用户返回数据调用方<br/>

                res.statusCode =200<br/>

                设置statusCode 属性为200 表明响应成功<br/>
                设置Content-Type 响应头：<br/>
                res.setHeader('Content-Type':'text/plain')<br/>
                关闭响应，添加内容作为end() 的参数：<br/>
                res.end('hello world')<br/>

                <br/>

                node.js 矿建和工具<br/>

                AdonisJs 全栈矿建<br/>
                Express web服务框架<br/>
                Fastify web 框架 node.js 最快的跨框架 <br/>
                Gatsby 基于React  静态网站生成器<br/>
                hapi <br/>
                koa<br/>
                Loopback.io <br/>
                Meteor 全栈框架<br/>
                micro<br/>
                NestJS 一个React 框架<br/>
                Nx <br/>
                Sapper<br/>
                Socket.io<br/>
                strapi<br/>
                如何从Node.js 程序中退出<br/>

                使用ctrl-c 将其关闭<br/>

                process 核心模块提供了一种便利的方法，可以一编程的方式退出Node.js 程序：process.exit()<br/>
                当Node.js 运行代码时，进程会被立即强制终止<br/>

                这意味着任何待处理的回调，仍在发送中的任何网络请求，任何文件系统访问，或者正在写入stdout 或者<br/>
                stderr 的进程，所有这些都会被立即非正常地终止<br/>
                prcess.exit(1)<br/>
                默认情况下 退出码为0<br/>


                也可以设置 process.exitCode 属性：<br/>
                process.exitCode  = 1<br/>

                当程序结束时，node.js 会返回退出码<br/>

                当进程完成所有处理后，程序会正常地退出<br/>
                使用Node.js 启动服务器，<br/>

                const express= require('express')<br/>
                const app = express()<br/>

                app.get('/',(req,res)=>{<br/>
                    res.end('hello')<br/>
                })<br/>
                app.lister(3000,()=>{ cosnole.log('服务器已就绪') })<br/>

                如果调用 process.exit(),则任何当前等待中或运行中的请求都会被终止，<br/>
                ps: process 不需要requrie 他是自动可用的<br/>

                cosnt express =  require('express')<br/>

                const app = express()<br/>

                app.get('/',(req,res)=>{<br/>
                    res.send('你好')<br/>
                })<br/>

                const server= app.listen(3000,()=>console.log('服务器已就绪'))<br/>

                process.on('SIGTERM',()=>{<br/>
                    server.close(()=>{<br/>
                        cosnole.log('进程已终止')<br/>
                    })<br/>
                })<br/>


                <br/>
                <br/>
                信号 是一个POSIX 内部通信系统：发送通知给进程，以告知发生的事情<br/>
                SIGKILL 告诉进程要立即终止的信号，理想情况下类似于process.exit()<br/>
                SIGTERM 告诉进程要正常终止的信号，他是从进程管路者 upstart  supervisord 等发生的信号<br/>

                可以从函数内部另一个函数中发送此信号：<br/>
                process.kill(process.pid,'SIGTERM')<br/>


                <br/>

                如何从Node.js读取环境变量<br/>
                Node.js的process 核心模块提供了env 属性，该属性承载了在启动进程时设置的所有环境变量。<br/>
                方法NODE.ENV 环境变量的实例，该环境变量默认情况下，被设置为development。<br/>
                ps: process  不需要require 他是自动可用的<br/>

                process.env.NODE_ENV //development<br/>
                在执行脚本之前，将其设置为production 则告诉Node.js 这是生产环境<br/>
                process.env<br/>

                node.js REPL<br/>

                node script.js<br/>
                如果省略文件名 正在RERL 模式中使用他：<br/>
                node：<br/>
                ps: REPL也被称为运行评估打印循环，是一种变成语法环境只要是控制台窗口，他使用单个表达式作为用户输入，<br/>
                并且执行将结果返回控制台<br/>
                node <br/>
                ><br/>
                cosnole.log('测试')<br/>
                测试<br/>
                undefined<br/>
                第一个值 测试 是控制台要打印输出，然后得到undefined，他是运行console.log()的返回值<br/>

                使用tab 键 自动补全<br/>
                REPL 他是交互式的<br/>

                <br/>

                探索JavaScript 对象<br/>

                尝试输入JavaScript 类的名称，例如Number  添加一个点并按下tab<br/>

                探索全局对象<br/>
                通过输入global 按下tab<br/>


                <br/>
                _特殊变量<br/>
                在某些代码之后输入_，则会打印最后一次操作的结果<br/>

                点命令<br/>
                .help : 显示点命令帮助<br/>
                .deitor : 启用编辑器模式，可以轻松地编写多行JavaScript代码，当处于此模式时，按下ctrl+D可以运行编写的代码<br/>
                .break：当输入多行的表达式时，输入.break 命令可以终止进一步的输入，<br/>
                .clear: 将REPL上下文重置为空对象，并清楚当前正在输入的任何多行表达式<br/>
                .load:加载JvaScript 文件 相当于当前工作目录<br/>
                .save：将在REPL 会话中输入的所有内容保存到文件 需要指定文件名<br/>
                .exit: 退出 REPL 相当于按下两次ctrl-C<br/>
                <br/>
                <br/>

                [1,2,3].forEach(num=>{})<br/>

                node.js 从命令行接受参数<br/>

                当用以下命令调用Node.js 应用程序时，可以传入任意数量的参数<br/>

                node app.js<br/>
                参数可以是独立的，也可以是具有键和值<br/>
                node app.js joe<br/>

                或者<br/>

                node app.js name==joe<br/>

                这会改变Node.js 代码中获取采参数值的方式<br/>

                获取参数值得方法 是使用Nodejs 中内置的process对象<br/>
                它公开了 argv 属性， 该属性是一个包含所有命令行调用参数的数组<br/>
                第一个参数是node 命令的完整路径<br/>
                第二个参数是正被执行的文件的完整路径<br/>
                所有其他的参数从第三个位置开始<br/>
                process.argv.forEach((val,index)=>{<br/>
                    cosnole.log(`${index}: ${val}`)<br/>
                })<br/>

                <br/>
                <br/>

                通过创建一个排除了前面两个参数的新数组来仅获取其他参数<br/>
                const args = process.argv.slice(2)<br/>

                node app.js joe<br/>

                const args = process.argv.slice(2)<br/>

                args[0]<br/>

                node app.js name=joe<br/>

                args[0] 是name=joe 需要对其进行分析，最好的方式是使用minimist 库<br/>

                const args = require('minimist')(process.argv.slice(2))<br/>
                args['name'] //joe<br/>
                需要在每个参数名称之前使用双破折号<br/>
                node app.js  --name=joe<br/>
                <br/><br/><br/>
                <br/>
                node.js 输出到命令行<br/>

                传入多个变量 console.log(x,y)<br/>

                %s 会格式化变量为字符创<br/>
                %d 会格式化变量为数字<br/>
                %i 会格式化变量为其整数部分<br/>
                %o 会格式化变量为对象<br/>

                清空控制台<br/>
                console.clear() 会清除控制台 其行为可能取决于所使用的控制台<br/>

                元素记数<br/>
                console.count() 是一个便利的方法<br/>
                const oranges=['橙子','橙子'];<br/>
                const apples=['苹果']<br/>

                oranges.forEach(fruit=>{<br/>
                    console.count(fruit)<br/>
                })<br/>
                apples.forEach(fruit=>{<br/>
                    conosle.count(fruit)<br/>
                })<br/>

                <br/>
                打印栈踪迹<br/>
                console.trace()<br/>
                const function2 = ()=> console.trace()<br/>

                <br/>
                计算耗时<br/>

                const doSomething=()=> console.log('测试')<br/>
                const measuerDoingSomething=()=>{<br/>
                    console.time('doSomething()')<br/>

                    doSomething()<br/>
                    console.timeEnd('doSomething()')<br/>
                }<br/>
                measuerDoingSomething()<br/>
                <br/>
                stdout he  stderr<br/>

                console.log 非常适合在控制台打印消息，这就是所谓的标准输出 成为 stdout<br/>

                console.error 会打印到stderr流<br/>

                <br/>

                为输出着色<br/>

                console.log('\x1b[33m%s\x1b[0m','你好')<br/>
                npm install chalk 进行安装<br/>

                const chalk = require('chalk')<br/>
                console.log(chalk.yellow('你好'))<br/>

                <br/><br/>
                创建进度条<br/>
                Progress 是一个nice 的软件包，可在控制台中创建进度条，使用 npm install progress 进行安装<br/>

                const ProgressBar = require('progress')<br/>

                const bar = new ProgressBar(':bar',{ total:0 })<br/>

                const timer = setInterval(()=>{<br/>
                    bar.trick()<br/>
                    if(bar.complete){<br/>
                        clearInterval(timer)<br/>
                    }
                },1000)<br/>

                <br/>
                <br/>
                在 Node.js 中从命令行接受输入<br/>

                Node.js提供了redline 模块执行操作，每次一样地崇可读流process.stdin流，在node.js 程序执行期间改流<br/>
                是终端输入获取输入<br/>
                const readline= require('readline').createInterface({<br/>
                    input:process.stdin,<br/>
                    output:process.stdout,<br/>
                })<br/>
                readline.questeion(`你的名字是`,name=>{<br/>
                    cosnole.log(`你好 ${name}`)<br/>
                    readline.close()<br/>
                })<br/>
                question() 方法 会显示第一个参数即问题，并等待用户的输入，按下回车键时，则会调用函数<br/>
                <br/>
                const inquirer= require('inquirer')<br/>
                var questions=[<br/>
                    {<br/>
                        type:'input',<br/>
                        name:'name',<br/>
                        message:'叫什么名字'<br/>
                    }<br/>
                ]<br/>
                inquirer.prompt(questions).then(answers=>{<br/>
                    cosnole.log(`asdxxx${answers['name']}`)<br/>
                })<br/>
                <br/>
                <br/>

                使用exprots从Node.js 文件中公开功能<br/>

                Node.js 具有内置的模块系统<br/>
                Node.js 问津可以导入其他的Node.js 文件公开的功能<br/>

                const library = require('./library')
                可以导入存在当前文件夹中library.js 文件中公开的功能<br/>
                在此文件中，必须先公开功能，然后其他文件才能将其导入<br/>
                默认情况下，文件中定义的任何其他对象或者变量都是私有的，不会公开给外界<br/>
                这就是 module 系统提供的 module.exports API 可以做的事<br/>

                当将对象或函数赋值为新的exprots属性时，这就是要被公开的内容，因此，可以将其导入应用程序其他部分或<br/>
                其他应用程序中<br/>

                module.exports 模块系统提供的对象<br/>

                const car={<br/>
                    brand:'Ford',<br/>
                    model:'Fiesta'<br/>
                }<br/>
                module.exprots=car<br/>
                const car =require('./car')<br/>

                <br/>
                将要导出的对象添加为exprots 的属性，可以导出多个对象<br/>

                const car={<br/>
                    brand:'Ford',<br/>
                    model:'Fiesta'<br/>
                }<br/>

                exprots.car=car<br/>

                exports.car={<br/>
                    brand:'ford',<br/>
                    model:'Fiesta'<br/>
                }<br/>

                const itmes =require('./items')<br/>
                items.car<br/>

                const car  = requrie('./items').car<br/>

                module.exports 和 export之间的区别<br/>
                module.exprots 公开了它指向的对象<br/>
                export 公开了它指向的对象属性<br/>
                <br/>

                pack.json<br/>
                {<br/>
                    name:应用程序或软件包的名称<br/>
                    version: 表明当前的版本<br/>
                    description：应用程序和软件包的简短描述<br/>
                    main：应用程序的入口点<br/>
                    private：设置为true 可以防止应用程序、软件包被意外地发布到npm<br/>
                    scripts：定义一组可以运行的node脚本<br/>
                    dependencies：设置作为依赖安装的npm 软件包列表<br/>
                    devDependencies：设置了作为开发依赖安装的npm 软件包的列表<br/>
                    engines：设置了软件包应用程序在那个版本的Node.js上运行<br/>
                    browsersList:用户告知要支持那些浏览器 及其版本<br/>
                }<br/>
                author <br/>
                contrubutors<br/>
                bugs 链接待软件包的问题跟踪器，最常用的是Github 的 issues页面<br/>
                homePage 设置软件包的主页<br/>
                version<br/>
                license 指定软件包的许可证<br/>
                keywords 关键字数组<br/>
                description 对软件包的简短描述<br/>
                respository 此程序包仓库所在位置<br/>
                main 设置软件包的入口点<br/>
                private 防止应用程序被意外发布到npm上<br/>
                scripts 可运行的node脚本<br/>
                dependencies  依赖安装的npm软件包的列表<br/>
                devDependencies 安装在开发机器上<br/>
                engines 软件包 运行的node.js 其他命令版本<br/>
                browserslist <br/>


                npm list<br/>

                npm list -g<br/>

                npm view xxx version<br/>
                x.y.z  数字<br/>
                第一个数字 主版本<br/>
                第二个数字 次版本<br/>
                第三个数字 不定版本<br/>

                <br/>
                npm uninstall xxx <br/>
                npm uninstall -D --save-dev<br/>

                Node.js 时间循环<br/>

                Node.js 如何做到异步具有非阻塞的I/O，所以他基本上阐明了Node.js 的杀手级应用<br/>
                Node.js JavaScript 代码运行在单线程上，每次只能处理一件事<br/>
                调用堆栈<br/>

                LIFO 后进先出<br/>

                <br/>
                <br/><br/>

                <br/>

                Node.js 事件触发器<br/>
                
                const EventEmitter require('events')<br/>
                const eventEmitter = EventEmitter()<br/>

                eventEmitter.on('start',()=>{<br/>
                    console.log('开始')<br/>
                })<br/>

                eventEmitter.emit('start')<br/>

                //接受参数<br/>

                eventEmitter.on('start',number=>{<br/>
                    cosnole.log('开始',Number)<br/>
                })<br/>
                eventEmitter.emit('start',23)<br/>

                //接受多个参数<br/>

                eventEmitter.on('start',(start,end)=>{<br/>
                    cosnole.log(`从 ${start} 到 ${end}`)<br/>
                })<br/>
                eventEmitter.emit('start',1,100)<br/>

                EventEmitter 对象 其他几个事件进行交互的方法<br/>
                once() : 添加单次监听器<br/>
                remvoeListener()/off():从事件中移除事件监听<br/>
                removeAllListeners() 移除事件的所有监听器<br/>


                <br/>

                const http= require('http');<br/>

                const port =3000<br/>

                const server = http.createServer((req,res)=>{<br/>
                    res.statusCode = 200<br/>
                    res.setHeader('Content-Type','text/plain')<br/>
                    res.end('hello')<br/>
                })<br/>
                server.listern(prot,()=>{<br/>
                    console.log(`服务器运行在 http:// ${hostname}:${port}`)<br/>
                })<br/>

                <br/>



                 http  request  提供两个参数对象 IncomingMessage request  和 ServerResponse response<br/>




                 const https = require('https')<br/>
                 const options={<br/>
                     hostname:'nodejs.cn',<br/>
                     prot:443,<br/>
                     path:'/todos',<br/>
                     methods:'GET'<br/>
                 }<br/>
                 const req = https.request(options,res=>{<br/>
                     console.log('状态码：${res.statuCode}')<br/>

                     res.on('data',d=>{<br/>
                         process.stdout.write(d)<br/>
                     })<br/>
                 })<br/>

                 req.on('error',error=>{<br/>
                     cosnole.log(error)<br/>
                 })<br/>

                 req.end()<br/>

                 const https = require('https')<br/>
                 const data = JSON.stringify({<br/>
                     todo:'做点事情'<br/>
                 })<br/>
                 const options={<br/>
                     hostname:'nodejs.cn',<br/>
                     prot:443,<br/>
                     method:'POST',<br/>
                     headers:{<br/>
                         'Content-Type':'application/json',<br/>
                         'Content-Length':data.length<br/>
                     }<br/>
                 }<br/>

                 const req = https.request(options,res=>{<br/>
                     console.log('状态码',res.statusCode)<br/>

                     res.on('data',d=>{<br/>
                         procecss.stdout.write(d)<br/>
                     })<br/>
                 })<br/>
                 req.on('error',error=>{<br/>
                     console.log(error)<br/>
                 })<br/>

                 req.write(data)<br/>
                 req.end()<br/>
                 <br/><br/>
                 <br/>
                 <br/>
                 使用Node.js 发送HTTP POST请求<br/>

                 在Node.js中，有多种方式可以执行HTTP POST 请求<br/>
                 使用Node.js 执行HTTP 请求的嘴贱当的方式 Axios<br/>

                 const axios = require('axios')
                 axios<br/>
                 .post('http://nodejs.cn/todos',{<br/>
                     todo:'做点事情'<br/>
                 })<br/>
                 .then(res=>{<br/>
                     console.log(`状态码：${ res.statusCode }`)<br/>
                 })<br/>
                 .catch(error=>{<br/>
                     onsole.log(error)<br/>
                 })<br/>
                 <br/>
                 <br/>

                 const https = require('https')<br/>

                 const data = JSON.stringify({<br/>
                     todo:'做点事情<br/>'
                 })<br/>
                 const options={
                     hostname:'nodejs.cn',<br/>
                     prot:443,<br/>
                     path:'/todos',<br/>
                     methods:'POST',<br/>
                     headers:{<br/>
                         'Content-Type':'application/json',<br/>
                         'Content-Length':data.length<br/>
                     }<br/>
                 }<br/>

                 const req = https.requset(options,res=>{<br/>
                     console.log(`状态码:${res.statusCode}`)<br/>

                     res.on('data',d=>{<br/>
                         process.stdout.write(d)<br/>
                     })<br/>
                 })<br/>

                 req.on('error',error=>{<br/>
                     console.log(error)<br/>
                 })<br/>

                 req.write(data)<br/>
                 req.end()<br/>

                 <br/>
                 <br/>
                 <br/>
                 使用Node.js 获取http请求的正文数据<br/>

                 const axios= require('axios')<br/>

                 axios.post('http://nodejs.cn/todos',{<br/>
                     todo:'做点事情'<br/>
                 })<br/>

                 const express = require('express')<br/>

                 const app = express()<br/>

                 app.use(<br/>
                     express.urlencoded({<br/>
                         extended:true<br/>
                     })<br/>
                 )<br/>

                 app.use(express.json())<br/>

                 app.post('/todos',(req,res)=>{<br/>
                     console.log(req.body.todo)<br/>
                 })<br/>

                 <br/>
                 <br/>
                 const server = https.createServer((req,res)=>{<br/>
                     req.on('data',chunk=>{<br/>
                         console.log(`可用的数据块 ${chunk}`)<br/>
                     })<br/>
                     req.on('end',()=>{<br/>
                         //数据结束<br/>
                     })<br/>
                 })<br/>

                 const server = http.createServer((req,res)=>{<br/>
                     let data='';<br/>
                     req.on('data',chunk=>{<br/>
                         data+=chunk<br/>
                     })<br/>
                     req.on('end',()=>{<br/>
                         JSON.parse(data).todo //做点事情<br/>
                     })<br/>
                 })<br/>
                 <br/>
                 <br/>
                 <br/>
                 在node.js 中使用了文件描述符<br/>

                 文件描述符是使用fs 模块提供了 open() 方法打开文件后返回<br/>

                 cosnt fs = require('fs')<br/>

                 fs.open('/User/joe/test.txt','r',(err,fd)=>{<br/>
                     //fd 是文件描述符<br/>
                 })<br/>
                 <br/>
                 ps: 将r 作为fs.open() 调用的第二个参数<br/>
                 r+ 打开文件用于读写<br/>
                 w+ 打开文件用于读写，将流定位到文件的开头，如果文件不存在则创建文件<br/>
                 a  打开文件用于写入，将流定位到文件的尾部，如果文件不存在则创建<br/>
                 a+ 打开文件用于读写，将流定位到文件的尾部，如果文件不存在则创建<br/>

                 使用fs.openSync 方法打开文件，该方法会返回文件描述符 而不是在回调函数中提供：<br/>

                 const fs = require('fs')<br/>

                 try{<br/>
                     const fd = fs.openSync('/Users/joe/test.txt','r')<br/>
                 } catch(err){<br/>
                     console.log(err)<br/>
                 }<br/>


                 <br/>
                 <br/>
                 <br/>
                 Node.js 文件属性<br/>
                 每个文件都带有一组详细信息，，使用nodejs 进行检查<br/>

                 使用fs 模块提供的stat() 方法

                 调用时传入文件系统，一点Node.js获得文件的详情信息，则会调用传入回调函数，并带上两个参数：<br/>
                 错误消息和 文件属性<br/>

                 const fs = require('fs')<br/>
                 fs.stat('/User/joe/test.txt',(err,stats)=>{
                     if(err){<br/>
                         console.error(err)<br/>
                     }<br/>
                 })<br/>

                 使用 stats.isFile()   stats.isDirectory() 判断文件是否目录 或文件<br/>
                 使用 stats.isSymbolocLink() 判断文件是否符合链接<br/>
                 使用 stats.size 获取文件的大小 字节为单位<br/>
                 
                 const fs = require('fs')<br/>
                 fs.stat('/Users/joe/test.txt',(err,stats)=>{<br/>
                     if(err){<br/>
                         console.log(err)<br/>
                         return<br/>
                     }<br/>
                     stats.isFile()<br/>
                     stats.isDirectory()<br/>
                     stats.isSymbolicLink() <br/>
                     stats.size<br/>
                 })<br/>

                 使用node.js 获取HTTP 请求的正文数据<br/>

                 请求正文中提取以JSON 个是发送的数据方式<br/>
                 如果使用express   使用body-parser  node 模块<br/>

                 const axios = require('axios');<br/>
                 axios.post('http://node.js.cn/todos',{<br/>
                     todo:'做点事情'<br/>
                 })<br/>


                 const express  = require('express')<br/>

                 const app = express()<br/>

                 app.use(<br/>
                     express.urlencoded({<br/>
                         extended:true<br/>
                     })<br/>
                 )<br/>

                 app.use(express.json())<br/>

                 app.post('/todos',(req,res)=>{<br/>
                     console.log(req.body.todo)<br/>
                 })<br/>

                当使用 http.createServer() 初始化HTTP 服务器时，服务器会在获取所有HTTP请求头，而不是请求正文时，<br/>

                在连接回调中传入的request 对象向一个流<br/>

                通过监听data 事件来获取数据，然后在数据结束时调用一次流的end 事件<br/>

                const server= http.createServer((req,res)=>{<br/>
                    req.on('data',chunk=>{<br/>
                        console.log(`可用的数据块：${chunk}`)<br/>
                    })<br/>

                    req.on('end',()=>{<br/>
                        //数据结束<br/>
                    })<br/>
                })<br/>


                访问数据期望接收到字符串，必须将其放入数组中<br/>
                const server= http.creteServer((req,res)=>{<br/>
                    let data='';<br/>
                    req.on('data',chunk =>{<br/>
                        data+=chunk;<br/>
                    })
                    req.on('end',()=>{<br/>
                        JSON.parse(data).todo<br/>
                    })<br/>
                })<br/>
                <br/>
                <br/>
                <br/>
                
                const  path = require('path')

                从 路径中获取信息<br/>

                dirname  ：获取文件的父文件<br/>
                basename： 获取文件名部分<br/>
                extname： 获取文件的扩展名<br/>


                npm install path
                const path = require('path')
                const note  = '/users/joe/notes.txt'<br/>


                path.dirname(note) 父文件路径<br/>
                path.basename(note) 文件名部分<br/>
                path.extname(note) 文件拓展名<br/>


                通过basename 指定第二个参数来获取不带扩展名的文件名：<br/>
                path.basename(notes,path.extname(notes))<br/>


                使用路径<br/>

                使用path.join() 链接路径的2个或多个片段<br/>

                const name= 'joe'<br/>

                path.join('/','users',name,'notes.txt')<br/>

                path.resolve('joe.txt') 获得相对路径的绝对路径计算<br/>


                path.resolve('tmp','joe.txt')<br/>

                path.reolve('/etc','joe.txt') 第一个参数以斜杠开头表示绝对路径 <br/>

                path.normalize('/users/joe/..//test.txt') <br/>


                <br/> 


                使用 node.js 读取文件<br/>
                读取文件方式使用 fs.readFile() ,向其传入文件路径编码以及会带上文件数据以及错误 进行调用的回调函数<br/>

                const fs = require('fs')<br/>

                fs.readFile('/User/joe/test.txt','utf-8',(err,data)=>{<br/>
                    if(err){<br/>
                        console.log(err)<br/>
                        return <br/>
                    }<br/>
                    cosnole.log("data",data)<br/>
                })<br/>


                fs.readFile()  和fs.readFileSync() 都会返回数据之前将文件的全部内容 读取到内存中，<br/>
                这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响<br/>

                <br/><br/>

                使用Node.js 写入文件<br/>

                使用fs.writeFile() API<br/>

                const fs = require('fs')

                const content  = '一些内容'<br/>
<br/>
                fs.writeFile('/User/joe/test.txt',content,err=>{<br/>
                    if(err){<br/>
                        console.log(err)<br/>
                        return<br/>
                    }<br/>
                    //文件写入成功<br/>
                })<br/>
                <br/>

                const fs = require('fs')<br/>

                const content='一些内容'<br/>

                try {<br/>
                    const data = fs.writeFileSync('/User/joe/test.txt',content)<br/>
                }catch(err){<br/>
                    console.log("err",err)<br/>
                }<br/>

                <br/>

                默认情况下 API 会替换文件的内容 如果文件已经存在<br/>

                可以通过指定标志来修改默认行为：<br/>

                fs.writeFile('/Users/joe/test.txt',content,{ flag:'a+',err=>{ } })<br/>

                r+ 打开文件用于读写<br/>
                w+ 打开文件用于读写，将流定位待文件的开头，如果文件不存在则创建文件<br/>
                a  打开文件应与写入，将流丁文待文件的末尾，如果文件不存在则创建文件<br/>
                a+ 打开文件用户读写，将流定位到文件的末尾，如果文件不存在则创建文件<br/>

                追加文件<br/>
                将内容追加到文件末尾的便捷方法是 fs.appendFile()  以及对应的fs.appendFileSync()

                const content='一些内容'<br/>

                fs.appendFile('file.log',content,err=>{<br/>
                    if(err){<br/>
                        console.log(err)<br/>
                        return<br/>
                    }<br/>
                })<br/>
                <br/>
                <br/>

                node.js中使用文件夹<br/>
                检查文件夹是否存在<br/>
                fs.access() 检查文件夹是否存在以及Node.js 是否具有访问权限<br/>

                创建新的文件夹<br/>
                使用 fs.mkdir()  或者 fs.mkdirSync() 可以创建新的文件夹<br/>

                const fs= require('fs')<br/>

                const folderName = '/User/joe/test'<br/>
                
                try{<br/>
                    if(!fs.existsSync(folderName)){<br/>
                        fs.mkdirSync(folderName)<br/>
                    }<br/>
                }catch(err){<br/>
                    console.error(err)<br/>
                }<br/>

                <br/>

                读取目录的内容<br/>
                使用 fs.readdir() 和 fs.readdirSync() 可以读取目录的内容<br/>
                读取全部的文化部和子文件夹，并返回他们的相对路径<br/>

                const fs = require('fs')<br/>

                const path = requrie('path')<br/>

                const folderPath = '/Users/joe'<br/>

                fs.readdirSync(folderPath)<br/>


                可以获取完整的路径<br/>

                fs.readdirSync(folerPath).map(fileName=>{<br/>
                    return path.join(folderPath,fileName)<br/>
                })<br/>


                const isFile = fileName=>{<br/>
                    return fs.lstatSync(fileName).isFile()<br/>
                }<br/>
                fs.readdirSync(folderPath).map(fileName=>{<br/>
                    return path.join(folderPath,fileName)<br/>
                }).filter(isFile)<br/>

                <br/>
                <br/>

                重命名文件夹<br/>

                fs.rename()<br/>
                fs.renameSync()<br/>
                第一个参数当前路径，第二个参数是新的路径<br/>

                const fs =  require('fs') 

                fs.rename('/User/joe','/Users/roger',err=>{<br/>
                    if(err){<br/>
                        console.log(err)<br/>
                        return<br/>
                    }<br/>
                }) <br/>

                fs.renameSync() 同步的版本<br/>

                const  fs = require('fs')<br/>

                try{<br/>
                    fs.renameSync('/Users/joe','/Users/roger')<br/>
                } catch(err){<br/>
                    conosle.log(err)<br/>
                }<br/>

                <br/>

                删除文件夹<br/>

                fs.rmdir()<br/>
                fs.redirSync()<br/>

                安装fs-extra 模块  他是fs 模块的直接替代品<br/>

                npm install fs-extra<br/>

                const fs = require('fs-extra')<br/>

                const folder = '/User/joe'<br/>
                
                fs.remove(folder,err=>{<br/>
                    conosle.error(err)<br/>
                })<br/>

                与promise 一起使用<br/>

                fs.remove(folder)<br/>
                .then(()=>{<br/>
                    //完成<br/>
                })<br/>
                .catch(err=>{<br/>
                    console.log(err)<br/>
                })<br/>

                async function removeFolder(folder){<br/>
                    try{<br/>
                        await fs.remove(folder)<br/>
                    } catch(err){<br/>
                        conosle.error(err)<br/>
                    }<br/>
                }<br/>

                const folder = '/Users/joe'<br/>
                remoceFolder(folder)<br/>


                <br/>


                Node.js 文件系统模块<br/>

                const fs = require('fs')

                fs.access() 检查文件是否存在，以及Node.js 是否有访问权限<br/>
                fs.appendFile(): 追加数据文件，如果文件不存在，则创建文件<br/>
                fs.chmod():更改文件 通过传入的文件名指定的权限，先关方法 fs.lchmode()<br/>
                fs.fchmod()<br/>
                fs.chown(): 更改文件 通过出阿奴的文件指定 所有者和群组 fs.fchown() , fs.lchown()<br/>
                fs.close(): 关不文件描述符<br/>
                fs.copyFile() :拷贝文件<br/>
                fs.createReadStream():创建可读的文件流<br/>
                fs.createWriteStream():创建可写的文件流<br/>
                fs.link(): 新建指向文件的硬链接<br/>
                fs.mkdir()：新建文件夹<br/>
                fs.mkdtemp():创建临时目录<br/>
                fs.open():设置文件模式<br/>
                fs.readdir() 读取目录的内容<br/>
                fs.readFile() 读取文件的内容 fs.read()<br/>
                fs.readlink() 读取符号链接的值<br/>
                fs.readpath() 将相对的文件路径指针 解析为完成路径<br/>
                fs.rename 重命名文件或文件夹<br/>
                fs.rmdir  删除文件夹<br/>
                fs.stat() 返回文件，通过传入的文件名指定的状态 fs.fstat(),fs.lstat()<br/>
                fs.symlink() 新建文件的符号链接<br/>
                fs.truncate(): 将传递的文件名标识的文件截断为指定的长度 <br/>
                fs.unlink():删除文件或符号链接<br/>
                fs.unwatchFile(): 停止监视文件上的更改<br/>
                fs.utimes() :更改文件的时间戳，fa.futimes()<br/>
                fs.watchFile() 开始监视文件上的更改 fs.watch()<br/>
                fs.writeFile() 将数据文件吸入文件  fs.write()<br/>
                <br/>
                <br/>
                <br/>

                path.basename()<br/>
                path.dirname()<br/>
                path.extname()<br/>
                path.isAbsolute()<br/>
                path.join()<br/>
                path.normalize()<br/>
                path.parse()<br/>
                path.relative()<br/>
                path.resolve()<br/>

                const path = requrie('path')<br/>

                path.basename()  返回路径的最后一部分，第二个参数可以过滤掉文件的扩展名：<br/>

                path.basename('/test/something')<br/>
                path.basename('/test/somethidng.txt','txt')<br/>

                <br/>

                path.dirname()  返回目录部分<br/>

                path.dirname('/test/somthing')<br/>

                path.extname() 返回路径的扩展名<br/>

                path.isAbsolute() 如果是绝对路径则返回true<br/>

                path.join() 链接路径的连个或读个部分<br/>

                path.normalize() <br/>

                path.parse() <br/>
                root 跟路径<br/>
                dir 从根路径开始的文件夹路径<br/>
                base 文件+ 扩展名<br/>
                name 文件名<br/>
                ext 文件扩展名<br/>

                path('path').parse('/users/test.txt')<br/>
<br/>
                {<br/>
                    root:'/',<br/>
                    dir:'/users',<br/>
                    base:'test.txt',<br/>
                    name:'test'<br/>
                }<br/>
                <br/>
                <br/>
                <br/>



                path.relative()<br/>

                path.relative('/User/joe','/Users/joe/test.txt')<br/>

                path.resolve('tmp','joe.txt')<br/>

                path.resolve('/etc','joe.txt')<br/>


                Node.js 操作系统模块<br/>

                os.arch()<br/>
                os.cpus()<br/>
                os.endianness()<br/>
                os.freemem()<br/>
                os.homedir()<br/>
                os.loadavg()<br/>
                os.networkInterfaces()<br/>
                os.platform()<br/>
                os.tepdir()<br/>
                os.totalmem()<br/>
                os.type()<br/>
                os.uptime()<br/>
                os.userInfo()<br/>

                const os  =require('os')<br/>

                os.EOL  给出定界符序列
                os.arch()  返回标识底层架构的字符创 如 arm x64  arm64<br/>
                os.cpus() 返回系统上可用的CPU 的信息<br/>
                os.enduanness() 根据使用大端序和小端序 编译Node.js 返回BE 和LE<br/>

                os.freemem() 返回代表系统中可用的内存的字节数<br/>

                os.homedir() 返回当前用户的主目录的路径<br/>

                os.hostname() 返回主机名<br/>

                os.loadavg() 返回操作系统对平均负载的计算<br/>

                os.netwirkInterfaces() 返回系统上可用的网路接口的详情信息<br/>


                os.plateform() 返回Node.js 编译平台darwin dreebsd linux openbase  win32   <br/>

                os.release() 放回标识操作系统版本的字符串<br/>

                os.tempdir  返回指定的临时文件夹的路径<br/>
                
                os.totalmem()  返回便是系统中可用的总内存的字节数<br/>

                os.type() 标识操作系统 linux macOS 上为 Darwin  Windows为 Windows_NT  <br/>

                os.uptime() 返回自上次重新启动以来计算机持续运行的秒数<br/>

                os.userInfo() 返回包含当前username  uid gid  shell hHe homedir 的对象<br/>


                node.js 事件模块<br/>

                emitter.addListener()<br/>
                emitter.emit()<br/>
                emitter.eventNames()<br/>
                emitter.getMaxListeners()<br/>
                emitter.listenerCount()<br/>
                emitter.listeners()<br/>
                emitter.listeners()<br/>
                emitter.off()<br/>
                emitter.on()<br/>
                emitter.once()<br/>
                emitter.prependListener()<br/>
                emitter.prependOnceListener()<br/>
                emitter.removeAllListeners()<br/>
                emitter.removeListeners()<br/>
                emitter.setMaxListeners()<br/>







                


















                




                 







                


























                



                


            <br/>
        </p>


    </div>
</template>
<script>
export default {
    name:'nodeIntro',
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
</style>