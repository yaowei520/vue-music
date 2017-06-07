import jsonp from "common/js/jsonp.js"
import {commonParams,options} from "./config.js"
export default function getRecommend(){
  let data=Object.assign({},commonParams,{
  	channel:"singer",
	page:"list",
	key:"all_all_all",
	pagesize:100,
	pagenum:1,
	g_tk:1160856427,
	loginUin:251109226,
	hostUin:0,
	notice:0,
	platform:"yqq",
	needNewCode:0
  });
  let url="https://c.y.qq.com/v8/fcg-bin/v8.fcg"
  return jsonp(url,data,options)
}