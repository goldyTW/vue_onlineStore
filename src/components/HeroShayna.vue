<template>
     <section class="hero-section">
  <agile class="agile" :options="myOptions">
        <div class="slide" style="background-image:url('/img/hero-1.jpg'); height:70vh;">
             <div class="container mt-5 pt-5">
                    <div class="row mt-5">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
        </div>
        <div class="slide" style="background-image:url('/img/hero-2.jpg'); height:70vh;">
            <div class="container mt-5 pt-5">
                    <div class="row mt-5">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
        </div>
         <div class="slide" style="background-image:url('/img/hero-3.jpg'); height:70vh;">
            <div class="container mt-5 pt-5">
                    <div class="row mt-5">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
        </div>
    </agile>
    </section>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
    name:'HeroShayna',
    data () {
        return {
            myOptions: {
                navButtons: false,
                
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            dots: false
                        }
                    },
                    
                    {
                        breakpoint: 900,
                        settings: {
                            navButtons: false,
                            dots: false,
                            infinite: true
                        }
                    }
                ]
            }
        }
    },
    components: {
        agile: VueAgile
    }
}

</script>

