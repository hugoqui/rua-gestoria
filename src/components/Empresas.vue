<template>
    <main>
        <div style="background-image: url('https://www.pyme.es/wp-content/uploads/Junta_directiva.jpg');background-size:cover; min-height:300px;">
        </div>
        <h2 class="color2 center-align">Nuestros Planes para Empresas</h2>                                    
        <div class="container">
            <p class="color3 center-align">
                Con tu plan para PYMES, tendrás todas tus gestiones y servicios incluidos, asesoramiento fiscal, laboral y legal, además de un servicio contable y gestión de tus trabajadores. <br>
                La asesoría online te ahorrará desplazamientos y tiempo. Gestiona todo utilizando nuestro soporte web o nuestra app desde tu teléfono.  <br>
                <strong>¡Nos encargamos de todo!</strong>
            </p>
        </div>

        <div class="container">
            <div class="row">
                <div class="col m12 center-align">
                    <table>
                        <tr>
                        <td class="grey lighten-3">
                            <h2>88<small>€/mes</small> </h2>
                            <strong>FISCAL BÁSICO</strong> <br>
                            <router-link to="contacto" class="btn waves-effect">SOLICITAR</router-link>
                        </td>
                        <td class="grey lighten-3">
                            <h2>125<small>€/mes</small> </h2>
                            <strong>FISCAL COMPLETO</strong> <br>
                            <router-link to="contacto" class="btn waves-effect">SOLICITAR</router-link>
                        </td>              
                        </tr>
                        <tr>
                        <td>Asesoramiento Fiscal y Contable</td>                        
                        <td>Asesoramiento Fiscal y Contable</td>                        
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
        </div>
    </main>     
</template>

<style>
main {
  position: relative;
  margin-top: -65px;  
}

main img {
  display: none;
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

@media only screen and (max-width: 600px) {
  main {
    margin-top: 0px;
    text-align: justify;
    padding-left: 5px;
  }

  main img {
    display: block;
  }
  h2 {
    text-align: center;
  }
}
</style>
