<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="'/detail/'+item.id">
        <img :src="'https://images.weserv.nl?url='+item.images.small" />
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span v-for="(item,i) in item.genres" :key="i" class="tag">{{item}}</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    // 调用获取数据的方法
    ...mapActions(["getListPageData"])
  },
  created() {
    this.getListPageData("in_theaters");
  },
  // 获取vuex的数据
  computed: {
    ...mapState(["list"])
  }
};
</script>

<style scoped lang='less'></style>