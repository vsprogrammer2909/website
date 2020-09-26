export default {
    vueCompilerOptions: {
        isCustomElement(tag) {
            const custom = ['box-icon']
            return custom.includes(tag)
        }
    }    
}