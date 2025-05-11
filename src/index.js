
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

