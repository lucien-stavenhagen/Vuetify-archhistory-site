<template>
  <section>
    <v-container>
      <v-card flat outlined>
        <v-card-title class="text-uppercase display-3">The Doric Order</v-card-title>
        <v-divider></v-divider>
        <v-card-text
          class="headline font-weight-light"
        >The Doric Order is represented by many fine examples still standing today. In this section, the primary examples will be the Temple of Hephasistus in Athens, the Temple of Hera I and II at Paestum, the Parthenon which should need no introduction, and a modern example, the WalHalla in Bavaria, Germany.</v-card-text>
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
  data: () => {
    return {
      blocks: [
        {
          switch: false,
          styled: true,
          title: "The Temple of Hephaistus, Athens",
          subtitle: "",
          text:
            "The Temple of Hephaistos is a little less well-known than more famous examples like the Parthenon, but it's the most well-preserved Doric temple in Greece. Its long history of multiple uses is partly responsible for its state of preservation; it served as the Greek Orthodox church of Saint George Akamates, starting in the 7th century. It only fell into disuse for that purpose in 1834 - a tenure of approximately 1200 years of continuous use into modern times. The building features a pronaos, or porch, a cella and an opisthodomos, both of which are decorated with Ionic friezes rather than the triglyphs more typical of Doric entablature.",
          images: [
            {
              source: require("../assets/greek/Hephaistos_temple_2006.jpg"),
              caption: `By Tommi Nikkilä - Own work, Creative Commons Attribution-Share Alike 3.0, CC BY-SA 3.0`,
              links: [
                {
                  href: "https://creativecommons.org/licenses/by-sa/3.0/",
                  text: "Creative Commons Attribution-Share Alike 3.0"
                },
                {
                  href:
                    "https://commons.wikimedia.org/w/index.php?curid=1965341",
                  text: "Wikipedia link to image"
                }
              ]
            },
            {
              source: require("../assets/greek/hephaestus.jpg"),
              caption: "Oblique view of the temple of Hephaestus"
            },
            {
              source: require("../assets/greek/hephaestus2.jpg"),
              caption: "Another oblique view of the temple of Hephaestus"
            }
          ]
        },
        {
          switch: true,
          styled: true,
          title: "The Temple of Hera I and II at Paestum",
          subtitle: "",
          text:
            "From Ancient History Encyclopedia* entry on the temples at Paestum: 'The oldest temple is the Temple of Hera I which was built c. 550 BCE. Constructed using brown-tinted local limestone it was originally covered in stucco and measured 54 x 24 metres. Unusually for a Doric temple, each facade has 9 columns with 18 presented along the long sides. The Temple of Athena was built between c. 510 and 500 BCE. Unusually, the outer columns are of the Doric order while those of the inner pronaos are of the Ionic order. The facades present six fluted columns while the long sides have 13 columns. The Doric Temple of Hera II was built c. 460 BCE and is the best preserved of the three temples. Also constructed in limestone, it is a little bigger than Temple I. The facades have six fluted columns and the long sides 14. Inside, a double row of slim Doric columns divided the cella into three aisles and once supported a ridged roof of wood and tiles.'",
          links: [
            {
              href: "https://www.ancient.eu/Paestum/",
              text: "Link to Ancient History article"
            }
          ],
          images: [
            {
              source: require("../assets/greek/HeraIIPaestum.jpg"),
              caption: `Photo by Carol Raddato. The Temple of Hera II, sometimes called the Temple of Neptune or the Temple of Poseidon, an archaic Doric temple constructed ca. 470-460 BC, Paestum, Italy`,
              links: [
                {
                  href: "https://www.flickr.com/photos/carolemage/",
                  text: "Carol Roddato"
                }
              ]
            },
            {
              source: require("../assets/greek/templeofheradoric.jpg"),
              caption: `View of the older Temple of Hera I`
            }
          ]
        },
        {
          switch: false,
          styled: true,
          title: "The Parthenon I",
          subtitle: "Some views of the Parthenon from a distance.",
          text:
            "From a NOVA interview with Jeffrey Hurwit, a professor of art history at the University of Oregon: 'The Parthenon was the greatest monument in the greatest sanctuary of the greatest city of classical Greece. It was the central repository of the Athenians' very lofty conceptions of themselves. It was the physical, marble embodiment of their values, of their beliefs, of their myths, of their ideologies.'",
          links: [
            {
              href: "https://www.pbs.org/wgbh/nova/article/glorious-parthenon/",
              text: "NOVA interview, Jeffrey Hurwit"
            }
          ],
          images: [
            {
              source: require("../assets/greek/Parthenon-Athens.jpg"),
              caption:
                "The majestic and mysterious Parthenon in Athens, Greece.",
              links: [
                {
                  href: "https://www.britannica.com/topic/Parthenon",
                  text: "Encyclopedia Britannica"
                }
              ]
            },
            {
              source: require("../assets/greek/Night-view-Parthenon-Athens.jpg"),
              caption: "Night view of Parthenon"
            }
          ]
        },
        {
          switch: true,
          styled: true,
          title: "The Parthenon II",
          subtitle: "",
          text: `The NOVA interview with Jeffrey Hurwit continues: "The Parthenon was built completely of marble from the base of the temple to its roof tiles. It had two large-scale pediments, each filled with over 20, larger-than-life-sized marble figures in compositions that extolled Athena and her power. It was adorned with 92 exterior sculptured metopes [decorated rectangular panels near the top of the temple]. It also had an Ionic frieze running around the top of the cella walls [the interior walls of the building] representing an idealized and pious Athenian citizenry. It had great roof ornaments, acroteria, in the form of victory figures, Nikai, alighting as if descending from heaven. And the great statue of Athena Parthenos inside the Parthenon, made of gold and ivory, held in the palm of her hand another image of Nike, some six feet tall, offering it to the Athenians as if to confirm their military predominance over the rest of Greece. But the most glorious image of Athena, the one that expressed the power and wealth of Athens itself, was the Athena Parthenos, a colossal gold-and-ivory statue that Pheidias, supposedly the general overseer of the entire Periclean building program, created for the main room of the Parthenon. We call the Parthenon the Parthenon because of that statue, the Athena Parthenos—Athena the virgin, the maiden. The statue seems to have been over 12 meters tall, nearly 40 feet tall. The parts of her flesh that were visible were made of ivory, and her dress, her armor, and her jewelry were made of gold—some 40 to 44 talents of gold. A talent is approximately 57 to 58 pounds, and so the Athena wore on her body a tremendous sum and was the single greatest financial asset of the city.`,
          links: [
            {
              href: "https://www.pbs.org/wgbh/nova/article/glorious-parthenon/",
              text: "NOVA interview, Jeffrey Hurwit"
            }
          ],
          images: [
            {
              source: require("../assets/greek/parth2018_26.jpg"),
              caption: "Closeup of capital with upper part of column"
            },
            {
              source: require("../assets/greek/parth2018_31.jpg"),
              caption:
                "Closeup of entablature, showing the interspersed triglyphs and metopes characteristic of the Doric order."
            },
            {
              source: require("../assets/greek/parth2018_11.jpg"),
              caption: "Closeup of capital"
            },
            {
              source: require("../assets/greek/glorious-parthenon-02.width-800.jpg"),
              caption: `A full-scale, 12-ton replica of the Athena Parthenos looms large at a Parthenon recreation in Nashville. The replica is gilded in gold leaf, but the fifth-century statue was plated in some 2,400 pounds of solid gold.
© 2008 WGBH Educational Foundation`
            }
          ]
        },
        {
          switch: false,
          styled: true,
          title:
            "A modern example from 'Mad' King Ludwig I - the Walhalla, Bavaria, Germany",
          subtitle: "",
          text:
            "From the Wikipedia entry: 'The Walhalla is a hall of fame that honours laudable and distinguished people in German history – politicians, sovereigns, scientists and artists of the German tongue; thus the celebrities honoured are drawn from Greater Germany, a wider area than today's Germany, and even as far away as Britain in the case of several Anglo-Saxons who are honoured. The hall is a neo-classical building above the Danube River, in Donaustauf, east of Regensburg in Bavaria. The Walhalla is named for the Valhalla of Norse Paganism. It was conceived in 1807 by Crown Prince Ludwig in order to support the gathering momentum for the unification of the many German states. Following his accession to the throne of Bavaria, construction took place between 1830 and 1842 under the supervision of the architect Leo von Klenze. The memorial displays some 65 plaques and 130 busts covering 2,000 years of history, beginning with Arminius, victor at the Battle of the Teutoburg Forest in AD 9.",
          links: [
            {
              href: "https://en.wikipedia.org/wiki/Walhalla_memorial",
              text: "WalHalla on Wikipedia"
            }
          ],
          images: [
            {
              source: require("../assets/greek/1080px-Walhalla_Aerial_View.jpg"),
              caption: `By Gerhard Huber - Own work`,
              links: [
                {
                  href:
                    "https://commons.wikimedia.org/w/index.php?curid=59561227",
                  text: "Gerhard Huber, CC BY-SA 3.0"
                }
              ]
            },
            {
              source: require("../assets/greek/1000px-Walhalla_Aussen2.jpg"),
              caption: `By Michael J. Zirbes (Mijozi) - Own work`,
              links: [
                {
                  href:
                    "https://commons.wikimedia.org/w/index.php?curid=7489307",
                  text: "Michael J. Zirbes, CC BY 3.0,"
                }
              ]
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