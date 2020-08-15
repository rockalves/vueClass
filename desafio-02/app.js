new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Voce clicou em um botão :)')
        },
        gravaLetra(e){
            this.valor = e.target.value
        }

    }
})