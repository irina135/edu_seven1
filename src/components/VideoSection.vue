<template>
    <div>
        <section class="container video video--pt video--pb">
            <div class="video__content">
                <h2>Why choose SEVEN?</h2>
                <p>Our company will identify real estate needs and offer the best solutions, strengthening our leading position in Greece.</p>
                <p>Our mission for property owners - sellers and landlords - is to quickly and conveniently secure the high value of their property.</p>
                <button class="video__btn" id="video-btn">
                    <img src="../assets/imgs/video/video-btn.svg">
                    Watch video
                </button>
            </div>
            <div class="video__video">
                <video class="video__object disply-none " id="video-file">
                    <source src="../assets/imgs/video/40009018_volunteers-serving-free-food_by_annastills_preview.mp4" type="video/mp4">
                </video>
                <div class="overly" id="video-overly">  
                </div>
            </div> 

    </section>
    </div>   
</template>
<script>
export default {
    name: 'VideoSection'
}
</script>