import $ from 'jquery'
import http from '../../utils/HttpClient'
export default{
        data(){
          return{
            dataset:'',
            nav:['正在申请','下期预告'],
            activeIndex:0,
            condition:'马上申请',
          }
      },
        methods:{
            navClick(index){
            this.activeIndex=index;
            if(index==1){
                http.get('allGoods').then(response=>{
                    this.dataset = response;
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
                    var goName = this.dataset[0].ProductName;
                    var goSale = this.dataset[0].Sales;
                    //满员
                    if(goName=="海南精品无核荔枝（顺丰空运包邮）"&& goSale>122){
                        this.condition = '已满员'
                    }
                })
            }
        }
      
    }