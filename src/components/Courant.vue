<template lang="html">
  <div id="Courant">
    <div class="row">
      <div class="box__module" v-for="element in comptes">
        <div class="box__icon">
          <img :src="element.imgSource" alt="icon">
        </div>
        <div class="infos">
          <p>{{element.content}}</p>
          <h2 v-bind:class="element.class">{{element.montant}} <span>{{element.type}}</span></h2>
          <p class="time disappear">{{element.spec}}</p>
        </div>
      </div>

      <div class="box__module">
        <table>
          <thead>
            <tr>
              <th v-for="key in titres" v-bind:class="[key[1]]">{{key[0]}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="element in operations">
              <td class="disappear">{{element.date}}</td>
              <td><a href="#">{{element.libelle}}</a></td>
              <td class="disappear ref">{{element.ref}}</td>
              <td class="disappear date">{{element.dateOperation}}</td>
              <td class="debit">{{element.debit}}</td>
              <td class="text-success">{{element.credit}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Icon1 from "../assets/credit-card.png"

export default {
  name: "Courant",
  data () {
    return {
      comptes: [
        {
          name: 'One',
          class: "text-success",
          imgSource: Icon1,
          content: "Compte courant",
          montant: "3,247",
          type: "EUR",
          spec: "Dernière consultation: Vendredi 12 Septembre à 14h02"
        }
      ],
      titres: [
        ["Date", "disappear"],
        ["Libellé"],
        ["Réf.", "disappear"],
        ["Date d'opération", "disappear"],
        ["Débit"],
        ["Crédit"]
      ],
      operations: [
        {
          date: "10/09/2018",
          libelle: "MONOP', PARIS 15",
          ref: 5699856,
          dateOperation: "10/09/2018, 08h32",
          debit: 13.11,
          credit: ""
        },{
          date: "10/09/2018",
          libelle: "LA POSTE BEAUGRENELLE, PARIS 15",
          ref: 5699822,
          dateOperation: "12/09/2018, 08h17",
          debit: 9.25,
          credit: ""
        },{
          date: "10/09/2018",
          libelle: "UBER",
          ref: 5699842,
          dateOperation: "12/09/2018, 08h05",
          debit: 29.78,
          credit: ""
        },{
          date: "09/09/2018",
          libelle: "FNAC, PARIS 15",
          ref: 5699827,
          dateOperation: "09/09/2018, 18h30",
          debit: 19.99,
          credit: ""
        },{
          date: "08/09/2018",
          libelle: "CAFE DU COMMERCE, PARIS 15",
          ref: 5692727,
          dateOperation: "08/09/2018, 12h53",
          debit: 12.25,
          credit: ""
        },{
          date: "06/09/2018",
          libelle: "AMAZON REF*98988 REMBOURSEMENT",
          ref: 5699875,
          dateOperation: "03/09/2018, 00h00",
          debit: "",
          credit: 95.50
        },{
          date: "05/09/2018",
          libelle: "RED BY SFR",
          ref: 5699885,
          dateOperation: "05/09/2018, 07h01",
          debit: 3.25,
          credit: ""
        },{
          date: "05/09/2018",
          libelle: "EDF",
          ref: 5699888,
          dateOperation: "05/09/2018, 06h32",
          debit: 11.22,
          credit: ""
        },{
          date: "02/09/2018",
          libelle: "RET DAB PARIS ZOLA-COMMERCE",
          ref: 5699868,
          dateOperation: "02/09/2018, 15h32",
          debit: "50.00",
          credit: ""
        },{
          date: "02/09/2018",
          libelle: "KEEP COOL",
          ref: 5699854,
          dateOperation: "02/09/2018, 12h10",
          debit: 36.25,
          credit: ""
        }
      ]
    }
  }
}
</script>

<style lang="scss">

  #Courant {
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
      @media screen and (max-width: 780px) {
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
        @media screen and (max-width: 780px) {
          flex-direction: column;
        }
      }
    }
    #charts {
      div:first-child {
        margin-right:10px;
      }
    }
    @media screen and (max-width: 780px) {
      margin-top:110px;
      padding:10px;
      width:100%;
    }
    table {
      width:100%;
    }
    td {
      @media screen and (max-width: 780px) {
        margin:0 20px;
      }
    }
    tr {
      font-size:.9em;
      line-height:2.5;
      border-bottom:1px solid rgba(245, 245, 245, .5);
        @media screen and (max-width: 780px) {
        }
      a {
        font-weight:400;
        color:#2261d0;
        transition:color .2s;
      }
      a:hover {
        color:#F8880F;
        text-decoration:none;
        transition:color .2s;
      }
    }
    .date, .ref {
      color:lightgrey;
      font-weight:100;
    }
    .debit, .credit {
      font-weight:400;
    }
    .debit {
      color:#2261d0;
    }
    .disappear {
      @media screen and (max-width: 780px) {
          display:none;
      }
    }
  }

</style>
