import $ from 'jquery'
import http from '../../utils/HttpClient'
export default{
    data(){
        return{
            dataset:'',
            nav:['申请中','已获资格','未获资格'],
            activeIndex:0,
        }
    },
    methods:{
        navClick(index){
            this.activeIndex=index;
            if(index==2){
               http.post('origingoods',{val:'特色美食'}).then(respone=>{
                    var god = respone.data;
                    this.dataset = god;
                }) 
            }
            if(index==1){
                http.post('origingoods',{val:'地域名品'}).then(respone=>{
                    var god = respone.data;
                    this.dataset = god;
                })
            }
            if(index==0){
                http.post('origingoods',{val:'特色水果'}).then(respone=>{
                    var god = respone.data;
                    this.dataset = god;
                })
            }
            }
    },
    mounted(){
        $('.yyt-o-tab1').eq(0).addClass('add-tab');
        if(this.activeIndex==0){
                http.post('origingoods',{val:'特色水果'}).then(respone=>{
                    var god = respone.data;
                    this.dataset = god;
                })
            }
    }
}