<template>
    <div class="yyt-o-top">
        <!--头部  -->
        <header id="yyt-o-header">
        <i class="yyt-o-back"></i>
        <h1 class="yyt-o-h1">商品详情</h1>
        <span class="yyt-o-test"></span>        
        <b class="yyt-o-help"></b>
        </header>
        <div class="gogo-top"></div>
        <main class="yyt-o-main">

            <!--用户中奖  -->
            <div class="yyt-o-prize">
                <p class="yyt-o-award">
                    <span class="yyt-o-phone">15*****8</span>
                    用户获得：<span class="yyt-o-user">TCL：笔记本一台</span>
                    </p>
            </div>
         
            <!--tab切换  -->
             <div class="yyt-o-tab">
                <span class="yyt-o-tab1" v-for="(arr,index) in nav" :class="{'add-tab':activeIndex === index}" @touchend="navClick(index)" >{{arr}}</span>
            </div> 

            <!--商品内容  -->
             <div class="yyt-o-goods">
                <ul class="yyt-o-ul" v-for="obj in dataset">
                <li class="yyt-o-li">
                <div class="yyt-o-god">
                    <img :src="'src/assets/imgs/' + JSON.parse(obj.banner)[0]" class="yyt-o-godImg" />
                </div>

                <div class="yyt-o-right">
                    <span class="yyt-o-zero">免费试</span>
                    <p class="yyt-o-name">{{obj.ProductName}}</p>
                    <p class="yyt-o-price">￥{{obj.NewPrice}}</p>
                    <p class="yyt-o-apply">{{obj.Sales}}人申请</p>
                </div>

                <router-link :to="'datalis?id='+ obj.id">
                <button class="yyt-o-btn">马上申请</button>
                </router-link>
                </li>


                </ul>
            </div> 
            
        </main>
            
    </div> 
</template>
<script>
    import './zero.scss'
    import zero from './zero'
    export default{
        ...zero
    }
</script>