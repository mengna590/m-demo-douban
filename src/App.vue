<template>
  <div id="app">
    <!-- 头部 -->
    <div class="my-header">
      <span>{{title}}</span>
    </div>
    <!-- 内容 -->
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="my-footer">
      <ul>
        <li>
          <router-link to="/hot">
            <span class="iconfont icon-remen"></span>
            <p>正在热映</p>
          </router-link>
        </li>
        <li>
          <router-link to="/movie">
            <span class="iconfont icon-dianying"></span>
            <p>即将上映</p>
          </router-link>
        </li>
        <li>
          <router-link to="/top">
            <span class="iconfont icon-top"></span>
            <p>top250</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  // 拿出标题数据
  computed: {
    ...mapState(["title"])
  }
};
</script>

<style>
</style>
