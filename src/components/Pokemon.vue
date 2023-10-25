<template>
    <div @click="setActivePokemon(pokemon.url)" class="text-center">
        {{ pokemon.name }}
    </div>
</template>


<script>
import { logger } from '../utils/Logger.js';
import { Pokemon } from '../models/Pokemon.js';
import { pokemonService } from '../services/PokemonService.js';
import Pop from '../utils/Pop.js';

export default {
    props: { pokemon: { type: Pokemon, required: true } },
    setup() {
        return {
            async setActivePokemon(url) {
                try {
                    await pokemonService.setActivePokemon(url)
                } catch (error) {
                    logger.error(error)
                    Pop.error(error)

                }
            }

        }
    }
};
</script>


<style lang="scss" scoped></style>