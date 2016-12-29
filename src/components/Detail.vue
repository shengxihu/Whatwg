<template>
    <div class="detail">
        <h1>{{ info.title }}</h1>
        <div class="msg">
            <img class="av_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/HUGE2016DEC.jpg/440px-HUGE2016DEC.jpg">
            <div class="name">no1024</div>
            <div class="time">12.11</div>
            <p>{{ info.content }}</p>
            <div class="more_info">
                <div class="click item"><i class="el-icon-star-on"></i>点赞 {{ info.click }}</div>
                <div class="reply item"><i class="el-icon-edit">评论 {{ info.reply }}</div>
            </div>
            <div class="comment_box">
                <h3 class="c_title">评论</h3>
                <div class="a_c">
                    <el-input class="a_input" v-model="c_cont" placeholder="请输入内容"></el-input>
                    <el-button class="c_bt" :plain="true" type="danger">取消</el-button>
                    <el-button @click="newComment(info.pid)" class="c_bt" :plain="true" type="success">提交</el-button>
                </div>
                <div v-for="item in replys" class="c_item">
                    <img class="av_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/HUGE2016DEC.jpg/440px-HUGE2016DEC.jpg">
                    <div class="name">{{ item.time }}</div>
                    <!--<div class="time">12.11</div>-->
                    <div class="c_cont">{{ item.content }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data(){
        return {
            info: '',
            replys: '',
            c_cont: '',
        }
    },
    computed: {
        ...mapState([
            'usr_data',
            'list'
        ])
    },
    created(){
        this.changePageFlagY(['is_index'])
        this.fetchList()
    },
    methods: {
		...mapActions([
			'changePageFlagN',
            'changePageFlagY'
		]),
        newComment(id){
            console.log(id)
            var self = this
            var bd_data = {
                content: self.c_cont
            }
            var token
            if(this.usr_data.token) {
                token = this.usr_data.token
            } else {
                token=document.cookie.split(";")[0].split("=")[1]; 
            }
            console.log(this.usr_data.token)
            var url = 'api/posts/' + id + '/reply'
            this.$http.post(url, bd_data, {
                headers: {
                    Authorization: token
                }
            }).then(function(response){
                console.log("scee")
                self.fetchList()
            },
            function(response){
                console.log("fii")
            });
        },
        fetchList(){
            var self = this
            console.log(self.$route.params.id)
            var url = '/api/posts/' + self.$route.params.id
            this.$http.get(url).then(function(response){
                self.info = response.data.data.topic
                self.replys = response.data.data.replys 
                console.log(response.data.data)
            },
            function(response){
                console.log("fii")
            });
        },
	},
    beforeRouteLeave(to, from, next) {
        this.changePageFlagN(['is_index'])
        next()
    },
}
</script>
<style scoped>
.item {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid rgb(219,219,219);
}
.a_c {
    padding: 10px 0;
}
.c_item {
    margin: 10px 0;
}
.a_input {
    margin-bottom: 20px;
}
.c_bt {
    float: right;
    margin-right: 30px !important;
}
.c_cont {
    padding: 10px 0 10px 40px;
    line-height: 24px;
    font-size: 16px;
}
.click {
    margin-right: 30px;
}
.comment_box {
    margin-top: 50px;
}
.c_title {
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(219,219,219);
}
.detail {
    color: #000;
    font-size: 12px;
    min-height: 100vh;
    background: #fff;
    margin: 0 auto;
    padding: 10px 25px;
    width: 70%;
    position: relative;
}   
.more_info {
    padding-top: 40px;
}
.av_img {
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.name,.time {
    padding-left: 10px;
    display: inline-block;
    vertical-align: middle;
    color: grey;
}
p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
}
</style>