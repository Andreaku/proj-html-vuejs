<template>
  <div id="newsLetter">
    <div class="content row flex-between">
        <div class="left">
            <p class="sub-heading">newsletter</p>
            <p class="main-heading"><span class="know">know</span> first</p>
            <p class="snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos eum, totam et maiores natus!</p>
            <p class="snippet"></p>
        </div>
        <form class="right">
            <input type="text" placeholder="name">
            <input type="email" placeholder="email">
            <div class="btn">subscribe</div>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/customClasses.scss';

#newsLetter{
    width: 100%;    
    padding: 120px 0;
    height: 350px;
    background-image: url("@/assets/images/bg-1.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    .content{
        padding: 0 10%;
    .left{
        width: 40%;
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
            color: #ffffff;
            text-transform: capitalize;
            .know{
                padding: 5px 15px;
                border-radius: 5px;                
                background-color: #04838342;
            }
        }
        .snippet{
            font-size: 14px;
            color: #adb0b0;
        }
    }
    .right{
        width: 50%;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        input{
            width: 100%;
            padding: 10px 15px;
            background-color: #aeb0b07e;
            color: #505050;
            text-transform: uppercase;
            border: none;
            outline: none;
            border-radius: 5px;
            margin-bottom: 10px;
            }
        .btn{
            text-transform: uppercase;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #22918e;
            color: #fff;
            cursor: pointer;
            font-weight: 500;
            transition: all .2s;
            &:hover{
                background-color: #007777;
            }
        }
    }
}
}


</style>