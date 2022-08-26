<template>
  <div id="teamExpert">
     <div class="content row flex-between">
        <div class="left">
            <p class="sub-heading text-up">We like what we do</p>
            <div class="main-heading text-cap"><span class="the">Team</span> of Expert</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione odit quam animi cupiditate ut, dolore minima ad esse! Ipsa, rerum aliquam. Nostrum assumenda nulla tempore ducimus voluptatibus, eveniet cum, quasi, incidunt ab dolor ipsa.</p>
            <div class="cards">
                <div class="card" v-for="card in cards" :key="card">
                    <img :src="require(`@/assets/images/${card.img}`)" class="thumbnail" alt="">
                    <div class="details">
                        <p class="name">{{card.name}}</p>
                        <p class="designation">{{card.designation}}</p>
                        <div class="social-icons flex">
                            <img src="@/assets/images/fb.png" class="social-icon" alt="">
                            <img src="@/assets/images/twitter.png" class="social-icon" alt="">
                            <img src="@/assets/images/linkedin.png" class="social-icon" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="right">
            <p class="title text-cap">President Speech</p>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum mollitia iusto?</p>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate a saepe soluta dolore corrupti ducimus quisquam et nihil rem quis.</p>
            <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, veniam aspernatur? Mollitia ex deleniti sequi similique vero fugit!</p>
            <p class="author text-cap">T. Johnson</p>
            <span class="quote"><fonts-icon icon="quote-right"/></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            cards:[
                {img:'team-1.jpg', name:'david cooper', designation:'cto & co-founder'},
                {img:'team-2.jpg', name:'oliver jones', designation:'chief procurement'},
                {img:'team-3.jpg', name:'emma lopez', designation:'chief marketing'},
                {img:'team-4.jpg', name:'t. johnson', designation:'ceo & president'},
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/customClasses.scss';

#teamExpert{
  width: 100%;
  background-color: #121117;
  color: #adb0b0;
  padding: 120px 0;
}
.content{
    align-items: flex-end;
    .left{  
        width: 55%;
        .sub-heading{
            color: #45bbbc;
            font-weight: 500;
        }
        .main-heading{
            line-height: 80px;
            font-size: 48px;
            font-weight: 900;
            color: #fff;
            .the{
                padding: 5px 15px;
                border-radius: 5px;
                background-color: #0483837e;
            }
        }
        p{
            font-size: 14px;
            margin-bottom: 10px;
        }
        .cards{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            margin-top: 30px;

            .card{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .thumbnail{
                    height: 110px;
                    border-radius: 10px;
                    margin-right: 20px;
                }
                .details{
                    .name{
                        font-size: 18px;
                        color: #fff;
                        text-transform: capitalize;
                    }
                    .designation{
                        font-size: 14px;
                        text-transform: uppercase;
                    }
                    .social-icons{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .social-icon{
                            width: 20px;
                            margin-right: 10px;
                        }
                    }
                }


            }
        }
    }
    .right{
        position: relative;
        width: 30%;
        height: 100%;
        background-color: #22918e;
        padding: 25px;
        border-radius: 5px;

        .title{
            font-size: 22px;
            font-weight: 700;
            color: #fff;
            line-height: 34px;
        }
        .paragraph{
            font-size: 14px;
            color: #e8ecea;
            margin-bottom: 15px;

        }
        .author{
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            line-height: 34px;
        }
        .quote{
            position: absolute;
            right: 20px;
            bottom: 20px;
            color: #adb0b080;
            font-size: 30px;
        }
    }
}
</style>