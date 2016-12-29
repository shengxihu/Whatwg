<template>
  <div class="box">
    <div v-if="$route.name == index" class="home">
        <h1>Whatwg</h1>
        <h3>科技让生活更美好</h3>
        <div class="row">
          <transition name="fade">
            <span v-if="registed">
                <input class="gate" id="class" v-model="username" type="text" placeholder="username" /><label for="class">用户名</label>
            </span>
          </transition><br>
          <span>
            <input class="gate" id="move" v-model="email" type="text" placeholder="email" /><label for="move">邮箱</label>
          </span><br>
          <span>
            <input class="gate" id="element" v-model="passward" type="passward" placeholder="passward" /><label for="element">密码</label>
          </span><br>
          <a @click="ifRegisted" v-if="!registed" class="login">没有账号？点击注册</a>
          <a @click="ifRegisted" v-else class="login">已有账号？点击登录</a>
          <div class="bt">
            <a v-if="!registed" @click="Login" title="登录">登录</a>
            <a v-else  @click="Login" title="注册">注册</a>
          </div>
        </div>
    </div>
		<router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return {
      registed: false,
      username: '',
      passward:'',
      email:''
    }
  },
  methods:{
    ifRegisted(){
      this.registed = !this.registed
      console.log(this.registed)
    },
    fetchList(){
        var self = this
        this.$http.get('api/posts').then(function(response){
            this.initList(response.data.data)
        },
        function(response){
            console.log("fii")
        });
    },
    Login(){
      var self = this
      // self.fetchList()
      var bd_data = {
        mail: self.email,
        pwd: self.passward,
      }
      var url;
      if(!this.registed) {
        url = 'api/user/login'
      } else {
        url = 'api/user/register'
      }
      this.$http.post(url, bd_data).then(function(response){
          // 响应成功回调
          document.cookie = 'token=' + response.body.data.token
          document.cookie = 'email=' + self.email
          document.cookie = 'passward=' + self.passward
          document.cookie = 'username=' + self.username
          this.initData(response.body.data)
          console.log(response.body.data)
          this.$router.push('list')
      }, function(response){
         console.log(response.body)
          if(response.body.code == 1) {
            alert("已注册，请直接登录！")
            
          }
          if(response.body.code == 3) {
            alert("未注册，请先注册！")
            
          }
          // 响应错误回调
      });
    },
    ...mapActions([
      'initData',
      'initList'
    ])
  },
}
	
</script>

<style lang='sass' scoped>
.box {
  width: 100%;
  min-height: 100%;
}
.home {
	height: 100vh;
	padding-top: 80px;
	text-align: center;
	font-size: 30px;
	font-weight: bold;
	background: url('../assets/tk.jpg') 100% 100%/cover;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.login {
  cursor: pointer;
  text-decoration: none;
  width: 215px;
  padding-right: 5px;
  display: inline-block;
  text-align: right;
  color: #fff;
}
@mixin epic-sides() {
    position: relative;
    z-index: 1;

    &:before {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        left: -5000px;
        height: 100%;
        width: 15000px;
        z-index: -1;
        @content;
    }
}
.row {
  font-size: 14px;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px 60px;
  &:first-child {
    padding: 40px 30px;
  }
  span {
    position: relative;
    display: inline-block;
    margin: 20px 10px;
  }
}
.gate {
  display: inline-block;
  width: 215px;
  height: 32px;
  padding: 10px 0 10px 15px;
  font-family: "Open Sans", sans;
  font-weight: 400;
  color: #377D6A;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 65px; // Arbitrary.
  transition: all .3s ease-in-out;
  
  &::-webkit-input-placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
  }

  + label {
    display: inline-block;
    position: absolute;
	height: 32px;
    top: 0;
    left: 0;
    padding: 10px 15px;
    text-shadow: 0 1px 0 rgba(19,74,70,.4);
    background: #7AB893;
    transition: all .4s ease-in-out;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    transform-origin: left bottom;
    z-index: 99;
    
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 3px;
      background: #377D6A;
      transform-origin: left bottom;
      transition: all .4s ease-in-out;
      pointer-events: none;
      z-index: -1;
    }
    &:before {
      background: rgba(3,36,41,.2);
      z-index: -2;
      right: 20%;
    }
  }
}
span:nth-child(2) .gate:focus,
span:nth-child(2) .gate:active{
  text-indent: 0;
}
.gate:focus,
.gate:active {
  color: #377D6A;
  text-indent: 0;
  background: #fff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  
  &::-webkit-input-placeholder {
    color: #aaa;
  }
  + label {
    transform: rotate(-66deg);
    border-radius: 3px;
    
    &:before {
      transform: rotate(10deg);
    }
  }
}
.bt > a {
	display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #377d6a;
  border-radius: 3px;
  margin-top: 20px;
  height: 36px;
  width: 215px;
  padding: 0;
  outline: none;
  overflow: hidden;
  color: #fff;
  transition: color 0.3s 0.1s ease-out;
  line-height: 36px;
  
  &:hover{
	background:#377d6a;
	transition: background .3s ease-out;
  }
}
</style>
