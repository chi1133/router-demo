<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/a" tag="button">about a</router-link>
    <router-link to="/about/b" tag="button">about b</router-link>
    <router-view />
  </div>
</template>
