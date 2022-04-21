<template>
    <div v-if="childs.child && Object.keys(childs.child)" :id="''+childs.id">
        <div class="row-flex" @click="addHere(childs.id)" :id="'active-'+childs.id">
            <div class="child child-1">
                <details @click="showDetails(childs.id)">
                    <summary>{{ childs.name }}</summary>
                </details>
            </div>
            <div class="child child-2">
                <span>{{ childs.overall }}</span>
            </div>
            <div class="child child-3">
                <span>{{ this.fact }}</span>
            </div>
            <div class="child child-4" @mount="sumOfChild">
                <button @click="editChild">edit</button>
                <button @click="deleteChild">delete</button>
            </div>  
        </div>
        <div v-for="[key, value] of Object.entries(childs.child)" :key="key" class="expand hidden">
            <CityRow :childs="value" :path="this.childPath+'/'+key.toString()"/>
        </div>
    </div>
    <div v-else class="row-flex" @click="addHere(childs.id)" :id="'active-' + childs.id">
        <div class="child child-1">
            <span>{{ childs.name }}</span>
        </div>
        <div class="child child-2">
            <span>{{ childs.overall }}</span>
        </div>
        <div class="child child-3">
            <span>{{ childs.fact }}</span>
        </div>
        <div class="child child-4">
            <button @click="editChild">edit</button>
            <button @click="deleteChild">delete</button>
        </div>  
    </div>
</template>
<script>
export default {
    name: "CityRow",
    data(){
        return {
            cities: null,
            currentRow: -1,
            fact: 0,
            childPath: null,
        }
    },
    props: {
        childs: Object,
        path: String
    },
    methods:{
        addHere(row){
            const acti = document.getElementsByClassName("active")
            if(acti.length){
                acti[0].classList.toggle("active")
            }
            document.getElementById('active-'+row).classList.toggle("active")
            this.$store.dispatch('changeRow', this.path)
        },
        showDetails(id){
            let children = document.getElementById(id).children
            for(let i=0; i<children.length; i++){
                children[i].classList.toggle("hidden")
            }
        },
        editChild(){
            this.$store.dispatch('changeType')
        },
        deleteChild(){
            this.$store.dispatch('deleteChild')
        },
        sumOfChild(sum){
            this.fact += sum
            console.log(this.fact)
        },
    },
    onUpdated(){
        let sum = 0
        for (let i = 0; i<=this.childs.length; i++){
            sum += this.childs.fact
        }
        this.$emit('mount', sum)
    },
    created(){
        if(this.path) this.childPath = this.path
    }
}
</script>
<style lang="scss" scoped>
details{
    cursor: pointer;
}

details > summary {
    list-style-type: none;
}

details > summary::before {
    content: '˃';
}

details[open] > summary::before {
    content: '˅';
}

.hidden{
    display: none;
}
.row-flex{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
}
.child{
    padding-left: 20px;
    box-sizing: border-box;
}
.child-1{
    width: 50%;
}
.child-2{
    width: 20%;
}
.child-3{
    width: 20%;
}
.child-4{
    width: 10%;
}
.active{
    box-shadow: 1px 0px 6px 7px rgba(0,230,214,0.5);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>