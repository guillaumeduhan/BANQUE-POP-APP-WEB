<template>
  <div id="Comptes">
    <div class="row">
      <div class="col">
        <div class="box__module">
          <div class="image">
            <img src="../assets/gd.jpg" alt="Guillaume Duhan">
          </div>
          <div class="infos">
            <p>Bienvenue</p>
            <h2>Mr Guillaume DUHAN</h2>
            <p class="time">Dernière connexion: Vendredi 12 Septembre à 14h02</p>
          </div>
          <div class="btn" @click="showLogOut()">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="box__module">
          <div class="image">
            <img src="../assets/portrait2.png" alt="Conseiller">
          </div>
          <div class="infos">
            <p>Votre conseiller</p>
            <h2>Mr Richard LEGRAND</h2>
            <p class="time">Connecté il y a 12 minutes</p>
          </div>
          <div class="options">
            <div class="btn" @click="showMail()">
              <i class="far fa-envelope"></i>
            </div>
            <div class="btn">
              <i class="fas fa-phone"></i>
            </div>
            <div class="btn">
              <i class="far fa-calendar-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="box__module"></div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="box__module">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="box__module"></div>
      </div>
    </div>
    <modal name="logout">
      <div class="question__modal">
        <p>Voulez-vous vraiment vous déconnecter?</p>
        <div class="btn blue__button bouton" @click="hideLogOut()">
          Oui
        </div>
        <div class="btn blue__button bouton" @click="hideLogOut()">
          Non
        </div>
      </div>
    </modal>
    <modal name="send_mail">
      <div class="question__modal">
        <p>Message destiné à:</p>
        <div class="infos">
          <p>Votre conseiller</p>
          <h2>Mr Richard LEGRAND</h2>
          <p class="time">Connecté il y a 12 minutes</p>
        </div>
        <p>Sélectionnez un sujet:</p>
        <select>
          <option v-for="sujet in questions">{{ sujet.content }}</option>
        </select>
        <textarea name="name" rows="8" cols="80"></textarea>
        <div class="btn blue__button bouton" @click="hideMail()">
          Envoyer le message
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "Comptes",
  data () {
    return {
      questions: [
        {
          content:"Mon compte"
        }, {
          content:"Demande de précision sur le fonctionnement de Cyberplus"
        }, {
          content:"Mes questions sur les produits"
        }, {
          content:"Demande de rendez-vous"
        }, {
          content:"Autre sujet"
        }
      ]
    }
  },
  methods: {
    showLogOut:function() {
      this.$modal.show('logout');
    },
    hideLogOut:function(){
      this.$modal.hide('logout');
    },
    showMail:function() {
      this.$modal.show('send_mail');
    },
    hideMail:function(){
      this.$modal.hide('send_mail');
    }
  }
}
</script>

<style lang="scss" scoped>

  #Comptes {
    width:calc(100% - 300px);
    .row {
      width:100%;
      padding:50px 50px 0px 50px;
      @media screen and (max-width: 640px) {
        padding:0;
        margin:0;
      }
      .box__module {
        padding:25px;
        .image {
          width:75px;
          border-radius:50px;
          overflow:hidden;
          img {
            width:100%;
          }
        }
        .infos {
          width: 100%;
          padding-left:25px;
          h2 {
            font-size:17px;
            font-weight:700;
            color:#2B55A0;
            margin:0;
          }
          p {
            font-weight:700;
            line-height:1.35;
            margin:0;
          }
          h2, p {
            margin:4px 0;
          }
          a {
            padding:20px 0;
          }
          .time {
            font-size:12px;
            font-weight:300;
            color:lightgrey;
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
    @media screen and (max-width: 640px) {
      margin-top:110px;
      width:100%;
    }
  }

</style>
