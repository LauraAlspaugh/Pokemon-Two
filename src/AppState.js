import { reactive } from 'vue'
import { Pokemon } from './models/Pokemon.js'
Pokemon

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  pokemon: [],
  previousPage: null,
  nextPage: null,
  activePokemon: null
})
