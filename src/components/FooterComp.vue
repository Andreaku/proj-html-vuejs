<template>
  <div class="footer">
    <div class="footer-content row">
      <div class="col1">
        <img src="@/assets/images/nexgen-logo.svg" alt="logo" class="logo">
        <p class="functional-text">A Functional HTML Template for Corporate & Business.</p>
        <p class="contact-item"><fonts-icon icon="phone" class="mr-1"/>+1(305) 1234-5678</p>
        <p class="contact-item"><fonts-icon icon="envelope" class="mr-1"/>hello.@example.com</p>
        <p class="contact-item"><fonts-icon icon="location-dot" class="mr-1"/>Main Avenue, 987</p>
        <div class="getBtn">get in touch</div>
      </div>
      <div class="col">
        <p class="heading">about</p>
        <ul class="items">
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />The Company</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />Institutional</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />Social & Events</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />Innovation</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />Evironment</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />Technology</li>
        </ul>
      </div>
      <div class="col">
        <p class="heading">services</p>
        <ul class="items">
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />audit & assurance</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />financial advisory</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />analytics m&a</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />middle marketing</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />legal consulting</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />regulatory risk</li>
        </ul>
      </div>
      <div class="col">
        <p class="heading">support</p>
        <ul class="items">
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />responsibility</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />terms of use</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />about cookies</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />privacy</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />accessibility</li>
          <li class="item"><fonts-icon icon="chevron-right" class="mr-2" />information</li>
        </ul>
      </div>
    </div>
    <div class="copyright-bar">
      <div class="row flex-between">
        <p class="left">Enjoy the low price, We are tracking any intention of piracy</p>
        <p class="right">&copy; 2020 NEXGEN is Proudly Powered by <span class="text-primary">Codings</span>.</p>
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
/* #1c2224 */
.footer{
  width: 100%;
  background-color: #121117;
}
.footer-content{
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-content: space-between;
  .col1{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: #adb0b0;
      .logo{
        height: 45px;
      }
      .functional-text{
        margin: 15px 0;
      }
      .contact-item{
        margin-bottom: 10px;
      }
      .getBtn{
        margin-top: 20px;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;
        border: 2px solid #048383;
        padding: 10px 25px;
        border-radius: 10px;
        display: inline-block;
        cursor: pointer;
      }
    }
  .col{
    height: 100%;
    padding: 30px 50px;
    border-radius: 15px;
    background-color:#5c5e5e1e;
    .heading{
      font-size: 24px;
      font-weight: 700;
      text-transform: capitalize;
      color: #fff;
      margin-bottom: 25px;
    }
    .items{
      list-style: none;
      margin-top: 20px;
      .item{
        color: #adb0b0;
        margin-bottom: 10px;
      }
    }
  }
  
}
.copyright-bar{
  background-color: #1c2224;
  color: #e8eceace;
  div{
    padding: 40px;
  }
  p{
    font-size: 13px;
  }
}
</style>