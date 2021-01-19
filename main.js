//Primo step: suddivisione sommaria delle aree del sito.
//Secondo step: individuare le parti che si possono ripetere e implementarle con Vue
//Terzo step: inserire transizioni/animazioni

Vue.component('button-counter', {
    data: function(){
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Cliccato {{count}} volte</button>'
})


let app = new Vue({
    el: '#root',
    data: {

    },
    methods: {

    },
    created(){},
    mounted(){},

});