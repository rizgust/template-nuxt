<template>
  <div class="tab-section">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-4" for=""> Nama Lengkap {{ parentLabel }}</label>
          <rds-text-input class="col-sm-8" :placeholder="`Nama Lengkap ${parentLabel}`" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> NIK</label>
          <rds-text-input class="col-sm-8" placeholder="NIK" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Tempat, Tanggal Lahir</label>
          <rds-text-input class="col-sm-4" placeholder="Tempat" />
          <rds-date-picker class="customDatePicker col-sm-4" kind="single" date-label="" :value="new Date()" />
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
          <label class="col-sm-4" for=""> Kewarganegaraan</label>
          <rds-text-input class="col-sm-8" placeholder="Kewarganegaraan" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Alamat Rumah</label>
          <rds-text-input class="col-sm-8" placeholder="Alamat Rumah" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> RT / RW</label>
          <rds-text-input class="col-sm-8" placeholder="RT / RW" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Kode Pos</label>
          <rds-text-input class="col-sm-8" placeholder="Kode Pos" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Provinsi</label>
          <rds-text-input class="col-sm-8" placeholder="Provinsi" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Kota / Kabupaten</label>
          <rds-text-input class="col-sm-8" placeholder="Kota / Kabupaten" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Kecamatan</label>
          <rds-text-input class="col-sm-8" placeholder="Kecamatan" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Kelurahan</label>
          <rds-text-input class="col-sm-8" placeholder="Kelurahan" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-4" for=""> Nomor Telp / HP</label>
          <rds-text-input class="col-sm-8" placeholder="Nomor Telp / HP" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Email</label>
          <rds-text-input class="col-sm-8" placeholder="Email" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Pendidikan Terakhir</label>
          <rds-text-input class="col-sm-8" placeholder="Pendidikan Terakhir" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Pekerjaan</label>
          <rds-text-input class="col-sm-8" placeholder="Pekerjaan" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Penghasilan per Bulan</label>
          <rds-text-input class="col-sm-8" placeholder="Penghasilan per Bulan" />
        </div>
        <div class="form-group row">
          <label class="col-sm-4" for=""> Kondisi</label>
          <rds-select class="col-sm-8" label="">
            <rds-select-option value="alive">Masih Hidup</rds-select-option>
            <rds-select-option value="dead">Meninggal</rds-select-option>
            <rds-select-option value="unknown">Tidak Jelas</rds-select-option>
          </rds-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RdsTextInput } from '@/.design-system/core/components/rds-text-input/';
import { RdsDatePicker } from '@/.design-system/core/components/rds-date-picker/';
import { RdsSelect, RdsSelectOption } from '@/.design-system/core/components/rds-select/';

export default {
  components: {
    RdsTextInput,
    RdsDatePicker,
    RdsSelect,
    RdsSelectOption
  },
  props: {
    parentType: { type: String, default: 'father' },
  },
  data() {
    let parentLabel = ''
    if (this.parentType == 'father') {
      parentLabel = 'Ayah'
    } else if (this.parentType == 'mother') {
      parentLabel = 'Ibu'
    } else {
      parentLabel = 'Wali'
    }

    return {
      parentLabel
    }
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
