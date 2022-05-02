let app = new Vue({
    el:"#app",
    data: {
        title: "Contador con VueJS",
        number: 0
    },
    methods: {
        asc: function(){
            this.number++;
        },
        desc: function(){
            this.number--;
        }
    }
});
