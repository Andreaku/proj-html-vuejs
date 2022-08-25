<template>
  <div id="processManagement">
     <div class="content row flex-col-center">
        <div class="top flex-col-center">
            <p class="sub-heading text-up">how it work in practice</p>
            <div class="main-heading text-cap"><span class="the">process</span> management</div>
            <p>Lorem ipsum dolor sit amet consectetur , rerum aliquam. Nostrum assumenda nulla tempore ducimus voluptatibus, eveniet cum, quasi, incidunt ab dolor ipsa.</p>
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
</style>