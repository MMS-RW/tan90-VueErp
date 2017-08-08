<template>
  <div class="yyt-my-top">
      <!--头部  -->
    <header id="yyt-my-header">
        <i class="yyt-my-back"></i>
        <h1 class="yyt-my-h1">我的试用</h1>
    </header>
    <div class="gogo-top"></div>
    <main class="yyt-my-main">

        <!--tab切换  -->
         <div class="yyt-my-tab">
            <span class="yyt-my-tab1" v-for="(arr,index) in nav" :class="{'add-tab':activeIndex === index}" @touchend="navClick(index)" >{{arr}}</span>
        </div>  

            <!-- 商品内容  -->
              <div class="yyt-my-goods">

                <ul class="yyt-my-ul" v-for="obj in dataset">
                <li class="yyt-my-li">
                <div class="yyt-my-god">
                    <img :src="'src/assets/imgs/' + JSON.parse(obj.banner)[0]" class="yyt-my-godImg" />
                </div>

                <div class="yyt-my-right">
                    <span class="yyt-my-zero">免费试</span>
                    <p class="yyt-my-name">{{obj.ProductName}}</p>
                    <span class="yyt-my-timer">申请时间：{{obj.Sales}}小时之前</span>
                </div>
                </li>
                </ul>

            </div>   
    </main>

  </div>
</template>
<script>
    import './myzero.scss'
    import myzero from './myzero'
    export default{
        ...myzero
    }
</script>  