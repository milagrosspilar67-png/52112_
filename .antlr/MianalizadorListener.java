// Generated from c:/Users/Milagros Saez/proyecto/Mianalizador/Mianalizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MianalizadorParser}.
 */
public interface MianalizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#dsl}.
	 * @param ctx the parse tree
	 */
	void enterDsl(MianalizadorParser.DslContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#dsl}.
	 * @param ctx the parse tree
	 */
	void exitDsl(MianalizadorParser.DslContext ctx);
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#regla}.
	 * @param ctx the parse tree
	 */
	void enterRegla(MianalizadorParser.ReglaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#regla}.
	 * @param ctx the parse tree
	 */
	void exitRegla(MianalizadorParser.ReglaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(MianalizadorParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(MianalizadorParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#accesoNoAutorizado}.
	 * @param ctx the parse tree
	 */
	void enterAccesoNoAutorizado(MianalizadorParser.AccesoNoAutorizadoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#accesoNoAutorizado}.
	 * @param ctx the parse tree
	 */
	void exitAccesoNoAutorizado(MianalizadorParser.AccesoNoAutorizadoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#multiplesIntentosFallidos}.
	 * @param ctx the parse tree
	 */
	void enterMultiplesIntentosFallidos(MianalizadorParser.MultiplesIntentosFallidosContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#multiplesIntentosFallidos}.
	 * @param ctx the parse tree
	 */
	void exitMultiplesIntentosFallidos(MianalizadorParser.MultiplesIntentosFallidosContext ctx);
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#actividadSospechosa}.
	 * @param ctx the parse tree
	 */
	void enterActividadSospechosa(MianalizadorParser.ActividadSospechosaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#actividadSospechosa}.
	 * @param ctx the parse tree
	 */
	void exitActividadSospechosa(MianalizadorParser.ActividadSospechosaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#comando}.
	 * @param ctx the parse tree
	 */
	void enterComando(MianalizadorParser.ComandoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#comando}.
	 * @param ctx the parse tree
	 */
	void exitComando(MianalizadorParser.ComandoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MianalizadorParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(MianalizadorParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MianalizadorParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(MianalizadorParser.IdentificadorContext ctx);
}