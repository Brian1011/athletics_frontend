<template>
  <q-layout view="lHh LpR lff">

    <q-header class="bg-accent text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <!--
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          -->
          Athletics
        </q-toolbar-title>

        <div class="row">
          <div class="col-3">

          </div>
          <div class="col-3"></div>
          <div class="col-3"></div>
          <div class="col-3"></div>
        </div>

        <div class="xs-hide">
<!--          <q-btn flat round dense icon="notifications" class="">-->
<!--            <q-badge floating color="grey">10</q-badge>-->
<!--            <q-tooltip>Updates</q-tooltip>-->
<!--          </q-btn>-->

<!--          <q-btn flat round dense icon="message" class="q-ml-sm">-->
<!--            <q-badge floating color="red">4</q-badge>-->
<!--            <q-tooltip>Messages</q-tooltip>-->
<!--          </q-btn>-->

          <q-btn flat round dense class="q-ml-sm">
            <q-avatar flat round dense color="black" text-color="white"><img src="statics/images/red.jpeg"></q-avatar>
            <q-tooltip>User Account</q-tooltip>
          </q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" behavior="desktop" bordered>
      <!-- drawer content -->
      <div class="flex flex-center">
        <q-item>
          <q-item-section>
            <q-avatar size="90px">
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

      <q-separator></q-separator>

      <!--side menus-->
      <q-list  padding class=" text-black" >
        <q-item
          v-for="menu in menus"
        clickable
        v-ripple
        :active="link === menu.link"
        @click="link = menu.link, goToPage(menu.to)"
        active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon :name=menu.icon></q-icon>
          </q-item-section>

          <q-item-section>{{menu.label}}</q-item-section>
        </q-item>

        <q-separator></q-separator>

        <q-item
          v-for="menu in menus_extra"
          clickable
          v-ripple
          :active="link === menu.link"
          @click="link = menu.link, goToPage(menu.to)"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon :name=menu.icon></q-icon>
          </q-item-section>

          <q-item-section>{{menu.label}}</q-item-section>
        </q-item>


      </q-list>

      <q-separator></q-separator>

    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
<!--    <q-footer elevated class="bg-dark text-white">-->
<!--      <q-toolbar>-->
<!--&lt;!&ndash;          Designed and Created by &ndash;&gt; <a href="https://www.linkedin.com/in/brian-mutinda-366064163/">  Maingi Brian Mutinda</a>&ndash;&gt;-->
<!--          -->
<!--      </q-toolbar>-->
<!--    </q-footer>-->
  </q-layout>
</template>

<script>
  export default {
    name: 'AdminPanelLayout',

    data () {
      return {
        left: true,
        link: 'inbox',
        menus:[
          {link: 'inbox', icon: 'dashboard', label: 'Dashboard', to:'/dashboard'},
          {link: 'athlete', icon: 'person', label: 'Athlete', to:'/athlete'},
          {link: 'team', icon: 'people', label: 'Team', to:'/teams'},
          {link: 'table', icon: 'table_chart', label: 'Tables', to:'/tables'},
          {link: 'forms', icon: 'notes', label: 'Forms', to:'/forms'},
          {link: 'notification', icon: 'notifications', label: 'Notifications', to:'/notifications'},
          {link: 'graph', icon: 'pie_chart', label: 'Charts', to:'/graphs'},
        ],
        menus_extra:[
          {link: 'example', icon: 'apps', label: 'Examples', to:'/examples'},
          {link: 'exit', icon: 'lock', label: 'Exit', to:'/'}
        ]
      }
    },

    methods: {
      goToPage(route){
        this.$router.push(route);
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
