<template>
        <div>
            <img class="card__img"
            :src="imgUrls" 
            >
            <div>
                <p class="card__address">Apartment, Thessaloniki</p>
                <p class="card__price"><span>&#36;</span>620000</p>
                <p class="card__name">Mirò Dorcol</p>
                <div class="card__content--wrap">
                    <p class="house--area card__content">{{ houseArea }} м2</p><p class="card__content">&bull;</p>
                    <p class="bedrooms card__content">{{ bedrooms }} bedrooms</p><p class="card__content">&bull;</p>
                    <p class="terrace card__content">{{ bathrooms }} bathrooms</p><p class="card__content">&bull;</p>
                    <p class="land-area card__content">{{ plot }} ha plot</p><p class="card__content">&bull;</p>
                    <p class="furnished card__content">{{ furnished }}</p><p class="card__content">&bull;</p>
                    <p class="cctv card__content">{{ cctv }}</p><p class="card__content">&bull;</p>
                    <p class="terrace card__content">{{ terrace }}</p>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'CardComponent',
    props: ['houseArea','bedrooms', 'bathrooms', 'plot', 'furnished', 'cctv', 'terrace', 'imgUrls'],
}
</script>