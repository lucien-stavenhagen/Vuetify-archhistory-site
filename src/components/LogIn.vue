<template>
  <div>
    <v-container>
      <v-card outlined class="mx-auto" max-width="500">
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon left>mdi-account</v-icon>User Login
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text v-on="on">
                  <v-icon left>mdi-account-box</v-icon>Account
                </v-btn>
              </template>
              <v-list>
                <v-list-item :to="item.route" :key="i" v-for="(item, i) in menuitems">
                  <v-list-item-title>
                    <v-icon left>{{item.icon}}</v-icon>
                    {{item.title}}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-items>
        </v-toolbar>

        <v-form ref="demoform" v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  :counter="25"
                  label="Username"
                  required
                  filled
                  clearable
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  filled
                  clearable
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :rules="nameRules"
                  :counter="25"
                  label="Password"
                  type="password"
                  required
                  filled
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <v-checkbox v-model="rememberme" label="Remember Me"></v-checkbox>
            <v-btn @click="this.submitForm">Submit</v-btn>
            <v-btn class="ml-1" @click="this.reSet">Reset Form</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  methods: {
    reSet() {
      this.$refs.demoform.reset();
    },
    submitForm() {
      if (this.valid) {
        const text = `
        Username: ${this.username}
        Email: ${this.email}
        Remember me: ${this.rememberme}`;
        alert(text);
      } else {
        alert("Form validation failed!");
      }
    }
  },
  data() {
    return {
      submitted: false,
      valid: false,
      rememberme: false,
      dialog: false,
      username: "",
      email: "",
      password: "",
      menuitems: [
        {
          title: "Home",
          icon: "mdi-clipboard-text",
          route: "/"
        },
        {
          title: "Orders Home",
          icon: "mdi-bank",
          route: "/greekorders"
        }
      ],
      nameRules: [
        v => !!v || "cannot be empty",
        v => (v && v.length >= 4) || "must be 4 chars"
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