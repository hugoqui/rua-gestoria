<template >
    <table>
        <tbody>
            <tr class="fondo2 color4">
                <td><strong>Categoría</strong></td>
                <td><strong>Servicio</strong></td>
                <td><strong>Tarifa</strong></td>
                <td><strong>Contratación</strong></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Alta de autónomos</td>
                <td>€60</td>
                <td><label><input type="checkbox" @change="el1 ? getTotal(60) : getTotal(-60)" v-model="el1" /><span></span></label></td>
            </tr>
            <tr>
                <td>Asesoría</td>
                <td>Asesoramiento online fiscal o laboral: 30 minutos</td>
                <td>€35</td>
                <td><label><input type="checkbox" @change="el2 ? getTotal(35) : getTotal(-35)" v-model="el2" /><span></span></label></td>
            </tr>
            <tr>
                <td>Asesoría</td>
                <td>Asesoramiento online fiscal o laboral: 1 hora</td>
                <td>€60</td>
                <td><label><input type="checkbox" @change="el3 ? getTotal(60) : getTotal(-60)" v-model="el3" /><span></span></label></td>
            </tr>
            <tr>
                <td>Asesoría</td>
                <td>Asesoramiento online financiero o legal: 30 minutos</td>
                <td>€45</td>
                <td><label><input type="checkbox" @change="el4 ? getTotal(45) : getTotal(-45)" v-model="el4" /><span></span></label></td>
            </tr>
            <tr>
                <td>Asesoría</td>
                <td>Asesoramiento online financiero o legal: 1 hora</td>
                <td>€75</td>
                <td><label><input type="checkbox" @change="el5 ? getTotal(75) : getTotal(-75)" v-model="el5" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Autónomos básico</td>
                <td>30€ /mes</td>
                <td><label><input type="checkbox" @change="el6 ? getTotal(30) : getTotal(-30)" v-model="el6" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Autónomos completo</td>
                <td>54€ /mes</td>
                <td><label><input type="checkbox" @change="el7 ? getTotal(54) : getTotal(-54)" v-model="el7" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Autónomos estándar</td>
                <td>45€ /mes</td>
                <td><label><input type="checkbox" @change="el8 ? getTotal(45) : getTotal(-45)" v-model="el8" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Baja de autónomos</td>
                <td>€60</td>
                <td><label><input type="checkbox" @change="el9 ? getTotal(60) : getTotal(-60)" v-model="el9" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Certificado corriente de pagos de Hacienda </td>
                <td>€12</td>
                <td><label><input type="checkbox" @change="el10 ? getTotal(12) : getTotal(-12)" v-model="el10" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Certificado corriente de pagos Seguridad Social</td>
                <td>€12</td>
                <td><label><input type="checkbox" @change="el11 ? getTotal(12) : getTotal(-12)" v-model="el11" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Certificado digital</td>
                <td>€40</td>
                <td><label><input type="checkbox" @change="el12 ? getTotal(40) : getTotal(-40)" v-model="el12" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Declaración de la Renta (IRPF)</td>
                <td>Desde 39€</td>
                <td><label><input type="checkbox" @change="el13 ? getTotal(39) : getTotal(-39)" v-model="el13" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Declaración de la Renta Complementaria\</td>
                <td>€60</td>
                <td><label><input type="checkbox" @change="el14 ? getTotal(60) : getTotal(-60)" v-model="el14" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Declaración de la Renta Fuera de plazo</td>
                <td>Desde 39€</td>
                <td><label><input type="checkbox" @change="el15 ? getTotal(39) : getTotal(-39)" v-model="el15" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Declaración de Patrimonio</td>
                <td>€70</td>
                <td><label><input type="checkbox" @change="el16 ? getTotal(70) : getTotal(-70)" v-model="el16" /><span></span></label></td>
            </tr>
            <tr>
                <td></td>
                <td>Empresas básico</td>
                <td>88€ /mes</td>
                <td><label><input type="checkbox" @change="el17 ? getTotal(88) : getTotal(-88)" v-model="el17" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Empresas completo (25-50 facturas/mes)</td>
                <td>152€ /mes</td>
                <td><label><input type="checkbox" @change="el18 ? getTotal(152) : getTotal(-152)" v-model="el18" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Empresas completo (50-100 facturas/mes)</td>
                <td>180€ /mes</td>
                <td><label><input type="checkbox" @change="el19 ? getTotal(180) : getTotal(-180)" v-model="el19" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Empresas completo (hasta 25 facturas/mes)</td>
                <td>125€ /mes</td>
                <td><label><input type="checkbox" @change="el20 ? getTotal(125) : getTotal(-125)" v-model="el20" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Impuesto sobre sociedades y cuentas anuales</td>
                <td>€350</td>
                <td><label><input type="checkbox" @change="el21 ? getTotal(350) : getTotal(-350)" v-model="el21" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Laboral: cuota mensual base</td>
                <td>40€ /mes</td>
                <td><label><input type="checkbox" @change="el22 ? getTotal(40) : getTotal(-40)" v-model="el22" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Laboral: número de nóminas</td>
                <td>12€/ nómina</td>
                <td><label><input type="checkbox" @change="el23 ? getTotal(12) : getTotal(-12)" v-model="el23" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Modelo 036 o 037: Alta de actividad</td>
                <td>€30</td>
                <td><label><input type="checkbox" @change="el24 ? getTotal(30) : getTotal(-30)" v-model="el24" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Modelo 036 o 037: Modificación censal</td>
                <td>€30</td>
                <td><label><input type="checkbox" @change="el25 ? getTotal(30) : getTotal(-30)" v-model="el25" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 111: IRPF trimestral autónomos</td>
                <td>€15</td>
                <td><label><input type="checkbox" @change="el26 ? getTotal(15) : getTotal(-15)" v-model="el26" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 115: Retenciones trimestrales alquiler</td>
                <td>€15</td>
                <td><label><input type="checkbox" @change="el27 ? getTotal(15) : getTotal(-15)" v-model="el27" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 130: Pago a cuenta IRPF</td>
                <td>€15</td>
                <td><label><input type="checkbox" @change="el28 ? getTotal(15) : getTotal(-15)" v-model="el28" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 180: Resumen anual retenciones</td>
                <td>€90</td>
                <td><label><input type="checkbox" @change="el29 ? getTotal(90) : getTotal(-90)" v-model="el29" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 190: Resumen anual IRPF</td>
                <td>€90</td>
                <td><label><input type="checkbox" @change="el30 ? getTotal(90) : getTotal(-90)" v-model="el30" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 193: Resumen anual retenciones</td>
                <td>€90</td>
                <td><label><input type="checkbox" @change="el31 ? getTotal(90) : getTotal(-90)" v-model="el31" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 210: Impuesto Renta No Residentes</td>
                <td>€75</td>
                <td><label><input type="checkbox" @change="el32 ? getTotal(75) : getTotal(-75)" v-model="el32" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 303: Autoloquidación del IVA</td>
                <td>€15</td>
                <td><label><input type="checkbox" @change="el33 ? getTotal(15) : getTotal(-15)" v-model="el33" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 347: Declaración de operaciones con terceros</td>
                <td>€50</td>
                <td><label><input type="checkbox" @change="el34 ? getTotal(50) : getTotal(-50)" v-model="el34" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 390: Resumen anual del IVA</td>
                <td>€25</td>
                <td><label><input type="checkbox" @change="el35 ? getTotal(25) : getTotal(-25)" v-model="el35" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo 720: Bienes e inversiones extranjero</td>
                <td>€150</td>
                <td><label><input type="checkbox" @change="el36 ? getTotal(150) : getTotal(-150)" v-model="el36" /><span></span></label></td>
            </tr>
            <tr>
                <td>Impuestos</td>
                <td>Modelo D6: Inversiones en el extranjero</td>
                <td>€150</td>
                <td><label><input type="checkbox" @change="el37 ? getTotal(150) : getTotal(-150)" v-model="el37" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Notificaciones Agencia Tributaria</td>
                <td>7€ /mes</td>
                <td><label><input type="checkbox" @change="el38 ? getTotal(7) : getTotal(-7)" v-model="el38" /><span></span></label></td>
            </tr>
            <tr>
                <td>Cuota gestoría</td>
                <td>Notificaciones de la Seguridad Social</td>
                <td>7€ /mes</td>
                <td><label><input type="checkbox" @change="el39 ? getTotal(7) : getTotal(-7)" v-model="el39" /><span></span></label></td>
            </tr>
            <tr>
                <td>Confección</td>
                <td>Pre-cálculo Declaración de la Renta</td>
                <td>€60</td>
                <td><label><input type="checkbox" @change="el40 ? getTotal(60) : getTotal(-60)" v-model="el40" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión Online</td>
                <td>Requerimiento de Hacienda</td>
                <td>€60</td>
                <td><label><input type="checkbox" @change="el41 ? getTotal(60) : getTotal(-60)" v-model="el41" /><span></span></label></td>
            </tr>
            <tr>
                <td>Gestión</td>
                <td>Desplazamiento administración</td>
                <td>€60</td>
                <td><label><input type="checkbox" @change="el42 ? getTotal(60) : getTotal(-60)" v-model="el42" /><span></span></label></td>
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
                            <a class="red waves-effect waves-green btn-flat modal-close" @click="requestQuote()">Aceptar</a>
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

