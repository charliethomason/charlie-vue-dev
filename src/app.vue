<template>
  <div class="wrapper">
    <div class="logo"></div>
    <h1>{{message}}</h1>
    <img src="build/img/charlie-01.jpg" alt="charlie">
  </div>
</template>
<script type="text/ecmascript-6">
  import './img/charlie-01.jpg';

  export default {
    name: 'app',
    data() {
      return {
        message: 'test'
      };
    }
  };
</script>