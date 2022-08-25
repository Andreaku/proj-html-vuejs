<template>
  <div id="latestNews">
        <div class="content row">
        <p class="sub-heading">our editorial content</p>
         <p class="main-heading">latest <span class="service">news</span></p>   
         <div class=" flex-between">
            <p class="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nesciunt debitis nemo nulla distinctio eum numquam porro voluptatibus ullam consectetur?</p>
            <div class="btn text-up">see all</div>
         </div>
         <div class="cards">
            <div class="card" v-for="card in cards" :key="card">
                <img :src="require(`@/assets/images/${card.img}`)" class="image" alt="">
                <div class="overlay"></div>
                <p class="title">{{card.title}}</p>
            </div>
         </div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            cards:[
                {img:'news-1.jpg',title:'Increasing creativity is possible for everyone'},
                {img:'news-2.jpg',title:'Because market research is part  of the business plan'},
                {img:'news-3.jpg',title:'Working from home is now a trend'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/customClasses.scss';
#latestNews{
    width: 100%;
    background-color: #e8ecea;
    padding: 120px 0;
}
.content{
    .sub-heading{
        font-size: 14px;
        color: #45bbbc;
        font-weight: 500;
        text-transform: uppercase;
    }
    .main-heading{
        line-height: 80px;
        font-size: 38px;
        font-weight: 900;
        color: #1c2224;
        text-transform: capitalize;
        .service{
            padding: 5px 15px;
            border-radius: 5px;
            color: #078282;
            background-color: #0483837e;
        }
    }
    .paragraph{
        width: 70%;
        font-size: 14px;
        color: #aeb0b0;
    }
    .btn{
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: #048383;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        transition: all .2s;
        &:hover{
            background-color: #007777;
        }
    }
    .cards{
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
        justify-content: center;

        .card{
            position: relative;
            width: 100%;
            overflow: hidden;
            border-radius: 10px;
            .overlay{
                width: 100%;
                height: 110%;
                background-color: #06080880;
                position: absolute;
                top: 0;
                left: 0;
            }
            .image{
                border-radius: 10px;
                width: 100%;

            }
            
           .title{
                position: relative;
                padding: 20px;
                margin-top: -90px;                
                text-transform: capitalize;
                font-size: 16px;
                font-weight: 700;
                text-align: center;
                color: #ffffff;
                z-index: 3;
            }

        }
    }
}
</style>