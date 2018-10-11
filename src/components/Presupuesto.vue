<template>
    <main>
        <div style="background-image: url('https://www.schwab.com/resource-center/insights/sites/g/files/eyrktu156/files/styles/article_hero/public/stock-market-3_1187x528_0.jpg?itok=3f1U8Hk3');background-size:cover; min-height:400px;">
        </div>
        <h2 class="color2 center-align">Tarifas de gestoría online</h2>                                    
        <div class="container">
            <p class="color3 center-align">
                Todos nuestros precios son públicos y transparentes para que en todo momento 
                sepas los costes reales de cada gestión. <br>                
                <strong>Sin sorpresas, ni cargos adicionales.</strong>
            </p>
        </div>
        
        <div class="container">
          <div class="row">
            <div class="input-field col s12 m6">
              <select v-model="selectedPlan">
                <option value="" disabled>Seleccione su Opción</option>
                <option value="1" class="uppercase">Gestoría Online Fiscal y Laboral</option>
                <option value="2" class="uppercase">Asesoría Financiera</option>
                <option value="3" class="uppercase">Asesoría Jurídica</option>
              </select>
              <label>Plan de Gestoría</label>
            </div>
          </div>

          <div class="row">                           
            <div class="col m12 center-align">
              <gestoria v-if="selectedPlan==1" class="info" />
              <asesoria-financiera v-if="selectedPlan==2" class="info" />
              <asesoria-juridica v-if="selectedPlan==3" class="info" />
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

.info {  
  transition: all 300ms;
  animation: bubble 500ms;
}

.info table{
  box-shadow: 0px 0px 10px gray;
}

@keyframes bubble {
  0% {
    opacity: 0;
    margin-top: 100px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
}
</style>



<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
<script>
import Gestoria from "./_presupuestos/Gestoria";
import AsesoriaFinanciera from "./_presupuestos/AsesoriaFinanciera";
import AsesoriaJuridica from "./_presupuestos/AsesoriaJuridica";

export default {
  mounted: function() {
    this.checkPlan(); 
  },
  components: {
    Gestoria,
    AsesoriaFinanciera,
    AsesoriaJuridica
  },
  data() {
    return {
      selectedPlan: 0
    };
  },
  methods: {
    checkPlan() {
      $("select").formSelect();
    }
  }
};
</script>

  