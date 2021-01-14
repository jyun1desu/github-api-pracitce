<template>
  <li class="repo">
    <div class="repo__info">
      <div class="main_info">
        <p class="title">{{ name }}</p>
        <span class="create_date">{{ createDate }}</span>
      </div>
      <span class="description">{{ description }}</span>
      <a :href="URL" class="link_to_repo">{{ URL }}</a>
    </div>
    <div class="repo__demo">
      <p class="title">DEMO</p>
      <div class="show_demo_status">
        <div class="icon">{{ isDemo ? "Ｏ" : "Ｘ" }}</div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "Repo",
  props: ["repoData"],
  computed: {
    name() {
      return this.repoData.name;
    },
    description() {
      return this.repoData.description;
    },
    URL() {
      return this.repoData.html_url;
    },
    isDemo() {
      return !!this.repoData.homepage;
    },
    demoURL() {
      return this.repoData.homepage;
    },
    createDate() {
      const date = this.repoData.created_at;
      const reg = /T.*Z/;
      return date.replace(reg, "");
    },
  },
};
</script>
<style lang="scss" scoped>
.repo {
  background-color: #f5f5f0;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  &__info {
    padding: 10px 15px;
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;
    .main_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 0 0 5px;
      }
      .create_date {
        font-size: 12px;
        color: #888;
      }
    }
    .description,
    .link_to_repo {
      color: #888;
      font-size: 14px;
      margin-bottom: 3px;
    }

    .link_to_repo {
      text-decoration: none;
    }
  }
  &__demo {
    flex: 1 1 auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 14px;
      background-color: #f5f0f0;
      white-space: nowrap;
      padding: 5px 10px;
      text-align: center;
      margin: 0;
    }
    .show_demo_status {
      display: flex;
      flex: 1 1 100%;
      .icon {
        margin: auto;
        font-size: 25px;
      }
    }
  }
}
</style>