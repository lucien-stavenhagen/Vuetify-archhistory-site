<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="4" :key="comment.id" v-for="comment in comments">
          <v-hover>
            <template v-slot="{hover}">
              <v-card class="pa-md-3" outlined :elevation="hover ? 24: 0">
                <v-img
                  :gradient="comment.gradient ? comment.gradient : undefined"
                  contain
                  max-height="300px"
                  class="align-end"
                  :src="comment.image"
                ></v-img>
                <v-card-title class="headline">
                  <p>
                    <q>{{comment.comment}}</q>
                  </p>
                </v-card-title>

                <v-card-subtitle>
                  <cite>- {{comment.author}}</cite>
                </v-card-subtitle>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  data() {
    return {
      comments: [
        {
          id: "1",
          author: "Andrea Palladio",
          comment: "I never knew web design like this was possible.",
          image: require("../assets/palladio.jpg"),
          gradient: false
        },
        {
          id: "2",
          author: "Leon Battista Alberti",
          comment: "Never before have I seen such sites.",
          image: require("../assets/alberti.jpg")
          //         gradient: "to right, rgba(0,255,0,.05), rgba(0,255,0, .05)"
        },
        {
          id: "3",
          author: "Le Corbusier",
          comment:
            "When one sees such web pages, what can one say but ... LS designs...",
          image: require("../assets/Le-Corbu.jpg")
          //          gradient: "to right, rgba(0,0,255,.05), rgba(0,0,255, .05)"
        }
      ]
    };
  }
};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>