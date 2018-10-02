<template>
<div>
    <div class="parallax-container">
        <div class="parallax"><img src="https://worldwidecallcenterscdn-worldwidecallcen.netdna-ssl.com/wp-content/uploads/2014/11/banner21.png"></div>
    </div>

    <div class="center-align">        
        <div class="container">
            <h3 class="indigo-text text-darken-2 bubble">
                CONTÁCTENOS
            </h3>
            <h5 class="indigo-text bubble">
                Envíenos sus consultas o sugerencias, completando la siguiente información:
            </h5>
            <div class="row" style="margin-top:30px">
                <form class="col s12 m9">
                    <div class="row">
                        <div class="input-field col m6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="name" type="text" class="validate">
                            <label for="name">Nombre y Apellido</label>
                        </div>
                        <div class="input-field col m6">
                            <i class="material-icons prefix">business</i>
                            <input id="business" type="tel" class="validate">
                            <label for="business">Nombre Empresa</label>
                        </div>

                        <div class="input-field col m6">
                            <i class="material-icons prefix">phone</i>
                            <input id="telephone" type="tel" class="validate">
                            <label for="telephone">Teléfono</label>
                        </div>

                        <div class="input-field col m6">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="email" class="validate">
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="Ingrese una dirección válida" data-success=""></span>
                        </div>

                        <div class="input-field col s12">
                            <i class="material-icons prefix">mode_edit</i>
                            <textarea id="message" rows="5" class="materialize-textarea"></textarea>
                            <label for="message">Escriba su Mensaje</label>
                        </div>
                    </div>

                    <a class="waves-effect waves-light btn fondo2 modal-trigger btn-large" href="#modal1"><i class="material-icons right">send</i>Enviar</a>
                    <!-- Mensaje -->
                    <div id="modal1" class="modal" tabindex="0">
                        <div class="modal-content">
                            <h4>Gracias por contactarnos</h4>
                            <p>En breve un asesor se comunicará con usted.</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                        </div>
                    </div>

                </form>

              <div class="col s12 m3 hide-on-small-only center-align">
                    <label class="color3">Agréganos a tus Contactos</label>
                    <img src="./../assets/qrcode.png" class="materialboxed" alt="" style="margin:auto">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
mounted: function() {
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.modal').modal();
  }
}
</script>

<style>
    .parallax-container{
        height: 400px;
        top: -65px;
    }
</style>
