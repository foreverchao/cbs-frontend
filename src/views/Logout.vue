<template>
  <div class="logout pa-6">
    
  </div>
</template>

<script>
  
  export default {
    components:{
      
    },
    mounted() {
      this.initialize();
    },

    methods:{
      initialize(){
        this.$store.commit("changeToken", "");
        this.$store.commit("changeId", "");
        this.$router.push("/");
      }
    },
    
  }
</script>