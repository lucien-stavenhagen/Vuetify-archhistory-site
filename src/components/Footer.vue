<template>
  <div>
    <v-footer app inset absolute>
      <v-col cols="12" class="text-center">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          id: "1",
          name: "Home",
          route: "/"
        },
        {
          id: "1",
          name: "About",
          route: "/about"
        },
        {
          id: "1",
          name: "Hero Demo",
          route: "/herolanding"
        }
      ]
    };
  }
};
</script>

<style>
</style>