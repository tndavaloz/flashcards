<template>
  <v-app dark>
    <v-content>
      <Flashcards/>
    </v-content>
  </v-app>
</template>

<script>
import Flashcards from './components/Flashcards';

export default {
  name: 'App',
  components: {
    Flashcards,
  },
  data() {
    return {
      //
    };
  },
};
</script>
