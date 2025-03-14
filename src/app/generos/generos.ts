// Interfaz para la creación de un género
export interface GeneroCreacionDTO {
    nombre: string; // Nombre del género
}

// Interfaz para representar un género existente
// DTO = Data Transfer Object
export interface GeneroDTO {
    id: number; // Identificador único del género
    nombre: string; // Nombre del género
}