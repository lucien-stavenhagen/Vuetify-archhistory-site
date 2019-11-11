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
          class="my-3 d-flex flex-column align-center justify-center"
        >
          <v-card-title class="display-1">{{content.title}}</v-card-title>
          <v-card-text>{{content.text}}</v-card-text>
        </v-card>
      </section>
    </v-container>
    <WithHero />
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
      contents: [
        {
          title: "Ancient Architecture section",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit.",
          color: "brown darken-2"
        },
        {
          title: "Greek Architecture section",
          text: `Λορεμ ιπσθμ δολορ σιτ αμετ, περφεcτο σιγνιφερθμqθε ατ εαμ, νε vισ μθcιθσ οπορτερε, μαζιμ vοcιβθσ δοcενδι εθ πρι. Περ σεμπερ αλιqθιδ ιν. Cθμ μθτατ ελεcτραμ αδvερσαριθμ αν, αν μολλισ σαλθτανδι θσθ. Vολθπτθα ινδοcτθμ cονσετετθρ qθι ετ.
            Δθο ετ jθστο βονορθμ, ιδ ερρορ δεσερθντ δισσεντιετ σεα. Vελ ει αccθμσαν ρεcτεqθε ρεπθδιαρε. Jθστο cονστιτθτο νο περ, ομνεσqθε ιντελλεγαμ δισσεντιθντ qθι εθ, σεα vερο λαορεετ ιν. Νεc τε vιδε μθνερε, πριμισ vερεαρ σθσcιπιτ νεc εθ, εθ εστ θτροqθε μενανδρι μαιεστατισ.`,
          color: "teal darken-4"
        },
        {
          title: "Roman Architecture Section",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus repellat aspernatur tenetur blanditiis libero provident, reprehenderit modi vero suscipit.",
          color: "blue darken-4"
        }
      ]
    };
  }
};
</script>

<style>
</style>