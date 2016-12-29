<template>
  	<div id="app">
			<heade v-if="is_index"></heade>
			<!--<List></List>-->
			<!--<auth></auth>-->
			<!--<detail></detail>-->
			<home></home>
			<foote v-if="is_index"></foote>
  	</div>
</template>

<script>
import { mapState } from 'vuex'
import Home from './components/Home'
import List from './components/List'
import Auth from './components/Auth'
import Heade from './components/Heade'
import Foote from './components/Foote'
import Detail from './components/Detail'

export default {
	computed: {
		...mapState([
			'is_index'
		])
	},
	components: {
		Home,
		List,
		Auth,
		Heade,
		Foote,
		Detail
	},
	created(){
		console.log(this.is_index)
	}
}
</script>

<style lang='sass'>
ul.el-upload__files {
    display: none !important;
}
.el-form-item {
	border-top: 1px solid #d8d8d8;
	padding-top: 20px;
}
.auth .el-input__inner {
	border: 0px !important;
}
.comment_box .el-input__inner:focus {
	border-color: rgb(219,219,219);
}
.av_left .el-form-item__label {
	padding-top: 40px;
}
html, body, #app {
  	height: 100%;
}
body {
	font-size: 0;
	margin: 0;
}
* {
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #fff;
  background: #efefef;
}
</style>
