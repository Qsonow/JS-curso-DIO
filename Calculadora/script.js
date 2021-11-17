// function calc(name, função = 0, v1 = 1, v2 = 1) {
//     console.log("Iniciando calculadora...");
//     let a = typeof (name);
//     if (name != null && a == "string") {
//         console.log("Benvindo " + name + ".");
//     } else {
//         console.log("Benvindo.");
//     }
//     switch (função) {
//         case 0:
//             console.log("nenhuma função requerida");
//             break

//         case "soma" || "somar":
//             var result = v1 + v2;
//             console.log("A soma de", v1, "+", v2, "é", result + ".");
//             return result;
//             break

//         case "sub" || "subtração":
//             var result = v1 - v2;
//             console.log("A subtração de", v1, "-", v2, "é", result + ".");
//             return result;
//             break

//         case "mult" || "multiplicação":
//             var result = v1 * v2;
//             console.log("A multiplicação de", v1, "x", v2, "é", result + ".");
//             return result;
//             break

//         case "div" || "divisão":
//             var result = v1 / v2;
//             console.log("A divisão de", v1 + "/" + v2, "é", result + ".");
//             return result;
//             break;
//     }
// }

function escopoLocal() {
    let escopoLocalInterno = 'local';

}

console.log(escopoLocalInterno);