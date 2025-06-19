import { ref } from 'vue'
export default {
  setup() {
    const message = ref('Hello Vue!')
    return {
        message
    }
},
template: `<div><h1>{{ message }}</h1></div>`
}