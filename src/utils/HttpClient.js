import request from 'superagent'
import router from '../router/index'
import '../components/spinner/spinner.vue'

import $ from 'jquery'

const LOCAL_SERVER = 'http://10.3.133.13:888/'

const DEV_SERVER = '';
const PRO_SERVER = '';

function getUrl(path){
	if(path.startsWith('http')){
		return path;
	}
	return `${LOCAL_SERVER}${path}`;
}

const HttpClient = {
	get: (path,query) => new Promise((resolve,reject)=>{
		// console.log(resolve)
		$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').show()
		var req = request 
			.get(getUrl(path))
			.query(query)
			.end((err,res)=>{
				$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide()
				if(err){
					reject(err)
				}else{
					resolve(res.body)
				}
			});
	}),
	post: (path,formdata,query) => new Promise((resolve,reject)=>{
		$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').show()
		request 
			.post(getUrl(path))
			.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
			.query(query)
			.send(formdata)
			.end((err,res)=>{
				$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide()
				if(err){
					reject(err)
				}else{
					resolve(res.body)
				}
			});
	})
};

export default HttpClient;