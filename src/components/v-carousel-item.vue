<template>
    <div class="slider__item">
        <img :src=" require('../assets/imgs/slider/' + item_data.img)">
        <h3>{{ item_data.itemTitle }}</h3>
        <p>{{ item_data.itemNumber }}</p><a href="#">{{ item_data.itemText }}</a>
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