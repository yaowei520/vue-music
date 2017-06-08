<template>
    <div ref="wrapper">
      <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
         type: Boolean,
         default: true
      },
      data: {
         default: null
      }
    },
    mounted:function() {
        setTimeout(() => {
          this._initScroll()
        })
    },
    watch: {
      data: function(){
        setTimeout(() => {
          this.refresh()
        },20)
      }
    },
    methods: {
      _initScroll(){
        this.scroll = new BScroll(this.$refs.wrapper, {
           click : this.click,
           probeType : this.probeType
        })
      },
      enable(){
        this.scroll && this.scroll.enable()
      },
      disable(){
        this.scroll && this.scroll.disable()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      scrollTo(){
        this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
      },
      scrollToElement(){
        this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 
</style>