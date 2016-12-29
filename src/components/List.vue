<template>
    <div class="list">
        <div class="left">
            <div class="list_bg">
                <img src="https://drscdn.500px.org/photo/151463743/m%3D2048/9ef1dec3b44bde1207d7d88fbab2d9c1">
            </div>
            <div class="avator">
                <img :src="img">
            </div>
            <div class="list_msg">
                <h2>{{ usr_name }}</h2>
                <h3>分享  让知识更有价值</h3>
            </div>
            <div class="home_logo">
                <img src="../assets/home.png">
                <div class="list_nav">
                    <a @click="newInput">新建帖子</a>
                    <router-link :to="{ path: '/auth'}">
                        <a>更改个人信息</a>
                    </router-link>
                    <router-link :to="{ path: '/'}">
                        <a>登出</a>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="right">
            <div v-if="flag" class="input_box">
                <el-input v-model="input_title" placeholder="请输入标题"></el-input>
                <el-input class="box"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="input_cont">
                </el-input>
                <el-button @click="fetchInput" type="primary">立即创建</el-button>
                <el-button  @click="newInput">取消</el-button>
            </div>
            <div v-for="item in list" v-if="item.title" class="list_item">
                <div class="list_head">
                    <img :src="img">
                    <div class="msg_box">
                        <h3>{{ item.title }}</h3>
                        <span>{{ item.time }}</span>
                    </div>
                </div>
                <div class="list_cont">
                    <router-link :to="{ name: 'detail', params: { id: item.pid }}">
                        <p>
                            {{ item.content }}
                        </p>
                    </router-link>
                    <div class="action_cont">
                        <router-link :to="{ name: 'detail', params: { id: item.pid }}">
                            <div class="item comment">
                                <div class="logo">
                                </div>
                                <div class="count">{{ item.reply }}</div>
                            </div>
                            <div class="item like">
                                <div class="logo">
                                </div>
                                <div class="count">{{ item.click }}</div>
                            </div>
                        </router-link>
                        <div @click="deleteIn(item.pid)" class="item det">
                            <i class="el-icon-delete"></i>
                        </div>
                        <div v-if="c_flag" class="comment_cont">
                            <textarea class="comment_box"></textarea>
                            <el-button class="c_bt" :plain="true" type="danger">取消</el-button>
                            <el-button @click="newComment(item.pid)" class="c_bt" :plain="true" type="success">提交</el-button>
                        </div>
                    </div>
                </div>
            </div>
        <div>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Comment from './Comment.vue'
