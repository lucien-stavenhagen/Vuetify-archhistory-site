<template>
  <div>
    <WithHero />
    <GridSwitch />
    <Testimonial />
  </div>
</template>

<script>
import WithHero from "../components/WithHero";
import GridSwitch from "../components/GridSwitch";
import Testimonial from "../components/Testimonial";

export default {
  name: "home",
  components: {
    WithHero,
    GridSwitch,
    Testimonial
  }
};
</script>
<style scoped>
</style>
