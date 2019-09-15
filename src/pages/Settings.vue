<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mt-5 content-center">
        <!--X Slots-->
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">X Slots</label>
          <div class="col-sm-9">
            <input
              id="xSlots"
              type="text"
              name="xSlots"
              class="form-control mt-2"
              placeholder="e.g. Partnership opportunity"
              v-model="xSlots"
            />
            <small class="form-text text-muted">Please enter comma space, etc: A,B,C,D</small>
          </div>
        </div>
        <!--Y Slots-->
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Y Slots</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control mt-2"
              placeholder="e.g. Partnership opportunity"
              v-model="ySlots"
            />
            <small class="form-text text-muted">Please enter comma space, etc: 1,2,3,4,5,6,7,8,9,10</small>
          </div>
        </div>
        <!--Parking Lot Name-->
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Parking Lot Name</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control mt-2"
              placeholder="e.g. Partnership opportunity"
              v-model="lotName"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <button @click.prevent="saveSettings" class="btn btn-save">Save Settings</button>
          </div>

          <!--Errors-->
          <div class="col-md-12">
            <div class="alert alert-danger" role="alert" v-if="errors.length">
              <span>Please correct the following error(s):</span>
              <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {createGrid, createVehicleTable} from "../utils/gridl.utils";
  import Storage from "../utils/storage.utils";

export default {
  name: "Settings",
  data() {
    return {
        xSlots: [],
        ySlots: [],
        lotName: null,
        errors: []
    };
  },
  methods: {
    validateFields() {
      this.errors = [];

      if (!this.xSlots.length) {
        this.errors.push("X Slots required.");
      }

      if (!this.ySlots.length) {
        this.errors.push("Y Slots required.");
      }

      if (!this.lotName) {
        this.errors.push("Lot name required.");
      }

      return this.errors.length === 0;
    },
    saveSettings() {
      if (this.validateFields()) {
          let coordinateConfig = createGrid(this.xSlots, this.ySlots);

          const verticalSlots = this.xSlots.split(',');
          const horizontalSlots = this.ySlots.split(',');
          let vehicleTable = createVehicleTable(verticalSlots, horizontalSlots);
          
          let parkGrid = {
            coordinates: coordinateConfig,
            name: this.lotName
          };

          Storage.saveEncoded('parkGrid', parkGrid);
          Storage.saveEncoded('vehicles', vehicleTable);
          this.$router.push({ path: "/table" });
      }
    }
  }
};
</script>
<style lang="scss">
.pd-clear {
  padding: 0;
}
.content-center {
  margin: auto;
}
.btn-save {
  background-color: #bae8ba;
  padding: 0.5em 1em;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  /*margin-top: .5em ;*/
  float: right;
}
.col-form-label {
  font-size: 20px;
  text-align: right;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.form-control {
  height: calc(1.5em + 1.2rem + 2px);
}
.alert-danger {
  float: right;
  width: 50%;
  margin: 1em 0 0;
}
.alert-danger span {
  font-size: 14px;
  font-weight: 500;
}
ul {
  margin: 0.5em;
  padding: 0.2em 0 0 0.5em;
}
li {
  font-size: 14px;
}
</style>
