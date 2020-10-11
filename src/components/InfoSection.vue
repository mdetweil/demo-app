<template>
  <v-card>
    <v-card-title>Info Section</v-card-title>
    <v-container>
      <v-row>
        <v-text-field label="First Name" id="firstName" v-model="value.firstName.value" outlined />
      </v-row>
      <v-row>
        <v-text-field label="Middle Name" id="middleName" v-model="value.middleName.value" outlined />
      </v-row>
      <v-row>
        <v-text-field label="Last Name" id="lastName" v-model="value.lastName.value" outlined />
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
