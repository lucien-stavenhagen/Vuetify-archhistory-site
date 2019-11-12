<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <img :src="require('../assets/misc/mylogo.png')" height="70px" width="70px" />
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">LS Designs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-icon v-on="on" @click="toggleTheme">mdi-light-switch</v-icon>
        </template>
        <span>Toggle Dark</span>
      </v-tooltip>
      <!--      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon left>mdi-longitude</v-icon>Site Navigation
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
      -->
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
</style>