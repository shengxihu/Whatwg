<template>
    <div class="action_cont">
        <div @click="showBox" class="item comment">
            <div class="logo">
            </div>
            <div class="count">11</div>
        </div>
        <div class="item like">
            <div class="logo">
            </div>
            <div class="count">11</div>
        </div>
        <div class="item det">
            <i class="el-icon-delete"></i>
        </div>
        <div v-if="flag" class="comment_cont">
            <textarea class="comment_box"></textarea>
            <el-button @click="showBox" class="c_bt" :plain="true" type="danger">取消</el-button>
            <el-button class="c_bt" :plain="true" type="success">提交</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() { 
        return {
            flag: false
        }
    },
    methods: {
        showBox(){
            this.flag = !this.flag
        }
    }
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
</style>