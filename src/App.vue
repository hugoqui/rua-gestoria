<template>
<div>
  <Navbar />  
  <router-view />  
  <FooterBar/>
</div>
</template>

<script>
import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";

export default {
  name: "app",
  components: {
    Navbar, FooterBar
  }
};
</script>
<style>
</style>
