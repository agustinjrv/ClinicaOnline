import { EestadoTurno } from "../turno/turno";

export class HistoriaClinica {
    public id:string;
    public idTurno:string;
    public fecha:string;
    public hora:string;
    public correoPaciente:string;
    public correoEspecialista:string;
    public altura:number;
    public peso:number;
    public temperatura:number;
    public presion:string;
    public resenia:string;
    public diagnostico:string;
    public especialidad:string='';
    public datosDinamicos:any[]=[];

}
