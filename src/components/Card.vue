<template>
  <div class="card">
    <div class="card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <Loading v-if="!($slots.header || title)" :loading="loading" style="position:absolute; z-index:9999;"></Loading>
    <div class="card-header" v-if="$slots.header || title">
      <slot name="header">
        <h4 class="card-title">
          {{title}}
          <Loading :loading="loading"></Loading>
        </h4>
        <p class="card-category" v-if="subTitle">{{subTitle}}</p>
      </slot>
      <slot name="toolbar"></slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <slot name="raw-content"></slot>
    <div class="card-footer" v-if="$slots.footer">
      <hr />
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import {Loading} from "./ComponentsIndex.js";
export default {
  name: "card",
  components: {
    Loading
  },
  props: {
    title: String,
    subTitle: String,
    loading: Boolean
  }
};
</script>
<style>
</style>
