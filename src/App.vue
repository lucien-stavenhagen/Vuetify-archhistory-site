<template>
  <v-app>
    <MenuBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    MenuBar,
    Footer
  }
};
</script>
