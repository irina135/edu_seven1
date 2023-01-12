<template>
  <HeaderComponent></HeaderComponent>
  <TitleLink
  :title="popularObject[0].title"
  ></TitleLink>
  <vCarouselVue
  :carousel_data="slidrtItem"
  ></vCarouselVue>
  <TitleLink
  :title="bestObject[0].title"
  ></TitleLink>
  <div class="card__wrap container">
    <CardComponent v-for="(card, index) in verticalCards"
    :key="index"
    :houseArea="card.houseArea"
    :bedrooms="card.bedrooms"
    :bathrooms="card.bathrooms"
    :plot="card.plot"
    :furnished="card.furnished"
    :cctv="card.cctv"
    :terrace="card.terrace"
    :imgUrls="card.imgUrls"
    :class="verticalCardWrap"
    ></CardComponent> 
  </div>
  <VideoSection></VideoSection>
  <TitleLink
  :title="newObjects[0].title"
  ></TitleLink>
  <div class="height24"></div>
  <div class="card__wrap container">
    <CardComponent v-for="(card, index) in cardsHorizontal"
    :key="index"
    :houseArea="card.houseArea"
    :bedrooms="card.bedrooms"
    :bathrooms="card.bathrooms"
    :plot="card.plot"
    :furnished="card.furnished"
    :cctv="card.cctv"
    :terrace="card.terrace"
    :imgUrls="card.imgUrls"
    :class="horizontalCard"
    ></CardComponent> 
  </div>
  <div class="height140"></div>
  <InfoSection></InfoSection>
  <SearchSection></SearchSection>
  <FooterConponentVue></FooterConponentVue>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import TitleLink from './components/TitleLink';
import VideoSection from './components/VideoSection';
import InfoSection from './components/InfoSection';
import SearchSection from './components/SearchSection.vue';
import FooterConponentVue from './components/FooterConponent.vue';
import CardComponent from './components/CardComponent.vue'
import vCarouselVue from './components/v-carousel.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent, TitleLink, VideoSection, InfoSection, SearchSection, FooterConponentVue, CardComponent, vCarouselVue
  },
  data(){
    return {
      verticalCard: {
        verticalCardWrap: true
      },
      horizontalCard: {
        horizontalCardWrap: true
      },
      verticalCards: [
                {
                  houseArea: '28',
                  bedrooms: '4',
                  bathrooms: '10', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/best-object/best-object.png")
                },
                {
                  houseArea: '27',
                  bedrooms: '1',
                  bathrooms: '6', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/best-object/best-oblecta.png")
                },
            ],
      cardsHorizontal: [
                {
                  houseArea: '28',
                  bedrooms: '4',
                  bathrooms: '10', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objecta.png"),
                  price: 130000
                },
                {
                  houseArea: '27',
                  bedrooms: '1',
                  bathrooms: '6', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objectb.png"),
                  price: 500000
                },
                {
                  houseArea: '77',
                  bedrooms: '2',
                  bathrooms: '2', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objectc.png"),
                  price: 130000
                },  
                {
                  houseArea: '28',
                  bedrooms: '4',
                  bathrooms: '10', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objectd.png"),
                  price: 300000
                },
                {
                  houseArea: '28',
                  bedrooms: '4',
                  bathrooms: '10', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objecta.png"),
                  price: 700
                },
                {
                  houseArea: '27',
                  bedrooms: '1',
                  bathrooms: '6', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objectb.png"),
                  price: 130000
                },
                {
                  houseArea: '28',
                  bedrooms: '4',
                  bathrooms: '10', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objecta.png"),
                  price: 800000
                },
                {
                  houseArea: '27',
                  bedrooms: '1',
                  bathrooms: '6', 
                  plot: '68',
                  furnished: 'furnished',
                  CCTV: 'CCTV',
                  terrace: 'terrace',  
                  imgUrls: require("../../project/src/assets/imgs/new-object/new-objectb.png"),
                  price: 700000
                },

      ],
      popularObject: [
        {
          title: 'Popular areas'
        }
      ],
      bestObject:[
        {
          title: 'Best objects'
        }
      ],
      newObjects: [
        {
          title: 'New objects'
        }
      ],
      slidrtItem: [
        {id: 1, itemTitle: 'Athens', itemNumber: '117', itemText: 'objects', img: 'slider-img1.png'},
        {id: 2, itemTitle: 'Thessaloniki', itemNumber: '98', itemText: 'objects', img: 'slider-img2.png'},
        {id: 3, itemTitle: 'Patras', itemNumber: '105', itemText: 'objects', img: 'slider-img3.png'},
        {id: 4, itemTitle: 'Chania', itemNumber: '991', itemText: 'objects', img: 'slider-img4.png'},
        {id: 5, itemTitle: 'Heraklion', itemNumber: '96', itemText: 'objects', img: 'slider-img5.png'},
        {id: 1, itemTitle: 'Rhodes', itemNumber: '117', itemText: 'objects', img: 'slider-img1.png'},
        {id: 2, itemTitle: 'Rhodes', itemNumber: '98', itemText: 'objects', img: 'slider-img2.png'},
        {id: 1, itemTitle: 'Rhodes', itemNumber: '117', itemText: 'objects', img: 'slider-img1.png'},
        {id: 2, itemTitle: 'Rhodes', itemNumber: '98', itemText: 'objects', img: 'slider-img2.png'},
      ]      
    }
  }
}

</script>

<style>

</style>
