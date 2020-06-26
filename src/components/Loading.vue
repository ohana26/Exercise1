<template>
  <span class="loading-indicator spinner" role="status" v-if="loading">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    <span class="sr-only">Loading...</span>
  </span>
</template>
<script>
export default {
  name: "loading-indicator",
  props: {
    loading: Boolean
  }
};
</script>
<style>
/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */
.loading-indicator.spinner {
  width: 70px;
  text-align: center;
}

.loading-indicator.spinner > div {
  width: 8px;
  height: 8px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.loading-indicator.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.loading-indicator.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>