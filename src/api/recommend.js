import jsonp from "common/js/jsonp.js"
import {commonParams,options} from "./config.js"
export default function getRecommend(){
  let data=Object.assign({},commonParams,{
  	g_tk:568630490,
	uin:251109226,
	notice:0,
	platform:"h5",
	needNewCode:1
  });
  let url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
  return jsonp(url,data,options)
}