export default {
    components: {
        Comment
    },
    data(){
        return {
            usr_name: '',
            flag: false,
            input_title:'',
            input_cont:'',
            c_flag: false,
            img: document.cookie.split(";")[0].split("=")[1],
        }
    },
    computed: {
        ...mapState([
            'usr_data',
            'list'
        ])
    },
    created(){
        console.log(document.cookie.split(";"))
        if(!this.img) {
            this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/HUGE2016DEC.jpg/440px-HUGE2016DEC.jpg'
        }
        this.usr_name = this.usr_data.mail
        console.log(this.list)
        this.fetchList()
    },
    methods: {
        ...mapActions([
            'initData',
            'initList'
        ]),
        newInput(){
            this.flag = !this.flag
            this.input_title=''
            this.input_cont=''
        },
        newComment(id){
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
        deleteIn(id){
            console.log(id)
            var self = this
            console.log(this.usr_data.token)
            var self = this
            var url = '/api/posts/' + id
            this.$http.delete(url, {
                headers: {
                    Authorization: self.usr_data.token
                }
            }).then(function(response){
                console.log(response)
                self.fetchList()
            },
            function(response){
                console.log("fii")
            });
        },
        fetchInput(){
            var self = this
            var token
            if(this.usr_data.token) {
                token = this.usr_data.token
            } else {
                token = document.cookie.split(";")[0].split("=")[1]
            }
            var bd_data = {
                title: this.input_title,
                content: this.input_cont
            }
            var self = this
            this.$http.post('api/posts', bd_data,  {
                headers: {
                    Authorization: self.usr_data.token
                }
            }).then(function(response){
                console.log("scee")
                self.fetchList()
                self.newInput()
            },
            function(response){
                console.log("fii")
            });
        },
        fetchList(){
            var self = this
            this.$http.get('api/posts').then(function(response){
                self.initList(response.data.data)
                console.log(response.data.data)
            },
            function(response){
                console.log("fii")
            });
        },
    },
}
</script>
<style lang="sass" scoped>
.count {
    vertical-align: middle;
    display: inline-block;
}
.det:hover {
    color: slategrey;
}
.comment_box {
    margin-bottom: 20px;
    outline: none;
    height: 60px;
    border-radius: 3px;
    border-color: rgba(0,0,0,.3);
    margin-top: 20px;
    width: 50%;
    display: block;
}
.comment_cont {
    width: 100%;
}
.action_cont {
        padding: 20px 0;
}
.comment {
    .logo {
        background: url('../assets/comment.png') 100% 100%/cover;
        width: 30px;
        height: 30px;
    }
}
.like {
    border-right: 0 !important;
    .logo {
        background: url('../assets/like.png') 100% 100%/ 100% 98% no-repeat;
        width: 30px;
        height: 26px;
    }
}
.logo {
    cursor: pointer;
    vertical-align: middle;
    display: inline-block;
    height: 30px;
    width: 30px;
    background: blue;
}
.item {
    cursor: pointer;
    text-align: center;
    width: 160px;
    display: inline-block;
    border-right: 1px solid rgba(0,0,0,.1);
    height: 30px;
}
.count {
    padding-top: 4px;
    padding-left: 10px;
    color: rgba(0,0,0,.5);
}
.det {
    vertical-align: middle;
    color: rgba(0,0,0,.2);
    font-size: 30px;
    border: 0;
    border-left: 1px solid rgba(0,0,0,.1);
}
.input_box {
    background: #fff;
    padding: 20px;
    width: 100%;
    display: inline-block;
    margin-bottom: 10px;
}
.box {
    margin: 20px auto;
    min-height: 100%;
}
.list {
    min-height: 100%;
    width: 100%;
}
.list_cont {
    padding: 0 50px 0 70px;
    p {
        font-size: 15px;
        line-height: 20px;
        color: #000;
    }
    img {
        width: 300px;
        height: 150px;
    }
    
}
.msg_box {
    vertical-align: top;
     padding-left: 20px;
    display: inline-block;
}
.list_head {
    padding: 10px;
    color: #000;
    text-align: left;
    img {
        width:60px;
        height: 60px;
       border-radius: 50%;
    }
    h3 {
        vertical-align: top;
    }
    span {
        font-size: 12px;
        display: block;
    }
}
.list_item {
    background: #fff;
    overflow: hidden;
}
.list_msg {
    color: #000;
    font-weight: bold;
}
.left {
    float: left;
    text-align: center;
    position: fixed;
    width: 288px;
    min-height: 100vh;
    margin-right: 10px;
    background: #fff;
}
.right {
    padding: 15px;
    background: rgba(0,0,0,.1);
    font-size: 16px;
    height: 100%;
    margin: 0 auto;
    margin-left: 288px;
}
h2 {
    font-size: 20px;
}
h3 {
    font-size: 16px;
}
.list_bg {
    width: 100%;
    height: 200px;
}
img {
    width: 100%;
    height: 100%;
}
.avator {
    width: 120px;
    height: 120px;
    margin: -60px auto 0;
    background: #fff;
    overflow: hidden;
    border-radius: 50%;
    img {
        border: 5px solid #fff;
        border-radius: 50%;
    }
}
.home_logo {
    position: relative;
    padding: 8px;
    border-radius: 50%;
    background: #fff;
    margin: 40px auto 0;
    width: 40px;
    height: 40px;
}
.home_logo:hover {
    .list_nav {
        display: block;
    }
}
.list_nav {
    display: none;
    padding: 20px 0;
    background: rgba(61,61,61,1);
    border-radius: 8px;
    font-size: 13px;
    position: absolute;
    top: 45px;
    left: -70%;
    width: 100px;
    a {
        cursor: pointer;
        padding: 5px 0;
        display:block;
        color: #fff;
        text-decoration: none;
    }
}
.list_nav::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 38%;
    border: 10px solid rgba(61,61,61,1);
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
}
</style>