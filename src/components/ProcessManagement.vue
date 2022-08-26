<template>
  <div id="processManagement">
     <div class="content row flex-col-center">
        <div class="top flex-col-center">
            <p class="sub-heading text-up">how it work in practice</p>
            <div class="main-heading text-cap"><span class="the">process</span> management</div>
            <p>Lorem ipsum dolor sit amet consectetur , rerum aliquam. Nostrum assumenda nulla tempore ducimus voluptatibus, eveniet cum, quasi, incidunt ab dolor ipsa.</p>
        </div>
    </div>
    <div class="bottom flex-center">
        <div class="h-line"></div>
        <div class="step flex-col-center" v-for="(step, index) in steps" :key="index">
            <p class="step-no flex-col-center">0{{index+1}}</p>
            <p class="title">{{step.title}}</p>
            <div class="snippet">{{step.snippet}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            steps:[
                { title:'Collection of Information', snippet:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, quod!'},
                { title:'Strategic Planning', snippet:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, quod!'},
                { title:'Assignment of resposibilities', snippet:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, quod!'},
                { title:'Formatting Process', snippet:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, quod!'},
                { title:'Continuity formalization', snippet:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, quod!'},
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/style/customClasses.scss';

#processManagement{
  width: 100%;
  background-color: #ffffff;
  color: #adb0b0;
  padding: 120px 0;
}
.content{
    .top{  
        width: 45%;
        .sub-heading{
            color: #048383;
            font-weight: 500;
        }
        .main-heading{
            line-height: 80px;
            font-size: 38px;
            font-weight: 900;
            color: #1c2224;
            margin-bottom: 15px;
            .the{
                color: #048383;
                padding: 5px 15px;
                border-radius: 5px;
                background-color: #45babc7a;
            }
        }
        p{
            text-align: center;
            font-size: 14px;
            margin-bottom: 10px;
        }
    }
}
.bottom{
    margin-top: 20px;
    width: 100%;
    position: relative;
    align-items: flex-start;
    .h-line{
        height: 5px;
        width: 100%;
        background-color: #e8ecea;
        position: absolute;
        top: 20px;
        left: 0;
    }

    .step{
        width: 20%;
        padding: 0 30px;
        z-index: 4;
        position: relative;
        .step-no{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 20px;
            font-weight: 700;
            color: #048383;
            background-color: #e8ecea;
        }
        .title{
            text-transform: capitalize;
            color: #1c2224;
            font-size: 22px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 15px;
            margin-top: 15px;
        }
        .snippet{
            font-size: 14px;
            text-align: center;

        }
    }
}
</style>