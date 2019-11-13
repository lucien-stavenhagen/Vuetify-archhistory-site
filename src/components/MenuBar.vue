<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <img
        id="clickmeimg"
        @click="goHome"
        :src="require('../assets/misc/mylogo.png')"
        height="70px"
        width="70px"
      />
      <v-toolbar-title id="clickmetitle" @click="goHome" class="text-uppercase">
        <span class="font-weight-light">LS Designs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-icon v-on="on" @click="toggleTheme">mdi-light-switch</v-icon>
        </template>
        <span>Toggle Dark</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer app disable-resize-watcher v-model="drawer">
      <v-list>
        <v-list-item
          v-bind:key="i"
          v-for="(item, i) in items"
          :exact="item.exact ? true : false"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn @click="drawer = false">Close Drawer</v-btn>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "MenuBar",
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    goHome() {
      this.$router.push("/");
    }
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Home",
          route: "/",
          exact: true,
          icon: "mdi-home"
        },
        {
          title: "The Orders",
          route: "/greekorders",
          icon: "mdi-bank-outline"
        },
        {
          title: "Corinthian",
          route: "/corinthianorder",
          icon: "mdi-bank-outline"
        },
        {
          title: "Ionic",
          route: "/ionicorder",
          icon: "mdi-bank-outline"
        },
        {
          title: "Doric",
          route: "/doricorder",
          icon: "mdi-bank-outline"
        },
        {
          title: "Login",
          route: "/login",
          icon: "mdi-login"
        }
      ]
    };
  }
};
</script>

<style scoped>
#clickmetitle:hover,
#clickmeimg:hover {
  cursor: pointer;
}
</style>