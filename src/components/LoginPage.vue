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
  <v-form ref="form" v-model="valid" lazy-validation>
   <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login Area</v-card-title>
        <v-card-text>
          <v-text-field 
          label="Email" 
          v-model="email"
          prepend-icon="mdi-account-circle"
          :rules="emailRules"
          validate-on-blur
          />
          <v-text-field 
          v-model="password"
          label="Password" 
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          validate-on-blur
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
  </v-form>
 </v-app>
</template>

<script>
export default {
  name:'LoginPage',
  data: () => ({
    valid: true,
    showPassword:false,
    email:"",
    password:"",
    passwordRules: [(v) => !!v || "PassWord is required"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  props: {
    source: String
  },
  methods:{
    validate() {
      //將校驗所有輸入並返回它們是否都有效
      this.$refs.form.validate();
    },
    reset() {
      //將清除所有輸入並重置校驗錯誤
      this.$refs.form.reset();
    },
    resetValidation() {
      //只是重置輸入校驗，而不會更改其狀態
      this.$refs.form.resetValidation();
    },
    Login(){
      if(this.password != "" && this.email != ""){
        this.$router.push("/home");
      }
      else if (this.password == "" || this.email == ""){
        this.validate();
      }
      
      
    }
  }
};
</script>