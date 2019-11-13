<template>
  <div class="item" v-if="item">
    <img :src="'https://images.weserv.nl/?url='+item.images.medium" alt />
    <div>
      <p>豆瓣评分：{{item.rating.average}}</p>
      <p>产地：{{item.countries.join(' ')}}</p>
      <p>
        <span class="tag" v-for="tag in item.genres" :key="tag">{{tag}}</span>
      </p>
      <p>{{item.summary}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getItemPageData(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getItemPageData"])
  },
  computed: {
    ...mapState(["item"])
  }
};
</script>

<style scoped lang='less'></style>