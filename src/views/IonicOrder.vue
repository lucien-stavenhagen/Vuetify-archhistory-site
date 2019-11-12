<template>
  <section>
    <v-container>
      <v-card flat outlined>
        <v-card-title class="text-uppercase display-3">The Ionic Order</v-card-title>
        <v-divider></v-divider>
        <v-card-text
          class="headline font-weight-light"
        >The Ionic Order will be represented here by images of the Erechtheion, including the Porch of the Caryatides and a well-preserved example from Roman architecture.</v-card-text>
      </v-card>
    </v-container>
    <GridSwitch :blocks="this.blocks" />
  </section>
</template>
<script>
import GridSwitch from "../components/GridSwitch";
export default {
  name: "IonicOrder",
  components: {
    GridSwitch
  },
  data() {
    return {
      blocks: [
        {
          switch: false,
          styled: true,
          title: "The Erechtheion at the Acropolis",
          subtitle: "",
          text:
            "The Erechtheion is an intricate temple. It sprang from a complex plan that was designed to accommodate the radically uneven ground on the site, and to avoid disturbing sacred shrines like the altars to Poseidon (Erechtheus), and Hephaestus, or the spot where Poseidon hit the Acropolis with his trident. Other shrines that needed to be accommodated included the sacred olive tree, a well containing sea water (the Erechtheian Sea), the tomb of Kekrops, and the Pandrosion sanctuary... [...] The Caryatids have become the temple’s signature feature, as they stand and seem to casually support the weight of the porch’s roof on their heads. Their identification, or the purpose for such elaborate column treatment is lost through the centuries, but it was by no means a new feature in Greek architecture. The Syphian treasury at the sanctuary of Delphi similarly substituted female figures for columns as far back as the sixth century BCE. All the Caryatids on site today are exact replicas, while the originals are protected by the corrosive air of modern Athens in the Acropolis museum.",
          links: [
            {
              href: "https://ancient-greece.org/architecture/erechtheion.html",
              text: "Erechtheion at Ancient Greece site"
            }
          ],
          images: [
            {
              source: require("../assets/greek/copy-of-p1010068-2_athens-greece.jpg"),
              caption: "The Erechtheion",
              links: []
            },
            {
              source: require("../assets/greek/erechtheon.jpg"),
              caption: "Another nice view of the Erechtheon"
            }
          ]
        },
        {
          switch: true,
          styled: true,
          title: "Porch of the Caryatides",
          subtitle: "",
          text:
            "From the Wikipedia entry on the Erechtheion*:'On the north side, there is another large porch with six Ionic columns, and on the south, the famous Porch of the Maidens, with six draped female figures (caryatids) as supporting columns. The porch was built to conceal the giant 15-ft beam needed to support the southwest corner over the Kekropion, after the building was drastically reduced in size and budget following the onset of the Peloponnesian war. Also, in 1800, one of the Caryatides was taken by Lord Elgin, a Scottish nobleman, as a decoration for his mansion. It was later sold to the British Museum, where it remains today.'",
          links: [
            {
              href: "https://en.wikipedia.org/wiki/Erechtheion",
              text: "Wikipedia entry on Erechtheion"
            }
          ],
          images: [
            {
              source: require("../assets/greek/caryatides.jpg"),
              caption: "No author, see links for citations",
              links: [
                {
                  href: "http://commons.wikimedia.org/wiki/User:Harrieta171",
                  text:
                    "Assumed source (based on copyright claims). - No machine-readable source provided"
                },
                {
                  href: "http://creativecommons.org/licenses/by-sa/3.0/",
                  text: "CC BY-SA 3.0"
                },
                {
                  href:
                    "https://commons.wikimedia.org/w/index.php?curid=594464",
                  text: "Link to original"
                }
              ]
            }
          ]
        },
        {
          switch: false,
          styled: true,
          title: "A Roman example - the Temple of Portunus, Rome, C. 80 B.C.E.",
          subtitle: "",
          text:
            "The Temple of Portunus is a well-preserved Ionic style temple in Rome, Italy. It was dedicated to the Roman god Portunus, who was associated with livestock and harbors.",
          links: [],
          images: [
            {
              source: require("../assets/greek/fig08-06-ionic.jpg"),
              caption:
                "Ionic columns. (Sayre, H. M., 2008. The humanities: Culture, continuity & change. Upper Saddle River, NJ: Pearson, Prentice Hall. 2008)",
              links: []
            }
          ]
        },
        {
          switch: true,
          styled: true,
          title: "Ionic Capital",
          subtitle: "",
          text:
            "This is a closeup of an Ionic capital, probably from a column in the Parthenon.",
          links: [],
          images: [
            {
              source: require("../assets/greek/ionic1.jpg"),
              caption: "Closeup of an ionic capital",
              links: []
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