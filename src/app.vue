<template>
  <div class="wrapper">
    <main-header @menu-click="menuNav"></main-header>
    <h1>{{message}}</h1>
    <img src="build/img/charlie-01.jpg" alt="charlie">
    <p>{{intro}}</p>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import MainHeader from './components/MainHeader.vue';
  import { homeContent } from './content/home';
  import './img/charlie-01.jpg';

  export default {
    name: 'app',
    components: {
      MainHeader
    },
    data() {
      return {
        message: 'test',
        intro: homeContent.intro
      };
    },
    methods: {
      menuNav(href) {
        this.$router.push(href);
      }
    }
  };
</script>