import { computed } from '@vue/composition-api'
import store from '@/state/store'

export function useStore() {
  const firstName = computed({
  get: () => store.getters.firstName,
  set: val => {
    store.commit('FIRSTNAME', val) }
  })

  const middleName = computed({
  get: () => store.getters.middleName,
  set: val => { store.commit('MIDDLENAME', val) }
  })

  const lastName = computed({
  get: () => store.getters.lastName,
  set: val => { store.commit('LASTNAME', val) }
  })

  return {
    firstName,
    middleName,
    lastName
  }
}
