<template>
  <div class="header">
    <div class="contact-bar py-3">
        <div class="row flex-between">
          <div class="flex text-cap">
            <fonts-icon icon="clock" class="mr-1"/>
            <p>open hours: mon - sat - 9:00 - 18:00</p>
          </div>
          <div class="flex">
            <p><fonts-icon icon="phone" class="mr-1"/>+1(305) 1234-5678</p>
            <p class="mx-4"><fonts-icon icon="envelope" class="mr-1"/>hello@example.com</p>
            <div class="flex">social icons</div>
          </div>
        </div>
    </div>
    <div class="hero">
      <div class="navbar row py-3 flex-between">
        <img src="@/assets/images/nexgen-logo.svg" alt="logo" class="logo">
        <ul class="items flex">
          <li class="item mr-4 "><router-link to="#" class="text-up">home</router-link></li>
          <li class="item mr-4 text-up"><router-link to="#">about</router-link></li>
          <li class="item mr-4 text-up"><router-link to="#">services</router-link></li>
          <li class="item mr-4 text-up"><router-link to="#">process</router-link></li>
          <li class="item mr-4 text-up"><router-link to="#">team</router-link></li>
          <li class="item mr-4 text-up"><router-link to="#">blog</router-link></li>
          <li class="item text-up btn">get in touch</li>
        </ul>
      </div>
      <div class="flex-end h-100 row">
        <div class="header-content">
          <p class="fusion-text text-up">fusions & acquisitions</p>
          <h1 class="main-heading">insurance<br>consulting</h1>
          <form>
            <input type="text" placeholder="name">
            <input type="email" placeholder="email">
            <input type="text" placeholder="phone">
            <select name="moreinfo" id="">
              <option value="" disabled selected>More info</option>
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
            </select>
          </form>
          <div class="flex mt-4">
            <div class="btn">get in touch</div>
            <div class="btn readmore-btn">read more</div>
          </div>
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
.header{
  width: 100%;
}
.contact-bar{
  background-color: #3d4955;
  color: #e8ecea;
  font-size: 14px;
}

.hero{
  width: 100%;
  height: calc(100vh - 40px);
  background-image: url("@/assets/images/bg-6.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  .navbar{
    .logo{
      height: 50px;
    }
    .items{
      list-style: none;
      align-items: center;

      .item a{
        text-decoration: none;
        color: #1c2224;
        transition: all .25s;
      }
      .item:hover a{
          color: #048383;
          font-weight: 500;
      }
    }
  }
}
.header-content{
  margin-top: -10%;
  max-width: 700px;
  .fusion-text{
    font-size: 16px;
    font-weight: 500;
    color: #45bbbc;
    margin-bottom: 14px;
  }
  .main-heading{
    font-size: 46px;
    font-weight: 900;
    text-transform: capitalize;
    color: #000;
  }
  form{ 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 15px 0;
    select,
    input{
      padding: 10px 15px;
      background-color: #aeb0b07e;
      color: #5c5e5e;
      text-transform: uppercase;
      border: none;
      outline: none;
      border-radius: 5px;
    }
  }
  

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
.readmore-btn{
    background: transparent;
    color: #048383;
    border: 2px solid #048383;
    margin-left: 20px;
    &:hover{
      background-color: #048383;
      color: #fff;
  }
  }
</style>