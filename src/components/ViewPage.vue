<template>
  <div>
    <div class="row">
      <div class="col-12">
        <Card>
          <label class="my-1 mr-2 ml-2">Select</label>
          <select v-model="daysToComponent">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <Loading :loading="loading"></Loading>
        </Card>
      </div>
    </div>
    <Timeline v-bind:style="{ 'z-index': 0 } "></Timeline>
  </div>
</template>
<script>
import {Card, Timeline, Loading} from "./ComponentsIndex.js";

export default {
  components: {
    Loading,
    Timeline,
    Card
  },
  data() {
    return {
      loading: false,
      daysToComponent: 2,
    };
  },
  created() {
    this.populateComponentWithData();
  },
  watch: {
    daysToComponent: function() {
      this.filterBy();
    }
  },
  methods: {
    populateComponentWithData() {
      this.filterBy();
    },
    filterBy() {
      this.$nextTick(() => {
        this.$eventBus.$emit("filter-by", {
          days: this.daysToComponent,
        });
      });
    },
  }
};
</script>