<template>
  <div id="app">
    <div class="content-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 3.0rem;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content-container {
  max-width: 104rem;
  margin: 0 auto;
  padding-top: 4.0rem;
  padding-bottom: 3.0rem;
  min-width: 40rem;
}
</style>
