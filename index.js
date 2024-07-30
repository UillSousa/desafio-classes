class hero{
    constructor(nome, idade, tipo){
        this.nome = nome 
        this.idade = idade
        this.tipo = tipo
    }

    
    atacar(){
        let ataque;

        switch (this.tipo) {
            case "Mago":
              ataque = "Magia"
              break;
            case "Guerreiro":
              ataque = "Espada"
              break;
            case "Monge":
              ataque = "Artes Marciais"
              break;
            case "Ninja":
              ataque = "Shuriken"
              break
            default:
              ataque = "Ataque Desconhecido"
          }
          
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

}

let hero1 = new hero("Uilas", 25, "Mago") 
let hero2 = new hero("Iago", 27, "Guerreiro")

hero1.atacar()
hero2.atacar()

