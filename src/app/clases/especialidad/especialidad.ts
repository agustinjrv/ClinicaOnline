export class Especialidad {    
    public id:string;
    public nombre:string;
    public mostrar:boolean;

    public constructor(_nombre:string,_mostrar:boolean)
    {
        this.nombre=_nombre;
        this.mostrar=_mostrar;
    }

}
