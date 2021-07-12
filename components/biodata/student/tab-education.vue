<template>
  <div class="tab-section">
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label class="col-sm-4" for=""> Level</label>
            <rds-select class="col-sm-8" label="">
              <rds-select-option value="kb">KB</rds-select-option>
              <rds-select-option value="paud">PAUD</rds-select-option>
              <rds-select-option value="tk">TK</rds-select-option>
              <rds-select-option value="sd">SD</rds-select-option>
              <rds-select-option value="smp" selected>SMP</rds-select-option>
            </rds-select>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Asal Sekolah</label>
            <rds-text-input class="col-sm-8" placeholder="Asal Sekolah" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Alamat Sekolah Asal</label>
            <rds-text-input class="col-sm-8" placeholder="Alamat Sekolah Asal" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Tanggal Surat Keterangan Hasil Ujian Nasional (SKHUN)</label>
            <rds-date-picker kind="single" date-label="" class="customDatePicker col-sm-8" :value="new Date()" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Nomer Surat Keterangan Hasil Ujian Nasional (SKHUN)</label>
            <rds-text-input class="col-sm-8" placeholder="Nomor SKHUN" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Nilai Rata-rata SKHUN</label>
            <rds-text-input class="col-sm-8" placeholder="Nilai Rata-rata SKHUN" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Tanggal Ijazah</label>
            <rds-date-picker kind="single" date-label="" class="customDatePicker col-sm-8" :value="new Date()" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Nomor Ijazah</label>
            <rds-text-input class="col-sm-8" placeholder="Nomor Ijazah" />
          </div>
        </div>
        <div class="col-md-6">          
          <div class="form-group row">
            <label class="col-sm-4" for=""> Lama Belajar</label>
            <div class="col-sm-8" style="display: flex;">
              <rds-text-input type="number" placeholder="YYYY" class="text-center" />
              <span class="input-group-addon">Ke</span>
              <rds-text-input type="number" placeholder="YYYY" class="text-center" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Pernah Tinggal Kelas</label>
            <div class="col-sm-8">
              <rds-radio-group>
                <rds-radio-button name="rdIsFailedGrade" label="Ya" value="1" :label-left="false" />
                <rds-radio-button name="rdIsFailedGrade" label="Tidak" value="0" :label-left="false" />
              </rds-radio-group>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Jika Pernah di Kelas</label>
            <div class="col-sm-8" style="display: flex;">
              <rds-text-input type="text" class="text-center" />
              <span class="input-group-addon">Dan</span>
              <rds-text-input type="text" class="text-center" />
            </div>
          </div>
        </div>
      </div>
      <div class="box b-a b-dashed b-grey box-shadow-z0">
        <div class="box-body dker">
          <h5>Khusus Siswa Mutasi (Pindahan).</h5>
          <div class="form-group row">
            <label class="col-sm-4">Kelas masuk di Sekolah ini</label>
            <rds-text-input class="col-sm-8" readonly="readonly" value="10 SMA" />
          </div>
          <div class="form-group row ">
            <label class="col-sm-4">Tanggal Masuk</label>
            <rds-date-picker kind="single" date-label="" class="customDatePicker col-sm-8" :value="new Date()" />
          </div>
          <div class="form-group row ">
            <label class="col-sm-4 form-control-label"> Alasan Pindah Sekolah</label>
            <rds-text-input class="col-sm-8" placeholder="Alasan Pindah Sekolah" />
          </div>
        </div>
      </div>
      <div class="form-buttons-w">
        <rds-button kind="primary" size="small" type="button"> Update</rds-button>
      </div>
    </form>
  </div>
</template>

<script>
import { RdsSelect, RdsSelectOption } from '@/.design-system/core/components/rds-select/';
import { RdsTextInput } from '@/.design-system/core/components/rds-text-input/';
import { RdsDatePicker } from '@/.design-system/core/components/rds-date-picker/';
import { RdsRadioGroup, RdsRadioButton } from '@/.design-system/core/components/rds-radio-button/';
import { RdsButton } from '@/.design-system/core/components/rds-button/';

export default {
  name: 'TabEducation',
  components: {
    RdsSelect,
    RdsSelectOption,
    RdsTextInput,
    RdsDatePicker,
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
.box {
  margin-top: 20px;
}
.box-shadow-z3, .box-shadow-z3 .box, .box-shadow-z3 .box-color {
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 -1px 0 rgb(0 0 0 / 2%);
}
.b-dashed {
  border-style: dashed!important;
}
.b-grey {
  border-color: #424242;
}
.b-a {
  border: 1px solid rgba(120,130,140,.13);
}
.box-shadow-z0, .box-shadow-z0 .box, .box-shadow-z0 .box-color {
  box-shadow: 0 0 1px rgb(0 0 0 / 15%);
}
.box, .box-color {
  background-color: #fff;
  position: relative;
  margin-bottom: 1.5rem;
}
.dker {
  background-color: rgba(0,0,0,.035);
}
.box-body, .box-footer, .box-header {
  padding: 1rem;
}

.customDatePicker >>> .bx--date-picker,
.customDatePicker >>> .bx--date-picker-container,
.customDatePicker >>> .bx--date-picker__input {
  width: 100% !important;
}
</style>