<template>
  <header role="banner">
    <div class="logo"></div>
    <h1><a href="#">Charlie Thomason</a></h1>
    <nav role="navigation">
      <ul role="menu">
        <li v-for="link in navLinks">
          <a :href="link.href" role="menuitem" @click.prevent="menuClick(link.href)">{{link.label}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MainHeader',
    props: {
      active: String
    },
    data() {
      return {
        navLinks: [
          { href: 'index', label: 'Home' },
          { href: 'about', label: 'About' },
          { href: 'code', label: 'Code' },
          { href: 'art', label: 'Art' },
          { href: 'travel', label: 'Travel' }
        ]
      };
    },
    methods: {
      menuClick(href) {
        this.$emit('menu-click', href);
      }
    }
  };
</script>