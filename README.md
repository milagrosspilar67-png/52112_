/>README.md 

En esta oportunidad veremos como actúa un ANALIZADOR DE EXPRESIONES ARITMÉTICAS CON ANTLR4 Y JAVASCRIPT, utilizando cierta gramática asignada por profesores de la Universidad Tecnologica Nacional.

  ------A continuación-----

1.REQUERIMIENTOS PREVIOS A SU INSTALACIÓN.

2.INSTALACIÓN.

3.INSTRUCCIONES DE USO.

1-------REQUERIMIENTOS PREVIOS A SU INSTALACIÓN -------
                              
                                
        1.Tener JRE (Java Runtime Environment) instalado en su computadora. En caso de no contar con Java preinstalado puede descargarlo e instalarlo desdehttps://www.java.com/en/download/. Se requiere Java 1.8 o superior.
        2.Descargar e Instalar Node.js (LTS) desde la página oficial https://nodejs.org/es. Se requiereNode 16 o superior.
        3.Descargar e instalar VS Code (IDE Visual Studio Code) desde la página oficial https://code.visualstudio.com/. VS Code será el entorno de desarrollo que utilizaremos para trabajar sobre el código de nuestro caso.
        IMPORTANTE: durante la instalación de VS Code, habilita la opción "Add to PATH" para que puedas abrir VS Code desde una terminal con code.
        4.Descargar e instalar Git desde la página oficial https://git-scm.com/downloads. GIT es el controlador de versiones de código que necesitarás para obtener el proyecto ejemplo.
      
a) Para verificar que este instalado todo de forma correcta, puedes ejecutar los siguientes comandos en una terminal (Cmd, PowerShell, o terminal en Linux). Una forma de ingresar al cmd es clickear el teclado "WINDOWS + R"

 -----INGRESAMOS EN EL cmd----
 
node - v 
npm -v 
code -v 
git -v 

<img width="392" height="215" alt="image" src="https://github.com/user-attachments/assets/77ea0417-5e72-4007-a685-eeb5b0d8806d" />

 

b)Luego, abrir Visual studio code e instalar una extensión de "ANTLR4 grammar syntax support".

 - Instala la extensión de ANTLR4 para Visual Studio Code: ve al menú Ver/Extensiones (CTRL+ SHIFT + X), busca la extensión ANTLR4 grammar syntax support , selecciónala y dale clic a Instalar.

<img width="503" height="282" alt="image" src="https://github.com/user-attachments/assets/3d2e88cb-0ab1-4b64-8d07-6306718bdd76" />

 
b.2)Configurar las preferencias de generación de código de ANTLR: ve al menú Archivo/Preferencias/Configuración ( CTL + ,) y busca las preferencias de ANTLR. Baja hasta la sección Antlr4:Generation y edita settings.json. 

<img width="548" height="287" alt="image" src="https://github.com/user-attachments/assets/956b9c47-d691-46e9-ae86-5e0ca48f8b0d" />

b.3)Cambiar la configuración del "ANTLR4 grammar syntax support", quedando así del siguiente modo:

 "antlr4.generation": {
 "alternativeJar": "antlr-4.13.2-complete.jar",
 "mode": "external",
 "listeners": true,
 "visitors": true,
 "language": "JavaScript",
 "outputDir": "./generated
 
IMPORTANTE: Guarda el archivo de configuración antes de continuar (CTRL+S).

2--------INSTALACIÓN -------------
                                         
   1. Clona este repositorio:

      ------ ¿Cómo hacerlo? ----------
      
Ya teniendo todo instalado de forma correcta (Java, NodeJs, VisualStudioCode , Git).
 
                   1) Entraremos a la aplicación Visual studio Code.
                   2) Ve al menú y abrir una nueva terminal en Visual studio Code (Ctrl + Mayús + ñ)
        
<img width="1240" height="727" alt="image" src="https://github.com/user-attachments/assets/52c5c1b2-003a-42fd-9c86-05abccb4955c" />

                   3) Escribir en la terminal: git clone https://github.com/milagrosspilar67-png/52112_.git

<img width="449" height="305" alt="image" src="https://github.com/user-attachments/assets/f8d1af85-4582-40dc-ad71-ff0ee55117ec" />


                   4) Automaticamente se clona, por lo tanto nos abre de vuelta el Visual Studio code con la carpeta "Mianalizador" .
  
  <img width="449" height="317" alt="image" src="https://github.com/user-attachments/assets/47697fad-2270-427c-829a-0c8ba93a0c52" />



3----- INSTRUCCIONES DE USO --------

     Veremos como ejecutarlo:
                    1)Tener abierta la carpeta clonada anteriormente "Mianalizador"  en Visual Studio code. 
                    2) Ve al menú y abrir una nueva terminal en Visual studio Code (Ctrl + Mayús + ñ).
                    3) Colocar en la terminal node index.js input1.correcto.txt 
<img width="537" height="296" alt="image" src="https://github.com/user-attachments/assets/499d252a-5813-4457-8507-8e956ba8c5e0" />

ACLARACIÓN: En ese caso yo elegí el input1.correcto.txt pero puedo elegir que se ejecute:input2.correcto.txt, input3.incorrecto.txt, input4.incorrecto.txt). Por lo que sólo deberia cambiar el nombre del input.txt .
                    
                    -------- EJECUCIÓN CON input1.correcto.txt --------

<img width="530" height="291" alt="image" src="https://github.com/user-attachments/assets/da8dc724-fa20-4f9a-85ac-f0ac443a144f" />

                    ------EJECUCIÓN CON input3.incorrecto.txt -------

<img width="507" height="288" alt="image" src="https://github.com/user-attachments/assets/fc0dbfab-362b-4815-b8c7-6329a9cad51d" />




                    



  
                                
