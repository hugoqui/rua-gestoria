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
    .btn{
        padding: 10px;
        height: auto;
    }
    .btn i{font-size: 2rem; margin-top: -4px}
</style>


<script>
export default {
  data() {
    return {
        total :0,
        el1: false, el2: false, el3: false, el4: false,
        el5: false, el6: false, el7: false, el8: false
    };
  },
  methods:{
      getTotal(amount){          
          this.total += amount;
      },
      requestQuote(){
          let msg = "Solicitud de Asesoría Jurídica \n\r";

          if (this.el1==true) {
              msg = msg + "LSSICE Web o App corporativa - por €125\n";
          }

          if (this.el2==true) {
              msg = msg + "Protección de Datos Básica - por €475\n";
          }

          


        msg = msg + "TOTAL: €" + this.total;
      }
  }
};
</script>
