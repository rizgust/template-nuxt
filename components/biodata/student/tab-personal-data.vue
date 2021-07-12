<template>
  <div class="tab-section">
    <form>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Angkatan</label>
        <rds-select class="col-sm-8" label="">
          <rds-select-option>2020/2021</rds-select-option>
          <rds-select-option>2021/2022</rds-select-option>
          <rds-select-option>2022/2023</rds-select-option>
        </rds-select>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Photo</label>
        <div class="col-sm-8" style="width: 150px; height: 150px">
          <img style="width: 150px;" alt="" src="https://demo.class.id/avatar/1/ac/ac1dc7df.png">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> NIS</label>
        <rds-text-input class="col-sm-8" placeholder="NIS" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> NISN</label>
        <rds-text-input class="col-sm-8" placeholder="NISN" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> NIK / No KITAS (untuk WNA)</label>
        <rds-text-input class="col-sm-8" placeholder="NIK" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Nama Lengkap</label>
        <rds-text-input class="col-sm-8" placeholder="Nama Lengkap" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Nama Panggilan</label>
        <rds-text-input class="col-sm-8" placeholder="Nama Panggilan" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Tempat, Tanggal Lahir</label>
        <rds-text-input class="col-sm-4" placeholder="Tempat" />
        <rds-date-picker kind="single" date-label="" class="customDatePicker col-sm-4" :value="new Date()" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jenis Kelamin</label>
        <div class="col-sm-8">
          <rds-radio-group>
            <rds-radio-button name="rdGender" label="Laki-laki" value="male" :label-left="false" />
            <rds-radio-button name="rdGender" label="Perempuan" value="female" :label-left="false" />
          </rds-radio-group>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Agama</label>
        <rds-select class="col-sm-8" label="">
          <rds-select-option value="islam">Islam</rds-select-option>
          <rds-select-option value="catholic">Katolik</rds-select-option>
          <rds-select-option value="christian">Kristen</rds-select-option>
          <rds-select-option value="hinduism">Hindu</rds-select-option>
          <rds-select-option value="buddhism">Buddha</rds-select-option>
          <rds-select-option value="other">Other</rds-select-option>
        </rds-select>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Handphone</label>
        <rds-text-input class="col-sm-8" placeholder="Handphone" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Website / Blog</label>
        <rds-text-input class="col-sm-8" placeholder="Website / Blog" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Kewarganegaraan</label>
        <div class="col-sm-8">
          <rds-radio-group>
            <rds-radio-button name="rdNationality" label="WNI" value="ID" :label-left="false" />
            <rds-radio-button name="rdNationality" label="WNA" value="WNA" :label-left="false" />
          </rds-radio-group>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Anak Ke</label>
        <rds-text-input class="col-sm-8" placeholder="Anak Ke" type="number" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jumlah Saudara Kandung</label>
        <rds-text-input class="col-sm-8" placeholder="Jumlah Saudara Kandung" type="number" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jumlah Saudara Tiru</label>
        <rds-text-input class="col-sm-8" placeholder="Jumlah Saudara Tiri" type="number" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jumlah Saudara Angkat</label>
        <rds-text-input class="col-sm-8" placeholder="Jumlah Saudara Angkat" type="number" />
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Bahasa Sehari-hari</label>
        <rds-select class="col-sm-8" label="">
          <rds-select-option value="Bahasa Indonesia">Bahasa Indonesia</rds-select-option>
          <rds-select-option value="Bahasa Inggris">Bahasa Inggris</rds-select-option>
          <rds-select-option value="Bahasa Jawa">Bahasa Jawa</rds-select-option>
          <rds-select-option value="Bahasa Arab">Bahasa Arab</rds-select-option>
          <rds-select-option value="Bahasa Sunda">Bahasa Sunda</rds-select-option>
          <rds-select-option value="Bahasa Madura">Bahasa Madura</rds-select-option>
          <rds-select-option value="Bahasa Melayu">Bahasa Melayu</rds-select-option>
        </rds-select>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Status Keluarga</label>
        <rds-select class="col-sm-8" label="">
          <rds-select-option value="intact">Lengkap</rds-select-option>
          <rds-select-option value="orphaned">Yatim Piatu</rds-select-option>
          <rds-select-option value="orphaned-without-father">Yatim</rds-select-option>
          <rds-select-option value="orphaned-without-mother">Piatu</rds-select-option>
        </rds-select>
      </div>
      <div class="form-buttons-w">
        <rds-button kind="primary" size="small"> Update</rds-button>
      </div>
    </form>
  </div>
</template>

<script>
import { RdsTextInput } from '@/.design-system/core/components/rds-text-input/';
import { RdsSelect, RdsSelectOption } from '@/.design-system/core/components/rds-select/';
import { RdsRadioGroup, RdsRadioButton } from '@/.design-system/core/components/rds-radio-button/';
import { RdsDatePicker } from '@/.design-system/core/components/rds-date-picker/';
import { RdsButton } from '@/.design-system/core/components/rds-button/';

export default {
  name: 'TabPersonalData',
  components: {
    RdsTextInput,
    RdsSelect,
    RdsSelectOption,
    RdsRadioGroup,
    RdsRadioButton,
    RdsDatePicker,
    RdsButton
  }
}
</script>

<style scoped>
.tab-section {
  padding: 20px;
}
.customDatePicker >>> .bx--date-picker,
.customDatePicker >>> .bx--date-picker-container,
.customDatePicker >>> .bx--date-picker__input {
  width: 100% !important;
}
</style>