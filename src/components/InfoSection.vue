<template>
  <v-card>
    <v-card-title>Info Section</v-card-title>
    <v-container>
      <v-row>
        <v-text-field label="First Name" id="firstName" :value="value.firstName.value" @input="value.firstName.value = $event" outlined />
      </v-row>
      <v-row>
        <v-text-field label="Middle Name" id="middleName" :value="value.middleName.value" @input="value.middleName.value = $event" outlined />
      </v-row>
      <v-row>
        <v-text-field label="Last Name" id="lastName" :value="value.lastName.value" @input="value.lastName.value = $event" outlined />
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {

  props: {
    value: {
      type: Object
    }
  },
}
</script>
