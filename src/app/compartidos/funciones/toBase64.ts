export function toBase64(file: File): Promise<string> {
  // Crea una nueva promesa
  return new Promise((resolve, reject) => {// resolve: carga / reject: falla
    // Crea una instancia de FileReader para leer el archivo
    const lector = new FileReader();
    // Lee el archivo como una URL de datos (base64)
    lector.readAsDataURL(file);
    // Cuando la lectura se completa con éxito, resuelve la promesa con el resultado
    lector.onload = () => resolve(lector.result as string);
    // Si ocurre un error durante la lectura, rechaza la promesa con el error
    lector.onerror = (error) => reject(error);
  });
}
