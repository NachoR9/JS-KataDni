import { DNI } from "./js/Dni.js";
import prompt  from "prompt-sync";

function pideElDNI () {
    while (true) {
        const input = prompt()("Introduce tu número de Dni (o escribe 'cancelar' para salir): ");
        if (input === "cancelar") {
            break;
        }
        try { 
            const dni = new DNI(parseInt(input))
            dni.calcularLetra()
        } catch (Error) {
            console.error(Error);
            
        }
    }
    
}
pideElDNI()