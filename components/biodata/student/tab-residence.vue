<template>
  <div class="tab-section">
    <form>
      <div class="row">
        <div class="col-md-6">
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
            <label class="col-sm-4" for=""> Telepon Rumah</label>
            <rds-text-input class="col-sm-8" placeholder="Telepon Rumah" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Tinggal dengan</label>
            <rds-text-input class="col-sm-8" placeholder="Tinggal dengan" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Jarak dari Rumah ke Sekolah</label>
            <rds-text-input class="col-sm-8" placeholder="Jarak dari Rumah ke Sekolah" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Berangkat ke Sekolah</label>
            <rds-text-input class="col-sm-8" placeholder="Berangkat ke Sekolah" />
          </div>
          <div class="form-group row">
            <label class="col-sm-4" for=""> Ruang Tidur</label>
            <rds-text-input class="col-sm-8" placeholder="Ruang Tidur" />
          </div>
        </div>
      </div>
      <div class="form-buttons-w">
        <rds-button kind="primary" size="small"> Update</rds-button>
      </div>
    </form>
  </div>
</template>

<script>
import { RdsTextInput } from '@/.design-system/core/components/rds-text-input/';
import { RdsButton } from '@/.design-system/core/components/rds-button/';

export default {
  name: 'TabResidence',
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