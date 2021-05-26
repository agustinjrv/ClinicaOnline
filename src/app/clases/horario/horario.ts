
export enum EDiasSemana{ lunes,martes,miercoles,jueves,viernes,sabado}


export class Horario {
    public dia:EDiasSemana;
    public trabaja:boolean=false;
    public horaInicio:number=8;
    public horaFin:number=19;


    public constructor(_dia:EDiasSemana)
    {
        this.dia=_dia;
        this.trabaja=false;
        this.horaInicio=0;
        this.horaInicio=19;
    }
    /*ocho:any=false;
    nueve:any=false;
    diez:any=false;
    once:any=false;
    doce:any=false;
    trece:any=false;
    catorce:any=false;
    quinse:any=false;
    dieciseis:any=false;
    diecisiete:any=false;
    dieciocho:any=false;
    diesinueve:any=false;*/
}
