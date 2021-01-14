<template>
  <ul v-if="dataIsReady" class="repos_list">
    <Repo
      :key="repo.name"
      :repoData="repo"
      v-for="repo in githubData"
      class="repos_list__repo"
    />
  </ul>
</template>

<script>
import Repo from "./Repo.vue";
export default {
  name: "RepoList",
  props: {
    msg: String,
  },
  components: {
    Repo,
  },
  data() {
    return {
      dataIsReady: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.dataIsReady = false;
      await this.$store.dispatch("getGithubData");
      this.dataIsReady = true;
    },
  },
  computed: {
    githubData() {
      return this.$store.state.githubRepos;
    },
  },
};
</script>

<style lang="scss" scoped>
.repos_list {
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 60%;
  margin: 0 auto;
}
</style>
