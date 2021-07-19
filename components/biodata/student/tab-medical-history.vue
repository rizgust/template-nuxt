<template>
  <div class="tab-section">
    <form>
      <div class="row">
        <div class="col-md-8">
          <div class="form-group row">
            <label class="col-sm-4" for=""> Golongan Darah</label>
            <div class="col-sm-8">
              <rds-radio-group>
                <rds-radio-button name="rdBloodType" label="A" value="A" :label-left="false" />
                <rds-radio-button name="rdBloodType" label="B" value="B" :label-left="false" />
                <rds-radio-button name="rdBloodType" label="AB" value="AB" :label-left="false" />
                <rds-radio-button name="rdBloodType" label="O" value="O" :label-left="false" />
              </rds-radio-group>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Berat Badan (kg)</label>
            <rds-text-input class="col-sm-8" placeholder="Berat Badan (kg)"></rds-text-input>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Tinggi Badan (cm)</label>
            <rds-text-input class="col-sm-8" placeholder="Tinggi Badan (cm)"></rds-text-input>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Penyakit kronis yang pernah diderita</label>
            <rds-text-input class="col-sm-8" placeholder="Penyakit kronis yang pernah diderita"></rds-text-input>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Memiliki kelainan fisik / jasmani</label>
            <rds-text-input class="col-sm-8" placeholder="Memiliki kelainan fisik / jasmani"></rds-text-input>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Memiliki penyakit yang sering kambuh</label>
            <rds-text-input class="col-sm-8" placeholder="Memiliki penyakit yang sering kambuh"></rds-text-input>
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
import { RdsRadioGroup, RdsRadioButton } from '@/.design-system/core/components/rds-radio-button/';
import { RdsButton } from '@/.design-system/core/components/rds-button/';

export default {
  name: 'TabMedicalHistory',
  components: {
    RdsTextInput,
    RdsRadioGroup,
    RdsRadioButton,
    RdsButton
  }
}
</script>

<style scoped>
.tab-section {
  padding: 20px;
}
</style>