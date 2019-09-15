<template>
  <div class="widget mt-3">
    <h6>Search</h6>
    <div class="form-group">
      <input @change="searchItem($event.target.value)" class="form-control" v-model="search" type="text" placeholder="Enter search by Reg. Number">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sortKey: '',
        search: '',
      }
    },
    methods: {
      searchItem(val) {
        this.$emit('onSearch', val);
      },
      sortBy: function(sortKey) {
        this.reverse = (this.sortKey === sortKey) ? ! this.reverse : false;
        this.sortKey = sortKey;
      }
    }
  }
</script>
