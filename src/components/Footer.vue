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
import uuidv1 from "uuid/v1";

export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          id: uuidv1(),
          name: "Home",
          route: "/"
        },
        {
          id: uuidv1(),
          name: "About",
          route: "/about"
        },
        {
          id: uuidv1(),
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