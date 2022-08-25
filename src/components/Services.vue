<template>
  <div id="services">
    <div class="content row">
        <p class="sub-heading">our business areas</p>
         <p class="main-heading">Excellence in <span class="service">Services</span></p>   
         <div class=" flex-between">
            <p class="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nesciunt debitis nemo nulla distinctio eum numquam porro voluptatibus ullam consectetur?</p>
            <div class="btn text-up">see all</div>
         </div>
         <div class="cards">
            <div class="card" v-for="card in cards" :key="card">
                <span class="right-arrow"><fonts-icon icon="arrow-right"/></span>
                <p class="icon">{{card.iconSrc}}</p>
                <p class="heading">{{card.heading}}</p>
                <p class="snippet">{{card.snippet}}</p>
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
                {
                    iconSrc:'icon to be add',
                    heading:'Audit & assurance',
                    snippet:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, adipisci!'  
                },
                {
                    iconSrc:'icon to be add',
                    heading:'financial advisory',
                    snippet:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, adipisci!'  
                },
                {
                    iconSrc:'icon to be add',
                    heading:'analytics and M&A',
                    snippet:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, adipisci!'  
                },
                {
                    iconSrc:'icon to be add',
                    heading:'middle marketing',
                    snippet:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, adipisci!'  
                },
                {
                    iconSrc:'icon to be add',
                    heading:'legal consulting',
                    snippet:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, adipisci!'  
                },
                {
                    iconSrc:'icon to be add',
                    heading:'regulatory risk',
                    snippet:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, adipisci!'  
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/customClasses.scss';
#services{
    width: 100%;
    background-color: #e8ecea;
    padding: 120px 0;
}
.content{
    .sub-heading{
        color: #45bbbc;
        font-weight: 500;
        text-transform: uppercase;
    }
    .main-heading{
        line-height: 80px;
        font-size: 38px;
        font-weight: 900;
        color: #1c2224;
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
        grid-gap: 20px;
        justify-content: center;

        .card{
            position: relative;
            width: 100%;
            padding: 45px 25px;
            border-radius: 10px;
            background-color: #fff;
            
            .right-arrow{
                position: absolute;
                right: 15px;
                top: 15px;
                color: #048383;
            }
            .icon{
                color: #048383;
            }
            .heading{
                line-height: 40px;
                text-transform: capitalize;
                font-size: 20px;
                font-weight: 700;
                color: #1c2224;
            }
            .snippet{
                font-size: 14px;
                color: #aeb0b0;
            }

        }
    }
}

</style>