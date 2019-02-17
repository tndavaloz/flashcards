<template>
    <v-layout row wrap>

        <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
                <v-layout>
                    <v-flex xs7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{ card.word }}</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-card-actions>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                    <v-card-text v-show="show">
                        {{ card.translated }}
                    </v-card-text>
                </v-slide-y-transition>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      show: false
    })
  }
</script>
