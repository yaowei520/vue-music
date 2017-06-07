<template>
  <div class="singer" ref="singer">
    <list-view :data="singerList"></list-view>
     <div class="loading-container" v-if='!singerList.length' >
        <loading title="正在加载...."></loading>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import loading from "base/loading/loading"
  import getSinger from "api/singer"
  import listView from "base/listview/listview"
  const HOST_NAME="热门"
  const SINGER_LENGTH=10
  export default {
    name:"singer",
    data:function(){
      return {
        singerList:[],
      }
    },
    created(){
      setTimeout(() => {
        this._singerList()  
      },500)
    },
    components:{
      loading,
      listView
    },
    methods:{
      _singerList: function(){
        getSinger().then((data) => {
           if(data.code == 0){
             this.singerList = this.resizeSinger(data.data.list)
           }
        })
      },
      resizeSinger(list){
        let map={
          hot: {
            title:HOST_NAME,
            items:[]
          }
        }
        list.forEach((item,index) => {
            if(index < SINGER_LENGTH){
              map.hot.items.push({
                Fsinger_id: item.Fsinger_id,
                Fsinger_name: item.Fsinger_name,
                Fsinger_img: "https://y.gtimg.cn/music/photo_new/T001R150x150M000"+item.Fsinger_mid+".jpg"
              })
            }
            let Fkey=item.Findex
            if(!map[Fkey]){
              map[Fkey]={
                title: Fkey,
                items:[]
              }
            }
            map[Fkey].items.push({
                Fsinger_id: item.Fsinger_id,
                Fsinger_name: item.Fsinger_name,
                Fsinger_img: "https://y.gtimg.cn/music/photo_new/T001R150x150M000"+item.Fsinger_mid+".jpg"
            })
        })
        let hot = []
        let ret = []
        for(let key in map){

          if(map[key].title == HOST_NAME){
            hot.push(map[key])
          }else if(map[key].title.match(/[a-zA-Z]/)){
            ret.push(map[key])
          }
        }
        ret.sort((a,b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        console.log(hot.concat(ret))
        return hot.concat(ret)
      } 
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
   .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>