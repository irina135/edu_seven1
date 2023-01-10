<template>
    <div>
      <section class="search search--pb seaarch--pt container">
        <h3>What to search?</h3>   
        <div class="search__item">
            <button type="button">
                <img src="../assets/imgs/search/search1.svg">
            </button>
            <p>House</p>
        </div>
        <div class="search__item">
            <button class="button--yellow" type="button">
                <img src="../assets/imgs/search/search2.svg">
            </button>
            <p>Apartment</p>
        </div>
        <div class="search__item">
            <button class="button--grey" type="button">
                <img src="../assets/imgs/search/search3.svg">
            </button>
            <p>Commercial 
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