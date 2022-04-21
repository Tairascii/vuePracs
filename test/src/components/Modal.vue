<template>
    <div id="modal">
        <form @submit.prevent>
            <label for="name"></label>
            <input v-model="name" type="text" name="name" />
            <label for="overall"></label>
            <input v-model="overall" type="number" name="overall" id="" />
            <label for="fact"></label>
            <input v-model="fact" type="number" name="fact" id="" />
            <button name="button" v-show="getType == 'add'" @click="addChild">Добавить</button>
            <button name="button" v-show="getType == 'edit'" @click="editChild">Редактировать</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: '',
            overall: 0,
            fact: 0,
        }
    },
    methods: {
        addChild(){
            this.$store.dispatch('addChild', {
                id: 123123,
                name: this.name,
                overall: this.overall,
                fact: this.fact,
                child: []
            }).then( () =>{
                this.$router.push({ name: 'Home' })
            })
        },
        editChild(){
            this.$store.dispatch('updateChild', {
                name: this.name,
                overall: this.overall,
                fact: this.fact,
            }).then( () =>{
                this.$router.push({ name: 'Home' })
            })
        }
    },
    computed: {
        getType(){
            return this.$store.getters.getType
        }
    }
}
</script>