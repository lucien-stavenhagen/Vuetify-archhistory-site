<template>
  <div>
    <v-container>
      <v-card outlined>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  filled
                  required
                ></v-text-field>

                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  filled
                  required
                ></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" filled required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete filled label="State" :items="states"></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FormsDemo",
  data() {
    return {
      valid: true,
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "cannot be empty",
        v => v.length >= 4 || "must be at least 4 characters"
      ],
      emailRules: [
        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "invalid email address"
      ],
      states: ["AL", "AK", "MN", "NM", "TX"]
    };
  }
};
</script>

<style>
</style>