<template>
    <div class="m-header">
        <h1 class="m-header-text">QQ Music</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    created(){
//      this.axios({
//         method:"get",
//         url:'http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js',
//         headers:{
//          contentType:"jsonp"
//         }
//      })
        
     
        this.axios.get('/api/musicbox/shop/v3/data/hit/hit_newsong.js')
        .then(res=>{
            console.log(res)
        }).catch(res=>{
            console.log(res)
        });
    
    },
    methods: {

    }
}
</script>

<style>
    body{
        background: #222;
    }
    .m-header .m-header-text{
        text-align: center;
        color: #ffcd32;
        line-height: .8rem;
        font-size: .25rem;
    }

</style>