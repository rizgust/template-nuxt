<template>
  <div class="tab-section">
    <form>
      <div class="form-group row">
        <label class="col-sm-3" for=""> Prestasi</label>
        <div class="col-sm-9">
          <table class="table">
            <thead>
              <tr>
                <th>Jenis Prestasi</th>
                <th>Tingkat Prestasi</th>
                <th>Nama Prestasi</th>
                <th>Tahun Prestasi</th>
                <th>Penyelenggara</th>
                <th>Peringkat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><rds-text-input type="text" placeholder="Jenis Prestasi" /></td>
                <td><rds-text-input type="text" placeholder="Tingkat Prestasi" /></td>
                <td><rds-text-input type="text" placeholder="Nama Prestasi" /></td>
                <td><rds-text-input type="text" placeholder="Tahun Prestasi" /></td>
                <td><rds-text-input type="text" placeholder="Penyelenggara" /></td>
                <td><rds-text-input type="text" placeholder="Peringkat" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3" for=""> Beasiswa</label>
        <div class="col-sm-9">
          <table class="table">
            <thead>
              <tr>
                <th>Sumber Beasiswa</th>
                <th>Kelas</th>
                <th>Tahun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><rds-text-input type="text" placeholder="Sumber Beasiswa" /></td>
                <td><rds-text-input type="text" placeholder="Kelas" /></td>
                <td><rds-text-input type="text" placeholder="Tahun" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="form-buttons-w">
        <rds-button kind="primary" size="small" type="button"> Update</rds-button>
      </div>
    </form>
  </div>
</template>
<script>
import { RdsTextInput } from '@/.design-system/core/components/rds-text-input/';
import { RdsButton } from '@/.design-system/core/components/rds-button/';

export default {
  name: 'TabDevelopment',
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
