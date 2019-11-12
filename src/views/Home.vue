<template>
  <section>
    <HomeCarousel />
    <v-container>
      <section v-for="(content, i) in contents" :key="i">
        <v-card
          flat
          dark
          min-height="400px"
          :color="content.color"
          class="my-3 pa-5 d-flex flex-column align-center justify-center"
        >
          <v-card-title class="display-1">{{content.title}}</v-card-title>
          <v-card-text>{{content.text}}</v-card-text>
          <v-card-actions>
            <v-btn class="ma-4" :to="content.route">Read More...</v-btn>
          </v-card-actions>
        </v-card>
      </section>
    </v-container>
    <WithHero :blocks="this.herodata" />
    <Testimonial />
  </section>
</template>

<script>
import HomeCarousel from "../components/HomeCarousel.vue";
import WithHero from "../components/WithHero";
import Testimonial from "../components/Testimonial";

export default {
  name: "Home",
  components: {
    HomeCarousel,
    WithHero,
    Testimonial
  },
  data() {
    return {
      herodata: {
        colsize: "6",
        blocks: [
          {
            switch: true,
            title: "There is no escape.",
            subtitle: "Don't make me destroy you.",
            text:
              "Luke, you do not yet realize your importance. You have only begun to discover your power. Join me, and I will complete your training. With our combined strength, we can end this destructive conflict and bring order to the galaxy."
          },
          {
            switch: false,
            title: "If you only knew...",
            subtitle: "...the power of the Dark Side.",
            text:
              " ObiWan never told you what happened to your father... No... I am your father. Search your feelings, you know it to be true. Join me, and we can rule the galaxy as father and son! Come with me, it is the only way"
          }
        ]
      },
      contents: [
        {
          title: "The Ionic Order",
          text: `Λορεμ ιπσθμ δολορ σιτ αμετ, περφεcτο σιγνιφερθμqθε ατ εαμ, νε vισ μθcιθσ οπορτερε, μαζιμ vοcιβθσ δοcενδι εθ πρι. Περ σεμπερ αλιqθιδ ιν. Cθμ μθτατ ελεcτραμ αδvερσαριθμ αν, αν μολλισ σαλθτανδι θσθ. Vολθπτθα ινδοcτθμ cονσετετθρ qθι ετ.
            Δθο ετ jθστο βονορθμ, ιδ ερρορ δεσερθντ δισσεντιετ σεα. Vελ ει αccθμσαν ρεcτεqθε ρεπθδιαρε. Jθστο cονστιτθτο νο περ, ομνεσqθε ιντελλεγαμ δισσεντιθντ qθι εθ, σεα vερο λαορεετ ιν. Νεc τε vιδε μθνερε, πριμισ vερεαρ σθσcιπιτ νεc εθ, εθ εστ θτροqθε μενανδρι μαιεστατισ.`,
          color: "teal darken-4",
          route: "/ionicorder"
        },
        {
          title: "The Corinthian Order",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit.",
          color: "brown darken-2",
          route: "/corinthianorder"
        },
        {
          title: "The Doric Order",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit.",
          color: "blue darken-4",
          route: "/doricorder"
        }
      ]
    };
  }
};
</script>

<style>
</style>