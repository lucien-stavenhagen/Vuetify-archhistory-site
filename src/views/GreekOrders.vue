<template>
  <section>
    <v-container>
      <v-card flat outlined>
        <v-card-title class="text-uppercase display-3">The Orders</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="headline font-weight-light">
          There is perhaps no other property in classical architecture as distinctive and well-known as the three orders. In architecture,
          <dfn>Order</dfn> is the label we use for a description of a particular style of building; we can think of the classical orders as simply decorative variants of the ancient
          <dfn>Post and Lintel</dfn> system, but their particular attraction lies in the simple, but beautiful, innovations made in classical antiquity. This page will present the three orders of classical architecture - the
          <dfn>Dorian, Ionian and Corinthian</dfn> - and give summaries and examples of each in turn.
        </v-card-text>
      </v-card>
    </v-container>
    <GridSwitch :blocks="blocks" />
  </section>
</template>

<script>
// @ is an alias to /src
import GridSwitch from "../components/GridSwitch";

export default {
  name: "WithHero",
  components: {
    GridSwitch
  },
  data() {
    return {
      blocks: [
        {
          switch: true,
          styled: true,
          title: "The Doric Order",
          subtitle: "And I will complete your training",
          text:
            "The oldest of the Greek orders, the Doric was described by Vetruvius as the masculine one. The capital is squat and stout, unadorned with extra decoration, and gives the impression of an almost utilitarian strength and sense of purpose.The Doric column is similarly stocky, almost muscular, and rests directly on the stylobate of the temple with no base.The entablature features a frieze with alternating triglyphs and metopes, on top of a similarly plain architrave.The Doric order predominated in Greece from the late seventh through the early fifth centuries BCE.",
          images: [
            {
              maxheight: "600px",
              source: require("../assets/greek/orders/doric.gif"),
              caption: "Doric Order. N.d. Vulgarie. Web. 14 Dec. 2014."
            }
          ]
        },
        {
          switch: true,
          styled: true,
          title: "The Ionic Order",
          subtitle: "You know it to be true.",
          text:
            "Vetruvius again offers us an anthropomorphic insight into the Ionic order, describing it as the more matronly of the orders. Its most distinctive feature is the four volutes protruding from the capital. The columns themselves are thinner and more graceful than the Doric, and typically stand atop a stack of disks on the stylobate. The entablature features a running frieze of continuous sculpture as well as a more layered appearance to the architrave. The Ionic order appeared in Ionia in the mid-sixth century BCE. ",
          images: [
            {
              maxheight: "600px",
              source: require("../assets/greek/orders/ionic.jpg"),
              caption: "Ionic Order. N.d. Ionic Order. Web. 14 Dec. 2014."
            }
          ]
        },
        {
          switch: true,
          styled: true,
          title: "The Corinthian Order",
          subtitle: "",
          text:
            "The Corinthian order was the latest and most ornate of the orders, appearing first in the Greek city-state of Corinth. The earliest known Corinthian capital comes from the temple of Apollo Epicurius at Bassae and dates to c. 427 BCE. The most prominent feature is the elaborate, flowery carvings of the Acanthus leaf present all the way around on the capital. The columns and entablature are similar to those of the Ionic order. Vetruvius suggested that it was the maiden of the three. The Ionic order was a favorite of the Romans, with the Pantheon in Rome being a prime example.",
          images: [
            {
              maxheight: "600px",
              source: require("../assets/greek/orders/corinthian.jpg"),
              caption:
                "Drawing for Dictionary of Architecture and Landscape Architecture (2006)."
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
