<template>
  <div class="widget">
    <h6>Filter</h6>

    <b-form-radio-group
            v-model="selected"
            :options="options"
            name="radio-inline"
    ></b-form-radio-group>

    <div class="form-check custom-control custom-radio custom-control-inline">
      <input type="radio" id="all" name="filterRadio" class="custom-control-input" checked>
      <label class="custom-control-label" for="all">All</label>
    </div>
    <div class="form-check custom-control custom-radio custom-control-inline">
      <input type="radio" id="empty" name="filterRadio" class="custom-control-input">
      <label class="custom-control-label" for="empty">Empty</label>
    </div>
    <div class="form-check custom-control custom-radio custom-control-inline">
      <input type="radio" id="full" name="filterRadio" class="custom-control-input">
      <label class="custom-control-label" for="full">Full</label>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        selected: 'all',
        options: [
          { text: 'All', value: 'all' },
          { text: 'Empty', value: 'empty' },
          { text: 'Full', value: 'full' }
        ]
      }
    }
  }
</script>
