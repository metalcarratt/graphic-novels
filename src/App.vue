<template>
  <div class="story">
    <router-view></router-view>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Ysabeau+Office&family=Ysabeau+SC:wght@600&display=swap');

html, body {
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  background-color: #39261e;
  color: #efd4c9;
}

.story {
  max-width: 1000px;
}

img {
  width: 100%;
}

h1 {
  font-size: 70px;
  font-family: 'Ysabeau SC', sans-serif;
}

p, a {
  font-size: 40px;
  font-family: 'Ysabeau Office', sans-serif;
}

a {
  color: #efd4c9;
  font-size: 30px;
  margin: 40px 0;
  display: block;
  font-family: 'Ysabeau Office', sans-serif;
}
</style>
