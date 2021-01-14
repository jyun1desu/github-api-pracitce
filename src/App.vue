<template>
  <div class="background"></div>
  <div class="background"></div>
  <div class="background"></div>
  <RepoList />
</template>

<script>
import RepoList from "./components/RepoList.vue";

export default {
  name: "App",
  components: {
    RepoList,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 100%;
  background-attachment: fixed;
  &:nth-child(1) {
    top: 0;
    background-image: url("./assets/P1013711.jpg");
  }
  &:nth-child(2) {
    top: 100%;
    background-image: url("./assets/P1010838.jpg");
  }
  &:nth-child(3) {
    top: 200%;
    background-image: url("./assets/P1010783.jpg");
  }
}
</style>
