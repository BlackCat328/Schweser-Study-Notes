export const mixin1 = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('牛逼混合！！')
    }
}
export const mixin2 = {
    data() {
        return {
            x: 22,
            y: 111
        }
    }
}
