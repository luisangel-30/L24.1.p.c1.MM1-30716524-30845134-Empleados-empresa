export default class CL_empresa{
    constructor(){
        this.conthom=0;
        this.contmuj=0;
        this.contemp=0;

    }
    procesar(empl){
        this.contemp++;
        if(empl.sexo=="F")
           this.contmuj++;
        else
          this.conthom++;

    }
    porcentajemuj(){
        return (this.contmuj/this.contemp)*100;

    }
}