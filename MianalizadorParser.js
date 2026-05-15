// Generated from Mianalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MianalizadorVisitor from './MianalizadorVisitor.js';

const serializedATN = [4,1,22,65,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,4,0,25,8,
0,11,0,12,0,26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,42,
8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
1,8,1,8,3,8,63,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,9,11,60,0,19,
1,0,0,0,2,28,1,0,0,0,4,41,1,0,0,0,6,43,1,0,0,0,8,45,1,0,0,0,10,49,1,0,0,
0,12,53,1,0,0,0,14,55,1,0,0,0,16,62,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,
20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,25,3,14,7,0,24,
23,1,0,0,0,25,26,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,1,1,0,0,0,28,29,
5,1,0,0,29,30,5,20,0,0,30,31,5,15,0,0,31,32,5,3,0,0,32,33,3,4,2,0,33,34,
5,4,0,0,34,35,3,12,6,0,35,36,5,16,0,0,36,37,5,19,0,0,37,3,1,0,0,0,38,42,
3,6,3,0,39,42,3,8,4,0,40,42,3,10,5,0,41,38,1,0,0,0,41,39,1,0,0,0,41,40,1,
0,0,0,42,5,1,0,0,0,43,44,5,5,0,0,44,7,1,0,0,0,45,46,5,6,0,0,46,47,5,17,0,
0,47,48,5,21,0,0,48,9,1,0,0,0,49,50,5,7,0,0,50,51,5,18,0,0,51,52,5,8,0,0,
52,11,1,0,0,0,53,54,7,0,0,0,54,13,1,0,0,0,55,56,5,2,0,0,56,57,3,16,8,0,57,
58,5,15,0,0,58,59,5,16,0,0,59,15,1,0,0,0,60,63,3,12,6,0,61,63,5,20,0,0,62,
60,1,0,0,0,62,61,1,0,0,0,63,17,1,0,0,0,4,21,26,41,62];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MianalizadorParser extends antlr4.Parser {

    static grammarFileName = "Mianalizador.g4";
    static literalNames = [ null, "'regla'", "'accion'", "'cuando'", "'entonces'", 
                            "'intentoAccesoFueraHorario'", "'intentosFallidos'", 
                            "'accesoARecursosSensibles'", "'noEsAdministrador'", 
                            "'agregarUsuarioAListaNegra'", "'agregarIPAListaNegra'", 
                            "'activarMonitoreoDetallado'", "'_'", "'-'", 
                            "'/'", "'{'", "'}'", "'>'", "'y'", "';'" ];
    static symbolicNames = [ null, "REGLA", "ACCION", "SI", "ENTONCES", 
                             "INTENTO_ACCESO", "INTENTOS_FALLIDOS", "ACCESO_RECURSOS", 
                             "NO_ES_ADMIN", "AGREGAR_USUARIO", "AGREGAR_IP", 
                             "ACTIVAR_MONITOREO", "GUION_BAJO", "GUION_MEDIO", 
                             "BARRA_DIAGONAL", "ABRE_LLAVE", "CIERRA_LLAVE", 
                             "MAYOR", "Y", "PUNTO_Y_COMA", "ID", "NUMERO", 
                             "WS" ];
    static ruleNames = [ "dsl", "regla", "condicion", "accesoNoAutorizado", 
                         "multiplesIntentosFallidos", "actividadSospechosa", 
                         "comando", "accion", "tiposaccion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MianalizadorParser.ruleNames;
        this.literalNames = MianalizadorParser.literalNames;
        this.symbolicNames = MianalizadorParser.symbolicNames;
    }



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MianalizadorParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.regla();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 24; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 23;
	            this.accion();
	            this.state = 26; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MianalizadorParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(MianalizadorParser.REGLA);
	        this.state = 29;
	        this.match(MianalizadorParser.ID);
	        this.state = 30;
	        this.match(MianalizadorParser.ABRE_LLAVE);
	        this.state = 31;
	        this.match(MianalizadorParser.SI);
	        this.state = 32;
	        this.condicion();
	        this.state = 33;
	        this.match(MianalizadorParser.ENTONCES);
	        this.state = 34;
	        this.comando();
	        this.state = 35;
	        this.match(MianalizadorParser.CIERRA_LLAVE);
	        this.state = 36;
	        this.match(MianalizadorParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MianalizadorParser.RULE_condicion);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.accesoNoAutorizado();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.multiplesIntentosFallidos();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.actividadSospechosa();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accesoNoAutorizado() {
	    let localctx = new AccesoNoAutorizadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MianalizadorParser.RULE_accesoNoAutorizado);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(MianalizadorParser.INTENTO_ACCESO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplesIntentosFallidos() {
	    let localctx = new MultiplesIntentosFallidosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MianalizadorParser.RULE_multiplesIntentosFallidos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(MianalizadorParser.INTENTOS_FALLIDOS);
	        this.state = 46;
	        this.match(MianalizadorParser.MAYOR);
	        this.state = 47;
	        this.match(MianalizadorParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actividadSospechosa() {
	    let localctx = new ActividadSospechosaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MianalizadorParser.RULE_actividadSospechosa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(MianalizadorParser.ACCESO_RECURSOS);
	        this.state = 50;
	        this.match(MianalizadorParser.Y);
	        this.state = 51;
	        this.match(MianalizadorParser.NO_ES_ADMIN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MianalizadorParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MianalizadorParser.RULE_accion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(MianalizadorParser.ACCION);
	        this.state = 56;
	        this.tiposaccion();
	        this.state = 57;
	        this.match(MianalizadorParser.ABRE_LLAVE);
	        this.state = 58;
	        this.match(MianalizadorParser.CIERRA_LLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tiposaccion() {
	    let localctx = new TiposaccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MianalizadorParser.RULE_tiposaccion);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.comando();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.match(MianalizadorParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MianalizadorParser.EOF = antlr4.Token.EOF;
MianalizadorParser.REGLA = 1;
MianalizadorParser.ACCION = 2;
MianalizadorParser.SI = 3;
MianalizadorParser.ENTONCES = 4;
MianalizadorParser.INTENTO_ACCESO = 5;
MianalizadorParser.INTENTOS_FALLIDOS = 6;
MianalizadorParser.ACCESO_RECURSOS = 7;
MianalizadorParser.NO_ES_ADMIN = 8;
MianalizadorParser.AGREGAR_USUARIO = 9;
MianalizadorParser.AGREGAR_IP = 10;
MianalizadorParser.ACTIVAR_MONITOREO = 11;
MianalizadorParser.GUION_BAJO = 12;
MianalizadorParser.GUION_MEDIO = 13;
MianalizadorParser.BARRA_DIAGONAL = 14;
MianalizadorParser.ABRE_LLAVE = 15;
MianalizadorParser.CIERRA_LLAVE = 16;
MianalizadorParser.MAYOR = 17;
MianalizadorParser.Y = 18;
MianalizadorParser.PUNTO_Y_COMA = 19;
MianalizadorParser.ID = 20;
MianalizadorParser.NUMERO = 21;
MianalizadorParser.WS = 22;

MianalizadorParser.RULE_dsl = 0;
MianalizadorParser.RULE_regla = 1;
MianalizadorParser.RULE_condicion = 2;
MianalizadorParser.RULE_accesoNoAutorizado = 3;
MianalizadorParser.RULE_multiplesIntentosFallidos = 4;
MianalizadorParser.RULE_actividadSospechosa = 5;
MianalizadorParser.RULE_comando = 6;
MianalizadorParser.RULE_accion = 7;
MianalizadorParser.RULE_tiposaccion = 8;

class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_dsl;
    }

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitDsl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_regla;
    }

	REGLA() {
	    return this.getToken(MianalizadorParser.REGLA, 0);
	};

	ID() {
	    return this.getToken(MianalizadorParser.ID, 0);
	};

	ABRE_LLAVE() {
	    return this.getToken(MianalizadorParser.ABRE_LLAVE, 0);
	};

	SI() {
	    return this.getToken(MianalizadorParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(MianalizadorParser.ENTONCES, 0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	CIERRA_LLAVE() {
	    return this.getToken(MianalizadorParser.CIERRA_LLAVE, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(MianalizadorParser.PUNTO_Y_COMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_condicion;
    }

	accesoNoAutorizado() {
	    return this.getTypedRuleContext(AccesoNoAutorizadoContext,0);
	};

	multiplesIntentosFallidos() {
	    return this.getTypedRuleContext(MultiplesIntentosFallidosContext,0);
	};

	actividadSospechosa() {
	    return this.getTypedRuleContext(ActividadSospechosaContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccesoNoAutorizadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_accesoNoAutorizado;
    }

	INTENTO_ACCESO() {
	    return this.getToken(MianalizadorParser.INTENTO_ACCESO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitAccesoNoAutorizado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplesIntentosFallidosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_multiplesIntentosFallidos;
    }

	INTENTOS_FALLIDOS() {
	    return this.getToken(MianalizadorParser.INTENTOS_FALLIDOS, 0);
	};

	MAYOR() {
	    return this.getToken(MianalizadorParser.MAYOR, 0);
	};

	NUMERO() {
	    return this.getToken(MianalizadorParser.NUMERO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitMultiplesIntentosFallidos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActividadSospechosaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_actividadSospechosa;
    }

	ACCESO_RECURSOS() {
	    return this.getToken(MianalizadorParser.ACCESO_RECURSOS, 0);
	};

	Y() {
	    return this.getToken(MianalizadorParser.Y, 0);
	};

	NO_ES_ADMIN() {
	    return this.getToken(MianalizadorParser.NO_ES_ADMIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitActividadSospechosa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_comando;
    }

	AGREGAR_USUARIO() {
	    return this.getToken(MianalizadorParser.AGREGAR_USUARIO, 0);
	};

	AGREGAR_IP() {
	    return this.getToken(MianalizadorParser.AGREGAR_IP, 0);
	};

	ACTIVAR_MONITOREO() {
	    return this.getToken(MianalizadorParser.ACTIVAR_MONITOREO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_accion;
    }

	ACCION() {
	    return this.getToken(MianalizadorParser.ACCION, 0);
	};

	tiposaccion() {
	    return this.getTypedRuleContext(TiposaccionContext,0);
	};

	ABRE_LLAVE() {
	    return this.getToken(MianalizadorParser.ABRE_LLAVE, 0);
	};

	CIERRA_LLAVE() {
	    return this.getToken(MianalizadorParser.CIERRA_LLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TiposaccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MianalizadorParser.RULE_tiposaccion;
    }

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	ID() {
	    return this.getToken(MianalizadorParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MianalizadorVisitor ) {
	        return visitor.visitTiposaccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MianalizadorParser.DslContext = DslContext; 
MianalizadorParser.ReglaContext = ReglaContext; 
MianalizadorParser.CondicionContext = CondicionContext; 
MianalizadorParser.AccesoNoAutorizadoContext = AccesoNoAutorizadoContext; 
MianalizadorParser.MultiplesIntentosFallidosContext = MultiplesIntentosFallidosContext; 
MianalizadorParser.ActividadSospechosaContext = ActividadSospechosaContext; 
MianalizadorParser.ComandoContext = ComandoContext; 
MianalizadorParser.AccionContext = AccionContext; 
MianalizadorParser.TiposaccionContext = TiposaccionContext; 
