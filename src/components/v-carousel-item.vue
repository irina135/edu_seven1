<template>
    <div class="slider__item">
        <img class="slider__img" :src=" require('../assets/imgs/slider/' + item_data.img)" alt="img">
        <h3 class="slider__title">{{ item_data.itemTitle }}</h3>
        <p class="slider__data">{{ item_data.itemNumber }}</p><a class="slider__link" href="#">{{ item_data.itemText }}</a>
    </div>
</template>
<script>
export default {
    name:'v-carousel-item',
    props: {
        item_data: {
            type: Object,
            defaault: () => {}
        }
    },
   data() {
        return {           
                
        }
    }
}
</script>