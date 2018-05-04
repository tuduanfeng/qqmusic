<template>
  <div id="app">
    <div class="m-header">
        <h1 class="m-header-text">QQ Music</h1>
    </div>
    <m-tab></m-tab>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import MTab from './components/MTab'    
export default {
    components:{MTab},
    data(){
        return{
            
        }
    },
    created(){
        

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    body{
        background: #222;
    }
    .m-header{
        &-text{
            text-align: center;
            color: #ffcd32;
            line-height: .8rem;
            font-size: .3rem;
        }
    } 

</style>
