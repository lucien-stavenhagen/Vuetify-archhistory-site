<template>
  <section class="home">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sheet :color="item.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-card color="rgba(0,0,0, .7)" class="pa-6" :to="item.to" outlined flat>
              <v-card-title class="display-3 justify-center">{{item.caption.title}}</v-card-title>
              <v-card-text class="text-center">{{item.caption.description}}</v-card-text>
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>
  <script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      items: [
        {
          to: "/greekorders",
          color: "rgba(0,255,0, .08",
          caption: {
            title: "The Greek Orders",
            description:
              "A summary of the three main orders of ancient Greek Architecture"
          }
        },
        {
          to: "/doricorder",
          color: "rgba(0,0,255, .08",
          caption: {
            title: "The Doric Order",
            description: "Examples of the Doric order"
          }
        },
        {
          color: "rgba(255,0,0, .08",
          to: "/ionicorder",
          caption: {
            title: "The Ionic Order",
            description: "Examples of the Ionic order from Greece and Rome."
          }
        },
        {
          to: "/corinthianorder",
          color: "rgba(255,0,255, .08",
          caption: {
            title: "The Corinthian Order",
            description: "Examples of the Corinthian order"
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