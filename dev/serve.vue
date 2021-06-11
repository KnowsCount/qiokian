<script>
import Vue from 'vue';
import Qiokian from '@/qiokian.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Qiokian
  }
});
</script>

<template>
  <div id="app">
    <qiokian />
  </div>
</template>
