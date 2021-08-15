<template>
<v-app>
  <v-app-bar
      app
      color="primary"
      dark
      src="https://picsum.photos/1920/1080?random"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      

      <v-app-bar-title></v-app-bar-title>

      <v-spacer></v-spacer>

      <!--   右上角 bar 按鈕
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      -->
    </v-app-bar>

   <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login Area</v-card-title>
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          label="Password" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <!--  ToDo------- Register
          <v-btn color="success">Register</v-btn>
          -->
          <v-btn color="primary" @click="Login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
 </v-app>
</template>

<script>
export default {
  name:'LoginPage',
  data: () => ({
    showPassword:false
  }),
  props: {
    source: String
  },
  methods:{
    Login(){
      this.$router.push("/home");
    }
  }
};
</script>