<template>
<div id="app" class="wait">
  <div class="loader" ref="bpLoader" :class="{hideLoader: hideBackground}">
    <div :class="{hideLoader: hideLogo}">
      <img src='./assets/logo.png' id="logo">
      <div class="bar-loader">
        <div class="bar"></div>
      </div>
    </div>
  </div>
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
  data() {
    return {
      hideBackground: false,
      hideLogo: false
    }
  },
  methods: {
    endLoader() {
      var that = this
      setTimeout(function() {
          that.hideLogo = true;
        }, 5000),
        setTimeout(function() {
          that.hideBackground = true;
        }, 7000)
    }
  },
  mounted() {
    this.endLoader()
  },
  components: {
    Navigation,
    Comptes,
    Courant
  }
}
</script>

<style lang="scss" scoped>
@import './assets/master.css';
@import './assets/animate.css';

#app {
    background-color: rgb(254,254,254);
    height: -webkit-fill-available;
    animation: wait 2s forwards;
    display: flex;
    .hideLoader {
        animation: hideLoader 2s forwards;
    }
    .loader {
        z-index: 1000;
        width: 100%;
        height: 100vh;
        text-align: center;
        position: absolute;
        background: white;
        #logo {
            margin-top: 50vh;
            /* poussé de la moitié de hauteur de viewport */
            transform: translateY(-50%);
            /* tiré de la moitié de sa propre hauteur */
        }
        .bar-loader {
            max-width: 200px;
            margin: auto;
            .bar {
                width: 0;
                height: 2px;
                background: #2B55A0;
                animation: progress 2s forwards;
                animation-delay: 2s;
            }
        }
    }
}

@keyframes wait {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes hideLoader {
    0% {
        opacity: 1;
    }
    99% {
        width: 100%;
    }
    100% {
        opacity: 0;
        width: 0;
    }
}

@keyframes progress {
    0% {
        width: 0;
    }
    17% {
        width: 9%;
    }
    55% {
        width: 42%;
    }
    72% {
        width: 80%;
    }
    100% {
        width: 100%;
    }
}
</style>
