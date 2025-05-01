export function extraerErrores(objeto: any): string[] {
    
    const extraccion = objeto.error.errors;

    let mensajeDeError: string[] = [];

    for (let llave in extraccion) {
        let campo = llave;
        const mensajeConCampos = extraccion[llave].map((mensaje: string) => `${campo}: ${mensaje}`);
        mensajeDeError = mensajeDeError.concat(mensajeConCampos);
    }

    return mensajeDeError;
   
}