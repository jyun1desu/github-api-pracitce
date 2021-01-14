<template>
  <RepoList />
</template>

<script>
import RepoList from './components/RepoList.vue'

export default {
  name: 'App',
  components: {
    RepoList
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
