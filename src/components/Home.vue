<template>
  <div>
    <div class="slider fullscreen">
      <ul class="slides">
        <li class="active" style="opacity: 1; transform: translateX(0px) translateY(0px);">
          <img src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="background-image: url(https://rev-advisors.com/wp-content/uploads/2017/01/slide-three.jpg);"> <!-- random image -->
          <div class="caption center-align" style="opacity: 1; transform: translateX(0px) translateY(0px);">
            <h3 class="uppercase">ASESORÍA ONLINE Y PRESENCIAL</h3>
            <h5 class="">Para autónomos y empresas.</h5>
          </div>
        </li>
        <li class="" style="opacity: 0; transform: translateX(0px) translateY(0px);">
          <img src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="background-image: url(https://rev-advisors.com/wp-content/uploads/2017/01/slide-one.jpg);"> <!-- random image -->
          <div class="caption right-align" style="opacity: 0; transform: translateX(-100px);">
            <h3 class="uppercase">Programas de Facturación</h3>
            <h5 class="">Ahorro de tiempo y dinero con nuestro sistema.</h5>
          </div>
        </li>
        <li style="opacity: 0; transform: translateX(0px) translateY(0px);" class="">
          <img src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="background-image: url(https://rev-advisors.com/wp-content/uploads/2017/01/slide-two.jpg);"> <!-- random image -->
          <div class="caption left-align" style="opacity: 0; transform: translateX(100px);">
            <h3 class="uppercase">Asesoría Jurídica</h3>
            <h5 class="">Abogados especializados en derecho y protección de datos.</h5>
          </div>
        </li>
      </ul>
      <ul class="indicators">
        <li class="indicator-item active"></li>
        <li class="indicator-item"></li>
        <li class="indicator-item"></li>
      </ul>
    </div>
    <div style="clear:both"></div>
    
    <main class="container main">
      <h1 class="center-align color1">Rua Gestoría</h1>
      <h2 class="center-align color2">Asesoría fiscal online para empresas y autónomos</h2>
      <p class="center-align color3">
        Gestionar tu negocio nunca ha sido tan fácil. <br>
        Seas pyme o freelance, Rua Gestoría es tu gestoría online más completa. <br>
        Precio final, sin sorpresas. <br>
      </p>

      <h3 class="center-align color2">Asesoramiento integral online</h3>
      <p class="center-align color3">
        ¿Necesitas algo más completo? Te podemos asesorar en todas las áreas clave de tu negocio.
      </p>

      <div class="row">
        <div class="col m6 center-align">
          <h4>Gesotría <br> <strong>Autónomos</strong>  </h4>
          <table class="table">
            <tr>
              <td class="grey lighten-3">
                <h2>30<small>€/mes</small> </h2>
                <strong>BÁSICO</strong> <br>
                <button class="btn waves-effect waves-light fondo3">SOLICITAR</button>
              </td>
              <td class="grey lighten-3">
                <h2>39<small>€/mes</small> </h2>
                <strong>ESTÁNDAR</strong> <br>
                <button class="btn waves-effect waves-light fondo3">SOLICITAR</button>
              </td>
              <td class="grey lighten-3">
                <h2>54<small>€/mes</small> </h2>
                <strong>COMPLETO</strong> <br>
                <button class="btn waves-effect waves-light fondo3">SOLICITAR</button>
              </td>
            </tr>
            <tr>
              <td>Asesoramiento Fiscal</td>
              <td>Asesoramiento Fiscal</td>
              <td>Asesoramiento Fiscal</td>
            </tr>
            <tr>
              <td>Presentación de impuestos</td>
              <td>Presentación de impuestos</td>
              <td>Presentación de impuestos</td>
            </tr>
            <tr>
              <td><del class="grey-text lighten-5"> Programa de Facturación</del></td>
              <td>Programa de Facturación</td>
              <td>Programa de Facturación</td>
            </tr>
            <tr>
              <td>Gestión de Contabilidad</td>
              <td><del class="grey-text lighten-5">Gestión de Contabilidad</del> </td>
              <td>Gestión de Contabilidad</td>
            </tr>
          </table>
        </div>

        <div class="col m6 center-align">
          <h4>Gesotría <br> <strong>Empresas</strong>  </h4>
          <table>
            <tr>
              <td class="grey lighten-3">
                <h2>88<small>€/mes</small> </h2>
                <strong>FISCAL BÁSICO</strong> <br>
                <button class="btn waves-effect waves-light fondo3">SOLICITAR</button>
              </td>
              <td class="grey lighten-3">
                <h2>125<small>€/mes</small> </h2>
                <strong>FISCAL COMPLETO</strong> <br>
                <button class="btn waves-effect waves-light fondo3">SOLICITAR</button>
              </td>              
            </tr>
            <tr>
              <td>Asesoramiento Fiscal</td>
              <td>Asesoramiento Fiscal</td>
            </tr>
            <tr>
              <td>Presentación de impuestos</td>
              <td>Presentación de impuestos</td>              
            </tr>            
            <tr>
              <td><del class="grey-text lighten-5">Gestión de Contabilidad</del> </td>
              <td>Gestión de Contabilidad</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted: function() {
    $(".dropdown-trigger").dropdown();
    $(".sidenav").sidenav();
    $(".slider").slider();
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.caption {
  border-top: solid white 3px;
  border-bottom: solid white 3px;
  text-align: center;
  margin-top: 10%;
}
.caption h3,
.caption h5 {
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 0px 15px #000;
}

td {
  text-align: center;
  font-size: large;
}

.btn {
  border-radius: 20px;
  margin-bottom: 40px;
}

table,
tr,
td {
  border: solid 1px lightgray;
  font-weight: bold;
}

small {
  color: gray;
  font-size: 1.5rem;
}
</style>
