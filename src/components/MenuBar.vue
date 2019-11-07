<template>
  <nav>
    <v-app-bar flat app>
      <img :src="require('../assets/misc/mylogo.png')" height="70px" width="70px" />
      <v-toolbar-title class="text-uppercase">
        <!--       <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        -->
        <span class="font-weight-light">Classical Architecture</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon left>mdi-longitude</v-icon>Site Navigation
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in items" :key="item.id" :to="item.route">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
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
import uuidv1 from "uuid/v1";

export default {
  name: "MenuBar",
  methods: {},
  data() {
    return {
      drawer: false,
      items: [
        {
          id: uuidv1(),
          title: "Home",
          route: "/",
          exact: true,
          icon: "mdi-home"
        },
        {
          id: uuidv1(),
          title: "About",
          route: "/about",
          icon: "mdi-help-box"
        },
        {
          id: uuidv1(),
          title: "Ancient Architecture",
          route: "/ancient",
          icon: "mdi-help-box"
        },
        {
          id: uuidv1(),
          title: "Greek Architecture",
          route: "/greek",
          icon: "mdi-help-box"
        },
        {
          id: uuidv1(),
          title: "Roman Architecture",
          route: "/roman",
          icon: "mdi-help-box"
        },
        {
          id: uuidv1(),
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