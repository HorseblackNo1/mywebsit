<template>
    <div>
        <h2 class="title">apache sites-enable</h2>
        <p class="note">
           apace2的配置文件通常位于/etc/apaches下面。
           Linux下 Apache的配置文件是 /etc/apache2/apache2.conf，Apache在启动时会自动读取这个文件的配置信息。而其他的一些配置文件，如 httpd.conf等，则是通过Include指令包含进来。
在apache2.conf里有sites-enabled目录，而在 /etc/apache2下还有一个sites-available目录，其实，这里面才是真正的配置文件，而sites- enabled目录存放的只是一些指向这里的文件的符号软链接，可以通过ls -al /etc/apache2/sites-enabled/来查看。
所以，如果apache上配置了多个虚拟主机，每个虚拟主机的配置文件都放在 sites-available下，那么对于虚拟主机的停用、启用就非常方便了：当在sites-enabled下建立一个指向某个虚拟主机配置文件的软链接时，就启用了它；如果要关闭某个虚拟主机的话，只需删除相应的链接即可，无需去改配置文件，还是很方便的。 
        </p>
    </div>
</template>
<script>
export default {
    name:'sites_enable',
    data(){
        return{
            msg:"sites-enable"
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