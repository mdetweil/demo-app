<template>
  <div id="app">
    <v-app>
      <v-toolbar light>
        <v-toolbar-title>
          <router-link to="/">Demo App</router-link>
        </v-toolbar-title>
      </v-toolbar>
      <br>
      <router-view/>
    </v-app>
  </div>
</template>
<script>
export default {

};
</script>

