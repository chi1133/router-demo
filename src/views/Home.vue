<template>
  <div>
    <h1 class="home">home</h1>
    <router-link to="/a" tag="button">home a</router-link>
    <router-link to="/b" tag="button">home b</router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
