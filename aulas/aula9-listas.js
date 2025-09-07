const names = ["Brenner", "Bárbara" ,"Maria", "João" , "Ricardo"]
console.log(names);

//
names[2] = "Leticia";
console.log(names);


// Adiciona um elemento ao ultimo da lista
names.push("Pedro" , "Juan");
console.log(names);

//Adiciona um elemento no início do array
names.unshift("Nicole");
console.log(names);

//Remove o ultimo elemento do array
names.pop();
console.log(names);

//Método pop, além de remover o último array também nos devolve o mesmo item que foi excluido, por exemplo:
let lastName = names.pop();
console.log(lastName);

//Metodo shift para remover o primeiro item do Array.
names.shift();
console.log(names);

let firstName = names.shift();
console.log(firstName);

const names = ["Kathlyn", "Pedro", "Lucas", "Natália", "Carla"];
names.splice(3, 2, "Ana", "Gustavo", "Eduarda"); //remove natalia e carla e adiciona ana, gustavo e eduarda
console.log(names)

// podemos percorrer arrays com loop de repetição
const names2 = ["Ana", "João", "Maria"];
for (let i = 0; i < names2.length; i++) {
     console.log(nomes[i])
}
