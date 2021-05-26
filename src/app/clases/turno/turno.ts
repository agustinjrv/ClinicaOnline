import { Especialidad } from "../especialidad/especialidad";
import { Paciente } from "../paciente/paciente";

export class Turno {
    public id:string;
    public paciente:Paciente;
    public fecha:Date;
    public hora:Date;
    public especialidad:string;
    public especialista:Especialidad;
    public estadoTurno:boolean=true;
}
