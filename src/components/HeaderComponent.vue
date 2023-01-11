<template>
    <div class="container">
        <header>
            <div class="header__head">
                <img class="logo" src="../assets/imgs/header/header-logo.png" alt="Logo">
                <div class="header__links-wrap">
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
        </header>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>

