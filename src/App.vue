<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
  
      <q-drawer slot="header" ref="drawer" swipe-only>
        <div class="list platform-delimiter">
          <div class="list-header">
            <h4>Menu</h4>
          </div>
          <q-drawer-link icon="home" to="/">Home</q-drawer-link>
          <q-drawer-link icon="list" to="/articles">Articles</q-drawer-link>
        </div>
      </q-drawer>
  
      <div slot="header" class="toolbar amber">
        <!-- opens drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="2">
          Galerie Talsint
        </q-toolbar-title>
        <div class="nav-links">
          <router-link to="/" tag="button">
            <i>home</i> Home</router-link>
          <router-link to="/articles" tag="button">
            <i>list</i> Articles</router-link>
        </div>
      </div>
  
      <div class="layout-view">  
        <div class="layout-padding">
          <router-view class="layout-view"></router-view>
        </div>
      </div>
  
      <div slot="footer" class=" toolbar dark">
        Footer
      </div>
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style lang="stylus">
.toolbar.amber
  color #333
.list-header
  h4
    text-align center
.drawer-content
  background #ffc107
.list
  border 0
@media screen and (max-width: 920px)
  .nav-links
    display none

</style>
