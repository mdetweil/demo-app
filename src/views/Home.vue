<template>
  <v-container>
    <InfoSection v-model="data" />
    <div>Name: {{firstName}} {{middleName}} {{lastName}}</div>
  </v-container>
</template>

<script>
// @ is an alias to /src
  import { useStore } from '@/composables/useStore'
  import InfoSection from '@/components/InfoSection.vue'

export default {
  name: "home",
  components: {
    InfoSection
  },
  setup() {
    const { firstName, middleName, lastName } = useStore()

    const data = {
      firstName,
      middleName,
      lastName
    }

    return {
      data,
      firstName,
      middleName,
      lastName
    }
  }
};
</script>
