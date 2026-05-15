// Generated from c:/Users/Milagros Saez/proyecto/Mianalizador/Mianalizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MianalizadorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		REGLA=1, SI=2, ENTONCES=3, INTENTO_ACCESO=4, INTENTOS_FALLIDOS=5, ACCESO_RECURSOS=6, 
		NO_ES_ADMIN=7, AGREGAR_USUARIO=8, AGREGAR_IP=9, ACTIVAR_MONITOREO=10, 
		ABRE_LLAVE=11, CIERRA_LLAVE=12, MAYOR=13, Y=14, PUNTO_Y_COMA=15, LETRA=16, 
		NUMERO=17, WS=18;
	public static final int
		RULE_dsl = 0, RULE_regla = 1, RULE_condicion = 2, RULE_accesoNoAutorizado = 3, 
		RULE_multiplesIntentosFallidos = 4, RULE_actividadSospechosa = 5, RULE_comando = 6, 
		RULE_identificador = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"dsl", "regla", "condicion", "accesoNoAutorizado", "multiplesIntentosFallidos", 
			"actividadSospechosa", "comando", "identificador"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'regla'", "'cuando'", "'entonces'", "'intentoAccesoFueraHorario'", 
			"'intentosFallidos'", "'accesoARecursosSensibles'", "'noEsAdministrador'", 
			"'agregarUsuarioAListaNegra'", "'agregarIPAListaNegra'", "'activarMonitoreoDetallado'", 
			"'{'", "'}'", "'>'", "'y'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "REGLA", "SI", "ENTONCES", "INTENTO_ACCESO", "INTENTOS_FALLIDOS", 
			"ACCESO_RECURSOS", "NO_ES_ADMIN", "AGREGAR_USUARIO", "AGREGAR_IP", "ACTIVAR_MONITOREO", 
			"ABRE_LLAVE", "CIERRA_LLAVE", "MAYOR", "Y", "PUNTO_Y_COMA", "LETRA", 
			"NUMERO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Mianalizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MianalizadorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DslContext extends ParserRuleContext {
		public List<ReglaContext> regla() {
			return getRuleContexts(ReglaContext.class);
		}
		public ReglaContext regla(int i) {
			return getRuleContext(ReglaContext.class,i);
		}
		public DslContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dsl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterDsl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitDsl(this);
		}
	}

	public final DslContext dsl() throws RecognitionException {
		DslContext _localctx = new DslContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_dsl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(16);
				regla();
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==REGLA );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReglaContext extends ParserRuleContext {
		public TerminalNode REGLA() { return getToken(MianalizadorParser.REGLA, 0); }
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public TerminalNode ABRE_LLAVE() { return getToken(MianalizadorParser.ABRE_LLAVE, 0); }
		public TerminalNode SI() { return getToken(MianalizadorParser.SI, 0); }
		public CondicionContext condicion() {
			return getRuleContext(CondicionContext.class,0);
		}
		public TerminalNode ENTONCES() { return getToken(MianalizadorParser.ENTONCES, 0); }
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public TerminalNode CIERRA_LLAVE() { return getToken(MianalizadorParser.CIERRA_LLAVE, 0); }
		public TerminalNode PUNTO_Y_COMA() { return getToken(MianalizadorParser.PUNTO_Y_COMA, 0); }
		public ReglaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regla; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterRegla(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitRegla(this);
		}
	}

	public final ReglaContext regla() throws RecognitionException {
		ReglaContext _localctx = new ReglaContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_regla);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(REGLA);
			setState(22);
			identificador();
			setState(23);
			match(ABRE_LLAVE);
			setState(24);
			match(SI);
			setState(25);
			condicion();
			setState(26);
			match(ENTONCES);
			setState(27);
			comando();
			setState(28);
			match(CIERRA_LLAVE);
			setState(29);
			match(PUNTO_Y_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ParserRuleContext {
		public AccesoNoAutorizadoContext accesoNoAutorizado() {
			return getRuleContext(AccesoNoAutorizadoContext.class,0);
		}
		public MultiplesIntentosFallidosContext multiplesIntentosFallidos() {
			return getRuleContext(MultiplesIntentosFallidosContext.class,0);
		}
		public ActividadSospechosaContext actividadSospechosa() {
			return getRuleContext(ActividadSospechosaContext.class,0);
		}
		public CondicionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterCondicion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitCondicion(this);
		}
	}

	public final CondicionContext condicion() throws RecognitionException {
		CondicionContext _localctx = new CondicionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_condicion);
		try {
			setState(34);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTENTO_ACCESO:
				enterOuterAlt(_localctx, 1);
				{
				setState(31);
				accesoNoAutorizado();
				}
				break;
			case INTENTOS_FALLIDOS:
				enterOuterAlt(_localctx, 2);
				{
				setState(32);
				multiplesIntentosFallidos();
				}
				break;
			case ACCESO_RECURSOS:
				enterOuterAlt(_localctx, 3);
				{
				setState(33);
				actividadSospechosa();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AccesoNoAutorizadoContext extends ParserRuleContext {
		public TerminalNode INTENTO_ACCESO() { return getToken(MianalizadorParser.INTENTO_ACCESO, 0); }
		public AccesoNoAutorizadoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accesoNoAutorizado; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterAccesoNoAutorizado(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitAccesoNoAutorizado(this);
		}
	}

	public final AccesoNoAutorizadoContext accesoNoAutorizado() throws RecognitionException {
		AccesoNoAutorizadoContext _localctx = new AccesoNoAutorizadoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_accesoNoAutorizado);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			match(INTENTO_ACCESO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultiplesIntentosFallidosContext extends ParserRuleContext {
		public TerminalNode INTENTOS_FALLIDOS() { return getToken(MianalizadorParser.INTENTOS_FALLIDOS, 0); }
		public TerminalNode MAYOR() { return getToken(MianalizadorParser.MAYOR, 0); }
		public TerminalNode NUMERO() { return getToken(MianalizadorParser.NUMERO, 0); }
		public MultiplesIntentosFallidosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplesIntentosFallidos; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterMultiplesIntentosFallidos(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitMultiplesIntentosFallidos(this);
		}
	}

	public final MultiplesIntentosFallidosContext multiplesIntentosFallidos() throws RecognitionException {
		MultiplesIntentosFallidosContext _localctx = new MultiplesIntentosFallidosContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_multiplesIntentosFallidos);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(INTENTOS_FALLIDOS);
			setState(39);
			match(MAYOR);
			setState(40);
			match(NUMERO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ActividadSospechosaContext extends ParserRuleContext {
		public TerminalNode ACCESO_RECURSOS() { return getToken(MianalizadorParser.ACCESO_RECURSOS, 0); }
		public TerminalNode Y() { return getToken(MianalizadorParser.Y, 0); }
		public TerminalNode NO_ES_ADMIN() { return getToken(MianalizadorParser.NO_ES_ADMIN, 0); }
		public ActividadSospechosaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actividadSospechosa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterActividadSospechosa(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitActividadSospechosa(this);
		}
	}

	public final ActividadSospechosaContext actividadSospechosa() throws RecognitionException {
		ActividadSospechosaContext _localctx = new ActividadSospechosaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_actividadSospechosa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(ACCESO_RECURSOS);
			setState(43);
			match(Y);
			setState(44);
			match(NO_ES_ADMIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComandoContext extends ParserRuleContext {
		public TerminalNode AGREGAR_USUARIO() { return getToken(MianalizadorParser.AGREGAR_USUARIO, 0); }
		public TerminalNode AGREGAR_IP() { return getToken(MianalizadorParser.AGREGAR_IP, 0); }
		public TerminalNode ACTIVAR_MONITOREO() { return getToken(MianalizadorParser.ACTIVAR_MONITOREO, 0); }
		public ComandoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterComando(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitComando(this);
		}
	}

	public final ComandoContext comando() throws RecognitionException {
		ComandoContext _localctx = new ComandoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_comando);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1792L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentificadorContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(MianalizadorParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(MianalizadorParser.LETRA, i);
		}
		public List<TerminalNode> NUMERO() { return getTokens(MianalizadorParser.NUMERO); }
		public TerminalNode NUMERO(int i) {
			return getToken(MianalizadorParser.NUMERO, i);
		}
		public IdentificadorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identificador; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).enterIdentificador(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MianalizadorListener ) ((MianalizadorListener)listener).exitIdentificador(this);
		}
	}

	public final IdentificadorContext identificador() throws RecognitionException {
		IdentificadorContext _localctx = new IdentificadorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_identificador);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(LETRA);
			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LETRA || _la==NUMERO) {
				{
				{
				setState(49);
				_la = _input.LA(1);
				if ( !(_la==LETRA || _la==NUMERO) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(54);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u00128\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0004\u0000\u0012\b\u0000\u000b\u0000\f\u0000\u0013\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002#\b\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u00073\b\u0007"+
		"\n\u0007\f\u00076\t\u0007\u0001\u0007\u0000\u0000\b\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0000\u0002\u0001\u0000\b\n\u0001\u0000\u0010\u0011"+
		"3\u0000\u0011\u0001\u0000\u0000\u0000\u0002\u0015\u0001\u0000\u0000\u0000"+
		"\u0004\"\u0001\u0000\u0000\u0000\u0006$\u0001\u0000\u0000\u0000\b&\u0001"+
		"\u0000\u0000\u0000\n*\u0001\u0000\u0000\u0000\f.\u0001\u0000\u0000\u0000"+
		"\u000e0\u0001\u0000\u0000\u0000\u0010\u0012\u0003\u0002\u0001\u0000\u0011"+
		"\u0010\u0001\u0000\u0000\u0000\u0012\u0013\u0001\u0000\u0000\u0000\u0013"+
		"\u0011\u0001\u0000\u0000\u0000\u0013\u0014\u0001\u0000\u0000\u0000\u0014"+
		"\u0001\u0001\u0000\u0000\u0000\u0015\u0016\u0005\u0001\u0000\u0000\u0016"+
		"\u0017\u0003\u000e\u0007\u0000\u0017\u0018\u0005\u000b\u0000\u0000\u0018"+
		"\u0019\u0005\u0002\u0000\u0000\u0019\u001a\u0003\u0004\u0002\u0000\u001a"+
		"\u001b\u0005\u0003\u0000\u0000\u001b\u001c\u0003\f\u0006\u0000\u001c\u001d"+
		"\u0005\f\u0000\u0000\u001d\u001e\u0005\u000f\u0000\u0000\u001e\u0003\u0001"+
		"\u0000\u0000\u0000\u001f#\u0003\u0006\u0003\u0000 #\u0003\b\u0004\u0000"+
		"!#\u0003\n\u0005\u0000\"\u001f\u0001\u0000\u0000\u0000\" \u0001\u0000"+
		"\u0000\u0000\"!\u0001\u0000\u0000\u0000#\u0005\u0001\u0000\u0000\u0000"+
		"$%\u0005\u0004\u0000\u0000%\u0007\u0001\u0000\u0000\u0000&\'\u0005\u0005"+
		"\u0000\u0000\'(\u0005\r\u0000\u0000()\u0005\u0011\u0000\u0000)\t\u0001"+
		"\u0000\u0000\u0000*+\u0005\u0006\u0000\u0000+,\u0005\u000e\u0000\u0000"+
		",-\u0005\u0007\u0000\u0000-\u000b\u0001\u0000\u0000\u0000./\u0007\u0000"+
		"\u0000\u0000/\r\u0001\u0000\u0000\u000004\u0005\u0010\u0000\u000013\u0007"+
		"\u0001\u0000\u000021\u0001\u0000\u0000\u000036\u0001\u0000\u0000\u0000"+
		"42\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u00005\u000f\u0001\u0000"+
		"\u0000\u000064\u0001\u0000\u0000\u0000\u0003\u0013\"4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}