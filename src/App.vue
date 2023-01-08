<template>
  
  <HeaderComponent></HeaderComponent>
  <MainSection></MainSection>
  <TitleLink
  :title="popularObject[0].title"
  ></TitleLink>
  <SliderSectionVue></SliderSectionVue>
  <TitleLink
  :title="bestObject[0].title"
  ></TitleLink>
  <div class="best-object best-object--wrap best-object--pt container"> 
    <CardComponent v-for="(card, index) in cards"
    :key="index"
    :houseArea="card.houseArea"
    :bedrooms="card.bedrooms"
    :bathrooms="card.bathrooms"
    :plot="card.plot"
    :furnished="card.furnished"
    :cctv="card.cctv"
    :terrace="card.terrace"
    :imgUrls="card.imgUrls"
    ></CardComponent>
    </div>
  <VideoSection></VideoSection>
  <TitleLink
  :title="newObjects[0].title"
  ></TitleLink>
  <div class="height24"></div>
  <div class="new-object--wrap container">
  <CardLittleComponent v-for="(cardLittle, index) in cardsLittle"
  :key="index"
  :houseArea="cardLittle.houseArea"
  :bedrooms="cardLittle.bedrooms"
  :bathrooms="cardLittle.bathrooms"
  :plot="cardLittle.plot"
  :furnished="cardLittle.furnished"
  :cctv="cardLittle.CCTV"
  :terrace="cardLittle.terrace"
  :imgUrls="cardLittle.imgUrls"
  :price="cardLittle.price"
  ></CardLittleComponent>  
  </div>
  <div class="height140"></div>
  <InfoSection></InfoSection>
  <SearchSection></SearchSection>
  <FooterConponentVue></FooterConponentVue>
 

  
 
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import MainSection from './components/MainSection';
import SliderSectionVue from './components/SliderSection.vue';
import TitleLink from './components/TitleLink';
//import BestObjects from './components/BestObjects';
import VideoSection from './components/VideoSection';
//import NewObject from './components/NewObject';
import InfoSection from './components/InfoSection';
import SearchSection from './components/SearchSection.vue';
import FooterConponentVue from './components/FooterConponent.vue';
import CardComponent from './components/CardComponent.vue'
import CardLittleComponent from './components/CardLittieComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent, MainSection, TitleLink, VideoSection, InfoSection, SearchSection, FooterConponentVue, SliderSectionVue, CardComponent, CardLittleComponent
  },
  data(){
    return {
      cards: [
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
      cardsLittle: [
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
      ]      
    }
  }
}

</script>

<style>

</style>
