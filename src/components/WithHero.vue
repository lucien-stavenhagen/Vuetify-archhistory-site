<template>
  <div>
    <div class="home">
      <v-container>
        <v-row dense v-for="m in blocks" :key="m.id">
          <v-col :md="colsize" :offset-md="m.switch ? 0 : 12-colsize">
            <v-card outlined dark color="rgba(0,0,0,0)">
              <v-card-title class="headline">{{m.title}}</v-card-title>
              <v-card-subtitle>{{m.subtitle}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "WithHero",
  components: {},
  data() {
    return {
      colsize: "4",
      blocks: [
        {
          id: "2",
          switch: true,
          title: "There is no escape.",
          subtitle:
            "Don't make me destroy you. Luke, you do not yet realize your importance. You have only begun to discover your power. Join me, and I will complete your training. With our combined strength, we can end this destructive conflict and bring order to the galaxy."
        },
        {
          id: "3",
          switch: false,
          title: "If you only knew...",
          subtitle:
            "...the power of the Dark Side. ObiWan never told you what happened to your father... No... I am your father. Search your feelings, you know it to be true. Join me, and we can rule the galaxy as father and son! Come with me, it is the only way"
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
  background: url("../assets/willian-west-YpKiwlvhOpI-unsplash.jpg") no-repeat
    center center;
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
