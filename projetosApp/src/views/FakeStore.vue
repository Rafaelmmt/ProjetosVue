<!-- HTML -->
<template>
    <div class="proj08">
        Fake Store
    </div>
</template>


<!-- JS -->
<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
    data () {
        return {
            teste: undefined
        }
    },
    methods: {
        // gives access to this.increment() inside the component
        // same as calling from store.increment()
        ...mapActions(useCounterStore, ['storeApi']),
        // same as above but registers it as this.myOwnName()
        //...mapActions(useCounterStore, { myOwnName: 'increment' }),
    },
    created () {
        this.storeApi()
    }
}
</script>


<!-- CSS -->
<style>
.proj08{
    font-family: Helvetica, sans-serif;
}
</style>