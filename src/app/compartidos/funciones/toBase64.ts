export function toBase64(file: File): Promise<string>{ //Nueva promesa
    return new Promise((resolve, reject)=>{ // resolve: carga / reject: falla
        const lector = new FileReader();    // Lee archivo
        lector.readAsDataURL(file);         // Pasa el archivo
        lector.onload = () => resolve(lector.result as string);
        lector.onerror = (error) => reject(error); //Muestra error
    } )

}