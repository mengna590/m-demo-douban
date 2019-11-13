<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <a href="./item.html">
        <img :src="'https://images.weserv.nl/?url='+item.images.small" />
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span class="tag" v-for="tag in item.genres" :key="tag">{{tag}}</span>
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.getListPageData("coming_soon");
  },
  methods: {
    ...mapActions(["getListPageData"])
  },
  computed: {
    ...mapState(["list"])
  }
};
</script>

<style scoped lang='less'></style>