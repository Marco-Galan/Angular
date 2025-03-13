export interface ActorDTO{
id: number;
nombre: string;
fechaNacimiento: Date;
foto?: string;
}

export interface ActorCreacionDTO{
    nombre: String;
    fechaNacimiento: Date;
    foto?: File;
}