import { ref } from 'vue'

export default {
    setup() {
        const contador = ref(0)

        function incrementar() {
            contador.value++
        }
        
    return {
        contador,
        incrementar
    }
    },
    template: `<buttom @click=incrementar>{{ contador }}</buttom> `
}