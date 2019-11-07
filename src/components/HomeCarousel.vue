<template>
  <div class="home">
    <v-carousel hide-delimiters>
      <v-carousel-item transition="fade-transition" v-for="item in items" :key="item.id">
        <v-sheet :color="item.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-card class="pa-6" :to="item.to" outlined flat>
              <v-card-title class="display-3 justify-center">{{item.caption.title}}</v-card-title>
              <v-card-text class="text-center">{{item.caption.description}}</v-card-text>
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
  <script>
import uuidv1 from "uuid/v1";

export default {
  name: "HomeCarousel",
  data() {
    return {
      items: [
        {
          id: uuidv1(),
          color: "rgba(255,0,0, .08",
          to: "/ancient",
          caption: {
            title: "Ancient",
            description: "Excavation at Catal Hoyuk, Turkey"
          }
        },
        {
          id: uuidv1(),
          to: "/greek",
          color: "rgba(0,255,0, .08",
          caption: {
            title: "Greek",
            description: "Temple of Hephaistos"
          }
        },
        {
          id: uuidv1(),
          to: "/roman",
          color: "rgba(0,0,255, .08",
          caption: {
            title: "Roman",
            description: "Flavian Ampitheater, Rome"
          }
        }
      ]
    };
  }
};
</script>
<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.home::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: -2;
  background: url("../assets/misc/parthfloorplan.jpg") no-repeat center center;
  background-size: cover;
}

.home::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.5;
  z-index: -1;
  background-color: black;
}
</style>