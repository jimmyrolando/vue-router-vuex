<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/display">Display</router-link> <br>
      <router-link to="/controls">Controls</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>
