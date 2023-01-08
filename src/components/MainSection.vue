<template>
    <div>
        <section class="container main">
        <h1>The most convenient real estate directory in Greece!</h1>
        <div class="main__search">  
            <img class="main__mobile-img" src="../assets/imgs/section-main/mobile1.svg" alt="Img">
            <img class="mobile--display-none" src="../assets/imgs/section-main/main-img1.svg">
            <div> 
                <button type="button">District</button>
                <p>In what area?</p>
            </div>
            <div class="main__line">
            </div>
            <img class="mobile--display-none" src="../assets/imgs/section-main/main-img2.svg">
            <div class="mobile--display-none"> 
                <button type="button">Property type</button>
                <p>What to search?</p>
            </div>
            <div class="main__line">
            </div>
            <img class="mobile--display-none" src="../assets/imgs/section-main/main-img2.svg">
            <div class="mobile--display-none"> 
                <button type="button">Price</button>
                <p>At what price?</p>
            </div>
            <button class="search-btn" type="button">
                <img class="mobile--display-none" src="../assets/imgs/section-main/serach-btn.svg">
                <img class="main__mobile-img" src="../assets/imgs/section-main/mobile2.svg">
            </button>
        </div>
    </section>
    </div>
</template>
<script>
export default {
    name: 'MainSection'
}
</script>