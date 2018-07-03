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
          spec: "Dernière opération: Vendredi 12 Septembre à 14h02"
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
