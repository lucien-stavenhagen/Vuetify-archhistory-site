<template>
  <nav>
    <v-app-bar app>
      <v-toolbar-title class="text-uppercase">
        <!--       <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        -->
        <span class="font-weight-light">Blog</span>
        <span>App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn depressed v-on="on">Site Navigation</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in items" :key="item.id" :to="item.route">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <!--
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item
          v-bind:key="item.id"
          v-for="item in items"
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
    </v-navigation-drawer>
    -->
  </nav>
</template>

<script>
export default {
  name: "MenuBar",
  methods: {},
  data() {
    return {
      drawer: false,
      items: [
        {
          id: "1",
          title: "Home",
          route: "/",
          exact: true,
          icon: "mdi-home"
        },
        {
          id: "2",
          title: "About",
          route: "/about",
          icon: "mdi-help-box"
        },
        {
          id: "3",
          title: "Hero Demo",
          route: "/herolanding",
          icon: "mdi-help-box"
        },
        {
          id: "4",
          title: "Forms Demo",
          route: "/formsdemo",
          icon: "mdi-help-box"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>