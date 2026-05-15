import MianalizadorLexer from "./MianalizadorLexer.js";
import MianalizadorParser from "./MianalizadorParser.js";
import MianalizadorVisitor from "./MianalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main(){
 let input;
 const nombreArchivo = process.argv[2];
 if (!nombreArchivo) {
        console.error("Por favor, indica el nombre del archivo. Ejemplo: node index.js input2.txt");
        process.exit(1);
   }
 try {
    input = fs.readFileSync(nombreArchivo,'utf8');
 } catch (err){
    input = await leerCadena(); 
 }

 let inputStream = CharStreams.fromString(input);
 let lexer = new MianalizadorLexer(inputStream);  

 lexer.removeErrorListeners();

 lexer.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
    }
 });

 //Verificar si el lexer esta generando tokens
 console.log("Verificando tokens generados por el lexer...");
 const tokens = lexer.getAllTokens();

 if (tokens.length === 0) {
    console.error("No se generaron tokens. Verifica la entrada y la gramática.");
    return;
 }

 console.log("\nTabla de Tokens y Lexemas:");
 console.log("--------------------------------------------------");
 console.log("| Lexema         | Token                         |");
 console.log("--------------------------------------------------");

 for (let token of tokens) {
    // Obtener el nombre simbólico del token
    const tokenType = MianalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    const lexema = token.text; // Obtener el lexema (texto del token)
    console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
   }
    console.log("--------------------------------------------------"); 

 inputStream = CharStreams.fromString(input);
 lexer = new MianalizadorLexer(inputStream);

 let tokenStream = new CommonTokenStream(lexer);
 let parser = new MianalizadorParser(tokenStream);

 let tree = parser.dsl();  /* "dls" Debe ser  el axioma definido en el archivo .g4*/

 // Verificar si se produjeron errores sintácticos */
 if (parser.syntaxErrorsCount > 0) {
   console.error("\nSe encontraron errores de sintáxis en el código.");
 } else {
    console.log("\nCódigo válido.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`\nÁrbol de derivación:\n ${cadena_tree}`);

    /* Traducir el codigo a javascript usando VISITOR*/
    const visitor = new MianalizadorVisitor();
    const codigo_traducido = visitor.visit(tree);
    const finalCode = Array.isArray(codigo_traducido) ? codigo_traducido.join('') : codigo_traducido;
    console.log("\nTraducción a JavaScript:\n\n" + codigo_traducido);        
    try {        
      console.log("\nEjecución existosa");       
    }catch (err) {
      console.error("\nError al ejecutar el código traducido: ", err);
    }
 }
}
main();