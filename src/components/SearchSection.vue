<template>
    <div>
      <section class="search search--pb seaarch--pt container">
        <h3 class="search__title">What to search?</h3>   
        <div class="search__item">
            <button class="search__button" type="button">
                <img class="search__buttim-img" src="../assets/imgs/search/search1.svg" alt="img">
            </button>
            <p class="search__text">House</p>
        </div>
        <div class="search__item">
            <button class="search__button search__button--yellow" type="button">
                <img class="search__buttim-img" src="../assets/imgs/search/search2.svg" alt="img">
            </button>
            <p class="search__text">Apartment</p>
        </div>
        <div class="search__item">
            <button class="search__button search__button--grey" type="button">
                <img class="search__buttim-img" src="../assets/imgs/search/search3.svg" alt="img">
            </button>
            <p class="search__text">Commercial 
                Real Estate</p>
        </div>
        </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchSection'
  }
  </script>