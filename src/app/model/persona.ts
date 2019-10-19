import { TipoDocumento } from './tipoDocumento';

export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    nroDocumento: string;
    tipoDocumentoIdentidad = new TipoDocumento();
}
