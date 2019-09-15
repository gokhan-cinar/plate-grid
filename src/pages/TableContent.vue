<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-8">
        <b-table striped hover :items="tableItems" :fields="tableFields"></b-table>
      </div>
      <div class="col-md-4">
        <!--<app-filter></app-filter>-->
        <app-search @onSearch="handleSearch"></app-search>
        <hr>
        <app-entrance @onEnter="handleInsert"></app-entrance>
        <hr>
        <app-leave @onDelete="handleDelete" :data="vehicles"></app-leave>
      </div>
    </div>
  </div>
</template>

<script>
  import Storage from "../utils/storage.utils";
  import Filter from '../components/Filter'
  import Search from '../components/Search'
  import Entrance from '../components/Entrance'
  import Leave from '../components/Leave'
  import { addVehicle, deleteVehicle } from "../utils/gridl.utils";
  import moment from 'moment';

  export default {
    name: 'TableContent',
    components : {
      appFilter : Filter,
      appSearch : Search,
      appEntrance : Entrance,
      appLeave :  Leave
    },
    data() {
      return {
        tableFields: [
          {
            key: 'code',
            label: 'Slot',
          },
          {
            key: 'color',
            label: 'Color',
          },
          {
            key: 'plate',
            label: 'Reg. Number',
          },
          {
            key: 'enter',
            label: 'Date',
            formatter: function (value) {
              if (value) {
                return moment(String(value)).format('dddd, Do, h:mm')
              } else {
                return '';
              }
            }
          },
          {
            key: 'elapsed',
            label: 'Time elapsed',
            formatter: function (value) {
              if (value) {
                return  moment().startOf('hour').fromNow();
              } else {
                return '';
              }
            }
            /*formatter: function (value) {
              return value != null ? duration("milliseconds").milliseconds()  : null
            }*/
          },
        ],
        vehicles: [],
        xSlots: [],
        searchKeyWord: '',
      }
    },
    mounted() {

      // Parse local Items
      let parkGrid, vehicles;

      try {
        parkGrid = Storage.getDecoded('parkGrid');
        vehicles = Storage.getDecoded('vehicles');

        this.parkGrid = parkGrid;
        this.vehicles = vehicles;
      } catch(e) {}
    },
    computed: {
      tableItems() {
        let result = this.vehicles.map(item => {
          const vehicle = item.vehicle || {};
          return {
            code: item.code || '',
            color: vehicle.color || '',
            plate: vehicle.plate || '',
            enter: vehicle.date || '',
            elapsed: vehicle.date || ''
          }
        });
        if (this.searchKeyWord) {
          result = result.filter(result => result.plate.includes(this.searchKeyWord));
        }
        return result;
      }
    },
    methods: {
      handleInsert(vehicle) {
        this.vehicles = addVehicle(this.vehicles, vehicle);
        this.saveVehicles();
      },
      handleDelete(vehiclePlate) {
        this.vehicles = deleteVehicle(this.vehicles, vehiclePlate);
        this.saveVehicles();
      },
      handleSearch(value) {
        this.searchKeyWord = value;
      },
      saveVehicles() {
        Storage.saveEncoded('vehicles', this.vehicles);
      },
    }
  }
</script>

<style lang="scss">
  .widget {
    display: block;
  }
  .btn {
    background-color: #ddd;
  }
</style>
