<template>
  <router-view/>
  <div class="goUp" @click="goUp()"><fonts-icon icon="chevron-up"/></div>
</template>
<script>
export default{
  methods:{
    goUp(){
      document.getElementById('header').scrollIntoView()
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
*,*::before,*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
.row{
  width: 100%;
  max-width: 1080px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.goUp{
  font-size: 18px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: #fff;
  background-color: #000;
  position: fixed;
  right: 20px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .25s;
  &:hover{
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.2);
  }
}
</style>
