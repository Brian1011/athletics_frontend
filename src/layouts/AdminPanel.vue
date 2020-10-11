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
            <q-item-label>{{user.name}}</q-item-label>
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
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'AdminPanelLayout',
    computed: {
      ...mapGetters("auth", {
        user: 'getCurrentUser'
      }),
    },
    data () {
      return {
        left: true,
        link: 'inbox',
        menus:[
          {link: 'athlete', icon: 'person', label: 'Athlete', to:'/athlete'},
          {link: 'team', icon: 'people', label: 'Teams', to:'/teams'},
          {link: 'race', icon: 'timer', label: 'Race', to:'/races'},
        ],
        menus_extra:[
          {link: 'performance', icon: 'apps', label: 'Athletics performance', to:'/athletePerformance'},
          {link: 'performance', icon: 'apps', label: 'Compare performance', to:'/comparePerformance'},
          {link: 'exit', icon: 'lock', label: 'Exit', to:'/'}
        ]
      }
    },

    methods: {
      goToPage(route){

        if(route === '/'){
          // user is logging out
          this.$store.dispatch("auth/logout")
        }else{
          this.$router.push(route);
        }
      }
    },

    created() {
      this.$store.dispatch("auth/loadUser")
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
