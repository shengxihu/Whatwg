<template>
    <div class="auth">
        <div class="auth_box">
            <h4>个人资料</h4>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item class="av_left" label="头像">
                    <div class="avator">
                        <img :src="form.avator">
                    </div>
                    <div id="avat">
                        <el-input placeholder="请输入图像URL" v-model="form.avator"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input placeholder="请输入用户名" v-model="form.name"></el-input>
                </el-form-item>
                 <el-form-item label="邮箱">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.pass"></el-input>
                </el-form-item>
                 <el-form-item class="bt_box">
                    <el-button class="t_bt" type="primary" @click="onSubmit">提交</el-button>
                    <router-link :to="{ path: '/list'}">
                        <el-button :plain="true" type="danger">取消</el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
data() {
      return {
        form: {
          name: document.cookie.split(";")[4].split("=")[1],
          pass: document.cookie.split(";")[3].split("=")[1],
          email: document.cookie.split(";")[2].split("=")[1],
          avator: document.cookie.split(";")[0].split("=")[1],
          gender: '',
          age: '',
        }
      }
    },
    computed: {
        ...mapState([
            'usr_data',
            'list'
        ])
    },
    methods: {
        ...mapActions([
            'changePageFlagN',
            'changePageFlagY'
        ]),
        onSubmit() {
            var self = this
            var bd_data = {
                mail: self.form.email,
                pwd: self.form.pass,
                name: self.form.name,
                avator: self.form.avator,
                gender: self.form.gender,
                age: self.form.age,
            }
            var token=document.cookie.split(";")[0].split("=")[1]; 
            console.log(document.cookie.split(";")) 
            var url = 'api/user/'
            this.$http.put(url, bd_data, {
                headers: {
                    Authorization: token
                }
            }).then(function(response){
                console.log("scee")
                document.cookie = 'email=' + self.form.email
                document.cookie = 'passward=' + self.form.pwd
                document.cookie = 'username=' + self.form.name
                document.cookie = 'img=' + self.form.avator
                console.log(self.form.avator)
            },
            function(response){
                console.log("fii")
            });
        }
    },
     created(){
         console.log(document.cookie.split(";"))
        if(!this.form.avator) {
            this.form.avator = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/HUGE2016DEC.jpg/440px-HUGE2016DEC.jpg'
        }
        this.changePageFlagY(['is_index'])
    },
    beforeRouteLeave(to, from, next) {
        this.changePageFlagN(['is_index'])
        next()
    },
}
</script>
<style lang="sass" scoped>
.t_bt {
    margin-right: 20px;
}
.avator {
    width: 100px;
    height: 100px;
    background: red;
    display: inline-block;
    vertical-align: middle;
}
img {
    width: 100%;
    height: 100%;
}
.bt_box {
    padding-left: 50px;
    text-align: left;
}
.av_left {
    text-align: left;
}
#avat {
    width: 80%;
    display: inline-block;
    text-align: left;
    padding-left: 20px;
}
h4 {
    text-align: left;
    font-size: 20px;
    padding-bottom: 20px;
}
h5 {
    text-align: left;
}
.auth {
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #000;
}
.auth_box {
    margin: 0 auto;
    padding: 40px;
    width: 70%;
    height: 100%;
    background: #fff;
}
</style>