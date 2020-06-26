<template>
    <div class="row">
      <div class="col-12 exercise-timeline" v-if="!loading">
        <ul v-for="(dataFromDate, date) in componentData" :key="date" class="exercise-timeline">
          <h5 class="timeline-inline" :id="date">
            <strong>{{dataFromDate}}</strong>
          </h5>
        </ul>
      </div>
    </div>
</template>
<script>

export default {
  name: "timeline",
  components: {
  },
  props: {
    title: {
      type: String,
      default: "Timeline"
    }
  },
  watch: {},
  data() {
    return {
      days: 0,
      loading: false,
      componentData: []
    };
  },
  computed: {},
  created() {
    this.$eventBus.$on("filter-by", filter => {
      this.days = filter.days;
      this.populateComponentWithData();
    });
    this.populateComponentWithData();
  },
  beforeDestroy() {
    this.$eventBus.$off("filter-by");
  },
  methods: {
    populateComponentWithData() {
      let tempData = [];
      console.log(this.days)
      for (let i = 0; i < 0 + this.days; i++) {
        tempData.push(this.days);
      }
      this.componentData = tempData;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/sass/exercise.scss";
</style>

