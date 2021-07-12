<template>
  <div class="tab-section">
    <form>
      <div class="row">
        <div class="col-md-8">
          <div class="form-group row">
            <label class="col-sm-4" for=""> Kesenian</label>
            <rds-text-input class="col-sm-8" placeholder="Seni Rupa, Seni Musik, Seni Suara, dll"></rds-text-input>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Olah Raga</label>
            <rds-text-input class="col-sm-8" placeholder="Sepak Bola, Basket, Bulu Tangkis, Renang, dll"></rds-text-input>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Organisasi Kemasyarakatan</label>
            <rds-text-input class="col-sm-8" placeholder="Remaja Masjid, Karang Taruna, OSIS/IP, dll"></rds-text-input>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Cita-cita</label>
            <rds-text-input class="col-sm-8" placeholder="Menjadi Ustadz, Menjadi Programmer, Menjadi Guru, dll"></rds-text-input>
          </div>
        </div>
      </div>
      <div class="form-buttons-w">
        <rds-button kind="primary" size="small"> Update </rds-button>
      </div>
    </form>
  </div>
</template>

<script>
import { RdsTextInput } from '@/.design-system/core/components/rds-text-input/';
import { RdsButton } from '@/.design-system/core/components/rds-button/';

export default {
  name: 'TabHobby',
  components: {
    RdsTextInput,
    RdsButton
  }
}
</script>

<style scoped>
.tab-section {
  padding: 20px;
}
</style>