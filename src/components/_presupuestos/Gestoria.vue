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
                    <button class="waves-effect waves-light btn right">
                        <i class="material-icons right" style="font-size:2rem">equalizer</i>
                        Solicitar Presupeusto
                    </button>
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
  .prueba {    
    overflow: scroll;
    width: 100%;
  }

  table,
  tr,
  td {
    border: none;
  }
}
</style>


<script>
export default {
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
      el42: false
    };
  },
  methods: {
    getTotal(amount) {
      this.total += amount;
    },
    showMsg(val) {
      console.log("este");
      console.log(val);
    }
  }
};
</script>
