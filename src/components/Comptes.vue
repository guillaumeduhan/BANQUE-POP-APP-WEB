<template>
  <div id="Comptes">
    <div class="row">
      <div class="col first">
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
      <div class="col special">
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
            <div class="btn" @click="showPhone()">
              <i class="fas fa-phone"></i>
            </div>
            <div class="btn" @click="showCalendar()">
              <i class="far fa-calendar-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <draggable :options="{group:'people'}" @start="drag=true" @end="drag=false">
      <div class="box__module" v-for="element in comptes" :key="element.id">
        <div class="box__icon">
          <img :src="element.imgSource" alt="icon">
        </div>
        <div class="infos">
          <p>{{element.content}}</p>
          <h2 v-bind:class="element.class">{{element.montant}} <span>{{element.type}}</span></h2>
          <p class="time disappear">{{element.spec}}</p>
        </div>
        <div class="buttons">
          <div class="box__button" v-for="element in buttons">
            <i v-bind:class="element.fontSource"></i>
            <p>{{element.text}}</p>
          </div>
        </div>
        <div class="drag disappear">
          <img src="../assets/drag.png" alt="drag">
        </div>
      </div>
    </draggable>

    <div class="row" id="charts">
      <div class="box__module col" v-for="element in miniModules">
        <p class="box__icon">
          <img :src="element.imgSource" alt="icon">
        </p>
        <div class="infos">
          <p>{{element.name}}</p>
          <h2 v-bind:class="element.class">{{element.number}} <span>{{element.type}}</span></h2>
          <p class="time disappear">{{element.event}}, {{element.date}}</p>
        </div>
      </div>
    </div>

    <div class="row" id="abonnements">
      <div class="box__module" v-for="element in abonnements">
        <p class="box__icon">
          <img :src="element.imgSource" alt="icon">
        </p>
        <div class="infos">
          <p>{{element.name}}</p>
          <p class="time disappear">{{element.descriptif}}</p>
        </div>
        <div class="buttons">
          <div class="subscription" v-for="element in liste">
            <div class="infos">
              <p class="price">{{element.number}} <span>{{element.type}}</span> </p>
              <p class="name disappear">{{element.name}}</p>
            </div>
            <i class="fas fa-times" @click="showCancel()"></i>
          </div>
          <div class="buttons__hidden">
            <div class="box__button" v-for="element in buttons">
              <i v-bind:class="element.fontSource"></i>
              <p>{{element.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    <modal name="show_phone">
      <div class="question__modal">
        <div class="infos">
          <p>Votre conseiller</p>
          <h2>Mr Richard LEGRAND</h2>
          <p class="time">05 63 63 47 47</p>
        </div>
      </div>
    </modal>

    <modal name="show_calendar">
      <div class="question__modal">
        <p>Prendre rendez-vous:</p>
        <datetime v-model="datetime" zone="Europe/Paris" type="datetime" class="theme-blue" placeholder="Choisir une date"></datetime>
        <div class="btn blue__button bouton" @click="hideCalendar()">
          Confirmez la date
        </div>
      </div>
    </modal>

    <modal name="show_cancel">
      <div class="question__modal">
        <p>Voulez-vous annuler cet abonnement?</p>
        <div class="btn blue__button bouton" @click="hideCancel()">
          Annuler
        </div>
      </div>
    </modal>

    <div class="annonce__box" id="annonce" v-if="annonce == true">
      <p>Cyberplus revisité en Vue 3.0 par Guillaume Duhan.</p>
      <div class="btn" @click="hideAnnonce()">
        <i class="fas fa-times"></i>
      </div>
    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable"
import Datetime from "vue-datetime"
import Drag from "../assets/drag.png"
import Icon1 from "../assets/credit-card.png"
import Icon2 from "../assets/coins.png"
import Icon3 from "../assets/cheque.png"
import Icon4 from "../assets/hand.png"
import Icon5 from "../assets/discount.png"
import Icon6 from "../assets/search.png"

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
      ],
      comptes: [
        {
          id: 1,
          name: 'One',
          class: "text-success",
          imgSource: Icon1,
          content: "Compte courant",
          montant: "3,247",
          type: "EUR",
          spec: "Dernière opération: Vendredi 12 Septembre à 14h02"
        },{
          id: 2,
          name: 'Two',
          class: "text-success",
          imgSource: Icon2,
          content: "Livret A",
          montant: "12,546",
          type: "EUR",
          spec: "Taux journalier: 2,234% (mise à jour à 10h34)"
        },{
          id: 3,
          name: 'Three',
          imgSource: Icon3,
          class: "text-danger",
          content: "Compte chèques",
          montant: "-216,02",
          type: "EUR",
          spec: "Dernière opération: Samedi 28 Février à 12h23"
        }

      ],
      buttons: [
        {
          fontSource: "fas fa-eye",
          text: "Consulter"
        },{
          fontSource: "fas fa-cog disappear",
          text: "Virements"
        },{
          fontSource: "fas fa-users disappear",
          text: "Bénéficiaires"
        },{
          fontSource: "fas fa-ellipsis-h",
          text: "Autre"
        }
      ],
      miniModules: [
        {
          name: "Dernier évènement",
          number: "13,10",
          type: "EUR",
          class: "text-success",
          event: "Monop', Paris 15",
          date: "Mercredi 10 Septembre à 08h32",
          imgSource: Icon4,
          status: "Validé"
        },{
          name: "Dépense moyenne",
          number: "26,63",
          type: "EUR",
          class: "",
          event: "Calculé sur les 12 derniers mois",
          date: "aujourd'hui",
          imgSource: Icon5,
          status: "Validé"
        }
      ],
      abonnements: [
        {
          name: "Paiements automatiques",
          descriptif: "Liste de tous les paiements mensuels auxquels vous avez souscrit.",
          imgSource: Icon6
        }
      ],
      liste: [
        {
          name: "Orange",
          number: "9,99",
          type: "EUR",
          date: "le 6 de chaque mois"
        },{
          name: "KeepCool",
          number: "24,99",
          type: "EUR",
          date: "le 8 de chaque mois"
        },{
          name: "SNCF",
          number: "18,29",
          type: "EUR",
          date: "le 3 de chaque mois"
        }
      ],
      annonce: true,
      datetime: ""
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
    },
    showPhone:function() {
      this.$modal.show('show_phone');
    },
    showCalendar:function() {
      this.$modal.show('show_calendar');
    },
    hideCalendar:function() {
      this.$modal.hide('show_calendar');
    },
    hideAnnonce:function(){
      this.annonce = false
    },
    showCancel:function() {
      console.log("ça marche");
      // this.$modal.show('show_cancel');
    },
    hideCancel:function() {
      this.$modal.hide('show_cancel');
    }
  },
  components: {
    draggable
  }
}
</script>

<style lang="scss" scoped>

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
