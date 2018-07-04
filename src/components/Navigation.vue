<template>
  <div id="Navigation">
    <div class="logo___responsive">
      <img src="../assets/logo.png" alt="Banque Populaire Occitane" id="logo__responsive__general" v-show="burger">
    </div>
    <div class="box box_logo">
      <img src="../assets/logo.png" alt="Banque Populaire Occitane" id="logo">
    </div>
    <nav class="menu">
      <ul>
          <li v-for="option in menu" v-bind:class="option.class">
            <router-link :to="option.link">
            {{ option.content }}
            <i class="fleche fas fa-arrow-right"></i>
            </router-link>
          </li>
      </ul>
    </nav>
    <nav class="box menu_link">
      <ul>
        <li v-for="link in menu_link">
          {{ link.content }}
        </li>
      </ul>
    </nav>
    <div id="log__out" @click="show()">
      <p>Se déconnecter</p>
      <img src="../assets/logout.png" alt="logout">
    </div>
    <img src="../assets/menu.png" class="cross__menu" @click="toggleMenu()" v-show="burger" />
    <img src="../assets/cancel.png" class="cross__menu" id="cross" @click="closeMenu()" />
    <modal name="logout">
      <div class="question__modal">
        <p>Voulez-vous vous déconnecter?</p>
        <div class="btn blue__button bouton" @click="hide()">
          Oui
        </div>
        <div class="btn blue__button bouton" @click="hide()">
          Non
        </div>
      </div>
    </modal>
    <modal name="mail">
      <div class="question__modal">

      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      burger: true,
      menu: [
        {
          content: "Mon espace",
          link: "/",
          class: ""
        },{
          content: "Mes comptes",
          link: "/compte-courant",
          class: ""
        },{
          content: "Mes opérations",
          link: "/",
          class: ""
        },{
          content: "Gérer au quotidien",
          link: "/",
          class: ""
        },{
          content: "Épargner",
          link: "/",
          class: ""
        },{
          content: "Emprunter/Assurer",
          link: "/",
          class: ""
        },
      ],
      menu_link: [
        {
          content:"Votre banque",
          link:"/"
        },{
          content:"Service informatique",
          link:"/"
        },{
          content:"Information pratique",
          link:"/"
        },{
          content:"Tarifs et réglementation",
          link:"/"
        },{
          content:"Banque en ligne",
          link:"/"
        },{
          content:"Se déconnecter",
          link:"/"
        }
      ]
    }
  },
  methods: {
    toggleMenu: function(){
      let navigation = window.document.getElementById('Navigation');
      navigation.style.left = "0px";
      this.burger = !this.burger;
    },
    closeMenu: function(){
      let navigation = window.document.getElementById('Navigation');
      navigation.style.left = "-300px";
      this.burger = !this.burger;
    },
    show:function(){
      this.$modal.show('logout');
    },
    hide:function(){
      this.$modal.hide('logout');
    }
  }
}
</script>

<style lang="scss" scoped>

#Navigation {
  font-family: "Open Sans", sans-serif;
  display:flex;
  flex-flow: column;
  width:300px;
  transition:1s;
  background-color:white;
  height:-webkit-fill-available;
  -webkit-box-shadow: 0px 0px 35px 5px rgba(0,0,0,0.045);
  -moz-box-shadow: 0px 0px 35px 5px rgba(0,0,0,0.045);
  box-shadow: 0px 0px 35px 5px rgba(0,0,0,0.045);
  .logo___responsive {
    display:none;
    position:absolute;
    left:300px;
    top:0px;
    width:100%;
    padding: 20px 20px 20px 75px;
    #logo__responsive__general {
      @media screen and (max-width: 780px) {
      }
    }
    @media screen and (max-width: 780px) {
      display:block;
    }
  }
  img {
    max-width:100%;
  }
  .box {
    padding:25px 35px;
    @media screen and (max-width: 780px) {
      padding:0px 35px;
    }
  }
  .box_logo {
    padding:50px 35px;
    @media screen and (max-width: 780px) {
      padding:20px 70px 20px 25px;
    }
  }
  .menu {
    ul {
      list-style-type:none;
      padding:0;
      li a{
        display: flex;
        text-decoration: none;
        justify-content: left;
        align-items: center;
        font-size: 16px;
        font-weight:100;
        color:white;
        padding:12px 0;
        margin:8px 0;
        background-color: #2B55A0;
        width:235px;
        padding-left:35px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        transition:.25s;
        .fleche {
          opacity:0;
          left:195px;
        }
      }
      li a:hover {
        background-color:#F8880F;
        transition:.25s;
        width:250px;
        cursor:pointer;
        .fleche {
          position:absolute;
          transition:.25s;
          opacity:1;
          left:215px;
        }
      }
    }
  }
  .menu_link {
    ul {
      list-style-type:none;
      padding:0;
      li {
        font-size:14px;
        color:#777777;
        line-height:1.5;
        margin:6px 0;
        transition:.25s;
        @media screen and (max-width: 780px) {
          font-size:16px;
          line-height:1;
          padding:12px 0;
        }
      }
      li:hover {
        color:#2B55A0;
        transition:.25s;
        cursor:pointer;
      }
    }
    @media screen and (max-width: 780px) {
      display:none;
    }
  }
  .cross__menu {
    position:absolute;
    width:22px;
    display:none;
    right:0;
    top:0;
    z-index:1;
    cursor:pointer;
    @media screen and (max-width: 780px) {
      display:block;
      right:-50px;
      top:25px;
    }
  }
  #cross {
    @media screen and (max-width: 780px) {
      display:block;
      right:25px;
      top:25px;
    }
  }
  #log__out {
    display:none;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    font-weight:100;
    color:white;
    padding:12px 0;
    margin:-8px 0;
    background-color: #2B55A0;
    border-left:none;
    width:235px;
    padding-left:35px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    transition:.25s;
    p {
      font-size:16px;
      margin:0;
    }
    img {
      height:1.2em;
      max-width:100%;
      filter:invert(100%);
      margin-left:5px;
    }
    @media screen and (max-width: 780px) {
      display:flex;
    }
  }
  @media screen and (max-width: 780px) {
    position:absolute;
    left:-300px;
    transition:1s;
    z-index:99;
  }
}


</style>
