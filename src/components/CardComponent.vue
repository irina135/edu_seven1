<template>
        <div class="best-object__card disply-none">
            <img
            :src="imgUrls" 
            >
            <div class="card--wrap">
                <p class="address">Apartment, Thessaloniki</p>
                <p class="price"><span>&#36;</span>620000</p>
            </div>
            <p class="name">Mirò Dorcol</p>
            <div class="content-wrap">
                <p class="house--area content">{{ houseArea }} м2</p><p class="content">&bull;</p>
                <p class="bedrooms content">{{ bedrooms }} bedrooms</p><p class="content">&bull;</p>
                <p class="terrace content">{{ bathrooms }}</p>
                <p class="land-area content">{{ plot }} ha plot</p><p class="content">&bull;</p>
                <p class="furnished content">{{ furnished }}</p><p class="content">&bull;</p>
                <p class="cctv content">{{ cctv }}</p><p class="content">&bull;</p>
                <p class="terrace content">{{ terrace }}</p>
            </div>
        </div>
</template>
<script>
export default {
    name: 'CardComponent',
    props: ['houseArea','bedrooms', 'bathrooms', 'plot', 'furnished', 'cctv', 'terrace', 'imgUrls'],
    data() {
        return {
                   text: 'text',
                   
                
        }
    }
}
</script>