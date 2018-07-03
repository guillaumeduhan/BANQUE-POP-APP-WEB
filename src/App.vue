<template>
  <div id="app">
    <Navigation />
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Comptes from './components/Comptes.vue'
import Courant from './components/Courant.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Comptes,
    Courant
  }
}
</script>

<style>

@import './assets/master.css';
@import './assets/animate.css';

#app {
  background-color:rgb(254,254,254);
  height:-webkit-fill-available;
  display:flex;
}


  #Comptes {
    padding:25px 50px;
    max-width:1200px;
    width:calc(100% - 300px);
    .first {
      padding-left:0;
      @media screen and (max-width: 1020px) {
        padding:0;
      }
    }
    .special {
      padding-right:0px;
      margin-right:0px;
      @media screen and (max-width: 1020px) {
        padding:0;
      }
    }
    .theme-blue {
      margin:25px 0;
    }
    .box__icon {
      height:60px;
      img {
        height:100%;
      }
    }
    .row {
      width:100%;
      margin-left:0;
      margin-right:0;
      @media screen and (max-width: 640px) {
        padding:0;
        margin:0;
      }
      .box__module {
        .image {
          width:75px;
          border-radius:50px;
          overflow:hidden;
          img {
            width:100%;
          }
        }
      }
      .btn {
        font-size:1.2em;
        padding:0 6px;
        cursor:pointer;
      }
      .btn:hover {
        color:#2B55A0;
      }
      .options {
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 640px) {
          flex-direction: column;
        }
      }
    }
    #charts {
      div:first-child {
        margin-right:10px;
      }
    }
    @media screen and (max-width: 640px) {
      margin-top:110px;
      padding:10px;
      width:100%;
    }
  }

</style>
