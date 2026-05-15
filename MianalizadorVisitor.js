// Generated from Mianalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by MianalizadorParser.

export default class MianalizadorVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by MianalizadorParser#dsl.
	visitDsl(ctx) {
	  if (!ctx.children) return "";
      return ctx.children.map(child => this.visit(child)).filter(res => res !== null).join('\n');
	}


	// Visit a parse tree produced by MianalizadorParser#regla.
	visitRegla(ctx) {
		const nombre = ctx.ID().getText();
		const bloque = this.visit(ctx.condicion());
		const tarea = this.visit(ctx.comando());
		return `regla ${nombre}{cuando ${bloque} entonces ${tarea}};`
		
	}


	// Visit a parse tree produced by MianalizadorParser#condicion.
	visitCondicion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MianalizadorParser#accesoNoAutorizado.
	visitAccesoNoAutorizado(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MianalizadorParser#multiplesIntentosFallidos.
	visitMultiplesIntentosFallidos(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MianalizadorParser#actividadSospechosa.
	visitActividadSospechosa(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MianalizadorParser#comando.
	visitComando(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MianalizadorParser#accion.
	visitAccion(ctx) {
		const nombre = this.visit(ctx.tiposaccion());
		return `accion ${nombre} {};`;
	  
	}

	// Visit a parse tree produced by MianalizadorParser#tiposaccion.
	visitTiposaccion(ctx) {
	  return this.visitChildren(ctx);
	}
	visitID(ctx){
		return ctx.getText();
	}
	visitTerminal(node){
		return node.getText();
	}
	aggregateResult(aggregate, nextResult) {
	if (!aggregate) return nextResult;
    if (nextResult) return aggregate;
    return aggregate + " " + nextResult;
	}
}