<template>
    <div class="list">
        <div class="left">
            <div class="list_bg">
                <img src="https://drscdn.500px.org/photo/151463743/m%3D2048/9ef1dec3b44bde1207d7d88fbab2d9c1">
            </div>
            <div class="avator">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/HUGE2016DEC.jpg/440px-HUGE2016DEC.jpg">
            </div>
            <div class="list_msg">
                <h2>no1024</h2>
                <h3>分享  让知识更有价值</h3>
            </div>
            <div class="home_logo">
                <img src="../assets/home.png">
                <div class="list_nav">
                    <a>新建帖子</a>
                    <a>删除帖子</a>
                    <a>更改个人信息</a>
                    <a>登出</a>
                </div>
            </div>
        </div>
        <div class="right">
           
        <div>
    </div>
</template>
<style lang="sass" scoped>
.list {
    height: 100%;
    width: 100%;
}
.list_msg {
    color: #000;
    font-weight: bold;
}
.left {
    float: left;
    text-align: center;
    width: 288px;
    height: 100%;
}
.right {
    background: rgba(0,0,0,.1);
    font-size: 16px;
    height: 100%;
    width: 100%;
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