// primeira aula, brincamos um pouco com o JS e utilizamos funções, declaramos variaveis e vimos as diferenças entre let e const, exemplos de case switch e de if.

const horas = 23;

switch (true) {
    case (horas >= 0 && horas < 12):
        console.log("bom dia");
        break;
    case (horas >= 12 && horas < 19):
        console.log("boa tarde");
        break;
    case (horas >= 19 && horas < 24):
        console.log("boa noite");
        break;
    default:
        console.log("hora inválida");
}
