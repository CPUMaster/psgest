<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
  
      <q-drawer ref="drawer" swipe-only>
        <div class="list platform-delimiter">
          <div class="list-header">
            Left Side Drawer
          </div>
          <q-drawer-link icon="mail" to="/">Account</q-drawer-link>
          <q-drawer-link icon="alarm" to="/articles">Alarms</q-drawer-link>
        </div>
      </q-drawer>
  
      <div slot="header" class="toolbar">
        <!-- opens drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="2">
          Title
        </q-toolbar-title>
        <router-link icon="home" to="/" tag="button">Home</router-link>
        <router-link icon="list" to="/articles" tag="button">Articles</router-link>
      </div>
  
    <router-view></router-view>
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style></style>
