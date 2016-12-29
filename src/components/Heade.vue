<template>
    <div class="head">
        <div class="back">
            <router-link :to="{ path: '/list'}">
               <i class="el-icon-arrow-left"></i>
            </router-link>
        </div>
        <div class="site_name">Whatwg</div>
        <div class="av_img">
            <img :src="img">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            img: document.cookie.split(";")[4].split("=")[1]
        }
    },
    created(){
        if(!this.img) {
            this.img ="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/HUGE2016DEC.jpg/440px-HUGE2016DEC.jpg"
        }
    }
}
</script>
<style lang="sass" scoped>
.head {
    text-align: center;
    font-size: 12px;
    height: 80px;
    color: #000;
    background: #fff;
    padding: 0 200px;
    margin-bottom: 20px;
}
.back {
    cursor: pointer;
    width: 40px;
    font-size: 22px;
    line-height: 80px;
    vertical-align: middle;
    float: left;
}
.site_name {
    vertical-align: middle;
    display: inline-block;
    line-height: 80px;
    font-size: 28px;
}
.av_img {
    float: right;
    vertical-align: middle;
    width: 60px;
    height: 80px;
    padding-top: 10px;
}
img {
    width:100%;
    height: 60px;
    border-radius: 50%;
}
</style>