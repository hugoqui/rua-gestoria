<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"> <img width="100" src="./../assets/logo.png" alt="rua gestoria">  </a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

      <ul id="nav-mobile" class="right hide-on-med-and-down">        
        <li><router-link class="uppercase" to="/">Inicio</router-link></li>   
        <li><router-link class="uppercase" to="autonomos">Autónomos</router-link></li>   
        <li><router-link class="uppercase" to="empresas">Empresas</router-link></li>   
                
        <li><router-link class="uppercase" to="servicios">Servicios</router-link></li>   

        <li><router-link class="uppercase" to="tarifas">Tarifas</router-link></li>   
        <li><router-link class="uppercase" to="contacto">Contacto</router-link></li>   
      </ul>
    </div>
    
  <ul class="sidenav">
    <li><router-link class="uppercase" to="/">Inicio</router-link></li>   
    <li><router-link class="uppercase" to="autonomos">Autónomos</router-link></li>   
    <li><router-link class="uppercase" to="empresas">Empresas</router-link></li>   
       
    <li><router-link class="uppercase" to="servicios">Servicios</router-link></li>   
    
    <li><router-link class="uppercase" to="tarifas">Tarifas</router-link></li>   
    <li><router-link class="uppercase" to="contacto">Contacto</router-link></li>   
  </ul>
  </nav>
  
</template>

<script>
export default {};
</script>

<style>
nav {
  position: relative;
  z-index: 3;
  background: transparent;
  box-shadow: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0.454), transparent);
}
</style>
