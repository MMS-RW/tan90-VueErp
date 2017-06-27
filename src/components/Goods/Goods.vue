<template>
<div id="god-main">
<fieldset class="fieldset">
<legend class="legend">搜索查询</legend>
<label for="findname" style="font-size: 14px;">输入商品名称或类别</label>
<input type="text" placeholder="输入商品名称" id="findname" class="keywords" v-model="godname" />
<input type="text" placeholder="输入商品大分类" id="findname" class="keywords" v-model="GIG" />
<input type="text" placeholder="输入商品小分类" id="findname" class="keywords" v-model="little" />

<button class="btn_search" @click="search">
<i class="iconfont icon-search"></i>查询
</button>


<router-link to="/addgod">
<button class="add-gods">
<i></i>添加商品
</button>
</router-link>

<button class="allCut">
<i class="iconfont icon-shanchu"></i>删除商品
</button>
</fieldset>

 <div class="god-list">

    <div class="t-able">
    <listnav></listnav>

    <div class="t-body" >
    <ul class="list-ul" v-for="obj in dataset" >
    <li class="li-list">
    <input type="checkbox" name="check">
    </li>
    
    <!-- 商品缩略图 -->
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.banner)[0]">
    </p>
    </li>

    <!-- 商品名称 -->
    <li class="li-list">
    <span class="title">{{obj.ProductName}}</span>
    </li>

    <!-- 商品价格 -->
    <li class="li-list">
    <span class="price">{{obj.OldPrice}}</span>
    </li>

    <li class="li-list">
    <span class="price2">{{obj.NewPrice}}</span>
    </li>

    <li class="li-list">
    <span class="lei1">{{obj.GigClass}}</span>
    </li>

    <li class="li-list">
    <span class="price2">{{obj.LittleClass}}</span>
    </li>

    <li class="li-list">
    <span class="price2">{{obj.Sales}}</span>
    </li>

    <li class="li-list">
    <span class="price2">{{obj.made}}</span>
    </li>

    <li class="li-list">
    <span class="size1">{{obj.spec1}}</span>
    </li>

    <li class="li-list">
    <span class="size2">{{obj.spec2}}</span>
    </li>

    <li class="li-list">
    <span class="size3"> {{obj.spec3}}</span>
    </li>

    <li class="li-list">
    <span class="prick1"> {{obj.spice1}}</span>
    </li>

    <li class="li-list">
    <span class="prick2"> {{obj.spice2}}</span>
    </li>

    <li class="li-list">
    <span class="prick3" style="width:10px;height:20px;">{{obj.spice3}}</span>
    </li>

    <li class="li-list">
    <span class="prick3">轮播图1</span>
    </li>

    <li class="li-list">
    <span class="prick3">轮播图1</span>
    </li>

    <li class="li-list">
    <span class="prick3">轮播图1</span>
    </li>

    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[1]">
    </p>
    </li>
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[2]">
    </p>
    </li>
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[3]">
    </p>
    </li>
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[4]">
    </p>
    </li>
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[5]">
    </p>
    </li>
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[6]">
    </p>
    </li>
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[7]">
    </p>
    </li>
    <li class="li-list">
    <p class="gods-img">
    <img :src="'src/assets/imgs/' + JSON.parse(obj.photo)[7]">
    </p>
    </li>

    <li class="li-list">
    <span class="objId">{{obj.id}}</span>
    </li>

    <li class="li-list">
    <button class="btn-change btnlast">编辑</button>
    <button class="btn-del btnlast" @click="del1">删除</button>
    </li>
    

    </ul>
    </div>
    

    </div>
    </div>

    
    
    </div>
</template>

<script type="text/javascript">
    import './Goods.scss'
    import '../../assets/common/common.scss'
    import $ from 'jquery'
    import http from '../../utils/HttpClient.js'
    import listnav from './listnav/listnav.vue'

    export default {
        components: {
			'listnav': listnav,
		},
        data(){
            return{
            dataset:[],
            datasetOrigin:[],
            godname:'',
            GIG:'',
            little:''

            }
        },methods:{
            del1:function(){
             var b1 =  $(this).index();
             console.log(b1)
                
            },
            search: function(){
  					var _dataset = [];
  					for(var index in this.datasetOrigin){
  						var obj = this.datasetOrigin[index];
                        console.log(obj)
  						var _result = (
	  						(!this.godname || obj.ProductName.indexOf(this.godname) > -1)
	  						&& (!this.GIG || obj.GigClass.indexOf(this.GIG) > -1)
                              &&(!this.little || obj.LittleClass.indexOf(this.little) > -1)
	  						
	  					);

  						if(_result){
  							_dataset.push(obj);
  						}
  					}
  					// console.log(_dataset);
  					this.dataset = _dataset;
  				}
        },
        created(){
                http.get('allGoods').then(response => {
			    this.dataset = response;
                
                console.log(response)
		  		this.datasetOrigin = response;
		        })
			}
		
    }
    


   
</script>


