<template>
    <div class="slider--wrap">
        <!--<div class="carousel" 
        :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}" 
        >-->
        <div class="carousel"
        :style="{ 'margin-left': '-' + (11.7 * currentSlideIndex) + '%'}" 
        >
            <vCarouselItem
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
           
            ></vCarouselItem>
        </div>
        <button @click="prevSlide">prew</button>
        <button @click="nextSlide">next</button>        
    </div>
</template>
<script>
import vCarouselItem from './v-carousel-item.vue';
export default {
    name:'v-carousel',
    components: {
        vCarouselItem
    },
    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
   data() {
        return {         
            currentSlideIndex: 0,  
        }
    }, 
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0){
                this.currentSlideIndex--
            }  
        },
        nextSlide() {
            
             if (this.currentSlideIndex >= this.carousel_data.length - 1){
               this.currentSlideIndex = 0
            }
            else {
                this.currentSlideIndex++;
            }
        }
    }
}
</script>