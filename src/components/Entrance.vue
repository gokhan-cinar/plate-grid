<template>
  <div class="widget mt-3">
    <h6>Entrance</h6>
    <div class="form-inline">
      <div class="form-group mb-2">
        <b-form-select v-model="vehicle.color" :options="colors"></b-form-select>
      </div>
      <div class="form-group mx-sm-1 mb-2">
        <input v-model="vehicle.plate" type="text" class="form-control" placeholder="Plate">
      </div>
      <button @click.prevent="saveEntrance" type="submit" class="btn mb-2 btn-save">+</button>
    </div>
  </div>
</template>

<script>

  export  default {
    data() {
      return {
        vehicle: {
            plate : null,
            color: null,
            date : new Date()
          },
        colors: ['Blue', 'Red', 'Green', 'Black', 'White',]
      }
    },
    methods : {
      saveEntrance() {
        const vehicle = {
          plate : this.vehicle.plate,
          color: this.vehicle.color,
          date : new Date()
        };

        this.$emit('onEnter', vehicle);
      }
    }
  }
</script>
