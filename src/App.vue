<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">CaseStudy</a>
      <form class="form-inline">
        <router-link class="btn-setting" :to="{ name: 'Settings' }">Settings</router-link>
      </form>
    </nav>
    <!--<router-link to="/table">About</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  .btn-setting {
    background-color: #bae8ba;
    padding: .5em 1em;
    color: #000;
    border-radius: 5px;
    text-decoration: none;
  }
  .btn-setting:hover {
    text-decoration: none;
  }
</style>
