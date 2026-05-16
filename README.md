/>README.md 

En esta oportunidad veremos como actua un analizador, utilizando cierta gramatica asignada por profesores de la Universidad Tecnologica Nacional.

A continuación:

.REQUERIMIENTOS PREVIOS A SU INSTALACIÓN

.INSTALACIÓN 

.INSTRUCCIONES DE USO
                                REQUERIMIENTOS PREVIOS A SU INSTALACIÓN  
                                
        1.Tener JRE (Java Runtime Environment) instalado en su computadora. En caso de no contar con Java preinstalado puede descargarlo e instalarlo desdehttps://www.java.com/en/download/. Se requiere Java 1.8 o superior.
        2.Descargar e Instalar Node.js (LTS) desde la página oficial https://nodejs.org/es. Se requiereNode 16 o superior.
        3.Descargar e instalar VS Code (IDE Visual Studio Code) desde la página oficial https://code.visualstudio.com/. VS Code será el entorno de desarrollo que utilizaremos para trabajar sobre el código de nuestro caso.
        IMPORTANTE: durante la instalación de VS Code, habilita la opción "Add to PATH" para que puedas abrir VS Code desde una terminal con code.
        4.Descargar e instalar Git desde la página oficial https://git-scm.com/downloads. GIT es el controlador de versiones de código que necesitarás para obtener el proyecto ejemplo.
      
Para verificar que este instalado todo de forma correcta, puedes ejecutar los siguientes comandos en una terminal (Cmd, PowerShell, o terminal en Linux). Una forma de ingresar al cmd  es el teclado insertar "WINDOWS + R"


 Ingresar en el cmd
 
 . node –v (donde nos mostrá la versión) 
 
 . npm –v (donde nos mostrá la versión) 
 
 . code –v (donde nos mostrá la versión) 
 
 . git –v (donde nos mostrá la versión) 
 
 <img width="530" height="294" alt="image" src="https://github.com/user-attachments/assets/ac33f5c7-1563-4b1b-8726-58df26c9e2e0" />

 Luego, en Vsco code instalar una extension de "ANTLR4 grammar syntax support"
 
 Configurar las preferencias de generación de código de ANTLR: ve al menú Archivo/Preferencias/Configuración ( CTL + ,) y busca las preferencias de ANTLR. Baja hasta la sección Antlr4:Generation y edita settings.json. 
 

La configuración debe quedar del siguiente modo.
 "antlr4.generation": {
 "alternativeJar": "antlr-4.13.2-complete.jar",
 "mode": "external",
 "listeners": true,
 "visitors": true,
 "language": "JavaScript",
 "outputDir": "./generated
 
 Guarda el archivo de configuración antes de continuar (CTRL+S)

 -----INSTALACIÓN ----------
                                         
   1. Clona este repositorio:

      ------ ¿Cómo hacerlo? ----------
      
Ya teniendo todo instalado de forma correcta (Java, NodeJs, VisualStudioCode , Git).
 
                   1) Entraremos a la aplicación Visual studio Code 
                   2) Ve al menú y abrir una nueva terminal en Visual studio Code
        
<img width="1240" height="727" alt="image" src="https://github.com/user-attachments/assets/52c5c1b2-003a-42fd-9c86-05abccb4955c" />

                   3) Ingresar en la terminal : git clone https://github.com/milagrosspilar67-png/52112_.git

                   4) Se clona, por lo tanto ya deberiaspoder ver la carpeta "Mianalizador"


----- INSTRUCCIONES DE USO --------

     Veremos como ejecutar el programa: 
                    1)Tener abierta la carpeta clonada anteriormente "Mianalizador"  en Vsco code 
                    2) Ve al menú y abrir una nueva terminal en Visual studio Code
                    3) Colocar en la terminal "node index.js input ... que nosotros elijamos ( input1.correcto.txt, input2.correcto.txt, input3.incorrecto.txt, input4.incorrecto.txt)
<img width="537" height="296" alt="image" src="https://github.com/user-attachments/assets/499d252a-5813-4457-8507-8e956ba8c5e0" />



  
                                
