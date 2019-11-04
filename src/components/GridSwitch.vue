<template>
  <div>
    <v-container>
      <v-row dense v-for="m in blocks" :key="m.id">
        <v-col align-self="center" cols="12" md="4" :order-md="m.switch ? 'first' : 'last'">
          <v-card flat color="rgba(0,0,0,0)">
            <v-card-title class="headline">{{m.title}}</v-card-title>
            <v-card-subtitle>{{m.subtitle}}</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>{{m.text}}</v-card-text>
          </v-card>
        </v-col>
        <v-col align-self="center" cols="12" md="8" :order-md="m.switch ? 'last' : 'first'">
          <v-card flat>
            <v-img :src="m.image"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "WithHero",
  components: {},
  data: () => {
    return {
      blocks: [
        {
          id: "1",
          switch: false,
          title: "Join me",
          subtitle: "And I will complete your training",
          text:
            "In sit amet cursus ex, vel vestibulum neque. Duis efficitur ornare tortor in interdum. Donec ut mauris arcu. Quisque sem enim, sollicitudin sed interdum sed, faucibus pulvinar dolor. Morbi sed arcu eu purus semper feugiat at sed arcu. Nulla facilisi. In eleifend semper turpis eu mattis. Morbi congue nulla a lorem iaculis tempor. Nulla vel dui dui. Morbi facilisis, nibh in hendrerit sollicitudin, nisl orci luctus dui, eget vulputate risus nibh et ante. Phasellus tincidunt urna eget imperdiet condimentum. Nulla facilisi. Etiam convallis velit eu pharetra tincidunt. Maecenas vel finibus lectus, sit amet dictum dui. ",
          image: require("../assets/Mantua1A.jpg")
        },
        {
          id: "2",
          switch: true,
          title: "Search your feelings",
          subtitle: "You know it to be true.",
          text:
            "Quisque suscipit, nisi in pellentesque ultrices, risus ante venenatis ex, at viverra ipsum libero non orci. Aenean tincidunt lacus vitae felis imperdiet, sed eleifend lorem sollicitudin. Pellentesque eget justo placerat, egestas turpis vitae, blandit tortor. Curabitur eu massa dictum mauris finibus luctus ac eu mauris. Suspendisse tempus ante eget lectus sodales dictum. Pellentesque a leo lacinia, commodo elit vitae, pharetra urna. Proin id orci pellentesque, scelerisque mi at, malesuada urna. Sed eu tortor ultricies, luctus ante a, ultricies diam. Suspendisse at turpis ultrices, ullamcorper ex ut, euismod mauris. Proin rhoncus semper metus et pellentesque. Morbi sem quam, ornare quis quam sed, iaculis lacinia dui. Donec lacinia augue massa, non placerat arcu vulputate id. Praesent blandit tincidunt eros sit amet varius. ",
          image: require("../assets/Hephaistos_temple_2006.jpg")
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
