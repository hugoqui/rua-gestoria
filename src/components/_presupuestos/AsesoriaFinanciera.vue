<template>
    <table>
    <tbody>
        <tr class="fondo2 color4">
            <td><strong>Categoría</strong></td>
            <td><strong>Servicio</strong></td>
            <td><strong>Tarifa</strong></td>
            <td><strong>Seleccionar</strong></td>
        </tr>
        <tr>
            <td>Empresas</td>
            <td>Asesoramiento Carteras de Inversión Inferiores a 100.000€</td>
            <td>€140</td>
            <td><label><input type="checkbox" @change="el1 ? getTotal(140) : getTotal(-140)" v-model="el1" /><span></span></label></td>
        </tr>
        <tr>
            <td>Empresas</td>
            <td>Asesoramiento Carteras de Inversión Inferiores a 500.00€</td>
            <td>€200</td>
            <td><label><input type="checkbox" @change="el2 ? getTotal(200) : getTotal(-200)" v-model="el2" /><span></span></label></td>
        </tr>
        <tr>
            <td>Empesas</td>
            <td>Asesoramiento Carteras de Inversión superiores a 500.000€</td>
            <td>€500</td>
            <td><label><input type="checkbox" @change="el3 ? getTotal(500) : getTotal(-500)" v-model="el3" /><span></span></label></td>
        </tr>
        <tr>
            <td>Empresas</td>
            <td>Búsqueda de financiación (+0,90% del capital financiado)</td>
            <td>€250</td>
            <td><label><input type="checkbox" @change="el4 ? getTotal(250) : getTotal(-250)" v-model="el4" /><span></span></label></td>
        </tr>
        <tr>
            <td>Empresas</td>
            <td>Plan de Negocio Básico con plan financiero</td>
            <td>€1.250</td>
            <td><label><input type="checkbox" @change="el5 ? getTotal(1250) : getTotal(-1250)" v-model="el5" /><span></span></label></td>
        </tr>
        <tr>
            <td>Empresas</td>
            <td>Plan Financiero</td>
            <td>€650</td>
            <td><label><input type="checkbox" @change="el6 ? getTotal(650) : getTotal(-650)" v-model="el6" /><span></span></label></td>
        </tr>
        <tr>
            <td>Particulares</td>
            <td>Préstamos para particulares (+0,60% del capital financiado)</td>
            <td>€100</td>
            <td><label><input type="checkbox" @change="el7 ? getTotal(100) : getTotal(-100)" v-model="el7" /><span></span></label></td>
        </tr>
        <tr>
            <td>Particulares</td>
            <td>Reclamación cláusulas suelo</td>
            <td>€100</td>
            <td><label><input type="checkbox" @change="el8 ? getTotal(100) : getTotal(-100)" v-model="el8" /><span></span></label></td>
        </tr>
        <tr>
            <td>Empresas</td>
            <td>Reestructuración de deuda bancaria (+0,5% del capital para deudas de más de 50.000€)</td>
            <td>€400</td>
            <td><label><input type="checkbox" @change="el9 ? getTotal(400) : getTotal(-400)" v-model="el9" /><span></span></label></td>
        </tr>
        <tr>
            <td>Particulares</td>
            <td>Salida de lista de morosos</td>
            <td>€150</td>
            <td><label><input type="checkbox" @change="el10 ? getTotal(150) : getTotal(-150)" v-model="el10" /><span></span></label></td>
        </tr>
        <tr>
            <td>Particulares</td>
            <td>Unificación de deudas (deudas superiores a 50.000€: +0,50% del capital financiado)</td>
            <td>€200</td>
            <td><label><input type="checkbox" @change="el11 ? getTotal(200) : getTotal(-200)" v-model="el11" /><span></span></label></td>
        </tr>
        <tr class="fondo1 color4">
            <td colspan="3">Total</td>
            <td>{{total.toFixed(2)}} €</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">
                <a v-bind:disabled="total<=0" class="waves-effect waves-light btn right modal-trigger" href="#modalConfirm">
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
      el9: false,
      el10: false,
      el11: false,

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
      let msg = "Solicitud de Asesoría Financiera \n\r";

      if (this.el1 == true) {
        msg =
          msg +
          "Asesoramiento Carteras de Inversión Inferiores a 100.000€	 - por €140\n";
      }

      if (this.el2 == true) {
        msg =
          msg +
          "Asesoramiento Carteras de Inversión Inferiores a 500.00€ - por €200	\n";
      }

      if (this.el3 == true) {
        msg =
          msg +
          "Asesoramiento Carteras de Inversión superiores a 500.000€	 - por €500\n";
      }

      if (this.el4 == true) {
        msg =
          msg +
          "Búsqueda de financiación (+0,90% del capital financiado)	 - por €250\n";
      }

      if (this.el5 == true) {
        msg = msg + "Plan de Negocio Básico con plan financiero	 - por €1250\n";
      }

      if (this.el6 == true) {
        msg = msg + "Plan Financiero - por €650\n";
      }

      if (this.el7 == true) {
        msg =
          msg +
          "Préstamos para particulares (+0,60% del capital financiado)	 - por €100\n";
      }

      if (this.el8 == true) {
        msg = msg + "Reclamación cláusulas suelo - por €100\n";
      }

      if (this.el9 == true) {
        msg =
          msg +
          "Reestructuración de deuda bancaria (+0,5% del capital para deudas de más de 50.000€) - por €400\n";
      }

      if (this.el9 == true) {
        msg = msg + "Salida de lista de morosos - por €150\n";
      }

      if (this.el9 == true) {
        msg =
          msg +
          "Unificación de deudas (deudas superiores a 50.000€: +0,50% del capital financiado) - por €200\n";
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

              this.uncheckElements
            
            console.log("Se envió el mensaje..");
          } else {
            alert("error, intente nuevamente");
          }
        }
      );
    },
    
    uncheckElements(){        
        this.el1 = false;
            this.el2 = false;
            this.el3 = false;
            this.el4 = false;
            this.el5 = false;
            this.el6 = false;
            this.el7 = false;
            this.el8 = false;
            this.el9 = false;
            this.el10 = false;
            this.el11 = false;

        console.log("Se envió el mensaje..");
        alert("Gracias por contactarnos, en breve completaremos su solicitud")
    }
  }
};
</script>