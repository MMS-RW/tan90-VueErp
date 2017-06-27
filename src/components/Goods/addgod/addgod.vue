<template>
    <div class="main-gods">
    <fieldset class="fieldset1">
    <legend class="legend1">添加商品</legend>
    <form>
    <div class="div1">
    <label class="lab1" for="ProductName"><span>商品名</span></label>
    <input type="text" class="ProductName  ipu1" id="ProductName" v-model="ProductName">
    </div>

    <div class="div1">
    <label class="lab1" for="OldPrice">原价</label>
    <input type="text" class="OldPrice ipu1" id="OldPrice" v-model="OldPrice">
    </div>

    <div class="div1">
    <label class="lab1" for="NewPrice">现价</label>
    <input type="text" class="NewPrice ipu1" id="NewPrice" v-model="NewPrice">
    </div>


    <div class="div1">
    <label class="lab1" for="GigClass">所属大分类</label>
    <input type="text" class="GigClass ipu1" id="GigClass" v-model="GigClass">
    </div>

    <div class="div1">
    <label class="lab1" for="LittleClass">所属小分类</label>
    <input type="text" class="LittleClass ipu1" id="LittleClass" v-model="LittleClass">
    </div>

    <div class="div1">
    <label class="lab1" for="Sales">销量</label>
    <input type="text" class="Sales ipu1" id="Sales" v-model="Sales">
    </div>

    <div class="div1">
    <label class="lab1" for="made">产地</label>
    <input type="text" class="made ipu1" id="made" v-model="made">
    </div>

    <div class="div1">
    <label class="lab1" for="spec1">规格一</label>
    <input type="text" class="spec1 ipu1" id="spec1" v-model="spec1" >
    </div>

    <div class="div1">
    <label class="lab1" for="spec2">规格二</label>
    <input type="text" class="spec2 ipu1" id="spec2" v-model="spec2" >
    </div>

    <div class="div1">
    <label class="lab1" for="spec3">规格三</label>
    <input type="text" class="spec3 ipu1" id="spec3" v-model="spec3" >
    </div>

    <div class="div1">
    <label class="lab1" for="spice1">规格一价格</label>
    <input type="text" class="spice1 ipu1" id="spice1" v-model="spice1" >
    </div>

    <div class="div1">
    <label class="lab1" for="spice2">规格二价格</label>
    <input type="text" class="spice2 ipu1" id="spice2" v-model="spice2" >
    </div>

    <div class="div1">
    <label class="lab1" for="spice3">规格三价格</label>
    <input type="text" class="spice3 ipu1" id="spice3" v-model="spice3" >
    </div>


    <div class="fileimg">
    <div class="div2">
    <label class="lab2" for="Benner1">轮播图1</label>
    <input type="file" name="banner" class="Benner1 ipu2" id="Benner1">
    </div>
    
    <div class="div2">
    <label class="lab2" for="Benner2">轮播图2</label>
    <input type="file" name="banner" class="Benner2 ipu2" id="Benner2">
    </div>
   
   <div class="div2">
    <label class="lab2" for="Benner3">轮播图3</label>
    <input type="file" name="banner" class="Benner3 ipu2" id="Benner3">
    </div>

    <div class="div2">
    <label class="lab2" for="detail1">详情图1</label>
    <input type="file" name="photo" class="detail1 ipu2" id="detail1">
    </div>
    
    <div class="div2">
    <label class="lab2" for="detail2">详情图2</label>
    <input type="file" name="photo" class="detail2 ipu2" id="detail2">
    </div>
    
    <div class="div2">
    <label class="lab2" for="detail3">详情图3</label>
    <input type="file" name="photo" class="detail3 ipu2" id="detail3">
    </div>
    
    <div class="div2">
    <label class="lab2" for="detail4">详情图4</label>
    <input type="file" name="photo" class="detail4 ipu2" id="detail4">
    </div>
    
    <div class="div2">
    <label class="lab2" for="detail5">详情图5</label>
    <input type="file" name="photo" class="detail5 ipu2" id="detail5">
    </div>

    <div class="div2">
    <label class="lab2" for="detail6">详情图6</label>
    <input type="file" name="photo" class="detail6 ipu2" id="detail6">
    </div>

    <div class="div2">
    <label class="lab2" for="detail7">详情图7</label>
    <input type="file" name="photo" class="detail7 ipu2" id="detail7">
    </div>

    <div class="div2">
    <label class="lab2" for="Benner18">详情图8</label>
    <input type="file" name="photo" class="Benner18 ipu2" id="Benner18">
    </div>

    </div>


    <div class="div888888">
    <button class="btn-ok btn-now add-gods " @click.prevent="save1">确定</button> 
    <router-link to="/goods">
    <button class="over-no btn-now allCut" >取消</button>
    </router-link>
    </div>
    </form>

    </fieldset>




    </div>
