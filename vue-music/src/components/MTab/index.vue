<template>
<ul class="m-tab">
    <router-link tag="li" class="m-tab-item" to="/recommend">
        <span class="link">推荐</span>
    </router-link>
    <router-link tag="li" class="m-tab-item" to="/singer">
        <span class="link">歌手</span>
    </router-link>
    <router-link tag="li" class="m-tab-item" to="/rank">
        <span class="link">排行</span>
    </router-link>
    <router-link tag="li" class="m-tab-item" to="/search">
        <span class="link">搜索</span>
    </router-link>
</ul>
    
    
</template>

<script>
</script>

<style scoped lang="scss">
    .m-tab {
        display: flex;
        height: 1rem;
        line-height: 1rem;
        font-size: .37rem;

        &-item {
            flex: 1;
            text-align: center;

            .link {
                padding-bottom: .1rem;
                color: #ffcd32;
            }
        }

        .router-link-active {
            span {
                color: #ffcd32;
                border-bottom: 3px solid #ffcd32;
            }
        }
    }

</style>