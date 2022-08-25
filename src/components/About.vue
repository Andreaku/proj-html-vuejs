<template>
  <div id="about">
    <div class="about-content row flex-between">
        <div class="left">
            <p class="sub-heading text-up">about the network</p>
            <div class="main-heading text-cap"><span class="the">the</span> company</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione odit quam animi cupiditate ut, dolore minima ad esse! Ipsa, rerum aliquam. Nostrum assumenda nulla tempore ducimus voluptatibus, eveniet cum, quasi, incidunt ab dolor ipsa.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et unde ducimus quibusdam veniam veritatis.</p>
        </div>
        <div class="right">
            <div class="item">
                <p class="heading text-cap"><fonts-icon icon="ribbon" class="icon mr-2"/>tradition</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsa?</p>
            </div>
            <div class="item">
                <p class="heading text-cap"><fonts-icon icon="lock" class="icon mr-2"/>security</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsa?</p>
            </div>
            <div class="item">
                <p class="heading text-cap"><fonts-icon icon="certificate" class="icon mr-2"/>certificate</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsa?</p>
            </div>
            <div class="item">
                <p class="heading text-cap"><fonts-icon icon="graduation-cap" class="icon mr-2"/>expertise</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsa?</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/customClasses.scss';

#about{
  width: 100%;
  background-color: #121117;
  color: #adb0b0;
  padding: 120px 0;
}
.about-content{
    .left{  
        width: 45%;
        .sub-heading{
            color: #45bbbc;
            font-weight: 500;
        }
        .main-heading{
            line-height: 80px;
            font-size: 38px;
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
    }
    .right{
        width: 45%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        justify-content: center;
        .item{
            font-size: 14px;
            .heading{
                font-size: 22px;
                font-weight: 500;
                text-transform: capitalize;
                color: #fff;
                margin-bottom: 15px;
            }
            .icon{
                color: #45bbbc;
            }
            
        }
    }
}
</style>