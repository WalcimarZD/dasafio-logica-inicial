let nomeHeroi = "Goku";
let nivelHeroi = 5001;
let nivelDescricao = "";

switch (true) {
    case nivelHeroi < 1000:
        nivelDescricao = "Ferro";
        break;
    case nivelHeroi >= 1001 && nivelHeroi <= 2000:
        nivelDescricao = "Bronze";
        break;
    case nivelHeroi >= 2001 && nivelHeroi <= 5000:
        nivelDescricao = "Prata";
        break;
    case nivelHeroi >= 5001 && nivelHeroi <= 7000:
        nivelDescricao = "Ouro";
        break;
    case nivelHeroi >= 7001 && nivelHeroi <= 8000:
        nivelDescricao = "Platina";
        break;
    case nivelHeroi >= 8001 && nivelHeroi <= 9000:
        nivelDescricao = "Ascendente";
        break;
    case nivelHeroi >= 9001 && nivelHeroi <= 10000:
        nivelDescricao = "Imortal";
        break;
    case nivelHeroi > 10000:
        nivelDescricao = "Radiante";
        break;
    default:
        nivelDescricao = "nível não definido";
}

console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelDescricao}**!`);




//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante