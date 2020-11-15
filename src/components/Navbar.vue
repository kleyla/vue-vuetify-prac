<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Karen</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--- Dropdown-->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="grey" v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
};
</script>
