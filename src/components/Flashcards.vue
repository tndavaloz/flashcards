<template>
  <v-container>
      <Card v-for="card in cards"
            :card="card"/>
  </v-container>
</template>

<script>
  import Card from './Card';

  export default {
    name: 'Flashcards',
    components: {
      Card,
    },
    data() {
      return {
        cards: [
          {
            word: 'Ciao',
            translated: 'Hi/Bye',
          },
          {
            word: 'Buongiorno',
            translated: 'Hello and good morning'
          },
          {
            word: 'Salve',
            translated: 'Hello'
          },
          {
            word: 'Buonasera',
            translated: 'Hello and good evening'
          },
          {
            word: 'Arrivederci',
            translated: 'Goodbye'
          }
        ]
      }
    },
  };
</script>

<style>

</style>
