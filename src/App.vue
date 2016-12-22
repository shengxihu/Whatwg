<template>
  	<div id="app">
			<List></List>
  	</div>
</template>

<script>
import Home from './components/Home'
import List from './components/List'

export default {
	components: {
		Home,
		List
	}
}
</script>

<style lang='sass'>
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
