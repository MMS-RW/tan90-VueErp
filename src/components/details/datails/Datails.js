import $ from 'jquery'
// import '../../../assets/jquery-confirm/jquery-confirm.css'
// import '../../../assets/jquery-confirm/jquery-confirm' 
import http from '../../../utils/HttpClient'
export default{
        data(){
          return{
            show:false,
            digShow:false,
            scroll: '',
            diglo:'申请成功',
            top:true,
            applys:'马上申请',
            datailsset:'',
            detailsProductMsg:{},
            urlPath:{},
            timeing:0,
          }
      },
        methods:{
          Scroll() {
		        this.scroll = window.scrollY;
		       	if(this.scroll>400){
		       		 this.show=true;
		       	}
		       	 if(this.scroll<400){
		       		 this.show=false;
		       	}
	      	},
	      	backtop(){
            $(window).scrollTop(0)
	      	},
          goBack(){
            history.go(-1);
          },
          apply(e){
            if(this.applys==='马上申请'){
              this.applys = '已申请'; 
              e.target.style.backgroundColor = "#cccccc";
            }else if(this.applys == '已满员'){
              this.diglo = '已满员'
            }else if(this.applys == '活动已结束'){
              this.diglo = '活动已结束'
            }
            
            //弹框
              this.digShow = true;
              this.$refs.dog.style.left = window.scrollX + (window.innerWidth - 300)/2 + 'px';
              this.$refs.dog.style.top= (window.innerHeight - 80)/2 + 'px';
              setInterval(function(){
                $('.yyt-xx-tishi').hide(300)
              },2000) 
            
          },
          //点击跳转
          winReload(dataId){
              this.$root._route.query.id = this.$root._route.query.id;
              setTimeout(function() {
                window.location.reload();
              }, 180);
            
          }
        },
        mounted(){
        //倒计时
        var starttime = new Date("2017/8/10");
        var timer = setInterval(function () {
          var nowtime = new Date();
          var timed = starttime - nowtime;
          var day = parseInt(timed / 1000 / 60 / 60 / 24);
          var hour = parseInt(timed / 1000 / 60 / 60 % 24);
          var minute = parseInt(timed / 1000 / 60 % 60);
          var seconds = parseInt(timed/ 1000 % 60);
          var tidd = day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒后结束";
          console.log(typeof this.timeing)
          
        }, 1000);

        //按钮变灰色
        function b1(){
              $('.yyt-xx-red-btn').addClass('yyt-xx-black');
            }

          //获取请求头的ID
          var path = this.$root._route.query.id;
          this.urlPath.productId = path;
          var _this = this;
          http.get('getDetailsMsg',_this.urlPath).then(response=>{
            var res = response.message.data[0];
            _this.detailsProductMsg.productId=res.id;
              _this.detailsProductMsg.bigImg=JSON.parse(res.banner)[0];
              _this.detailsProductMsg.productName=res.ProductName;
              _this.detailsProductMsg.productNewPrice=res.NewPrice;
              _this.detailsProductMsg.Sales=res.Sales;
              _this.detailsProductMsg.msgImg=JSON.parse(res.photo);
              _this.$set(_this.detailsProductMsg)
            
            var godName = _this.detailsProductMsg.productName;
            var sale = _this.detailsProductMsg.Sales;
            //已申请
            
            //活动已结束
            if(godName=="海南精品超屌芒果（顺丰空运包邮）"){
              this.applys = '活动已结束';
              $('.yyt-xx-timer').text('活动已过期')
              clearTimeout(timer);
              b1();
            }
            //满员
            if(godName=="海南精品无核荔枝（顺丰空运包邮）"&& sale>122){
              this.applys = '已满员';
              b1();
            }

              //滚动栏获取数据
              let val = res.LittleClass;
              http.post('origingoods',{val:val}).then(respone=>{
                    var god = respone.data;
                    this.datailsset = god;
                })
          })

          window.addEventListener('scroll', this.Scroll);
        }
      
    }