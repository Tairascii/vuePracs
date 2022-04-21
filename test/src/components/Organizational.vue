<template>
    <div>
        <div class="button">
                <button @click="changeType">+ Добавить</button>
        </div>
        <div class="main" v-if="cities">
            <table>
                <tr class="headers" @click="addHere">
                    <th></th>
                    <th>Общее количество</th>
                    <th>Фактическое количетсво</th>
                    <th>Действие</th>
                </tr>
            </table>
            <div v-for="[key, value] of Object.entries(getCities)" :key="key">
                <CityRow :childs="value" :path="key.toString()"/>
            </div>
        </div>
        <p v-else>
            Loading...
        </p>
        <Modal />
    </div>
</template>
<script>
import axios from 'axios'
import Modal from './Modal.vue'
import CityRow from './CityRow.vue'
export default {
    name: 'Organizational',
    components: {
        Modal,
        CityRow
    },
    data(){
        return {
            cities: null,
            currentRow: -1
        }
    },
    methods: {
        changeType(){
            this.$store.dispatch('changeType')
        },
        addHere(){
            this.$store.dispatch('changeRow', "-1")
        },
    },
    computed: {
        getCities(){
            return this.$store.getters.getCities
        }
    },
    created (){
         axios.get('//localhost:3000/cities').then(({ data }) => {
             this.cities = data.cities.cities
         })
         this.$store.dispatch('getCities')
    },
}
</script>
<style lang="scss" scoped>
    table{
       width: 100%; 
       border-collapse: collapse;
       .headers{
           th:first-child{
                width: 50%;
                border-left: 0px solid #dddddd;
            }
       } 
       tr{
           border-bottom: #2d3e5038 1px solid;
       }
    }
    th, td {
        height: 30px;
        text-align: left;
        padding: 8px;
    }
    th{
        background-color: #2d3e50;
        color: white;
        font-weight: 300;
        border-left: 1px solid #dddddd;
    }
    td *{
        margin-left: 10px;
    }
    summary{
        cursor: pointer;
    }
    
    .button{
        display: flex;
        align-items: center;
        height: 50px;
        margin-left: 20px;
    }
</style>