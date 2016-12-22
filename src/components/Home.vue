<template>
  	<div class="home">
	    <h1>Whatwg</h1>
		<h3>科技让生活更美好</h3>
		<div class="row">
			<span>
				<input class="gate" id="class" type="text" placeholder="username" /><label for="class">用户名</label>
			</span><br>
			<span>
				<input class="gate" id="element" type="text" placeholder="passward" /><label for="element">密码</label>
			</span><br>
      <transition name="fade">
        <span v-if="registed">
          <input class="gate" id="move" type="text" placeholder="email" /><label for="move">邮箱</label>
        </span>
      </transition><br>
      <a @click="ifRegisted" v-if="!registed" class="login">没有账号？点击注册</a>
      <a @click="ifRegisted" v-else class="login">已有账号？点击登录</a>
      <div class="bt">
        <a v-if="!registed" title="登录">登录</a>
			  <a v-else title="注册">注册</a>
      <div>
		</div>
	</div>
</template>

<script>

export default {
  data(){
    return {
      registed: false,
    }
  },
  methods:{
    ifRegisted(){
      this.registed = !this.registed
      console.log(this.registed)
    }
  },
}
	
</script>

<style lang='sass' scoped>
.home {
	height: 100%;
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
span:nth-child(2) .gate {
  text-indent: 85px;
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
