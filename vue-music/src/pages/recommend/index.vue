<template>
    <div class="recommend" ref="listWarp">

        <Scroll ref="scrollHook">
            <Slider v-if="slideList.length" :slideList="slideList"></Slider>
            <section class="recommend-list" v-if="songList.length > 0">
                <header class="recommend-list-header">热门歌单推荐</header>
                <ul>
                    <router-link :to="`/recommend/${item.id}`" v-for="(item, index) in songList" class="list-item" :key="index" tag="li">
                        <div class="list-item-left">
                            <img v-lazy="item.picUrl">
                        </div>
                        <div class="list-item-right">
                            <h4 class="list-item-right-header" v-html="item.songListDesc"></h4>
                            <!--<p class="list-item-right-desc" v-html="item.dissname"></p>-->
                        </div>
                    </router-link>
                </ul>
            </section>
        </Scroll>
        
    </div>
</template>

<script>
    import Slider from '../../components/Slider'
    import Scroll from '../../components/Scroll'
    export default{
        components:{Slider,Scroll},
        data(){
            return{
                slideList:[],
                songList:[]
            }
        },
        created(){
            
            this.axios.get('/api/getSliders')
            .then(res=>{
                console.log(res)
                this.slideList = res.data.data.slider
                this.songList = res.data.data.songList
            }).catch(res=>{
                console.log(res)
            });
            
            
        },
        methods:{
            
            
        }
        
        
        
        
        
    }
</script>

<style>
</style>