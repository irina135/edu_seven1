<template>
    <div>
        <header class="container header">
        <div class="header__logo">
            <img src="../assets/imgs/header/header-logo.png" alt="Logo">
        </div>
        <div class="header__link">
            <a href="#">Sale</a>
            <a href="#">Rent</a>
        </div>
        <div class="header__btn">
            <button type="button">
                <img src="../assets/imgs/header/global.png">
            </button>
            <div class="language">
                <p>en</p>
                <p>&bull;</p>
                <p>&#36;</p>
            </div>
            <button class="avatar" type="button">
            </button>
            <div class="message">
                <p>2</p>
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

