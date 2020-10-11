export default {
    state: {
      firstName: '',
      middleName: '',
      lastName: ''
    },
    getters: {
        firstName: state => state.firstName,
        middleName: state => state.middleName,
        lastName: state => state.lastName,
    },
    mutations: {
        FIRSTNAME(state, val) {
          state.firstName = val;
          console.log('updated first name')
        },
        MIDDLENAME(state, val) {
          state.middleName = val;
          console.log('updated middle name')
        },
        LASTNAME(state, val) {
          state.lastName = val;
          console.log('updated last name')
        },
    }
}
