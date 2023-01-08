<template>
    <div>
        <section class="best-object best-object--pt container">
        <div class="best-object--wrap">

            <div class="best-object__card">
                <img src="../assets/imgs/best-object/best-object.png" alt="best-object">
                <div class="card--wrap">
                    <p class="address">Apartment, Thessaloniki</p>
                    <p class="price"><span>&#36;</span>620000</p>
                </div>
                <p class="name">Mirò Dorcol</p>
                <div class="content-wrap">
                    <p class="house--area content">{{ houseArea }} м²</p><p class="content">&bull;</p>
                    <p class="bedrooms content">{{ bedrooms }} bedrooms</p><p class="content">&bull;</p>
                    
                    <p class="land-area content">68 ha plot</p><p class="content">&bull;</p>
                    <p class="furnished content">furnished</p><p class="content">&bull;</p>
                    <p class="cctv content">CCTV</p><p class="content">&bull;</p>
                    <p class="terrace content">terrace</p>
                </div>
            </div>
            <div class="best-object__card">
                <img src="../assets/imgs/best-object/best-oblect1.png" alt="best-object">
                <div class="card--wrap">
                    <p class="address">Apartment, Thessaloniki</p>
                    <p class="price"><span>&#36;</span>1300000</p>
                </div>
                <p class="name">Mirò Dorcol</p>
                <div class="content-wrap">
                    <p class="house--area content">289 м²</p><p class="content">&bull;</p>
                    <p class="bedrooms content">4 bedrooms</p><p class="content">&bull;</p>
                    <p class="bathrooms content">2 bathrooms</p><p class="content">&bull;</p>
                    <p class="land-area content">68 ha plot</p><p class="content">&bull;</p>
                    <p class="furnished content">furnished</p><p class="content">&bull;</p>
                    <p class="cctv content">CCTV</p><p class="content">&bull;</p>
                    <p class="terrace content">terrace</p>
                </div>
            </div>

            <div class="best-object__card">
                <img src="../assets/imgs/best-object/best-object.png" alt="best-object">
                <div class="card--wrap">
                    <p class="address">Apartment, Thessaloniki</p>
                    <p class="price"><span>&#36;</span>620000</p>
                </div>
                <p class="name">Mirò Dorcol</p>
                <div class="content-wrap">
                    <p class="house--area content">{{ houseArea }} м²</p><p class="content">&bull;</p>
                    <p class="bedrooms content">4 bedrooms</p><p class="content">&bull;</p>
                    <p class="bathrooms content">2 bathrooms</p><p class="content">&bull;</p>
                    <p class="land-area content">68 ha plot</p><p class="content">&bull;</p>
                    <p class="furnished content">furnished</p><p class="content">&bull;</p>
                    <p class="cctv content">CCTV</p><p class="content">&bull;</p>
                    <p class="terrace content">terrace</p>
                </div>
            </div>
        

        </div>
    
    </section>
    </div>
</template>
<script>
export default {
    name:'BestObjects',
   data() {
        return {
                    houseArea: '555',
                    bedrooms: '7',
                    bathrooms: '5',
                    landArea: '15',
                    furnished: '1'  
                
        }
    }
}
</script>