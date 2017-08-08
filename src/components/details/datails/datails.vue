<template>
        <div class="yyt-xx-top" @scroll="Scroll">
         
        <!--头部  -->
        <header id="yyt-xx-header">
        <i class="yyt-xx-back" @touchend="goBack"></i>
        <h1 class="yyt-xx-h1">商品详情</h1>
        <b class="yyt-xx-help"></b>
        </header>
        <div ></div>
        <main class="yyt-xx-main">
            <div class="yyt-xx-gotop iconfont icon-jiantou" @touchend="backtop" v-show="show"></div>
         <!-- 商品大图  -->
        <div class="yyt-xx-big-banner">
            <img :src="'src/assets/imgs/'+ detailsProductMsg.bigImg" alt="" class="yyt-xx-banner">
             <p class="yyt-xx-thework">
                <i class="yyt-xx-thework-i iconfont icon-shijian"></i>
                <span class="yyt-xx-timer"></span>
             </p> 
        </div>

            <!--商品名、价格、申请人数  -->
        <div class="yyt-xx-goods">
            <span class="yyt-xx-zero">免费试</span>
            <p class="yyt-xx-name">{{detailsProductMsg.productName}}</p>

            <div class="yyt-xx-PR">
            <span class="yyt-xx-price">￥{{detailsProductMsg.productNewPrice}}</span>
            <span class="yyt-xx-apply">{{detailsProductMsg.Sales}}人申请</span>
            </div>
        </div>
        
        <!-- 可滚动详情列表  -->
        <div class="yyt-xx-little-pic">
            <ul class="yyt-xx-ul">
                <li class="yyt-xx-li" v-for="obj in datailsset">         
                    <p class="yyt-xx-p1">
                    <img :src="'src/assets/imgs/' + JSON.parse(obj.banner)[0]" alt="" class="yyt-xx-p1-img"> 
                    </p> 
                    <router-link :to="'datalis?id='+ obj.id" @touchend.native="winReload(obj.id)">
                    <p class="yyt-xx-smallName">{{obj.ProductName}}</p>
                    </router-link>
                    <span class="yyt-xx-little-price">￥{{obj.NewPrice}}</span>
                    
                </li>

            </ul>
        </div>

        <!--详情分割图  -->
        <div class="yyt-xx-hr">
            <hr class="yyt-xx-hhr" noshade="noshade" />
            <div class="yyt-xx-img1"></div>
            <span class="yyt-xx-xiangqin">详情</span>
        </div>

        <!--长图   -->
        <div class="yyt-xx-longImg"  v-for= "(item,index) in detailsProductMsg.msgImg">
            <img :src="'src/assets/imgs/'+item" class="yyt-xx-long" alt="">
        </div>

        <!--透明提示框  -->
        <div class="yyt-xx-tishi" v-show="digShow" ref="dog">
            {{diglo}}
        </div>
        </main>

        <!--申请按钮固定定位  -->
        <footer class="yyt-xx-btn">
        <button class="yyt-xx-red-btn" @touchend="apply($event)">{{applys}}</button> 
        </footer> 

        </div>
</template>

<script>
    import './datails.scss'
    import $ from 'jquery'
    import datails from './Datails'
    export default{
        ...datails
    }
</script>