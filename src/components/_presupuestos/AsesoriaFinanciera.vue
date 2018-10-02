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
      }
  }
};
</script>