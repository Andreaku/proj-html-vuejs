<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
*,*::before,*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-family: 'Roboto', sans-serif;
}
.row{
  width: 100%;
  max-width: 1080px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
