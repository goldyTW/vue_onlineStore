<template>
     <div class="breacrumb-section">
        <div class="container">
            <div class="row text-left">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link :to="link"><i class="fa fa-home"></i> Home</router-link>
                        <span>{{name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import carousel from 'vue-owl-carousel'

export default {
    name:'Breadcrumbs',
    data(){
        return{
            name:'Detail',
            link:'/'
        }
    },
    components: {
        // carousel
    }
}
</script>