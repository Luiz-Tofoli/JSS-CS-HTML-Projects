let amigo = {
    nome: 'José',
    sex: 'M',
    peso: 85.4,
    engordar(p) {
        console.log('Engordou')
        this.peso += p

    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);