<template>
  <div>
    <h1 class="home">home</h1>
    <h3>{{ age }}</h3>
    <button @click="handler">click</button><br />
    <router-link to="/a" tag="button">home a</router-link>
    <router-link to="/b" tag="button">home b</router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return { age: 1, lastTime: 0 }
  },
  methods: {
    handler() {
      const currentTime = Date.now()
      if (currentTime - this.lastTime < 2000) return
      this.lastTime = currentTime
      this.age += 1
    },
  },
}
</script>
