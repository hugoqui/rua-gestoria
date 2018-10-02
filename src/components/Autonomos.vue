<template>
    <main>
        <div style="background-image: url('/img/autonomos.0f8a8beb.jpg');background-size:cover;">
            <div class="container">
                <div class="row">
                    <div class="col s12 m6">
                        <h2 class="color2">Nuestros Planes para Autónomos</h2>
                        <p class="color3">
                            Descubre nuestras mejores ofertas, adaptadas a los diferentes tipos de freelance y 
                            sus necesidades. En Rua Gestoría te lo ponemos muy fácil  ¡Selecciona uno de nuestros 
                            planes y únete a tu gestoría low cost.            
                        </p>
                        <img src="./../assets/autonomos.jpg" class="responsive-img" alt="">
                    </div>
                </div>
            </div>        
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col m12 center-align">
                    <h4 class="color1">Gesotría <br> <strong>Autónomos</strong>  </h4>
                    <table class="table">
                        <tr>
                        <td class="fondo4 lighten-3">
                            <h2>30<small>€/mes</small> </h2>
                            <strong>BÁSICO</strong> <br>
                            <button class="btn waves-effect waves-light fondo3">SOLICITAR</button>
                        </td>
                        <td class="fondo4 lighten-3">
                            <h2>39<small>€/mes</small> </h2>
                            <strong>ESTÁNDAR</strong> <br>
                            <button class="btn waves-effect waves-light fondo3">SOLICITAR</button>
                        </td>
                        <td class="fondo4 lighten-3">
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
            </div>
        </div>
        
    </main>    
</template>

<script>
export default {};
</script>

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

small {color:gray; font-size:1.5rem}

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
