<template>
  <div class="tab-section">
    <form>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Angkatan</label>
        <select class="form-control col-sm-8">
          <option>
            2020/2021
          </option>
        </select>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Photo</label>
        <div class="col-sm-8" style="width: 150px; height: 150px">
          <img style="width: 150px;" alt="" src="https://demo.class.id/avatar/1/ac/ac1dc7df.png">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> NIS</label>
        <input class="form-control col-sm-8" placeholder="NIS">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> NISN</label>
        <input class="form-control col-sm-8" placeholder="NISN">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> NIK / No KITAS (untuk WNA)</label>
        <input class="form-control col-sm-8" placeholder="NIK">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Nama Lengkap</label>
        <input class="form-control col-sm-8" placeholder="Nama Lengkap">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Nama Panggilan</label>
        <input class="form-control col-sm-8" placeholder="Nama Panggilan">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Tempat, Tanggal Lahir</label>
        <input class="form-control col-sm-4" placeholder="Tempat">
        <input class="single-daterange form-control col-sm-4" placeholder="Tanggal Lahir" type="text" value="04/12/1978">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jenis Kelamin</label>
        <div class="col-sm-8">
          <div class="form-check">
            <label class="form-check-label"><input checked="" class="form-check-input" name="rdGender" type="radio" value="male">Laki-laki</label>
          </div>
          <div class="form-check">
            <label class="form-check-label"><input class="form-check-input" name="rdGender" type="radio" value="female">Perempuan</label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Agama</label>
        <select class="form-control col-sm-8">
          <option>Islam</option>
          <option>Katolik</option>
          <option>Kristen</option>
          <option>Hindu</option>
          <option>Budha</option>
          <option>Other</option>
        </select>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Handphone</label>
        <input class="form-control col-sm-8" placeholder="Handphone">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Website / Blog</label>
        <input class="form-control col-sm-8" placeholder="Website / Blog">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Kewarganegaraan</label>
        <div class="col-sm-8">
          <div class="form-check">
            <label class="form-check-label"><input checked="" class="form-check-input" name="rdNationality" type="radio" value="wni">WNI</label>
          </div>
          <div class="form-check">
            <label class="form-check-label"><input class="form-check-input" name="rdNationality" type="radio" value="wna">WNA</label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Anak Ke</label>
        <input class="form-control col-sm-8" placeholder="Anak Ke" type="number">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jumlah Saudara Kandung</label>
        <input class="form-control col-sm-8" placeholder="Jumlah Saudara Kandung" type="number">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jumlah Saudara Tiru</label>
        <input class="form-control col-sm-8" placeholder="Jumlah Saudara Tiri" type="number">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Jumlah Saudara Angkat</label>
        <input class="form-control col-sm-8" placeholder="Jumlah Saudara Angkat" type="number">
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Bahasa Sehari-hari</label>
        <select class="form-control col-sm-8">
          <option value="Bahasa Indonesia">Bahasa Indonesia</option>
          <option value="Bahasa Inggris">Bahasa Inggris</option>
          <option value="Bahasa Jawa">Bahasa Jawa</option>
          <option value="Bahasa Arab">Bahasa Arab</option>
          <option value="Bahasa Sunda">Bahasa Sunda</option>
          <option value="Bahasa Madura">Bahasa Madura</option>
          <option value="Bahasa Melayu">Bahasa Melayu</option>
        </select>
      </div>
      <div class="form-group row">
        <label class="col-sm-4" for=""> Status Keluarga</label>
        <select class="form-control col-sm-8">
          <option value="intact">Lengkap</option>
          <option value="orphaned">Yatim Piatu</option>
          <option value="orphaned-without-father">Yatim</option>
          <option value="orphaned-without-mother">Piatu</option>
        </select>
      </div>
      <div class="form-buttons-w">
        <button class="btn btn-primary" type="button"> Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TabPersonalData'
}
</script>

<style scoped>
.tab-section {
  padding: 20px;
}
</style>