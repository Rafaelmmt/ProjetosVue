import axios from 'axios'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // STATE 
  state: () => ({
    perguntaApi: undefined,
    respostaV: undefined,
    respostasF: undefined
  }),
  // GETTERS
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  
  // ACTIONS
  actions: {
    
    triviaApi() {
      this.perguntaApi = undefined,
  
      axios.get('https://opentdb.com/api.php?amount=1&category=9').then((response) => {
        this.perguntaApi = response.data.results[0].question,
        this.respostaV = response.data.results[0].correct_answer,
        this.respostasF = response.data.results[0].incorrect_answers
      })
    },

    storeApi() {
      axios.get('https://fakestoreapi.com/products').then(response => {
        console.log(response.data)
      })
    },
  }
})