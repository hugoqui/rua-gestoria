<template>
    <table >
        <tbody>
            <tr class="fondo2 color4">
                <td><strong>Categoría</strong></td>
                <td><strong>Servicio</strong></td>
                <td><strong>Precio</strong></td>
                <td><strong>Seleccionar</strong></td>
            </tr>
            <tr>
                <td>Empresas</td>
                <td>LSSICE Web o App corporativa
                <td>€125</td>
                <td><label><input type="checkbox" @change="el1 ? getTotal(125) : getTotal(-125)" v-model="el1" /><span></span></label></td>
            </tr>
            <tr>
                <td>Empresas</td>
                <td>Protección de Datos Básica</td>
                <td>€475</td>
                <td><label><input type="checkbox"  @change="el2 ? getTotal(475) : getTotal(-475)" v-model="el2" /><span></span></label></td>
            </tr>
            <tr>
                <td>Empresas</td>
                <td>Seguimiento protección de datos básica (anual)</td>
                <td>€175</td>
                <td><label><input type="checkbox"  @change="el3 ? getTotal(175) : getTotal(-175)" v-model="el3" /><span></span></label></td>
            </tr>
            <tr>
                <td>Empresas</td>
                <td>Contrato de prestación de servicios</td>
                <td>€350</td>
                <td><label><input type="checkbox"  @change="el4 ? getTotal(350) : getTotal(-350)" v-model="el4" /><span></span></label></td>
            </tr>
            <tr>
                <td>Empresas</td>
                <td>Contrato mercantil</td>
                <td>€350</td>
                <td><label><input type="checkbox" @change="el5 ? getTotal(350) : getTotal(-350)" v-model="el5" /><span></span></label></td>
            </tr>
            <tr>
                <td>Empresas</td>
                <td>Contrato mercantil: revisión</td>
                <td>€150</td>
                <td><label><input type="checkbox" @change="el6 ? getTotal(150) : getTotal(-150)" v-model="el6" /><span></span></label></td>
            </tr>
            <tr>
                <td>Particulares</td>
                <td>Contrato de alquiler</td>
                <td>€350</td>
                <td><label><input type="checkbox" @change="el7 ? getTotal(350) : getTotal(-350)" v-model="el7"  /><span></span></label></td>
            </tr>
            <tr>
                <td>Empresas</td>
                <td>Constitución de Sociedades
                <td>€590</td>
                <td><label><input type="checkbox" @change="el8 ? getTotal(590) : getTotal(-590)" v-model="el8" /><span></span></label></td>
            </tr>
            <tr class="fondo1 color4">
                <td colspan="3">Total</td>
                <td>{{total.toFixed(2)}} €</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">
                    <a class="waves-effect waves-light btn right modal-trigger" href="#modalConfirm">
                        <i class="material-icons right" style="font-size:2rem">equalizer</i>
                        Solicitar Presupeusto
                    </a>

                    <div id="modalConfirm" class="modal modal-fixed-footer" tabindex="0">
                        <div class="modal-content">
                            <h5 class="color3"> Estamos realizando su presupuesto </h5>
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
                                        <label for="message">Agregar detalles adicionales</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <a class="red waves-effect waves-green btn-flat" @click="requestQuote()">Aceptar</a>
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
                        </div>
                    </div>
                </td>
            </tr>
        </tfoot>
    </table>
</template>

<style scoped>
.btn {
  padding: 10px;
  height: auto;
}
.btn i {
  font-size: 2rem;
  margin-top: -4px;
}
</style>


<script>
export default {
  mounted: function() {
    $(".modal").modal();
  },
  data() {
    return {
      total: 0,
      el1: false,
      el2: false,
      el3: false,
      el4: false,
      el5: false,
      el6: false,
      el7: false,
      el8: false,

      name: "",
      business: "",
      city: "",
      phone: "",
      mail: "",
      message: ""
    };
  },
  methods: {
    getTotal(amount) {
      this.total += amount;
    },
    
    requestQuote() {
      let msg = "Solicitud de Asesoría Jurídica \n\r";

      if (this.el1 == true) {
        msg = msg + "LSSICE Web o App corporativa - por €125\n";
      }

      if (this.el2 == true) {
        msg = msg + "Protección de Datos Básica - por €475\n";
      }

      if (this.el3 == true) {
        msg =
          msg + "Seguimiento protección de datos básica (anual) - por €175\n";
      }

      if (this.el4 == true) {
        msg = msg + "Contrato de prestación de servicios - por €350\n";
      }

      if (this.el5 == true) {
        msg = msg + "Contrato mercantil - por €350\n";
      }

      if (this.el6 == true) {
        msg = msg + "Contrato mercantil: revisión - por €150\n";
      }

      if (this.el7 == true) {
        msg = msg + "Contrato de alquiler - por €350\n";
      }

      if (this.el8 == true) {
        msg = msg + "Constitución de Sociedades - por €590\n";
      }

      msg = msg + "TOTAL: €" + this.total;

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
            msg +
            " \n\r Detalles adicionales: " +
            this.message
        },
        function(data, status) {
          if (data == "ok" && status == "success") {
            this.el1 = false;
            this.el2 = false;
            this.el3 = false;
            this.el4 = false;
            this.el5 = false;
            this.el6 = false;
            this.el7 = false;
            this.el8 = false;

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