</template>
<script>
    import '../../../assets/common/global.scss'
    import '../Goods.scss'
    import http from '../../../utils/HttpClient.js'
    import { mapGetters, mapActions } from 'vuex'
    import $ from 'jquery'
    import erp from '../../../assets/global.js'

    export default {
        data:function(){
            return{
                ProductName:'',
                OldPrice:'',
                NewPrice:'',
                GigClass:'',
                LittleClass:'',
                Sales:'',
                made:'',
                spec1:'',
                spec2:'',
                spec3:'',
                spice1:'',
                spice2:'',
                spice3:''
            }
        },
        methods: {
        
        save1:function(){
            var ProductName = this.ProductName;
            var OldPrice = this.OldPrice;
            var NewPrice = this.NewPrice;
            var GigClass = this.GigClass;
            var LittleClass = this.LittleClass;
            var Sales = this.Sales;
            var made = this.made;
            var spec1 = this.spec1;
            var spec2 = this.spec2;
            var spec3 = this.spec3;
            var spice1 = this.spice1;
            var spice2 = this.spice2;
            var spice3 = this.spice3;
            var num = String(Math.floor(Math.random()*10000000000));
            if(ProductName=='' || Sales ==''|| NewPrice ==''|| GigClass ==''|| made ==''|| spec1 ==''){
                	alert('商品名，销量，现价，大分类，产地，规格一价格为必填项');
                	return false;
                }
            console.log(111)
            $('form').ajaxSubmit({
			type: 'post',
			url: erp + 'upload',
			success:function(data){
				console.log(111)
               
                // console.log()
                if(data){
					var res = JSON.parse(data);
				}else{
					var res={};
				}
                
                
                var ban = res.banner;
                var pho = res.photo;
                var banner = [];
                var photo = [];
               
                if(ban){
                	//获取轮播图名
	                ban.forEach(function(item){
	                	banner.push(item.filename);
	                });
                }else{
                	banner = null;
                }
                
                if(pho){
                	//获取详情图名
	                pho.forEach(function(item){
	                	photo.push(item.filename);
	                });
                }else{
                	photo = null;
                }
                // console.log(banner);
                banner = banner ? JSON.stringify(banner) : '';
                photo = photo ? JSON.stringify(photo) : '';
                // console.log(banner,photo)
                http.post('addGoods',{
					id:num,
					ProductName:ProductName,
					OldPrice:OldPrice,
					NewPrice:NewPrice,
					GigClass:GigClass,
					LittleClass:LittleClass,
					Sales:Sales,
					made:made,
					spec1:spec1,
					spec2:spec2,
					spec3:spec3,
					spice1:spice1,
					spice2:spice2,
					spice3:spice3,
					banner:banner,
					photo:photo
				},function(res){
					console.log(res);
					if(res.status){
						alert('添加商品成功！');
						this.$router.push({name:'goods'});
						
					}else{
						alert('商品已存在，请重新添加！')
					}
					
					
				});
				
            }

    })
    alert('添加商品成功！');
	this.$router.push({name:'goods'});


            





            // console.log(this.ProductName)
            // this.$store.dispatch('addgod',{'name':23})
        }
    }
}
</script>