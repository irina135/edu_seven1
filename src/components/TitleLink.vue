<template>
    <div class="title-link container title-link--pt">
        <h2>{{ title }}</h2>
        <a href="#">All areas</a>
    </div>   
</template>
<script>
    export default {
        name: 'TitleLink',
        props: ['title'],
        data(){
            return {
                hhh: 'Best'
            }
        }
    }
</script>