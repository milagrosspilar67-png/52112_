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

 <img width="386" height="312" alt="image" src="https://github.com/user-attachments/assets/195c5784-c6d7-414f-a648-d4c6995edacf" />

 Ingresar en el cmd
 . node –v (donde nos mostrá la versión) 
 . npm –v (donde nos mostrá la versión) 
 . code –v (donde nos mostrá la versión) 
 . git –v (donde nos mostrá la versión) 
 
 <img width="530" height="294" alt="image" src="https://github.com/user-attachments/assets/ac33f5c7-1563-4b1b-8726-58df26c9e2e0" />

 Luego, en Vsco code instalar una extension de "ANTLR4 grammar syntax support"
 
 Configurar las preferencias de generación de código de ANTLR: ve al menú Archivo/Preferencias/Configuración ( CTL + ,) y busca las preferencias de ANTLR. Baja hasta la sección Antlr4:Generation y edita settings.json. 
 
<img width="548" height="287" alt="image" src="https://github.com/user-attachments/assets/dd340f57-b536-4039-afb3-d8b4156b4d22" />

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

     Forma A: 
                   1) Entraremos a la aplicación Visual studio Code 
                   2) Ve al menú y abrir una nueva terminal en Visual studio Code
           <img width="1240" height="727" alt="image" src="https://github.com/user-attachments/assets/2ecd0876-0fe3-4a45-9487-7bae6616045b" />
                   3) Ingresar en la terminal : git clone 

            IMAGEN
                   4) Deberias poder ver la carpeta "Mianalizador"


    Forma B:
                  1) Abre una ventana de comandos (Cmd, PowerShell, o terminal en Linux).
                  2) Clona el proyecto desde el repositorio GitHub utilizando el siguiente comando:
                  
            Si el proyecto se clonó correctamente deberías ver el mensaje “done” en tu salida

    


  
                                
