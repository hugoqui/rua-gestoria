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
                        <div class="input-field col s12">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="name" type="text" class="validate" v-model="name">
                            <label for="name">Nombre y Apellido</label>
                        </div>
                        <div class="input-field col m6">
                            <i class="material-icons prefix">business</i>
                            <input id="business" type="tel" class="validate" v-model="business">
                            <label for="business">Nombre Empresa</label>                            
                        </div>

                        <div class="input-field col m6">
                            <i class="material-icons prefix">location_on</i>
                            <input id="city" type="text" class="validate" v-model="city">
                            <label for="city">Ciudad</label>
                            <span class="helper-text" data-error="Ingrese una dirección válida" data-success=""></span>
                        </div>

                        <div class="input-field col m6">
                            <i class="material-icons prefix">phone</i>
                            <input id="telephone" type="tel" class="validate" v-model="phone">
                            <label for="telephone">Teléfono</label>
                        </div>

                        <div class="input-field col m6">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="email" class="validate" v-model="mail">
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="Ingrese una dirección válida" data-success=""></span>
                        </div>

                        <div class="input-field col s12">
                            <i class="material-icons prefix">mode_edit</i>
                            <textarea id="message" rows="5" class="materialize-textarea" v-model="message"></textarea>
                            <label for="message">Escriba su Mensaje</label>
                        </div>
                    </div>

                    <a class="waves-effect waves-light btn fondo2 modal-trigger btn-large" @click="send()" href="#modal1"><i class="material-icons right">send</i>Enviar</a>
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

            <!-- <button class="btn" @click="sumar()">Click Aqui</button>
            <input type="text" v-model="name">
            <h1>Contador: {{contador}} *** {{name}}</h1> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
  mounted: function() {
    $(".parallax").parallax();
    $(".materialboxed").materialbox();
    $(".modal").modal();
  },

  data() {
    return {
      name: "",
      business: "",
      city: "",
      phone: "",
      mail: "",
      message: "" 
    };
  },

  methods: {
    send() {
      $.post(
        "http://backend.foxclean.es/api/Clientes/Peticion/",
        {
          EMPRESA: this.business,
          NOMBRE: this.name,
          CIUDAD: this.city,
          TELEFONO: this.phone,
          MAIL: this.mail,
          PETICION:
            "Rua Gestoría: \n\r" +
            this.message            
        },
        function(data, status) {
          if (data == "ok" && status == "success") {
            console.log("Se envió el mensaje..");
          } else {
            alert("error, intente nuevamente");
          }
        }
      );
    }
  }
};
</script>

<style>
.parallax-container {
  height: 400px;
  top: -65px;
  z-index: -1;
}
</style>
