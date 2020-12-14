<template>
  <v-app>
    <v-app-bar absolute color="white" app>
      <v-btn icon link href="/">
        <v-icon large>mdi-home-circle</v-icon>
      </v-btn>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "App",
};
</script>
