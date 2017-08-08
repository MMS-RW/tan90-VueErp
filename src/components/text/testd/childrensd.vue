<template>
    <div>
        <p><span>子接受父传来的参数：</span>{{logo}}</p>
        <input type="text" v-model="changed" @change="setUser" />
        <h1>通过vuex来传参：{{authod}}</h1>
    </div>
    
</template>
    <script>
    export default {
      data(){
          return{
            changed:'',
          }
      },
      methods:{
          setUser(){
              this.$emit('getby',this.changed)
          }
      },
      props: ['logo'],
      computed: {
        authod(){
            return this.$store.state.textd.authod
            
        }
  }
    }
    </script>
    