<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 text-center p-4">
        <h1>Pokemon</h1>
      </div>
    </section>
    <section class="row">
      <div v-for="p in pokemon" :key="p.id" class="col-3">
        <Pokemon :pokemon="p" />
      </div>


      <div class="col-12 text-center">
        <button :disabled="!previous" class="btn btn-outline-dark m-2" @click="changePage(previous)">Previous</button>
        <button :disabled="!next" class="btn btn-outline-dark m-2" @click="changePage(next)">Next</button>
      </div>
    </section>
    <section class="row">
      <div v-if="activePokemon" class="col-12 text-center fs-1 m-3">
        {{ activePokemon.name }}
      </div>
      <div v-else class="col-8 text-center">
        Loading.....
      </div>
    </section>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { pokemonService } from "../services/PokemonService.js";
import { AppState } from '../AppState.js';
import { computed, onMounted, popScopeId } from "vue";
import { Pokemon } from '../models/Pokemon.js';

export default {
  setup() {
    onMounted(() => {
      getPokemon();
    });
    async function getPokemon() {
      try {
        await pokemonService.getPokemon();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }
    return {
      pokemon: computed(() => AppState.pokemon),
      next: computed(() => AppState.nextPage),
      previous: computed(() => AppState.previousPage),
      activePokemon: computed(() => AppState.activePokemon),
      async changePage(url) {
        try {
          await pokemonService.changePage(url);
        }
        catch (error) {
          logger.error(error);
          Pop.error(error);
        }
      }
    };
  },

}
</script>

<style scoped lang="scss"></style>