@media only screen and (max-width: 450px) {
  table,
  tr,
  td {
    border: none;
  }
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
      el12: false,
      el13: false,
      el14: false,
      el15: false,
      el16: false,
      el17: false,
      el18: false,
      el19: false,
      el20: false,
      el21: false,
      el22: false,
      el23: false,
      el24: false,
      el25: false,
      el26: false,
      el27: false,
      el28: false,
      el29: false,
      el30: false,
      el31: false,
      el32: false,
      el33: false,
      el34: false,
      el35: false,
      el36: false,
      el37: false,
      el38: false,
      el39: false,
      el40: false,
      el41: false,
      el42: false,

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
      let msg = "Solicitud de Gestoría Fiscal y Laboral \n\r";

      if (this.el1 == true) {
        msg = msg + "Alta de autónomos - por €60\n";
      }

      if (this.el2 == true) {
        msg =
          msg + "Asesoramiento online fiscal o laboral: 30 minutos - por €35\n";
      }

      if (this.el3 == true) {
        msg = msg + "Asesoramiento online fiscal o laboral: 1 hora - por €60\n";
      }

      if (this.el4 == true) {
        msg =
          msg +
          "Asesoramiento online financiero o legal: 30 minutos - por €45\n";
      }

      if (this.el5 == true) {
        msg =
          msg + "Asesoramiento online financiero o legal: 1 hora	 - por €75\n";
      }

      if (this.el6 == true) {
        msg = msg + "Autónomos básico	 - por €30\n";
      }

      if (this.el7 == true) {
        msg = msg + "Autónomos completo	 - por €54\n";
      }

      if (this.el8 == true) {
        msg = msg + "Autónomos estándar - por €45\n";
      }

      if (this.el9 == true) {
        msg = msg + "Baja de autónomos - por €60\n";
      }

      if (this.el10 == true) {
        msg = msg + "Certificado corriente de pagos de Hacienda - por €12\n";
      }

      if (this.el11 == true) {
        msg =
          msg + "Certificado corriente de pagos Seguridad Social - por €12\n";
      }

      if (this.el12 == true) {
        msg = msg + "Certificado digital - por €40\n";
      }

      if (this.el13 == true) {
        msg = msg + "Declaración de la Renta (IRPF)	 - desde €39\n";
      }

      if (this.el14 == true) {
        msg = msg + "Declaración de la Renta Complementaria - por €60\n";
      }

      if (this.el15 == true) {
        msg = msg + "Declaración de la Renta Fuera de plazo - por €39\n";
      }

      if (this.el16 == true) {
        msg = msg + "Declaración de Patrimonio - por €70\n";
      }

      if (this.el17 == true) {
        msg = msg + "Empresas básico - por €88\n";
      }

      if (this.el18 == true) {
        msg = msg + "Empresas completo (25-50 facturas/mes)	 - por €152\n";
      }

      if (this.el19 == true) {
        msg = msg + "Empresas completo (50-100 facturas/mes) - por €180\n";
      }

      if (this.el20 == true) {
        msg = msg + "Empresas completo (hasta 25 facturas/mes)	 - por €125\n";
      }

      if (this.el21 == true) {
        msg = msg + "Impuesto sobre sociedades y cuentas anuales - por €350\n";
      }

      if (this.el22 == true) {
        msg = msg + "Laboral: cuota mensual base - por €40\n";
      }

      if (this.el23 == true) {
        msg = msg + "Laboral: número de nóminas - por €12\n";
      }

      if (this.el24 == true) {
        msg = msg + "Modelo 036 o 037: Alta de actividad - por €30\n";
      }

      if (this.el25 == true) {
        msg = msg + "Modelo 036 o 037: Modificación censal - por €30\n";
      }

      if (this.el26 == true) {
        msg = msg + "Modelo 111: IRPF trimestral autónomos - por €15\n";
      }

      if (this.el27 == true) {
        msg = msg + "Modelo 115: Retenciones trimestrales alquiler - por €15\n";
      }

      if (this.el28 == true) {
        msg = msg + "Modelo 130: Pago a cuenta IRPF	 - por €15\n";
      }

      if (this.el29 == true) {
        msg = msg + "Modelo 180: Resumen anual retenciones - por €90\n";
      }

      if (this.el30 == true) {
        msg = msg + "Modelo 190: Resumen anual IRPF - por €90\n";
      }

      if (this.el31 == true) {
        msg = msg + "Modelo 193: Resumen anual retenciones - por €90\n";
      }

      if (this.el32 == true) {
        msg = msg + "Modelo 210: Impuesto Renta No Residentes - por €75\n";
      }

      if (this.el33 == true) {
        msg = msg + "Modelo 303: Autoloquidación del IVA - por €15\n";
      }

      if (this.el34 == true) {
        msg =
          msg +
          "Modelo 347: Declaración de operaciones con terceros - por €50\n";
      }

      if (this.el35 == true) {
        msg = msg + "Modelo 390: Resumen anual del IVA - por €25\n";
      }

      if (this.el36 == true) {
        msg = msg + "Modelo 720: Bienes e inversiones extranjero - por €150\n";
      }

      if (this.el37 == true) {
        msg = msg + "Modelo D6: Inversiones en el extranjero - por €150\n";
      }

      if (this.el38 == true) {
        msg = msg + "Notificaciones Agencia Tributaria - por €7\n";
      }

      if (this.el39 == true) {
        msg = msg + "Notificaciones de la Seguridad Social - por €7\n";
      }

      if (this.el40 == true) {
        msg = msg + "Pre-cálculo Declaración de la Renta - por €60\n";
      }

      if (this.el41 == true) {
        msg = msg + "Requerimiento de Hacienda - por €60\n";
      }

      if (this.el42 == true) {
        msg = msg + "Desplazamiento administración - por €60\n";
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
            this.uncheckElements;
          } else {
            alert("error, intente nuevamente");
          }
        }
      );
    },
    uncheckElements() {
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
      this.el12 = false;
      this.el13 = false;
      this.el14 = false;
      this.el15 = false;
      this.el16 = false;
      this.el17 = false;
      this.el18 = false;
      this.el19 = false;
      this.el20 = false;
      this.el21 = false;
      this.el22 = false;
      this.el23 = false;
      this.el24 = false;
      this.el25 = false;
      this.el26 = false;
      this.el27 = false;
      this.el28 = false;
      this.el29 = false;
      this.el30 = false;
      this.el31 = false;
      this.el32 = false;
      this.el33 = false;
      this.el34 = false;
      this.el35 = false;
      this.el36 = false;
      this.el37 = false;
      this.el38 = false;
      this.el39 = false;
      this.el40 = false;
      this.el41 = false;
      this.el42 = false;

      console.log("Se envió el mensaje..");
      alert("Gracias por contactarnos, en breve completaremos su solicitud");
    }
  }
};
</script>
