<template>
        <div class="new-object__card">
                <!--<img src="../assets/imgs/new-object/new-objecta.png" alt="best-object">-->
                <img
                :src="imgUrls" 
                >
                <div>
                    <p class="address">Apartment, Thessaloniki</p>
                    <p class="name">Mirò Dorcol</p>
                    <div class="content-wrap">
                        <p class="house--area content">{{ houseArea }} м2</p><p class="content">&bull;</p>
                        <p class="bedrooms content">{{ bedrooms }} bedrooms</p><p class="content dot">&bull;</p>
                        <p class="terrace content">{{ baathrooms}}</p>
                        <p class="land-area content">{{ plot }} ha plot</p><p class="content dot">&bull;</p><br>
                        <p class="furnished content">{{ furnished }}</p><p class="content dot">&bull;</p>
                        <p class="cctv content">{{ cctv }}</p><p class="content dot">&bull;</p>
                        <p class="terrace content">{{ terrace }}</p>
                    </div>
                    <p class="price"><span>&#36;</span>{{ price }}</p>
                </div>
            </div>
  </template>
  
  <script>
  export default {
    name: 'CardLittleComponent', 
    props: ['houseArea','bedrooms', 'bathrooms', 'plot', 'furnished', 'cctv', 'terrace', 'imgUrls', 'price'],

  }
  </script>