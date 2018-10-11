<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"> <img width="100" src="./../assets/logo.png" alt="rua gestoria">  </a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

      <ul id="nav-mobile" class="right hide-on-med-and-down">        
        <li v-bind:class="{active:element==1}" @click="element=1"><router-link class="uppercase" to="/">Inicio</router-link></li>   
        <li v-bind:class="{active:element==2}" @click="element=2"><router-link class="uppercase" to="autonomos">Autónomos</router-link></li>   
        <li v-bind:class="{active:element==3}" @click="element=3"><router-link class="uppercase" to="empresas">Empresas</router-link></li>   
                
        <li v-bind:class="{active:element==4}" @click="element=4"><router-link class="uppercase" to="servicios">Servicios</router-link></li>   

        <li v-bind:class="{active:element==5}" @click="element=5"><router-link class="uppercase" to="tarifas">Tarifas</router-link></li>   
        <li v-bind:class="{active:element==6}" @click="element=6"><router-link class="uppercase" to="contacto">Contacto</router-link></li>   
      </ul>
    </div>
    
  <ul class="sidenav" id="mobile-demo">
    <li v-bind:class="{active:element==1}" @click="element=1; hideNav()"><router-link class="uppercase" to="/">Inicio</router-link></li>   
    <li v-bind:class="{active:element==2}" @click="element=2; hideNav()"><router-link class="uppercase" to="autonomos">Autónomos</router-link></li>   
    <li v-bind:class="{active:element==3}" @click="element=3; hideNav()"><router-link class="uppercase" to="empresas">Empresas</router-link></li>   
       
    <li v-bind:class="{active:element==4}" @click="element=4; hideNav()"><router-link class="uppercase" to="servicios">Servicios</router-link></li>   
    
    <li v-bind:class="{active:element==5}" @click="element=5; hideNav()"><router-link class="uppercase" to="tarifas">Tarifas</router-link></li>   
    <li v-bind:class="{active:element==6}" @click="element=6; hideNav()"><router-link class="uppercase" to="contacto">Contacto</router-link></li>   
  </ul>
  </nav>
  
</template>

<script>
export default {
  mounted: function() {
    $(".dropdown-trigger").dropdown();
    $(".sidenav").sidenav();
    $(".slider").slider();
  },
  data() {
    return {
      element:1
    };
  },
  methods:{
    hideNav(){
      console.log('hide')
    }
  }
};
</script>

<style>
nav {
  position: relative;
  /* z-index: 3; */
  background: transparent;
  box-shadow: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0.454), transparent);
}

.active{
  font-weight: bolder;
  
}
</style>
