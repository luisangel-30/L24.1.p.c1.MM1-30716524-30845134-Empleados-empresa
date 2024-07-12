/*EMPLEADOS EMPRESA
Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)
Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25%*/
import CL_empleado from "./CL_empleado.js";
import CL_empresa from "./CL_empresa.js";

let empleado= new CL_empleado();

let empl1=new CL_empleado("Mary","F");
let empl2=new CL_empleado("Jose","M");
let empl3=new CL_empleado("Carlos","M");
let empl4=new CL_empleado("Pedro","M");

let empresa=new CL_empresa();
empresa.procesar(empl1);
empresa.procesar(empl2);
empresa.procesar(empl3);
empresa.procesar(empl4);


let salida=document.getElementById("salida");
salida.innerHTML=`

Cantidad de hombres que trabajan en la empresa: ${empresa.conthom}
<br>Porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentajemuj()}%
`
