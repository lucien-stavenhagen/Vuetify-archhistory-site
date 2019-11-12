<template>
  <v-footer app inset absolute>
    <v-row justify="center">
      <v-btn text :to="link.route" :key="i" v-for="(link,i) in links">{{link.name}}</v-btn>
    </v-row>
    <v-col cols="12" class="text-center">
      {{ new Date().getFullYear() }} —
      <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          name: "Home",
          route: "/"
        },
        {
          name: "Orders",
          route: "/greekorders"
        },
        {
          name: "Login",
          route: "/login"
        }
      ]
    };
  }
};
</script>

<style>
</style>