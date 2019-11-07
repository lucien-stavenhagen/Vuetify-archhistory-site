<template>
  <div>
    <HomeCarousel />
    <GridSwitch />
    <WithHero />
    <Testimonial />
  </div>
</template>

<script>
import HomeCarousel from "../components/HomeCarousel.vue";
import WithHero from "../components/WithHero";
import GridSwitch from "../components/GridSwitch";
import Testimonial from "../components/Testimonial";

export default {
  name: "Home",
  components: {
    HomeCarousel,
    WithHero,
    GridSwitch,
    Testimonial
  }
};
</script>

<style>
</style>