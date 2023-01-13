<template>
    <div class="container">
        <header>
            <div class="header__head">
                <img class="logo" src="../assets/imgs/header/header-logo.png" alt="Logo">
                <div class="header__links-wrap header__links--position">
                    <a class="header__link" href="#">Sale</a>
                    <a class="header__link" href="#">Rent</a>
                </div>
                <div class="header__btn-wrap">
                    <button class="header__btn-language" type="button">
                        <img src="../assets/imgs/header/global.png" alt="img">
                    </button>
                    <div class="header__btn-language-content">
                        <p>en</p>
                        <p>&bull;</p>
                        <p>&#36;</p>
                    </div>
                    <button class="header__btn-avatar" type="button">
                    </button>
                    <div class="header__message">
                        <p>2</p>
                    </div>
                </div>
            </div>
            <div class="header__banner">
                <h1 class="header__title">The most convenient real estate directory in Greece!</h1>
                <div class="header__filter">
                    <img class="header__filter-img" src="../assets/imgs/section-main/main-img1.svg" alt="img">
                    <div class="header__filter-wrap">
                        <button class="header__filter-btn" type="button">
                            District
                        </button>
                        <p class="header__filter-text">In what area?</p>
                    </div>
                    <div class="header__filter-line">
                        </div>
                    <img class="header__filter-img" src="../assets/imgs/section-main/main-img2.svg" alt="img">
                    <div class="header__filter-wrap">
                        <button class="header__filter-btn" type="button">
                            District
                        </button>
                        <p class="header__filter-text">In what area?</p>
                    </div>
                    <div class="header__filter-line">
                        </div>
                    <img class="header__filter-img" src="../assets/imgs/section-main/main-img3.svg" alt="img">
                    <div class="header__filter-wrap">
                        <button class="header__filter-btn" type="button">
                            District
                        </button>
                        <p class="header__filter-text">In what area?</p>
                    </div>
                    <div class="header__filter-btn-submit">
                        <img class="header__filter-btn-img" src="../assets/imgs/section-main/serach-btn.svg" alt="img">
                        <img class="header__filter-btn-img-mobile" src="../assets/imgs/section-main/mobile2.svg" alt="img">
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>

