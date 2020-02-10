<template>
  <q-layout view="lHh lpR lff">

    <q-header class="bg-accent text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <!--
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          -->
          Vue Admin Dashboard Template
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left"  behavior="desktop" bordered>
      <!-- drawer content -->
      <div class="flex flex-center">
        <q-item>
          <q-item-section>
            <q-avatar size="90px">
              <q-badge floating color="red">10</q-badge>
              <img src="statics/images/red.jpeg">
            </q-avatar>
          </q-item-section>
        </q-item>
      </div>

      <div class="flex flex-center">
        <q-item>
          <q-item-section>
            <q-item-label>John Doe</q-item-label>
            <q-item-label caption>Logged in</q-item-label>
          </q-item-section>
        </q-item>
      </div>

      <!--side menus-->
      <q-list bordered padding class="rounded-borders text-black" >
        <q-item
          v-for="menu in menus"
        clickable
        v-ripple
        :active="link === menu.link"
        @click="link = menu.link"
        active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon :name=menu.icon></q-icon>
          </q-item-section>

          <q-item-section>{{menu.label}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-dark text-white">
      <q-toolbar>
          Designed and Created by --> <a href="https://www.linkedin.com/in/brian-mutinda-366064163/">  Maingi Brian Mutinda</a>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
  export default {
    name: 'AdminPanelLayout',

    data () {
      return {
        left: false,
        link: 'inbox',
        menus:[
          {link: 'inbox', icon: 'dashboard', label: 'Dashboard', to:''},
          {link: 'table', icon: 'table_chart', label: 'Tables', to:''},
          {link: 'forms', icon: 'notes', label: 'Forms', to:''},
          {link: 'notification', icon: 'notifications', label: 'Notifications', to:''},
          {link: 'graph', icon: 'pie_chart', label: 'Graphs', to:''},
          {link: 'example', icon: 'apps', label: 'Examples', to:''},
        ]
      }
    }
  }
</script>

<style>
  a:link{
    color: blue;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: darkgrey;
    text-decoration: underline;
  }

  /* mouse over link */
  a:hover {
    color: hotpink;
  }

  /* selected link */
  a:active {
    color: blue;
  }
</style>

<style lang="sass">
  .my-menu-link
    color: white
    //background: #F2C037
    background: #9C27B0
</style>
