<template>
  <div>
    <p class="bc" @touchstart="change">点击我</p>
    <p @touchmove="move">移动</p>
    <p @touchend="touchend">touchend</p>
    <p @touchcancel="touchcancel">touchcancel</p>
    <ul>
      <li v-for="(value,key) in num">{{key}}:{{value}}</li>
    </ul>
    <label for="father">父传参：<input type="text" v-model="boomchange" id="father" /></label>
    <p>父接收子传来的参数：{{getChange}}</p>
    <div>
    <input type="text" v-model="setSd" />
    <button @click="setAuthod">点击我改编</button>  
    </div> 
    <childrensd :logo="boomchange" @getby="getUser"></childrensd>


    <div class="yyt-personal">
      <h2 class="yyt-h2">测试rem</h2>
      <button @click="testd">测试axios</button>
    </div>
    <div class="yyt-big">
      <ul class="bbc" v-for="obj in datase">
        <li class="ccd" v-for="(value,key) in obj">{{key}}:{{value}}</li>
      </ul>
    </div>
  </div>
  
</template>
<script>
import $ from 'jquery'

import './textd.scss'
import vue from 'vue'
import childrensd from './testd/childrensd.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
      'childrensd' :childrensd,
  },
  data(){
    return{
        num : {2014:[{name:1}],
              2016:[{name:2}]
              },
              boomchange:'',
              getChange:'',
              setSd:'',
              datase:[]
    }
  },
  methods:{
    getUser(msg){
      this.getChange = msg
    },
    change(target){
      console.log(this.$store.state.addgod)
    },
    move(){
      console.log('move')
    },
    touchend(){
      console.log('touchend')
    },
    touchcancel(){
      console.log('touchcancel')
    },
    setAuthod(){
      if(this.setSd==''){
        return false;
      }
      this.$store.state.textd.authod = this.setSd
    },
    testd(){
      this.$http.post('http://localhost:888/getallgoods').then(response=> {
      this.datase = response.data.data;    
      })
    }

  },
  mounted(){
    console.log(666)
  },
  created(){
    console.log(777);
     this.$nextTick(function(){
       setTimeout(function(){
        console.log(888)
       },2000)
     })
    
  
  }

}

</script>
