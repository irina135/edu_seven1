<template>
    <div class="slider--wrap">
        <div class="slider"
        :style="{ 'margin-left': '-' + (this.itemWidth * currentSlideIndex) + 'px'}" 
        >
            <vCarouselItem
            v-for="item in carouselItems"
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
            carouselItems: this.carousel_data,
            itemWidth: 280,
        }
    }, 
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0){
                this.currentSlideIndex--;
                this.carouselItems.pop(this.carousel_data[this.currentSlideIndex])
            }  
        },
        nextSlide() {
            const availableScreenWidth = window.innerWidth;  
            if (availableScreenWidth > 1440)  {
                if (this.currentSlideIndex >= this.carousel_data.length - 1){
                this.currentSlideIndex = 0;
                }
            else { 
                this.currentSlideIndex++;
                this.carouselItems.push(this.carousel_data[this.currentSlideIndex - 1]);
                }
            } else {
                this.itemWidth = 233;
                if (this.currentSlideIndex >= this.carousel_data.length - 1){
                this.currentSlideIndex = 0;
                }
            else { 
                this.currentSlideIndex++;
                this.carouselItems.push(this.carousel_data[this.currentSlideIndex - 1]);
                }
            }
        }
    }
}
</script>