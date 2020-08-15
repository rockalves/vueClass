new Vue ({
    el:'#desafio',
    data:{
        nome:'Andre Ricardo Alves',
        idade:32,
        srcImagem:'https://vuejs.org/images/logo.png'
    },
    methods:{
        multiplicaIdade: function(){
            return this.idade*3
        },
        numeroAleatorio: function(){
            return Math.random()
        }
    }
})