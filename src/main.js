import { createApp } from 'vue'
import App from './App.vue'
import './style/main.css'
//import './js/index'

//slider


/* eslint-disable no-new */



createApp(App).mount('#app')




//video
const videoBtn = document.querySelector('#video-btn');
const videoFile = document.querySelector('#video-file');
const videoOverly = document.querySelector('#video-overly');

videoBtn.addEventListener('click', function(){
  if (videoFile.paused){
    videoFile.play();
    videoFile.classList.remove('disply-none');
    videoOverly.classList.add('disply-none');
  } else {
    videoFile.classList.add('disply-none');
    videoOverly.classList.remove('disply-none');
    videoFile.pause();
  }
})
