<template>
  <div id="app">
    <Header></Header>

    <div class="index">

      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>

      <div class="content">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>

  import Header from './views/Header'
  import Sidebar from './views/Sidebar'

  export default {
    name: 'app',

    components: {
      Header,Sidebar
    },


}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
