<template>
  <div class="widget mt-3">
    <h6>Leave</h6>
    <div class="form-inline">
      <div class="form-group mb-2">
        <select class="form-control" v-model="selected">
          <option v-for="optionItem in filteredData">{{ optionItem.vehicle && optionItem.vehicle.plate }}</option>
        </select>
      </div>
      <button @click="deleteItem" class="btn mb-2 btn-save mx-sm-1">x</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      selected: ''
    }
  },
  computed: {
    filteredData() {
      return this.data && this.data.filter(item => item.vehicle);
    }
  },
  methods: {
    deleteItem() {
      this.$emit('onDelete', this.selected);
    }
  }
}
</script>
