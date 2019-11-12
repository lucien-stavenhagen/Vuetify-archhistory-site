<template>
  <section>
    <v-container>
      <v-card flat outlined>
        <v-card-title class="text-uppercase display-3">The Corinthian Order</v-card-title>
        <v-divider></v-divider>
        <v-card-text
          class="headline font-weight-light"
        >The Corinthian Order examples here will primarily come from the Pantheon in Rome and the Olympieion (Temple of Olympian Zeus) in Athens. A shot of the ceiling at the Karnak Temple complex in Egypt is included also, to show an example of the probable precursor to the Corinthian order.</v-card-text>
      </v-card>
    </v-container>
    <GridSwitch :blocks="blocks" />
  </section>
</template>
<script>
import GridSwitch from "../components/GridSwitch";
export default {
  name: "Roman",
  components: {
    GridSwitch
  },
  data() {
    return {
      blocks: [
        {
          switch: false,
          styled: true,
          title: "Ceiling at Karnak Temple complex, near Luxor, Egypt",
          subtitle: "",
          text:
            "This a bonus shot of the columns at the spectacular KarnaK temple complex. The obvious influence on the later Corinthian orders in Grego-Roman architecture are evident in this view.",
          images: [
            {
              source: require("../assets/greek/karnak.jpg"),
              caption: `Ceiling view at Karnak`
            }
          ]
        },
        {
          switch: true,
          styled: true,
          title: "The Pantheon, Rome",
          subtitle: "",
          text:
            "from the Famous Wonders website: 'The Pantheon building which we see today was actually reconstructed in 125 A.D, during the reign of the Emperor Hadrian. Pantheon was totally reconstructed with the text of original inscription on the bricks. Before the current Pantheon, there were two other buildings occupying same site. The Pantheon building is ring-shaped with three ranks of huge granite pillars under a space into the rotunda under a coffered, solid dome, with a central opening (oculus), the Great Eye, open to the sky. Orthogonal building loops the portico with the rotunda. Though often still drawn as a free standing building, there was a building at its rear into which it is adjoined; of this structure there are only archaeological remains.'",
          links: [
            {
              href: "http://famouswonders.com/pantheon-in-rome/",
              text: "The Pantheon at the Famous Wonders website"
            }
          ],
          images: [
            {
              source: require("../assets/greek/fixedw_large_4x.jpg"),
              caption: `The Pantheon from the street.`,
              links: [
                {
                  href: "https://www.flickr.com/photos/truello/980802262/",
                  text: "Link to original photo"
                },
                {
                  href: "https://creativecommons.org/licenses/by/2.0/deed.en",
                  text: "Creative Commons license"
                }
              ]
            },
            {
              source: require("../assets/greek/pantheon-facade.jpg"),
              caption: "Another view of the Pantheon facade."
            }
          ]
        },
        {
          switch: false,
          styled: true,
          title: "Olympieion at Athens",
          subtitle: "",
          text:
            "from the entry at Wikipedia: 'The Temple of Olympian Zeus (Greek: Ναός του Ολυμπίου Διός, Naós tou Olympíou Diós), also known as the Olympieion or Columns of the Olympian Zeus, is a former colossal temple at the center of the Greek capital Athens. It was dedicated to Olympian Zeus, a name originating from his position as head of the Olympian gods. Construction began in the 6th century BC during the rule of the Athenian tyrants, who envisaged building the greatest temple in the ancient world, but it was not completed until the reign of the Roman Emperor Hadrian in the 2nd century AD, some 638 years after the project had begun. During the Roman period the temple -that included 104 colossal columns- was renowned as the largest temple in Greece and housed one of the largest cult statues in the ancient world.",
          links: [
            {
              href:
                "https://en.wikipedia.org/wiki/Temple_of_Olympian_Zeus,_Athens",
              text: "Wikipedia entry"
            }
          ],
          images: [
            {
              source: require("../assets/greek/OlympieionatAthens.jpg"),
              caption: `Temple of Olympian Zeus, Athens`
            },
            {
              source: require("../assets/greek/athens-zeus-temple.jpg"),
              caption: `Another view of the Olympieion`
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
