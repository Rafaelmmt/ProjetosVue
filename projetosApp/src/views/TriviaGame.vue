<!-- HTML -->
<template>
    <div class="proj07">

        <div class="placar">
            Humano <span> {{ this.placarU }} </span> x <span> {{ this.placarPC }} </span> Computador 
        </div>

        <div class="pergunta" v-if="this.perguntaApi">
            <hr>
            <h1 v-html="this.perguntaApi"></h1>
            
            <div v-for="alternativa in alternativas" :key="alternativa.id">
                <input :disabled="this.escolhaFeita" type="radio" name="options" :value="alternativa" v-model="this.respostaU">
                <label v-html="alternativa"></label>
            </div>
    
            <button v-if="!this.escolhaFeita" @click="this.enviar()" class="send" type="button"> Enviar </button>
    
            <div v-if="this.escolhaFeita">
                <h4 v-if="this.respostaU == this.respostaV">&#9989; Parabéns! A resposta certa é "{{ this.respostaV }}".</h4>
                <h4 v-else>&#10060; Resposta errada! A resposta certa é "{{ this.respostaV }}".</h4>
                <button @click="this.nextQ()" class="send" type="button"> Próxima Pergunta </button>
            </div>
        </div>
        
    </div>
</template>


<!-- JS -->
<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {

    data () {
        return {
            respostaU: undefined,
            escolhaFeita: false,
            placarU: 0,
            placarPC: 0  
        }
    },

    computed: {
        ...mapState(useCounterStore, ['perguntaApi', 'respostaV', 'respostasF']),

        alternativas() {
            var alt = [...this.respostasF];
            alt.splice(Math.round(Math.random()*alt.length), 0, this.respostaV);
            return alt
        }
    },
   
    methods: {
        ...mapActions(useCounterStore, ['triviaApi']),

        enviar () {
            if (!this.respostaU) {
                alert('Escolha uma das opções!');
            } else {
                this.escolhaFeita = true;
                if (this.respostaU == this.respostaV) {
                    this.placarU++;
                } else{
                    this.placarPC++;
                }
            }
        },
        
        nextQ() {
            this.respostaU = undefined;
            this.escolhaFeita = false;
            this.triviaApi ()
        }
    },
    
    created () {
        this.triviaApi()
    }
}
</script>


<!-- CSS -->
<style>
.proj07{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Helvetica, sans-serif;
    color: #223344;
}
.placar {
    padding: 50px 25px;
    margin-bottom: 25px;
    font-size: 15pt;
    font-weight: bold;
}
span{
    padding: 8px;
    font-weight: bold;
    border: 2px solid #223344;
}
hr {
    max-width: 90%;
    margin: auto;
}
.pergunta {
    max-width: 960px;
    text-align: center;
}

input {
    margin: 20px 10px;
}
label {
    font-size: 15pt;
}
button {
    margin-top: 40px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
}
</style>