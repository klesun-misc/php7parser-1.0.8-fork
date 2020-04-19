'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const lexer_1 = require("./lexer");
const phrase_1 = require("./phrase");
var Parser;
(function (Parser) {
    function precedenceAssociativityTuple(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.AsteriskAsterisk:
                return [48, 2];
            case lexer_1.TokenType.PlusPlus:
                return [47, 2];
            case lexer_1.TokenType.MinusMinus:
                return [47, 2];
            case lexer_1.TokenType.Tilde:
                return [47, 2];
            case lexer_1.TokenType.IntegerCast:
                return [47, 2];
            case lexer_1.TokenType.FloatCast:
                return [47, 2];
            case lexer_1.TokenType.StringCast:
                return [47, 2];
            case lexer_1.TokenType.ArrayCast:
                return [47, 2];
            case lexer_1.TokenType.ObjectCast:
                return [47, 2];
            case lexer_1.TokenType.BooleanCast:
                return [47, 2];
            case lexer_1.TokenType.UnsetCast:
                return [47, 2];
            case lexer_1.TokenType.AtSymbol:
                return [47, 2];
            case lexer_1.TokenType.InstanceOf:
                return [46, 0];
            case lexer_1.TokenType.Exclamation:
                return [45, 2];
            case lexer_1.TokenType.Asterisk:
                return [44, 1];
            case lexer_1.TokenType.ForwardSlash:
                return [44, 1];
            case lexer_1.TokenType.Percent:
                return [44, 1];
            case lexer_1.TokenType.Plus:
                return [43, 1];
            case lexer_1.TokenType.Minus:
                return [43, 1];
            case lexer_1.TokenType.Dot:
                return [43, 1];
            case lexer_1.TokenType.LessThanLessThan:
                return [42, 1];
            case lexer_1.TokenType.GreaterThanGreaterThan:
                return [42, 1];
            case lexer_1.TokenType.LessThan:
                return [41, 0];
            case lexer_1.TokenType.GreaterThan:
                return [41, 0];
            case lexer_1.TokenType.LessThanEquals:
                return [41, 0];
            case lexer_1.TokenType.GreaterThanEquals:
                return [41, 0];
            case lexer_1.TokenType.EqualsEquals:
                return [40, 0];
            case lexer_1.TokenType.EqualsEqualsEquals:
                return [40, 0];
            case lexer_1.TokenType.ExclamationEquals:
                return [40, 0];
            case lexer_1.TokenType.ExclamationEqualsEquals:
                return [40, 0];
            case lexer_1.TokenType.Spaceship:
                return [40, 0];
            case lexer_1.TokenType.Ampersand:
                return [39, 1];
            case lexer_1.TokenType.Caret:
                return [38, 1];
            case lexer_1.TokenType.Bar:
                return [37, 1];
            case lexer_1.TokenType.AmpersandAmpersand:
                return [36, 1];
            case lexer_1.TokenType.BarBar:
                return [35, 1];
            case lexer_1.TokenType.QuestionQuestion:
                return [34, 2];
            case lexer_1.TokenType.Question:
                return [33, 1];
            case lexer_1.TokenType.Equals:
                return [32, 2];
            case lexer_1.TokenType.DotEquals:
                return [32, 2];
            case lexer_1.TokenType.PlusEquals:
                return [32, 2];
            case lexer_1.TokenType.MinusEquals:
                return [32, 2];
            case lexer_1.TokenType.AsteriskEquals:
                return [32, 2];
            case lexer_1.TokenType.ForwardslashEquals:
                return [32, 2];
            case lexer_1.TokenType.PercentEquals:
                return [32, 2];
            case lexer_1.TokenType.AsteriskAsteriskEquals:
                return [32, 2];
            case lexer_1.TokenType.AmpersandEquals:
                return [32, 2];
            case lexer_1.TokenType.BarEquals:
                return [32, 2];
            case lexer_1.TokenType.CaretEquals:
                return [32, 2];
            case lexer_1.TokenType.LessThanLessThanEquals:
                return [32, 2];
            case lexer_1.TokenType.GreaterThanGreaterThanEquals:
                return [32, 2];
            case lexer_1.TokenType.And:
                return [31, 1];
            case lexer_1.TokenType.Xor:
                return [30, 1];
            case lexer_1.TokenType.Or:
                return [29, 1];
            default:
                throwUnexpectedTokenError(t);
        }
    }
    const statementListRecoverSet = [
        lexer_1.TokenType.Use,
        lexer_1.TokenType.HaltCompiler,
        lexer_1.TokenType.Const,
        lexer_1.TokenType.Function,
        lexer_1.TokenType.Class,
        lexer_1.TokenType.Abstract,
        lexer_1.TokenType.Final,
        lexer_1.TokenType.Trait,
        lexer_1.TokenType.Interface,
        lexer_1.TokenType.OpenBrace,
        lexer_1.TokenType.If,
        lexer_1.TokenType.While,
        lexer_1.TokenType.Do,
        lexer_1.TokenType.For,
        lexer_1.TokenType.Switch,
        lexer_1.TokenType.Break,
        lexer_1.TokenType.Continue,
        lexer_1.TokenType.Return,
        lexer_1.TokenType.Global,
        lexer_1.TokenType.Static,
        lexer_1.TokenType.Echo,
        lexer_1.TokenType.Unset,
        lexer_1.TokenType.ForEach,
        lexer_1.TokenType.Declare,
        lexer_1.TokenType.Try,
        lexer_1.TokenType.Throw,
        lexer_1.TokenType.Goto,
        lexer_1.TokenType.Semicolon,
        lexer_1.TokenType.CloseTag,
        lexer_1.TokenType.OpenTagEcho,
        lexer_1.TokenType.Text,
        lexer_1.TokenType.OpenTag
    ];
    const classMemberDeclarationListRecoverSet = [
        lexer_1.TokenType.Public,
        lexer_1.TokenType.Protected,
        lexer_1.TokenType.Private,
        lexer_1.TokenType.Static,
        lexer_1.TokenType.Abstract,
        lexer_1.TokenType.Final,
        lexer_1.TokenType.Function,
        lexer_1.TokenType.Var,
        lexer_1.TokenType.Const,
        lexer_1.TokenType.Use
    ];
    const encapsulatedVariableListRecoverSet = [
        lexer_1.TokenType.EncapsulatedAndWhitespace,
        lexer_1.TokenType.DollarCurlyOpen,
        lexer_1.TokenType.CurlyOpen
    ];
    function binaryOpToPhraseType(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Question:
                return phrase_1.PhraseType.TernaryExpression;
            case lexer_1.TokenType.Dot:
            case lexer_1.TokenType.Plus:
            case lexer_1.TokenType.Minus:
                return phrase_1.PhraseType.AdditiveExpression;
            case lexer_1.TokenType.Bar:
            case lexer_1.TokenType.Ampersand:
            case lexer_1.TokenType.Caret:
                return phrase_1.PhraseType.BitwiseExpression;
            case lexer_1.TokenType.Asterisk:
            case lexer_1.TokenType.ForwardSlash:
            case lexer_1.TokenType.Percent:
                return phrase_1.PhraseType.MultiplicativeExpression;
            case lexer_1.TokenType.AsteriskAsterisk:
                return phrase_1.PhraseType.ExponentiationExpression;
            case lexer_1.TokenType.LessThanLessThan:
            case lexer_1.TokenType.GreaterThanGreaterThan:
                return phrase_1.PhraseType.ShiftExpression;
            case lexer_1.TokenType.AmpersandAmpersand:
            case lexer_1.TokenType.BarBar:
            case lexer_1.TokenType.And:
            case lexer_1.TokenType.Or:
            case lexer_1.TokenType.Xor:
                return phrase_1.PhraseType.LogicalExpression;
            case lexer_1.TokenType.EqualsEqualsEquals:
            case lexer_1.TokenType.ExclamationEqualsEquals:
            case lexer_1.TokenType.EqualsEquals:
            case lexer_1.TokenType.ExclamationEquals:
                return phrase_1.PhraseType.EqualityExpression;
            case lexer_1.TokenType.LessThan:
            case lexer_1.TokenType.LessThanEquals:
            case lexer_1.TokenType.GreaterThan:
            case lexer_1.TokenType.GreaterThanEquals:
            case lexer_1.TokenType.Spaceship:
                return phrase_1.PhraseType.RelationalExpression;
            case lexer_1.TokenType.QuestionQuestion:
                return phrase_1.PhraseType.CoalesceExpression;
            case lexer_1.TokenType.Equals:
                return phrase_1.PhraseType.SimpleAssignmentExpression;
            case lexer_1.TokenType.PlusEquals:
            case lexer_1.TokenType.MinusEquals:
            case lexer_1.TokenType.AsteriskEquals:
            case lexer_1.TokenType.AsteriskAsteriskEquals:
            case lexer_1.TokenType.ForwardslashEquals:
            case lexer_1.TokenType.DotEquals:
            case lexer_1.TokenType.PercentEquals:
            case lexer_1.TokenType.AmpersandEquals:
            case lexer_1.TokenType.BarEquals:
            case lexer_1.TokenType.CaretEquals:
            case lexer_1.TokenType.LessThanLessThanEquals:
            case lexer_1.TokenType.GreaterThanGreaterThanEquals:
                return phrase_1.PhraseType.CompoundAssignmentExpression;
            case lexer_1.TokenType.InstanceOf:
                return phrase_1.PhraseType.InstanceOfExpression;
            default:
                return phrase_1.PhraseType.Unknown;
        }
    }
    var tokenBuffer;
    var phraseStack;
    var errorPhrase;
    var recoverSetStack;
    function parse(text) {
        init(text);
        let stmtList = statementList([lexer_1.TokenType.EndOfFile]);
        hidden(stmtList);
        return stmtList;
    }
    Parser.parse = parse;
    function init(text, lexerModeStack) {
        lexer_1.Lexer.setInput(text, lexerModeStack);
        phraseStack = [];
        tokenBuffer = [];
        recoverSetStack = [];
        errorPhrase = null;
    }
    function start(phraseType, dontPushHiddenToParent) {
        if (!dontPushHiddenToParent) {
            hidden();
        }
        let p = {
            phraseType: phraseType ? phraseType : phrase_1.PhraseType.Unknown,
            children: []
        };
        phraseStack.push(p);
        return p;
    }
    function end() {
        return phraseStack.pop();
    }
    function hidden(p) {
        if (!p) {
            p = phraseStack[phraseStack.length - 1];
        }
        let t;
        while (true) {
            t = tokenBuffer.length ? tokenBuffer.shift() : lexer_1.Lexer.lex();
            if (t.tokenType < lexer_1.TokenType.Comment) {
                tokenBuffer.unshift(t);
                break;
            }
            else {
                p.children.push(t);
            }
        }
    }
    function optional(tokenType) {
        if (tokenType === peek().tokenType) {
            errorPhrase = null;
            return next();
        }
        else {
            return null;
        }
    }
    function optionalOneOf(tokenTypes) {
        if (tokenTypes.indexOf(peek().tokenType) >= 0) {
            errorPhrase = null;
            return next();
        }
        else {
            return null;
        }
    }
    function next(doNotPush) {
        let t = tokenBuffer.length ? tokenBuffer.shift() : lexer_1.Lexer.lex();
        if (t.tokenType === lexer_1.TokenType.EndOfFile) {
            return t;
        }
        if (t.tokenType >= lexer_1.TokenType.Comment) {
            phraseStack[phraseStack.length - 1].children.push(t);
            return next(doNotPush);
        }
        else if (!doNotPush) {
            phraseStack[phraseStack.length - 1].children.push(t);
        }
        return t;
    }
    function expect(tokenType) {
        let t = peek();
        if (t.tokenType === tokenType) {
            errorPhrase = null;
            return next();
        }
        else if (tokenType === lexer_1.TokenType.Semicolon && t.tokenType === lexer_1.TokenType.CloseTag) {
            return t;
        }
        else {
            error(tokenType);
            if (peek(1).tokenType === tokenType) {
                let predicate = (x) => { return x.tokenType === tokenType; };
                skip(predicate);
                errorPhrase = null;
                return next();
            }
            return null;
        }
    }
    function expectOneOf(tokenTypes) {
        let t = peek();
        if (tokenTypes.indexOf(t.tokenType) >= 0) {
            errorPhrase = null;
            return next();
        }
        else if (tokenTypes.indexOf(lexer_1.TokenType.Semicolon) >= 0 && t.tokenType === lexer_1.TokenType.CloseTag) {
            return t;
        }
        else {
            error();
            if (tokenTypes.indexOf(peek(1).tokenType) >= 0) {
                let predicate = (x) => { return tokenTypes.indexOf(x.tokenType) >= 0; };
                skip(predicate);
                errorPhrase = null;
                return next();
            }
            return null;
        }
    }
    function peek(n) {
        let k = n ? n + 1 : 1;
        let bufferPos = -1;
        let t;
        while (true) {
            ++bufferPos;
            if (bufferPos === tokenBuffer.length) {
                tokenBuffer.push(lexer_1.Lexer.lex());
            }
            t = tokenBuffer[bufferPos];
            if (t.tokenType < lexer_1.TokenType.Comment) {
                --k;
            }
            if (t.tokenType === lexer_1.TokenType.EndOfFile || k === 0) {
                break;
            }
        }
        return t;
    }
    function skip(predicate) {
        let t;
        while (true) {
            t = tokenBuffer.length ? tokenBuffer.shift() : lexer_1.Lexer.lex();
            if (predicate(t) || t.tokenType === lexer_1.TokenType.EndOfFile) {
                tokenBuffer.unshift(t);
                break;
            }
            else {
                errorPhrase.children.push(t);
            }
        }
    }
    function error(expected) {
        if (errorPhrase) {
            return;
        }
        errorPhrase = {
            phraseType: phrase_1.PhraseType.Error,
            children: [],
            unexpected: peek()
        };
        if (expected) {
            errorPhrase.expected = expected;
        }
        phraseStack[phraseStack.length - 1].children.push(errorPhrase);
    }
    function list(phraseType, elementFunction, elementStartPredicate, breakOn, recoverSet) {
        let p = start(phraseType);
        let t;
        let recoveryAttempted = false;
        let listRecoverSet = recoverSet ? recoverSet.slice(0) : [];
        if (breakOn) {
            Array.prototype.push.apply(listRecoverSet, breakOn);
        }
        recoverSetStack.push(listRecoverSet);
        while (true) {
            t = peek();
            if (elementStartPredicate(t)) {
                recoveryAttempted = false;
                p.children.push(elementFunction());
            }
            else if (!breakOn || breakOn.indexOf(t.tokenType) >= 0 || recoveryAttempted) {
                break;
            }
            else {
                error();
                t = peek(1);
                if (elementStartPredicate(t) || breakOn.indexOf(t.tokenType) >= 0) {
                    skip((x) => { return x === t; });
                }
                else {
                    defaultSyncStrategy();
                }
                recoveryAttempted = true;
            }
        }
        recoverSetStack.pop();
        return end();
    }
    function defaultSyncStrategy() {
        let mergedRecoverTokenTypeArray = [];
        for (let n = recoverSetStack.length - 1; n >= 0; --n) {
            Array.prototype.push.apply(mergedRecoverTokenTypeArray, recoverSetStack[n]);
        }
        let mergedRecoverTokenTypeSet = new Set(mergedRecoverTokenTypeArray);
        let predicate = (x) => { return mergedRecoverTokenTypeSet.has(x.tokenType); };
        skip(predicate);
    }
    function statementList(breakOn) {
        return list(phrase_1.PhraseType.StatementList, statement, isStatementStart, breakOn, statementListRecoverSet);
    }
    function constDeclaration() {
        let p = start(phrase_1.PhraseType.ConstDeclaration);
        next();
        p.children.push(delimitedList(phrase_1.PhraseType.ConstElementList, constElement, isConstElementStartToken, lexer_1.TokenType.Comma, [lexer_1.TokenType.Semicolon]));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function isClassConstElementStartToken(t) {
        return t.tokenType === lexer_1.TokenType.Name || isSemiReservedToken(t);
    }
    function isConstElementStartToken(t) {
        return t.tokenType === lexer_1.TokenType.Name;
    }
    function constElement() {
        let p = start(phrase_1.PhraseType.ConstElement);
        expect(lexer_1.TokenType.Name);
        expect(lexer_1.TokenType.Equals);
        p.children.push(expression(0));
        return end();
    }
    function expression(minPrecedence) {
        let precedence;
        let associativity;
        let op;
        let lhs = expressionAtom();
        let p;
        let rhs;
        let binaryPhraseType;
        while (true) {
            op = peek();
            binaryPhraseType = binaryOpToPhraseType(op);
            if (binaryPhraseType === phrase_1.PhraseType.Unknown) {
                break;
            }
            [precedence, associativity] = precedenceAssociativityTuple(op);
            if (precedence < minPrecedence) {
                break;
            }
            if (associativity === 1) {
                ++precedence;
            }
            if (binaryPhraseType === phrase_1.PhraseType.TernaryExpression) {
                lhs = ternaryExpression(lhs);
                continue;
            }
            p = start(binaryPhraseType, true);
            p.children.push(lhs);
            next();
            if (binaryPhraseType === phrase_1.PhraseType.InstanceOfExpression) {
                p.children.push(typeDesignator(phrase_1.PhraseType.InstanceofTypeDesignator));
            }
            else {
                if (binaryPhraseType === phrase_1.PhraseType.SimpleAssignmentExpression &&
                    peek().tokenType === lexer_1.TokenType.Ampersand) {
                    next();
                    p.phraseType = phrase_1.PhraseType.ByRefAssignmentExpression;
                }
                p.children.push(expression(precedence));
            }
            lhs = end();
        }
        return lhs;
    }
    function ternaryExpression(testExpr) {
        let p = start(phrase_1.PhraseType.TernaryExpression, true);
        p.children.push(testExpr);
        next();
        if (optional(lexer_1.TokenType.Colon)) {
            p.children.push(expression(0));
        }
        else {
            p.children.push(expression(0));
            expect(lexer_1.TokenType.Colon);
            p.children.push(expression(0));
        }
        return end();
    }
    function variableOrExpression() {
        let part = variableAtom();
        let isVariable = part.phraseType === phrase_1.PhraseType.SimpleVariable;
        if (isDereferenceOperator(peek())) {
            part = variable(part);
            isVariable = true;
        }
        else {
            switch (part.phraseType) {
                case phrase_1.PhraseType.QualifiedName:
                case phrase_1.PhraseType.FullyQualifiedName:
                case phrase_1.PhraseType.RelativeQualifiedName:
                    part = constantAccessExpression(part);
                    break;
                default:
                    break;
            }
        }
        if (!isVariable) {
            return part;
        }
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.PlusPlus) {
            return postfixExpression(phrase_1.PhraseType.PostfixIncrementExpression, part);
        }
        else if (t.tokenType === lexer_1.TokenType.MinusMinus) {
            return postfixExpression(phrase_1.PhraseType.PostfixDecrementExpression, part);
        }
        else {
            return part;
        }
    }
    function constantAccessExpression(qName) {
        let p = start(phrase_1.PhraseType.ConstantAccessExpression, true);
        p.children.push(qName);
        return end();
    }
    function postfixExpression(phraseType, variableNode) {
        let p = start(phraseType, true);
        p.children.push(variableNode);
        next();
        return end();
    }
    function isDereferenceOperator(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.OpenBracket:
            case lexer_1.TokenType.OpenBrace:
            case lexer_1.TokenType.Arrow:
            case lexer_1.TokenType.OpenParenthesis:
            case lexer_1.TokenType.ColonColon:
                return true;
            default:
                return false;
        }
    }
    function expressionAtom() {
        let t = peek();
        switch (t.tokenType) {
            case lexer_1.TokenType.Static:
                if (peek(1).tokenType === lexer_1.TokenType.Function) {
                    return anonymousFunctionCreationExpression();
                }
                else {
                    return variableOrExpression();
                }
            case lexer_1.TokenType.StringLiteral:
                if (isDereferenceOperator(peek(1))) {
                    return variableOrExpression();
                }
                else {
                    return next(true);
                }
            case lexer_1.TokenType.VariableName:
            case lexer_1.TokenType.Dollar:
            case lexer_1.TokenType.Array:
            case lexer_1.TokenType.OpenBracket:
            case lexer_1.TokenType.Backslash:
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.OpenParenthesis:
                return variableOrExpression();
            case lexer_1.TokenType.PlusPlus:
                return unaryExpression(phrase_1.PhraseType.PrefixIncrementExpression);
            case lexer_1.TokenType.MinusMinus:
                return unaryExpression(phrase_1.PhraseType.PrefixDecrementExpression);
            case lexer_1.TokenType.Plus:
            case lexer_1.TokenType.Minus:
            case lexer_1.TokenType.Exclamation:
            case lexer_1.TokenType.Tilde:
                return unaryExpression(phrase_1.PhraseType.UnaryOpExpression);
            case lexer_1.TokenType.AtSymbol:
                return unaryExpression(phrase_1.PhraseType.ErrorControlExpression);
            case lexer_1.TokenType.IntegerCast:
            case lexer_1.TokenType.FloatCast:
            case lexer_1.TokenType.StringCast:
            case lexer_1.TokenType.ArrayCast:
            case lexer_1.TokenType.ObjectCast:
            case lexer_1.TokenType.BooleanCast:
            case lexer_1.TokenType.UnsetCast:
                return unaryExpression(phrase_1.PhraseType.CastExpression);
            case lexer_1.TokenType.List:
                return listIntrinsic();
            case lexer_1.TokenType.Clone:
                return cloneExpression();
            case lexer_1.TokenType.New:
                return objectCreationExpression();
            case lexer_1.TokenType.FloatingLiteral:
            case lexer_1.TokenType.IntegerLiteral:
            case lexer_1.TokenType.LineConstant:
            case lexer_1.TokenType.FileConstant:
            case lexer_1.TokenType.DirectoryConstant:
            case lexer_1.TokenType.TraitConstant:
            case lexer_1.TokenType.MethodConstant:
            case lexer_1.TokenType.FunctionConstant:
            case lexer_1.TokenType.NamespaceConstant:
            case lexer_1.TokenType.ClassConstant:
                return next(true);
            case lexer_1.TokenType.StartHeredoc:
                return heredocStringLiteral();
            case lexer_1.TokenType.DoubleQuote:
                return doubleQuotedStringLiteral();
            case lexer_1.TokenType.Backtick:
                return shellCommandExpression();
            case lexer_1.TokenType.Print:
                return printIntrinsic();
            case lexer_1.TokenType.Yield:
                return yieldExpression();
            case lexer_1.TokenType.YieldFrom:
                return yieldFromExpression();
            case lexer_1.TokenType.Function:
                return anonymousFunctionCreationExpression();
            case lexer_1.TokenType.Include:
                return scriptInclusion(phrase_1.PhraseType.IncludeExpression);
            case lexer_1.TokenType.IncludeOnce:
                return scriptInclusion(phrase_1.PhraseType.IncludeOnceExpression);
            case lexer_1.TokenType.Require:
                return scriptInclusion(phrase_1.PhraseType.RequireExpression);
            case lexer_1.TokenType.RequireOnce:
                return scriptInclusion(phrase_1.PhraseType.RequireOnceExpression);
            case lexer_1.TokenType.Eval:
                return evalIntrinsic();
            case lexer_1.TokenType.Empty:
                return emptyIntrinsic();
            case lexer_1.TokenType.Exit:
                return exitIntrinsic();
            case lexer_1.TokenType.Isset:
                return issetIntrinsic();
            default:
                start(phrase_1.PhraseType.ErrorExpression);
                error();
                return end();
        }
    }
    function exitIntrinsic() {
        let p = start(phrase_1.PhraseType.ExitIntrinsic);
        next();
        if (optional(lexer_1.TokenType.OpenParenthesis)) {
            if (isExpressionStart(peek())) {
                p.children.push(expression(0));
            }
            expect(lexer_1.TokenType.CloseParenthesis);
        }
        return end();
    }
    function issetIntrinsic() {
        let p = start(phrase_1.PhraseType.IssetIntrinsic);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(variableList([lexer_1.TokenType.CloseParenthesis]));
        expect(lexer_1.TokenType.CloseParenthesis);
        return end();
    }
    function emptyIntrinsic() {
        let p = start(phrase_1.PhraseType.EmptyIntrinsic);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        return end();
    }
    function evalIntrinsic() {
        let p = start(phrase_1.PhraseType.EvalIntrinsic);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        return end();
    }
    function scriptInclusion(phraseType) {
        let p = start(phraseType);
        next();
        p.children.push(expression(0));
        return end();
    }
    function printIntrinsic() {
        let p = start(phrase_1.PhraseType.PrintIntrinsic);
        next();
        p.children.push(expression(0));
        return end();
    }
    function yieldFromExpression() {
        let p = start(phrase_1.PhraseType.YieldFromExpression);
        next();
        p.children.push(expression(0));
        return end();
    }
    function yieldExpression() {
        let p = start(phrase_1.PhraseType.YieldExpression);
        next();
        if (!isExpressionStart(peek())) {
            return end();
        }
        let keyOrValue = expression(0);
        p.children.push(keyOrValue);
        if (optional(lexer_1.TokenType.FatArrow)) {
            p.children.push(expression(0));
        }
        return end();
    }
    function shellCommandExpression() {
        let p = start(phrase_1.PhraseType.ShellCommandExpression);
        next();
        p.children.push(encapsulatedVariableList(lexer_1.TokenType.Backtick));
        expect(lexer_1.TokenType.Backtick);
        return end();
    }
    function doubleQuotedStringLiteral() {
        let p = start(phrase_1.PhraseType.DoubleQuotedStringLiteral);
        next();
        p.children.push(encapsulatedVariableList(lexer_1.TokenType.DoubleQuote));
        expect(lexer_1.TokenType.DoubleQuote);
        return end();
    }
    function encapsulatedVariableList(breakOn) {
        return list(phrase_1.PhraseType.EncapsulatedVariableList, encapsulatedVariable, isEncapsulatedVariableStart, [breakOn], encapsulatedVariableListRecoverSet);
    }
    function isEncapsulatedVariableStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.EncapsulatedAndWhitespace:
            case lexer_1.TokenType.VariableName:
            case lexer_1.TokenType.DollarCurlyOpen:
            case lexer_1.TokenType.CurlyOpen:
                return true;
            default:
                return false;
        }
    }
    function encapsulatedVariable() {
        switch (peek().tokenType) {
            case lexer_1.TokenType.EncapsulatedAndWhitespace:
                return next(true);
            case lexer_1.TokenType.VariableName:
                let t = peek(1);
                if (t.tokenType === lexer_1.TokenType.OpenBracket) {
                    return encapsulatedDimension();
                }
                else if (t.tokenType === lexer_1.TokenType.Arrow) {
                    return encapsulatedProperty();
                }
                else {
                    return simpleVariable();
                }
            case lexer_1.TokenType.DollarCurlyOpen:
                return dollarCurlyOpenEncapsulatedVariable();
            case lexer_1.TokenType.CurlyOpen:
                return curlyOpenEncapsulatedVariable();
            default:
                throwUnexpectedTokenError(peek());
        }
    }
    function curlyOpenEncapsulatedVariable() {
        let p = start(phrase_1.PhraseType.EncapsulatedVariable);
        next();
        p.children.push(variable(variableAtom()));
        expect(lexer_1.TokenType.CloseBrace);
        return end();
    }
    function dollarCurlyOpenEncapsulatedVariable() {
        let p = start(phrase_1.PhraseType.EncapsulatedVariable);
        next();
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.VariableName) {
            if (peek(1).tokenType === lexer_1.TokenType.OpenBracket) {
                p.children.push(dollarCurlyEncapsulatedDimension());
            }
            else {
                let sv = start(phrase_1.PhraseType.SimpleVariable);
                next();
                p.children.push(end());
            }
        }
        else if (isExpressionStart(t)) {
            p.children.push(expression(0));
        }
        else {
            error();
        }
        expect(lexer_1.TokenType.CloseBrace);
        return end();
    }
    function dollarCurlyEncapsulatedDimension() {
        let p = start(phrase_1.PhraseType.SubscriptExpression);
        next();
        next();
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseBracket);
        return end();
    }
    function encapsulatedDimension() {
        let p = start(phrase_1.PhraseType.SubscriptExpression);
        p.children.push(simpleVariable());
        next();
        switch (peek().tokenType) {
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.IntegerLiteral:
                next();
                break;
            case lexer_1.TokenType.VariableName:
                p.children.push(simpleVariable());
                break;
            case lexer_1.TokenType.Minus:
                let u = start(phrase_1.PhraseType.UnaryOpExpression);
                next();
                expect(lexer_1.TokenType.IntegerLiteral);
                p.children.push(end());
                break;
            default:
                error();
                break;
        }
        expect(lexer_1.TokenType.CloseBracket);
        return end();
    }
    function encapsulatedProperty() {
        let p = start(phrase_1.PhraseType.PropertyAccessExpression);
        p.children.push(simpleVariable());
        next();
        expect(lexer_1.TokenType.Name);
        return end();
    }
    function heredocStringLiteral() {
        let p = start(phrase_1.PhraseType.HeredocStringLiteral);
        next();
        p.children.push(encapsulatedVariableList(lexer_1.TokenType.EndHeredoc));
        expect(lexer_1.TokenType.EndHeredoc);
        return end();
    }
    function anonymousClassDeclaration() {
        let p = start(phrase_1.PhraseType.AnonymousClassDeclaration);
        p.children.push(anonymousClassDeclarationHeader());
        p.children.push(typeDeclarationBody(phrase_1.PhraseType.ClassDeclarationBody, isClassMemberStart, classMemberDeclarationList));
        return end();
    }
    function anonymousClassDeclarationHeader() {
        let p = start(phrase_1.PhraseType.AnonymousClassDeclarationHeader);
        next();
        if (optional(lexer_1.TokenType.OpenParenthesis)) {
            if (isArgumentStart(peek())) {
                p.children.push(argumentList());
            }
            expect(lexer_1.TokenType.CloseParenthesis);
        }
        if (peek().tokenType === lexer_1.TokenType.Extends) {
            p.children.push(classBaseClause());
        }
        if (peek().tokenType === lexer_1.TokenType.Implements) {
            p.children.push(classInterfaceClause());
        }
        return end();
    }
    function classInterfaceClause() {
        let p = start(phrase_1.PhraseType.ClassInterfaceClause);
        next();
        p.children.push(qualifiedNameList([lexer_1.TokenType.OpenBrace]));
        return end();
    }
    function classMemberDeclarationList() {
        return list(phrase_1.PhraseType.ClassMemberDeclarationList, classMemberDeclaration, isClassMemberStart, [lexer_1.TokenType.CloseBrace], classMemberDeclarationListRecoverSet);
    }
    function isClassMemberStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Public:
            case lexer_1.TokenType.Protected:
            case lexer_1.TokenType.Private:
            case lexer_1.TokenType.Static:
            case lexer_1.TokenType.Abstract:
            case lexer_1.TokenType.Final:
            case lexer_1.TokenType.Function:
            case lexer_1.TokenType.Var:
            case lexer_1.TokenType.Const:
            case lexer_1.TokenType.Use:
                return true;
            default:
                return false;
        }
    }
    function classMemberDeclaration() {
        let p = start(phrase_1.PhraseType.ErrorClassMemberDeclaration);
        let t = peek();
        switch (t.tokenType) {
            case lexer_1.TokenType.Public:
            case lexer_1.TokenType.Protected:
            case lexer_1.TokenType.Private:
            case lexer_1.TokenType.Static:
            case lexer_1.TokenType.Abstract:
            case lexer_1.TokenType.Final:
                let modifiers = memberModifierList();
                t = peek();
                if (t.tokenType === lexer_1.TokenType.VariableName) {
                    p.children.push(modifiers);
                    return propertyDeclaration(p);
                }
                else if (t.tokenType === lexer_1.TokenType.Function) {
                    return methodDeclaration(p, modifiers);
                }
                else if (t.tokenType === lexer_1.TokenType.Const) {
                    p.children.push(modifiers);
                    return classConstDeclaration(p);
                }
                else {
                    p.children.push(modifiers);
                    error();
                    return end();
                }
            case lexer_1.TokenType.Function:
                return methodDeclaration(p, null);
            case lexer_1.TokenType.Var:
                next();
                return propertyDeclaration(p);
            case lexer_1.TokenType.Const:
                return classConstDeclaration(p);
            case lexer_1.TokenType.Use:
                return traitUseClause(p);
            default:
                throwUnexpectedTokenError(t);
        }
    }
    function throwUnexpectedTokenError(t) {
        throw new Error(`Unexpected token: ${t.tokenType}`);
    }
    function traitUseClause(p) {
        p.phraseType = phrase_1.PhraseType.TraitUseClause;
        next();
        p.children.push(qualifiedNameList([lexer_1.TokenType.Semicolon, lexer_1.TokenType.OpenBrace]));
        p.children.push(traitUseSpecification());
        return end();
    }
    function traitUseSpecification() {
        let p = start(phrase_1.PhraseType.TraitUseSpecification);
        let t = expectOneOf([lexer_1.TokenType.Semicolon, lexer_1.TokenType.OpenBrace]);
        if (t && t.tokenType === lexer_1.TokenType.OpenBrace) {
            if (isTraitAdaptationStart(peek())) {
                p.children.push(traitAdaptationList());
            }
            expect(lexer_1.TokenType.CloseBrace);
        }
        return end();
    }
    function traitAdaptationList() {
        return list(phrase_1.PhraseType.TraitAdaptationList, traitAdaptation, isTraitAdaptationStart, [lexer_1.TokenType.CloseBrace]);
    }
    function isTraitAdaptationStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Backslash:
            case lexer_1.TokenType.Namespace:
                return true;
            default:
                return isSemiReservedToken(t);
        }
    }
    function traitAdaptation() {
        let p = start(phrase_1.PhraseType.ErrorTraitAdaptation);
        let t = peek();
        let t2 = peek(1);
        if (t.tokenType === lexer_1.TokenType.Namespace ||
            t.tokenType === lexer_1.TokenType.Backslash ||
            (t.tokenType === lexer_1.TokenType.Name &&
                (t2.tokenType === lexer_1.TokenType.ColonColon || t2.tokenType === lexer_1.TokenType.Backslash))) {
            p.children.push(methodReference());
            if (peek().tokenType === lexer_1.TokenType.InsteadOf) {
                next();
                return traitPrecedence(p);
            }
        }
        else if (t.tokenType === lexer_1.TokenType.Name || isSemiReservedToken(t)) {
            let methodRef = start(phrase_1.PhraseType.MethodReference);
            methodRef.children.push(identifier());
            p.children.push(end());
        }
        else {
            error();
            return end();
        }
        return traitAlias(p);
    }
    function traitAlias(p) {
        p.phraseType = phrase_1.PhraseType.TraitAlias;
        expect(lexer_1.TokenType.As);
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Name || isReservedToken(t)) {
            p.children.push(identifier());
        }
        else if (isMemberModifier(t)) {
            next();
            t = peek();
            if (t.tokenType === lexer_1.TokenType.Name || isSemiReservedToken(t)) {
                p.children.push(identifier());
            }
        }
        else {
            error();
        }
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function traitPrecedence(p) {
        p.phraseType = phrase_1.PhraseType.TraitPrecedence;
        p.children.push(qualifiedNameList([lexer_1.TokenType.Semicolon]));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function methodReference() {
        let p = start(phrase_1.PhraseType.MethodReference);
        p.children.push(qualifiedName());
        expect(lexer_1.TokenType.ColonColon);
        p.children.push(identifier());
        return end();
    }
    function methodDeclarationHeader(memberModifers) {
        let p = start(phrase_1.PhraseType.MethodDeclarationHeader, true);
        if (memberModifers) {
            p.children.push(memberModifers);
        }
        next();
        optional(lexer_1.TokenType.Ampersand);
        p.children.push(identifier());
        expect(lexer_1.TokenType.OpenParenthesis);
        if (isParameterStart(peek())) {
            p.children.push(delimitedList(phrase_1.PhraseType.ParameterDeclarationList, parameterDeclaration, isParameterStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.CloseParenthesis]));
        }
        expect(lexer_1.TokenType.CloseParenthesis);
        if (peek().tokenType === lexer_1.TokenType.Colon) {
            p.children.push(returnType());
        }
        return end();
    }
    function methodDeclaration(p, memberModifers) {
        p.phraseType = phrase_1.PhraseType.MethodDeclaration;
        p.children.push(methodDeclarationHeader(memberModifers));
        p.children.push(methodDeclarationBody());
        return end();
    }
    function methodDeclarationBody() {
        let p = start(phrase_1.PhraseType.MethodDeclarationBody);
        if (peek().tokenType === lexer_1.TokenType.Semicolon) {
            next();
        }
        else {
            p.children.push(compoundStatement());
        }
        return end();
    }
    function identifier() {
        let p = start(phrase_1.PhraseType.Identifier);
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Name || isSemiReservedToken(t)) {
            next();
        }
        else {
            error();
        }
        return end();
    }
    function interfaceDeclaration() {
        let p = start(phrase_1.PhraseType.InterfaceDeclaration);
        p.children.push(interfaceDeclarationHeader());
        p.children.push(typeDeclarationBody(phrase_1.PhraseType.InterfaceDeclarationBody, isClassMemberStart, interfaceMemberDeclarations));
        return end();
    }
    function typeDeclarationBody(phraseType, elementStartPredicate, listFunction) {
        let p = start(phraseType);
        expect(lexer_1.TokenType.OpenBrace);
        if (elementStartPredicate(peek())) {
            p.children.push(listFunction());
        }
        expect(lexer_1.TokenType.CloseBrace);
        return end();
    }
    function interfaceMemberDeclarations() {
        return list(phrase_1.PhraseType.InterfaceMemberDeclarationList, classMemberDeclaration, isClassMemberStart, [lexer_1.TokenType.CloseBrace], classMemberDeclarationListRecoverSet);
    }
    function interfaceDeclarationHeader() {
        let p = start(phrase_1.PhraseType.InterfaceDeclarationHeader);
        next();
        expect(lexer_1.TokenType.Name);
        if (peek().tokenType === lexer_1.TokenType.Extends) {
            p.children.push(interfaceBaseClause());
        }
        return end();
    }
    function interfaceBaseClause() {
        let p = start(phrase_1.PhraseType.InterfaceBaseClause);
        next();
        p.children.push(qualifiedNameList([lexer_1.TokenType.OpenBrace]));
        return end();
    }
    function traitDeclaration() {
        let p = start(phrase_1.PhraseType.TraitDeclaration);
        p.children.push(traitDeclarationHeader());
        p.children.push(typeDeclarationBody(phrase_1.PhraseType.TraitDeclarationBody, isClassMemberStart, traitMemberDeclarations));
        return end();
    }
    function traitDeclarationHeader() {
        let p = start(phrase_1.PhraseType.TraitDeclarationHeader);
        next();
        expect(lexer_1.TokenType.Name);
        return end();
    }
    function traitMemberDeclarations() {
        return list(phrase_1.PhraseType.TraitMemberDeclarationList, classMemberDeclaration, isClassMemberStart, [lexer_1.TokenType.CloseBrace], classMemberDeclarationListRecoverSet);
    }
    function functionDeclaration() {
        let p = start(phrase_1.PhraseType.FunctionDeclaration);
        p.children.push(functionDeclarationHeader());
        p.children.push(functionDeclarationBody());
        return end();
    }
    function functionDeclarationBody() {
        let cs = compoundStatement();
        cs.phraseType = phrase_1.PhraseType.FunctionDeclarationBody;
        return cs;
    }
    function functionDeclarationHeader() {
        let p = start(phrase_1.PhraseType.FunctionDeclarationHeader);
        next();
        optional(lexer_1.TokenType.Ampersand);
        expect(lexer_1.TokenType.Name);
        expect(lexer_1.TokenType.OpenParenthesis);
        if (isParameterStart(peek())) {
            p.children.push(delimitedList(phrase_1.PhraseType.ParameterDeclarationList, parameterDeclaration, isParameterStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.CloseParenthesis]));
        }
        expect(lexer_1.TokenType.CloseParenthesis);
        if (peek().tokenType === lexer_1.TokenType.Colon) {
            p.children.push(returnType());
        }
        return end();
    }
    function isParameterStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Ampersand:
            case lexer_1.TokenType.Ellipsis:
            case lexer_1.TokenType.VariableName:
                return true;
            default:
                return isTypeDeclarationStart(t);
        }
    }
    function classDeclaration() {
        let p = start(phrase_1.PhraseType.ClassDeclaration);
        p.children.push(classDeclarationHeader());
        p.children.push(typeDeclarationBody(phrase_1.PhraseType.ClassDeclarationBody, isClassMemberStart, classMemberDeclarationList));
        return end();
    }
    function classDeclarationHeader() {
        let p = start(phrase_1.PhraseType.ClassDeclarationHeader);
        optionalOneOf([lexer_1.TokenType.Abstract, lexer_1.TokenType.Final]);
        expect(lexer_1.TokenType.Class);
        expect(lexer_1.TokenType.Name);
        if (peek().tokenType === lexer_1.TokenType.Extends) {
            p.children.push(classBaseClause());
        }
        if (peek().tokenType === lexer_1.TokenType.Implements) {
            p.children.push(classInterfaceClause());
        }
        return end();
    }
    function classBaseClause() {
        let p = start(phrase_1.PhraseType.ClassBaseClause);
        next();
        p.children.push(qualifiedName());
        return end();
    }
    function compoundStatement() {
        let p = start(phrase_1.PhraseType.CompoundStatement);
        expect(lexer_1.TokenType.OpenBrace);
        if (isStatementStart(peek())) {
            p.children.push(statementList([lexer_1.TokenType.CloseBrace]));
        }
        expect(lexer_1.TokenType.CloseBrace);
        return end();
    }
    function statement() {
        let t = peek();
        switch (t.tokenType) {
            case lexer_1.TokenType.Namespace:
                return namespaceDefinition();
            case lexer_1.TokenType.Use:
                return namespaceUseDeclaration();
            case lexer_1.TokenType.HaltCompiler:
                return haltCompilerStatement();
            case lexer_1.TokenType.Const:
                return constDeclaration();
            case lexer_1.TokenType.Function:
                {
                    let p1 = peek(1);
                    if (p1.tokenType === lexer_1.TokenType.OpenParenthesis ||
                        (p1.tokenType === lexer_1.TokenType.Ampersand && peek(2).tokenType === lexer_1.TokenType.OpenParenthesis)) {
                        return expressionStatement();
                    }
                    else {
                        return functionDeclaration();
                    }
                }
            case lexer_1.TokenType.Class:
            case lexer_1.TokenType.Abstract:
            case lexer_1.TokenType.Final:
                return classDeclaration();
            case lexer_1.TokenType.Trait:
                return traitDeclaration();
            case lexer_1.TokenType.Interface:
                return interfaceDeclaration();
            case lexer_1.TokenType.OpenBrace:
                return compoundStatement();
            case lexer_1.TokenType.If:
                return ifStatement();
            case lexer_1.TokenType.While:
                return whileStatement();
            case lexer_1.TokenType.Do:
                return doStatement();
            case lexer_1.TokenType.For:
                return forStatement();
            case lexer_1.TokenType.Switch:
                return switchStatement();
            case lexer_1.TokenType.Break:
                return breakStatement();
            case lexer_1.TokenType.Continue:
                return continueStatement();
            case lexer_1.TokenType.Return:
                return returnStatement();
            case lexer_1.TokenType.Global:
                return globalDeclaration();
            case lexer_1.TokenType.Static:
                if (peek(1).tokenType === lexer_1.TokenType.VariableName &&
                    [lexer_1.TokenType.Semicolon, lexer_1.TokenType.Comma,
                        lexer_1.TokenType.CloseTag, lexer_1.TokenType.Equals].indexOf(peek(2).tokenType) >= 0) {
                    return functionStaticDeclaration();
                }
                else {
                    return expressionStatement();
                }
            case lexer_1.TokenType.Text:
            case lexer_1.TokenType.OpenTag:
            case lexer_1.TokenType.CloseTag:
                return inlineText();
            case lexer_1.TokenType.ForEach:
                return foreachStatement();
            case lexer_1.TokenType.Declare:
                return declareStatement();
            case lexer_1.TokenType.Try:
                return tryStatement();
            case lexer_1.TokenType.Throw:
                return throwStatement();
            case lexer_1.TokenType.Goto:
                return gotoStatement();
            case lexer_1.TokenType.Echo:
            case lexer_1.TokenType.OpenTagEcho:
                return echoIntrinsic();
            case lexer_1.TokenType.Unset:
                return unsetIntrinsic();
            case lexer_1.TokenType.Semicolon:
                return nullStatement();
            case lexer_1.TokenType.Name:
                if (peek(1).tokenType === lexer_1.TokenType.Colon) {
                    return namedLabelStatement();
                }
            default:
                return expressionStatement();
        }
    }
    function inlineText() {
        let p = start(phrase_1.PhraseType.InlineText);
        optional(lexer_1.TokenType.CloseTag);
        optional(lexer_1.TokenType.Text);
        optional(lexer_1.TokenType.OpenTag);
        return end();
    }
    function nullStatement() {
        start(phrase_1.PhraseType.NullStatement);
        next();
        return end();
    }
    function isCatchClauseStart(t) {
        return t.tokenType === lexer_1.TokenType.Catch;
    }
    function tryStatement() {
        let p = start(phrase_1.PhraseType.TryStatement);
        next();
        p.children.push(compoundStatement());
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Catch) {
            p.children.push(list(phrase_1.PhraseType.CatchClauseList, catchClause, isCatchClauseStart));
        }
        else if (t.tokenType !== lexer_1.TokenType.Finally) {
            error();
        }
        if (peek().tokenType === lexer_1.TokenType.Finally) {
            p.children.push(finallyClause());
        }
        return end();
    }
    function finallyClause() {
        let p = start(phrase_1.PhraseType.FinallyClause);
        next();
        p.children.push(compoundStatement());
        return end();
    }
    function catchClause() {
        let p = start(phrase_1.PhraseType.CatchClause);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(delimitedList(phrase_1.PhraseType.CatchNameList, qualifiedName, isQualifiedNameStart, lexer_1.TokenType.Bar, [lexer_1.TokenType.VariableName]));
        expect(lexer_1.TokenType.VariableName);
        expect(lexer_1.TokenType.CloseParenthesis);
        p.children.push(compoundStatement());
        return end();
    }
    function declareDirective() {
        let p = start(phrase_1.PhraseType.DeclareDirective);
        expect(lexer_1.TokenType.Name);
        expect(lexer_1.TokenType.Equals);
        expectOneOf([lexer_1.TokenType.IntegerLiteral, lexer_1.TokenType.FloatingLiteral, lexer_1.TokenType.StringLiteral]);
        return end();
    }
    function declareStatement() {
        let p = start(phrase_1.PhraseType.DeclareStatement);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(declareDirective());
        expect(lexer_1.TokenType.CloseParenthesis);
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Colon) {
            next();
            p.children.push(statementList([lexer_1.TokenType.EndDeclare]));
            expect(lexer_1.TokenType.EndDeclare);
            expect(lexer_1.TokenType.Semicolon);
        }
        else if (isStatementStart(t)) {
            p.children.push(statement());
        }
        else if (t.tokenType === lexer_1.TokenType.Semicolon) {
            next();
        }
        else {
            error();
        }
        return end();
    }
    function switchStatement() {
        let p = start(phrase_1.PhraseType.SwitchStatement);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        let t = expectOneOf([lexer_1.TokenType.Colon, lexer_1.TokenType.OpenBrace]);
        let tCase = peek();
        if (tCase.tokenType === lexer_1.TokenType.Case || tCase.tokenType === lexer_1.TokenType.Default) {
            p.children.push(caseStatements(t && t.tokenType === lexer_1.TokenType.Colon ?
                lexer_1.TokenType.EndSwitch : lexer_1.TokenType.CloseBrace));
        }
        if (t && t.tokenType === lexer_1.TokenType.Colon) {
            expect(lexer_1.TokenType.EndSwitch);
            expect(lexer_1.TokenType.Semicolon);
        }
        else {
            expect(lexer_1.TokenType.CloseBrace);
        }
        return end();
    }
    function caseStatements(breakOn) {
        let p = start(phrase_1.PhraseType.CaseStatementList);
        let t;
        let caseBreakOn = [lexer_1.TokenType.Case, lexer_1.TokenType.Default];
        caseBreakOn.push(breakOn);
        while (true) {
            t = peek();
            if (t.tokenType === lexer_1.TokenType.Case) {
                p.children.push(caseStatement(caseBreakOn));
            }
            else if (t.tokenType === lexer_1.TokenType.Default) {
                p.children.push(defaultStatement(caseBreakOn));
            }
            else if (breakOn === t.tokenType) {
                break;
            }
            else {
                error();
                break;
            }
        }
        return end();
    }
    function caseStatement(breakOn) {
        let p = start(phrase_1.PhraseType.CaseStatement);
        next();
        p.children.push(expression(0));
        expectOneOf([lexer_1.TokenType.Colon, lexer_1.TokenType.Semicolon]);
        if (isStatementStart(peek())) {
            p.children.push(statementList(breakOn));
        }
        return end();
    }
    function defaultStatement(breakOn) {
        let p = start(phrase_1.PhraseType.DefaultStatement);
        next();
        expectOneOf([lexer_1.TokenType.Colon, lexer_1.TokenType.Semicolon]);
        if (isStatementStart(peek())) {
            p.children.push(statementList(breakOn));
        }
        return end();
    }
    function namedLabelStatement() {
        let p = start(phrase_1.PhraseType.NamedLabelStatement);
        next();
        next();
        return end();
    }
    function gotoStatement() {
        let p = start(phrase_1.PhraseType.GotoStatement);
        next();
        expect(lexer_1.TokenType.Name);
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function throwStatement() {
        let p = start(phrase_1.PhraseType.ThrowStatement);
        next();
        p.children.push(expression(0));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function foreachCollection() {
        let p = start(phrase_1.PhraseType.ForeachCollection);
        p.children.push(expression(0));
        return end();
    }
    function foreachKeyOrValue() {
        let p = start(phrase_1.PhraseType.ForeachValue);
        p.children.push(expression(0));
        if (peek().tokenType === lexer_1.TokenType.FatArrow) {
            next();
            p.phraseType = phrase_1.PhraseType.ForeachKey;
        }
        return end();
    }
    function foreachValue() {
        let p = start(phrase_1.PhraseType.ForeachValue);
        optional(lexer_1.TokenType.Ampersand);
        p.children.push(expression(0));
        return end();
    }
    function foreachStatement() {
        let p = start(phrase_1.PhraseType.ForeachStatement);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(foreachCollection());
        expect(lexer_1.TokenType.As);
        let keyOrValue = peek().tokenType === lexer_1.TokenType.Ampersand ? foreachValue() : foreachKeyOrValue();
        p.children.push(keyOrValue);
        if (keyOrValue.phraseType === phrase_1.PhraseType.ForeachKey) {
            p.children.push(foreachValue());
        }
        expect(lexer_1.TokenType.CloseParenthesis);
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Colon) {
            next();
            p.children.push(statementList([lexer_1.TokenType.EndForeach]));
            expect(lexer_1.TokenType.EndForeach);
            expect(lexer_1.TokenType.Semicolon);
        }
        else if (isStatementStart(t)) {
            p.children.push(statement());
        }
        else {
            error();
        }
        return end();
    }
    function isVariableStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.VariableName:
            case lexer_1.TokenType.Dollar:
            case lexer_1.TokenType.OpenParenthesis:
            case lexer_1.TokenType.Array:
            case lexer_1.TokenType.OpenBracket:
            case lexer_1.TokenType.StringLiteral:
            case lexer_1.TokenType.Static:
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.Backslash:
                return true;
            default:
                return false;
        }
    }
    function variableInitial() {
        return variable(variableAtom());
    }
    function variableList(breakOn) {
        return delimitedList(phrase_1.PhraseType.VariableList, variableInitial, isVariableStart, lexer_1.TokenType.Comma, breakOn);
    }
    function unsetIntrinsic() {
        let p = start(phrase_1.PhraseType.UnsetIntrinsic);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(variableList([lexer_1.TokenType.CloseParenthesis]));
        expect(lexer_1.TokenType.CloseParenthesis);
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function expressionInitial() {
        return expression(0);
    }
    function echoIntrinsic() {
        let p = start(phrase_1.PhraseType.EchoIntrinsic);
        next();
        p.children.push(delimitedList(phrase_1.PhraseType.ExpressionList, expressionInitial, isExpressionStart, lexer_1.TokenType.Comma));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function isStaticVariableDclarationStart(t) {
        return t.tokenType === lexer_1.TokenType.VariableName;
    }
    function functionStaticDeclaration() {
        let p = start(phrase_1.PhraseType.FunctionStaticDeclaration);
        next();
        p.children.push(delimitedList(phrase_1.PhraseType.StaticVariableDeclarationList, staticVariableDeclaration, isStaticVariableDclarationStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.Semicolon]));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function globalDeclaration() {
        let p = start(phrase_1.PhraseType.GlobalDeclaration);
        next();
        p.children.push(delimitedList(phrase_1.PhraseType.VariableNameList, simpleVariable, isSimpleVariableStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.Semicolon]));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function isSimpleVariableStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.VariableName:
            case lexer_1.TokenType.Dollar:
                return true;
            default:
                return false;
        }
    }
    function staticVariableDeclaration() {
        let p = start(phrase_1.PhraseType.StaticVariableDeclaration);
        expect(lexer_1.TokenType.VariableName);
        if (peek().tokenType === lexer_1.TokenType.Equals) {
            p.children.push(functionStaticInitialiser());
        }
        return end();
    }
    function functionStaticInitialiser() {
        let p = start(phrase_1.PhraseType.FunctionStaticInitialiser);
        next();
        p.children.push(expression(0));
        return end();
    }
    function continueStatement() {
        let p = start(phrase_1.PhraseType.ContinueStatement);
        next();
        if (isExpressionStart(peek())) {
            p.children.push(expression(0));
        }
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function breakStatement() {
        let p = start(phrase_1.PhraseType.BreakStatement);
        next();
        if (isExpressionStart(peek())) {
            p.children.push(expression(0));
        }
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function returnStatement() {
        let p = start(phrase_1.PhraseType.ReturnStatement);
        next();
        if (isExpressionStart(peek())) {
            p.children.push(expression(0));
        }
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function forExpressionGroup(phraseType, breakOn) {
        return delimitedList(phraseType, expressionInitial, isExpressionStart, lexer_1.TokenType.Comma, breakOn);
    }
    function forStatement() {
        let p = start(phrase_1.PhraseType.ForStatement);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        if (isExpressionStart(peek())) {
            p.children.push(forExpressionGroup(phrase_1.PhraseType.ForInitialiser, [lexer_1.TokenType.Semicolon]));
        }
        expect(lexer_1.TokenType.Semicolon);
        if (isExpressionStart(peek())) {
            p.children.push(forExpressionGroup(phrase_1.PhraseType.ForControl, [lexer_1.TokenType.Semicolon]));
        }
        expect(lexer_1.TokenType.Semicolon);
        if (isExpressionStart(peek())) {
            p.children.push(forExpressionGroup(phrase_1.PhraseType.ForEndOfLoop, [lexer_1.TokenType.CloseParenthesis]));
        }
        expect(lexer_1.TokenType.CloseParenthesis);
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Colon) {
            next();
            p.children.push(statementList([lexer_1.TokenType.EndFor]));
            expect(lexer_1.TokenType.EndFor);
            expect(lexer_1.TokenType.Semicolon);
        }
        else if (isStatementStart(peek())) {
            p.children.push(statement());
        }
        else {
            error();
        }
        return end();
    }
    function doStatement() {
        let p = start(phrase_1.PhraseType.DoStatement);
        next();
        p.children.push(statement());
        expect(lexer_1.TokenType.While);
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function whileStatement() {
        let p = start(phrase_1.PhraseType.WhileStatement);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Colon) {
            next();
            p.children.push(statementList([lexer_1.TokenType.EndWhile]));
            expect(lexer_1.TokenType.EndWhile);
            expect(lexer_1.TokenType.Semicolon);
        }
        else if (isStatementStart(t)) {
            p.children.push(statement());
        }
        else {
            error();
        }
        return end();
    }
    function elseIfClause1() {
        let p = start(phrase_1.PhraseType.ElseIfClause);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        p.children.push(statement());
        return end();
    }
    function elseIfClause2() {
        let p = start(phrase_1.PhraseType.ElseIfClause);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        expect(lexer_1.TokenType.Colon);
        p.children.push(statementList([lexer_1.TokenType.EndIf, lexer_1.TokenType.Else, lexer_1.TokenType.ElseIf]));
        return end();
    }
    function elseClause1() {
        let p = start(phrase_1.PhraseType.ElseClause);
        next();
        p.children.push(statement());
        return end();
    }
    function elseClause2() {
        let p = start(phrase_1.PhraseType.ElseClause);
        next();
        expect(lexer_1.TokenType.Colon);
        p.children.push(statementList([lexer_1.TokenType.EndIf]));
        return end();
    }
    function isElseIfClauseStart(t) {
        return t.tokenType === lexer_1.TokenType.ElseIf;
    }
    function ifStatement() {
        let p = start(phrase_1.PhraseType.IfStatement);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.CloseParenthesis);
        let t = peek();
        let elseIfClauseFunction = elseIfClause1;
        let elseClauseFunction = elseClause1;
        let expectEndIf = false;
        if (t.tokenType === lexer_1.TokenType.Colon) {
            next();
            p.children.push(statementList([lexer_1.TokenType.ElseIf, lexer_1.TokenType.Else, lexer_1.TokenType.EndIf]));
            elseIfClauseFunction = elseIfClause2;
            elseClauseFunction = elseClause2;
            expectEndIf = true;
        }
        else if (isStatementStart(t)) {
            p.children.push(statement());
        }
        else {
            error();
        }
        if (peek().tokenType === lexer_1.TokenType.ElseIf) {
            p.children.push(list(phrase_1.PhraseType.ElseIfClauseList, elseIfClauseFunction, isElseIfClauseStart));
        }
        if (peek().tokenType === lexer_1.TokenType.Else) {
            p.children.push(elseClauseFunction());
        }
        if (expectEndIf) {
            expect(lexer_1.TokenType.EndIf);
            expect(lexer_1.TokenType.Semicolon);
        }
        return end();
    }
    function expressionStatement() {
        let p = start(phrase_1.PhraseType.ExpressionStatement);
        p.children.push(expression(0));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function returnType() {
        let p = start(phrase_1.PhraseType.ReturnType);
        next();
        p.children.push(typeDeclaration());
        return end();
    }
    function typeDeclaration() {
        let p = start(phrase_1.PhraseType.TypeDeclaration);
        optional(lexer_1.TokenType.Question);
        switch (peek().tokenType) {
            case lexer_1.TokenType.Callable:
            case lexer_1.TokenType.Array:
                next();
                break;
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.Backslash:
                p.children.push(qualifiedName());
                break;
            default:
                error();
                break;
        }
        return end();
    }
    function classConstDeclaration(p) {
        p.phraseType = phrase_1.PhraseType.ClassConstDeclaration;
        next();
        p.children.push(delimitedList(phrase_1.PhraseType.ClassConstElementList, classConstElement, isClassConstElementStartToken, lexer_1.TokenType.Comma, [lexer_1.TokenType.Semicolon]));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function isExpressionStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.VariableName:
            case lexer_1.TokenType.Dollar:
            case lexer_1.TokenType.Array:
            case lexer_1.TokenType.OpenBracket:
            case lexer_1.TokenType.StringLiteral:
            case lexer_1.TokenType.Backslash:
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.OpenParenthesis:
            case lexer_1.TokenType.Static:
            case lexer_1.TokenType.PlusPlus:
            case lexer_1.TokenType.MinusMinus:
            case lexer_1.TokenType.Plus:
            case lexer_1.TokenType.Minus:
            case lexer_1.TokenType.Exclamation:
            case lexer_1.TokenType.Tilde:
            case lexer_1.TokenType.AtSymbol:
            case lexer_1.TokenType.IntegerCast:
            case lexer_1.TokenType.FloatCast:
            case lexer_1.TokenType.StringCast:
            case lexer_1.TokenType.ArrayCast:
            case lexer_1.TokenType.ObjectCast:
            case lexer_1.TokenType.BooleanCast:
            case lexer_1.TokenType.UnsetCast:
            case lexer_1.TokenType.List:
            case lexer_1.TokenType.Clone:
            case lexer_1.TokenType.New:
            case lexer_1.TokenType.FloatingLiteral:
            case lexer_1.TokenType.IntegerLiteral:
            case lexer_1.TokenType.LineConstant:
            case lexer_1.TokenType.FileConstant:
            case lexer_1.TokenType.DirectoryConstant:
            case lexer_1.TokenType.TraitConstant:
            case lexer_1.TokenType.MethodConstant:
            case lexer_1.TokenType.FunctionConstant:
            case lexer_1.TokenType.NamespaceConstant:
            case lexer_1.TokenType.ClassConstant:
            case lexer_1.TokenType.StartHeredoc:
            case lexer_1.TokenType.DoubleQuote:
            case lexer_1.TokenType.Backtick:
            case lexer_1.TokenType.Print:
            case lexer_1.TokenType.Yield:
            case lexer_1.TokenType.YieldFrom:
            case lexer_1.TokenType.Function:
            case lexer_1.TokenType.Include:
            case lexer_1.TokenType.IncludeOnce:
            case lexer_1.TokenType.Require:
            case lexer_1.TokenType.RequireOnce:
            case lexer_1.TokenType.Eval:
            case lexer_1.TokenType.Empty:
            case lexer_1.TokenType.Isset:
            case lexer_1.TokenType.Exit:
                return true;
            default:
                return false;
        }
    }
    function classConstElement() {
        let p = start(phrase_1.PhraseType.ClassConstElement);
        p.children.push(identifier());
        expect(lexer_1.TokenType.Equals);
        p.children.push(expression(0));
        return end();
    }
    function isPropertyElementStart(t) {
        return t.tokenType === lexer_1.TokenType.VariableName;
    }
    function propertyDeclaration(p) {
        let t;
        p.phraseType = phrase_1.PhraseType.PropertyDeclaration;
        p.children.push(delimitedList(phrase_1.PhraseType.PropertyElementList, propertyElement, isPropertyElementStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.Semicolon]));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function propertyElement() {
        let p = start(phrase_1.PhraseType.PropertyElement);
        expect(lexer_1.TokenType.VariableName);
        if (peek().tokenType === lexer_1.TokenType.Equals) {
            p.children.push(propertyInitialiser());
        }
        return end();
    }
    function propertyInitialiser() {
        let p = start(phrase_1.PhraseType.PropertyInitialiser);
        next();
        p.children.push(expression(0));
        return end();
    }
    function memberModifierList() {
        let p = start(phrase_1.PhraseType.MemberModifierList);
        while (isMemberModifier(peek())) {
            next();
        }
        return end();
    }
    function isMemberModifier(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Public:
            case lexer_1.TokenType.Protected:
            case lexer_1.TokenType.Private:
            case lexer_1.TokenType.Static:
            case lexer_1.TokenType.Abstract:
            case lexer_1.TokenType.Final:
                return true;
            default:
                return false;
        }
    }
    function qualifiedNameList(breakOn) {
        return delimitedList(phrase_1.PhraseType.QualifiedNameList, qualifiedName, isQualifiedNameStart, lexer_1.TokenType.Comma, breakOn);
    }
    function objectCreationExpression() {
        let p = start(phrase_1.PhraseType.ObjectCreationExpression);
        next();
        if (peek().tokenType === lexer_1.TokenType.Class) {
            p.children.push(anonymousClassDeclaration());
            return end();
        }
        p.children.push(typeDesignator(phrase_1.PhraseType.ClassTypeDesignator));
        if (optional(lexer_1.TokenType.OpenParenthesis)) {
            if (isArgumentStart(peek())) {
                p.children.push(argumentList());
            }
            expect(lexer_1.TokenType.CloseParenthesis);
        }
        return end();
    }
    function typeDesignator(phraseType) {
        let p = start(phraseType);
        let part = classTypeDesignatorAtom();
        while (true) {
            switch (peek().tokenType) {
                case lexer_1.TokenType.OpenBracket:
                    part = subscriptExpression(part, lexer_1.TokenType.CloseBracket);
                    continue;
                case lexer_1.TokenType.OpenBrace:
                    part = subscriptExpression(part, lexer_1.TokenType.CloseBrace);
                    continue;
                case lexer_1.TokenType.Arrow:
                    part = propertyAccessExpression(part);
                    continue;
                case lexer_1.TokenType.ColonColon:
                    let staticPropNode = start(phrase_1.PhraseType.ScopedPropertyAccessExpression);
                    staticPropNode.children.push(part);
                    next();
                    staticPropNode.children.push(restrictedScopedMemberName());
                    part = end();
                    continue;
                default:
                    break;
            }
            break;
        }
        p.children.push(part);
        return end();
    }
    function restrictedScopedMemberName() {
        let p = start(phrase_1.PhraseType.ScopedMemberName);
        let t = peek();
        switch (t.tokenType) {
            case lexer_1.TokenType.VariableName:
                next();
                break;
            case lexer_1.TokenType.Dollar:
                p.children.push(simpleVariable());
                break;
            default:
                error();
                break;
        }
        return end();
    }
    function classTypeDesignatorAtom() {
        let t = peek();
        switch (t.tokenType) {
            case lexer_1.TokenType.Static:
                return relativeScope();
            case lexer_1.TokenType.VariableName:
            case lexer_1.TokenType.Dollar:
                return simpleVariable();
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.Backslash:
                return qualifiedName();
            default:
                start(phrase_1.PhraseType.ErrorClassTypeDesignatorAtom);
                error();
                return end();
        }
    }
    function cloneExpression() {
        let p = start(phrase_1.PhraseType.CloneExpression);
        next();
        p.children.push(expression(0));
        return end();
    }
    function listIntrinsic() {
        let p = start(phrase_1.PhraseType.ListIntrinsic);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(arrayInitialiserList(lexer_1.TokenType.CloseParenthesis));
        expect(lexer_1.TokenType.CloseParenthesis);
        return end();
    }
    function unaryExpression(phraseType) {
        let p = start(phraseType);
        let op = next();
        switch (phraseType) {
            case phrase_1.PhraseType.PrefixDecrementExpression:
            case phrase_1.PhraseType.PrefixIncrementExpression:
                p.children.push(variable(variableAtom()));
                break;
            default:
                p.children.push(expression(precedenceAssociativityTuple(op)[0]));
                break;
        }
        return end();
    }
    function anonymousFunctionHeader() {
        let p = start(phrase_1.PhraseType.AnonymousFunctionHeader);
        optional(lexer_1.TokenType.Static);
        next();
        optional(lexer_1.TokenType.Ampersand);
        expect(lexer_1.TokenType.OpenParenthesis);
        if (isParameterStart(peek())) {
            p.children.push(delimitedList(phrase_1.PhraseType.ParameterDeclarationList, parameterDeclaration, isParameterStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.CloseParenthesis]));
        }
        expect(lexer_1.TokenType.CloseParenthesis);
        if (peek().tokenType === lexer_1.TokenType.Use) {
            p.children.push(anonymousFunctionUseClause());
        }
        if (peek().tokenType === lexer_1.TokenType.Colon) {
            p.children.push(returnType());
        }
        return end();
    }
    function anonymousFunctionCreationExpression() {
        let p = start(phrase_1.PhraseType.AnonymousFunctionCreationExpression);
        p.children.push(anonymousFunctionHeader());
        p.children.push(functionDeclarationBody());
        return end();
    }
    function isAnonymousFunctionUseVariableStart(t) {
        return t.tokenType === lexer_1.TokenType.VariableName ||
            t.tokenType === lexer_1.TokenType.Ampersand;
    }
    function anonymousFunctionUseClause() {
        let p = start(phrase_1.PhraseType.AnonymousFunctionUseClause);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        p.children.push(delimitedList(phrase_1.PhraseType.ClosureUseList, anonymousFunctionUseVariable, isAnonymousFunctionUseVariableStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.CloseParenthesis]));
        expect(lexer_1.TokenType.CloseParenthesis);
        return end();
    }
    function anonymousFunctionUseVariable() {
        let p = start(phrase_1.PhraseType.AnonymousFunctionUseVariable);
        optional(lexer_1.TokenType.Ampersand);
        expect(lexer_1.TokenType.VariableName);
        return end();
    }
    function isTypeDeclarationStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Backslash:
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.Question:
            case lexer_1.TokenType.Array:
            case lexer_1.TokenType.Callable:
                return true;
            default:
                return false;
        }
    }
    function parameterDeclaration() {
        let p = start(phrase_1.PhraseType.ParameterDeclaration);
        if (isTypeDeclarationStart(peek())) {
            p.children.push(typeDeclaration());
        }
        optional(lexer_1.TokenType.Ampersand);
        optional(lexer_1.TokenType.Ellipsis);
        expect(lexer_1.TokenType.VariableName);
        if (peek().tokenType === lexer_1.TokenType.Equals) {
            next();
            p.children.push(expression(0));
        }
        return end();
    }
    function variable(variableAtomNode) {
        let count = 0;
        while (true) {
            ++count;
            switch (peek().tokenType) {
                case lexer_1.TokenType.ColonColon:
                    variableAtomNode = scopedAccessExpression(variableAtomNode);
                    continue;
                case lexer_1.TokenType.Arrow:
                    variableAtomNode = propertyOrMethodAccessExpression(variableAtomNode);
                    continue;
                case lexer_1.TokenType.OpenBracket:
                    variableAtomNode = subscriptExpression(variableAtomNode, lexer_1.TokenType.CloseBracket);
                    continue;
                case lexer_1.TokenType.OpenBrace:
                    variableAtomNode = subscriptExpression(variableAtomNode, lexer_1.TokenType.CloseBrace);
                    continue;
                case lexer_1.TokenType.OpenParenthesis:
                    variableAtomNode = functionCallExpression(variableAtomNode);
                    continue;
                default:
                    if (count === 1 && variableAtomNode.phraseType !== phrase_1.PhraseType.SimpleVariable) {
                        let errNode = start(phrase_1.PhraseType.ErrorVariable, true);
                        errNode.children.push(variableAtomNode);
                        error();
                        return end();
                    }
                    break;
            }
            break;
        }
        return variableAtomNode;
    }
    function functionCallExpression(lhs) {
        let p = start(phrase_1.PhraseType.FunctionCallExpression, true);
        p.children.push(lhs);
        expect(lexer_1.TokenType.OpenParenthesis);
        if (isArgumentStart(peek())) {
            p.children.push(argumentList());
        }
        expect(lexer_1.TokenType.CloseParenthesis);
        return end();
    }
    function scopedAccessExpression(lhs) {
        let p = start(phrase_1.PhraseType.ErrorScopedAccessExpression, true);
        p.children.push(lhs);
        next();
        p.children.push(scopedMemberName(p));
        if (optional(lexer_1.TokenType.OpenParenthesis)) {
            p.phraseType = phrase_1.PhraseType.ScopedCallExpression;
            if (isArgumentStart(peek())) {
                p.children.push(argumentList());
            }
            expect(lexer_1.TokenType.CloseParenthesis);
            return end();
        }
        else if (p.phraseType === phrase_1.PhraseType.ScopedCallExpression) {
            error();
        }
        return end();
    }
    function scopedMemberName(parent) {
        let p = start(phrase_1.PhraseType.ScopedMemberName);
        let t = peek();
        switch (t.tokenType) {
            case lexer_1.TokenType.OpenBrace:
                parent.phraseType = phrase_1.PhraseType.ScopedCallExpression;
                p.children.push(encapsulatedExpression(lexer_1.TokenType.OpenBrace, lexer_1.TokenType.CloseBrace));
                break;
            case lexer_1.TokenType.VariableName:
                parent.phraseType = phrase_1.PhraseType.ScopedPropertyAccessExpression;
                next();
                break;
            case lexer_1.TokenType.Dollar:
                p.children.push(simpleVariable());
                parent.phraseType = phrase_1.PhraseType.ScopedPropertyAccessExpression;
                break;
            default:
                if (t.tokenType === lexer_1.TokenType.Name || isSemiReservedToken(t)) {
                    p.children.push(identifier());
                    parent.phraseType = phrase_1.PhraseType.ClassConstantAccessExpression;
                }
                else {
                    error();
                }
                break;
        }
        return end();
    }
    function propertyAccessExpression(lhs) {
        let p = start(phrase_1.PhraseType.PropertyAccessExpression, true);
        p.children.push(lhs);
        next();
        p.children.push(memberName());
        return end();
    }
    function propertyOrMethodAccessExpression(lhs) {
        let p = start(phrase_1.PhraseType.PropertyAccessExpression, true);
        p.children.push(lhs);
        next();
        p.children.push(memberName());
        if (optional(lexer_1.TokenType.OpenParenthesis)) {
            if (isArgumentStart(peek())) {
                p.children.push(argumentList());
            }
            p.phraseType = phrase_1.PhraseType.MethodCallExpression;
            expect(lexer_1.TokenType.CloseParenthesis);
        }
        return end();
    }
    function memberName() {
        let p = start(phrase_1.PhraseType.MemberName);
        switch (peek().tokenType) {
            case lexer_1.TokenType.Name:
                next();
                break;
            case lexer_1.TokenType.OpenBrace:
                p.children.push(encapsulatedExpression(lexer_1.TokenType.OpenBrace, lexer_1.TokenType.CloseBrace));
                break;
            case lexer_1.TokenType.Dollar:
            case lexer_1.TokenType.VariableName:
                p.children.push(simpleVariable());
                break;
            default:
                error();
                break;
        }
        return end();
    }
    function subscriptExpression(lhs, closeTokenType) {
        let p = start(phrase_1.PhraseType.SubscriptExpression, true);
        p.children.push(lhs);
        next();
        if (isExpressionStart(peek())) {
            p.children.push(expression(0));
        }
        expect(closeTokenType);
        return end();
    }
    function argumentList() {
        return delimitedList(phrase_1.PhraseType.ArgumentExpressionList, argumentExpression, isArgumentStart, lexer_1.TokenType.Comma, [lexer_1.TokenType.CloseParenthesis]);
    }
    function isArgumentStart(t) {
        return t.tokenType === lexer_1.TokenType.Ellipsis || isExpressionStart(t);
    }
    function variadicUnpacking() {
        let p = start(phrase_1.PhraseType.VariadicUnpacking);
        next();
        p.children.push(expression(0));
        return end();
    }
    function argumentExpression() {
        return peek().tokenType === lexer_1.TokenType.Ellipsis ?
            variadicUnpacking() : expression(0);
    }
    function qualifiedName() {
        let p = start(phrase_1.PhraseType.QualifiedName);
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Backslash) {
            next();
            p.phraseType = phrase_1.PhraseType.FullyQualifiedName;
        }
        else if (t.tokenType === lexer_1.TokenType.Namespace) {
            p.phraseType = phrase_1.PhraseType.RelativeQualifiedName;
            next();
            expect(lexer_1.TokenType.Backslash);
        }
        p.children.push(namespaceName());
        return end();
    }
    function isQualifiedNameStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Backslash:
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
                return true;
            default:
                return false;
        }
    }
    function shortArrayCreationExpression() {
        let p = start(phrase_1.PhraseType.ArrayCreationExpression);
        next();
        if (isArrayElementStart(peek())) {
            p.children.push(arrayInitialiserList(lexer_1.TokenType.CloseBracket));
        }
        expect(lexer_1.TokenType.CloseBracket);
        return end();
    }
    function longArrayCreationExpression() {
        let p = start(phrase_1.PhraseType.ArrayCreationExpression);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        if (isArrayElementStart(peek())) {
            p.children.push(arrayInitialiserList(lexer_1.TokenType.CloseParenthesis));
        }
        expect(lexer_1.TokenType.CloseParenthesis);
        return end();
    }
    function isArrayElementStart(t) {
        return t.tokenType === lexer_1.TokenType.Ampersand || isExpressionStart(t);
    }
    function arrayInitialiserList(breakOn) {
        let p = start(phrase_1.PhraseType.ArrayInitialiserList);
        let t;
        let arrayInitialiserListRecoverSet = [breakOn, lexer_1.TokenType.Comma];
        recoverSetStack.push(arrayInitialiserListRecoverSet);
        while (true) {
            if (isArrayElementStart(peek())) {
                p.children.push(arrayElement());
            }
            t = peek();
            if (t.tokenType === lexer_1.TokenType.Comma) {
                next();
            }
            else if (t.tokenType === breakOn) {
                break;
            }
            else {
                error();
                if (isArrayElementStart(t)) {
                    continue;
                }
                else {
                    defaultSyncStrategy();
                    t = peek();
                    if (t.tokenType === lexer_1.TokenType.Comma || t.tokenType === breakOn) {
                        continue;
                    }
                }
                break;
            }
        }
        recoverSetStack.pop();
        return end();
    }
    function arrayValue() {
        let p = start(phrase_1.PhraseType.ArrayValue);
        optional(lexer_1.TokenType.Ampersand);
        p.children.push(expression(0));
        return end();
    }
    function arrayKey() {
        let p = start(phrase_1.PhraseType.ArrayKey);
        p.children.push(expression(0));
        return end();
    }
    function arrayElement() {
        let p = start(phrase_1.PhraseType.ArrayElement);
        if (peek().tokenType === lexer_1.TokenType.Ampersand) {
            p.children.push(arrayValue());
            return end();
        }
        let keyOrValue = arrayKey();
        p.children.push(keyOrValue);
        if (!optional(lexer_1.TokenType.FatArrow)) {
            keyOrValue.phraseType = phrase_1.PhraseType.ArrayValue;
            return end();
        }
        p.children.push(arrayValue());
        return end();
    }
    function encapsulatedExpression(openTokenType, closeTokenType) {
        let p = start(phrase_1.PhraseType.EncapsulatedExpression);
        expect(openTokenType);
        p.children.push(expression(0));
        expect(closeTokenType);
        return end();
    }
    function relativeScope() {
        let p = start(phrase_1.PhraseType.RelativeScope);
        next();
        return end();
    }
    function variableAtom() {
        let t = peek();
        switch (t.tokenType) {
            case lexer_1.TokenType.VariableName:
            case lexer_1.TokenType.Dollar:
                return simpleVariable();
            case lexer_1.TokenType.OpenParenthesis:
                return encapsulatedExpression(lexer_1.TokenType.OpenParenthesis, lexer_1.TokenType.CloseParenthesis);
            case lexer_1.TokenType.Array:
                return longArrayCreationExpression();
            case lexer_1.TokenType.OpenBracket:
                return shortArrayCreationExpression();
            case lexer_1.TokenType.StringLiteral:
                return next(true);
            case lexer_1.TokenType.Static:
                return relativeScope();
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.Backslash:
                return qualifiedName();
            default:
                let p = start(phrase_1.PhraseType.ErrorVariableAtom);
                error();
                return end();
        }
    }
    function simpleVariable() {
        let p = start(phrase_1.PhraseType.SimpleVariable);
        let t = expectOneOf([lexer_1.TokenType.VariableName, lexer_1.TokenType.Dollar]);
        if (t && t.tokenType === lexer_1.TokenType.Dollar) {
            t = peek();
            if (t.tokenType === lexer_1.TokenType.OpenBrace) {
                p.children.push(encapsulatedExpression(lexer_1.TokenType.OpenBrace, lexer_1.TokenType.CloseBrace));
            }
            else if (t.tokenType === lexer_1.TokenType.Dollar || t.tokenType === lexer_1.TokenType.VariableName) {
                p.children.push(simpleVariable());
            }
            else {
                error();
            }
        }
        return end();
    }
    function haltCompilerStatement() {
        let p = start(phrase_1.PhraseType.HaltCompilerStatement);
        next();
        expect(lexer_1.TokenType.OpenParenthesis);
        expect(lexer_1.TokenType.CloseParenthesis);
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function namespaceUseDeclaration() {
        let p = start(phrase_1.PhraseType.NamespaceUseDeclaration);
        next();
        optionalOneOf([lexer_1.TokenType.Function, lexer_1.TokenType.Const]);
        optional(lexer_1.TokenType.Backslash);
        let nsNameNode = namespaceName();
        let t = peek();
        if (t.tokenType === lexer_1.TokenType.Backslash || t.tokenType === lexer_1.TokenType.OpenBrace) {
            p.children.push(nsNameNode);
            expect(lexer_1.TokenType.Backslash);
            expect(lexer_1.TokenType.OpenBrace);
            p.children.push(delimitedList(phrase_1.PhraseType.NamespaceUseGroupClauseList, namespaceUseGroupClause, isNamespaceUseGroupClauseStartToken, lexer_1.TokenType.Comma, [lexer_1.TokenType.CloseBrace]));
            expect(lexer_1.TokenType.CloseBrace);
            expect(lexer_1.TokenType.Semicolon);
            return end();
        }
        p.children.push(delimitedList(phrase_1.PhraseType.NamespaceUseClauseList, namespaceUseClauseFunction(nsNameNode), isNamespaceUseClauseStartToken, lexer_1.TokenType.Comma, [lexer_1.TokenType.Semicolon], true));
        expect(lexer_1.TokenType.Semicolon);
        return end();
    }
    function isNamespaceUseClauseStartToken(t) {
        return t.tokenType === lexer_1.TokenType.Name || t.tokenType === lexer_1.TokenType.Backslash;
    }
    function namespaceUseClauseFunction(nsName) {
        return () => {
            let p = start(phrase_1.PhraseType.NamespaceUseClause, !!nsName);
            if (nsName) {
                p.children.push(nsName);
                nsName = null;
            }
            else {
                p.children.push(namespaceName());
            }
            if (peek().tokenType === lexer_1.TokenType.As) {
                p.children.push(namespaceAliasingClause());
            }
            return end();
        };
    }
    function delimitedList(phraseType, elementFunction, elementStartPredicate, delimiter, breakOn, doNotPushHiddenToParent) {
        let p = start(phraseType, doNotPushHiddenToParent);
        let t;
        let delimitedListRecoverSet = breakOn ? breakOn.slice(0) : [];
        delimitedListRecoverSet.push(delimiter);
        recoverSetStack.push(delimitedListRecoverSet);
        while (true) {
            p.children.push(elementFunction());
            t = peek();
            if (t.tokenType === delimiter) {
                next();
            }
            else if (!breakOn || breakOn.indexOf(t.tokenType) >= 0) {
                break;
            }
            else {
                error();
                if (elementStartPredicate(t)) {
                    continue;
                }
                else if (breakOn) {
                    defaultSyncStrategy();
                    if (peek().tokenType === delimiter) {
                        continue;
                    }
                }
                break;
            }
        }
        recoverSetStack.pop();
        return end();
    }
    function isNamespaceUseGroupClauseStartToken(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Const:
            case lexer_1.TokenType.Function:
            case lexer_1.TokenType.Name:
                return true;
            default:
                return false;
        }
    }
    function namespaceUseGroupClause() {
        let p = start(phrase_1.PhraseType.NamespaceUseGroupClause);
        optionalOneOf([lexer_1.TokenType.Function, lexer_1.TokenType.Const]);
        p.children.push(namespaceName());
        if (peek().tokenType === lexer_1.TokenType.As) {
            p.children.push(namespaceAliasingClause());
        }
        return end();
    }
    function namespaceAliasingClause() {
        let p = start(phrase_1.PhraseType.NamespaceAliasingClause);
        next();
        expect(lexer_1.TokenType.Name);
        return end();
    }
    function namespaceDefinition() {
        let p = start(phrase_1.PhraseType.NamespaceDefinition);
        next();
        if (peek().tokenType === lexer_1.TokenType.Name) {
            p.children.push(namespaceName());
            let t = expectOneOf([lexer_1.TokenType.Semicolon, lexer_1.TokenType.OpenBrace]);
            if (!t || t.tokenType !== lexer_1.TokenType.OpenBrace) {
                return end();
            }
        }
        else {
            expect(lexer_1.TokenType.OpenBrace);
        }
        p.children.push(statementList([lexer_1.TokenType.CloseBrace]));
        expect(lexer_1.TokenType.CloseBrace);
        return end();
    }
    function namespaceName() {
        start(phrase_1.PhraseType.NamespaceName);
        expect(lexer_1.TokenType.Name);
        while (true) {
            if (peek().tokenType === lexer_1.TokenType.Backslash &&
                peek(1).tokenType === lexer_1.TokenType.Name) {
                next();
                next();
            }
            else {
                break;
            }
        }
        return end();
    }
    function isReservedToken(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Include:
            case lexer_1.TokenType.IncludeOnce:
            case lexer_1.TokenType.Eval:
            case lexer_1.TokenType.Require:
            case lexer_1.TokenType.RequireOnce:
            case lexer_1.TokenType.Or:
            case lexer_1.TokenType.Xor:
            case lexer_1.TokenType.And:
            case lexer_1.TokenType.InstanceOf:
            case lexer_1.TokenType.New:
            case lexer_1.TokenType.Clone:
            case lexer_1.TokenType.Exit:
            case lexer_1.TokenType.If:
            case lexer_1.TokenType.ElseIf:
            case lexer_1.TokenType.Else:
            case lexer_1.TokenType.EndIf:
            case lexer_1.TokenType.Echo:
            case lexer_1.TokenType.Do:
            case lexer_1.TokenType.While:
            case lexer_1.TokenType.EndWhile:
            case lexer_1.TokenType.For:
            case lexer_1.TokenType.EndFor:
            case lexer_1.TokenType.ForEach:
            case lexer_1.TokenType.EndForeach:
            case lexer_1.TokenType.Declare:
            case lexer_1.TokenType.EndDeclare:
            case lexer_1.TokenType.As:
            case lexer_1.TokenType.Try:
            case lexer_1.TokenType.Catch:
            case lexer_1.TokenType.Finally:
            case lexer_1.TokenType.Throw:
            case lexer_1.TokenType.Use:
            case lexer_1.TokenType.InsteadOf:
            case lexer_1.TokenType.Global:
            case lexer_1.TokenType.Var:
            case lexer_1.TokenType.Unset:
            case lexer_1.TokenType.Isset:
            case lexer_1.TokenType.Empty:
            case lexer_1.TokenType.Continue:
            case lexer_1.TokenType.Goto:
            case lexer_1.TokenType.Function:
            case lexer_1.TokenType.Const:
            case lexer_1.TokenType.Return:
            case lexer_1.TokenType.Print:
            case lexer_1.TokenType.Yield:
            case lexer_1.TokenType.List:
            case lexer_1.TokenType.Switch:
            case lexer_1.TokenType.EndSwitch:
            case lexer_1.TokenType.Case:
            case lexer_1.TokenType.Default:
            case lexer_1.TokenType.Break:
            case lexer_1.TokenType.Array:
            case lexer_1.TokenType.Callable:
            case lexer_1.TokenType.Extends:
            case lexer_1.TokenType.Implements:
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.Trait:
            case lexer_1.TokenType.Interface:
            case lexer_1.TokenType.Class:
            case lexer_1.TokenType.ClassConstant:
            case lexer_1.TokenType.TraitConstant:
            case lexer_1.TokenType.FunctionConstant:
            case lexer_1.TokenType.MethodConstant:
            case lexer_1.TokenType.LineConstant:
            case lexer_1.TokenType.FileConstant:
            case lexer_1.TokenType.DirectoryConstant:
            case lexer_1.TokenType.NamespaceConstant:
                return true;
            default:
                return false;
        }
    }
    function isSemiReservedToken(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Static:
            case lexer_1.TokenType.Abstract:
            case lexer_1.TokenType.Final:
            case lexer_1.TokenType.Private:
            case lexer_1.TokenType.Protected:
            case lexer_1.TokenType.Public:
                return true;
            default:
                return isReservedToken(t);
        }
    }
    function isStatementStart(t) {
        switch (t.tokenType) {
            case lexer_1.TokenType.Namespace:
            case lexer_1.TokenType.Use:
            case lexer_1.TokenType.HaltCompiler:
            case lexer_1.TokenType.Const:
            case lexer_1.TokenType.Function:
            case lexer_1.TokenType.Class:
            case lexer_1.TokenType.Abstract:
            case lexer_1.TokenType.Final:
            case lexer_1.TokenType.Trait:
            case lexer_1.TokenType.Interface:
            case lexer_1.TokenType.OpenBrace:
            case lexer_1.TokenType.If:
            case lexer_1.TokenType.While:
            case lexer_1.TokenType.Do:
            case lexer_1.TokenType.For:
            case lexer_1.TokenType.Switch:
            case lexer_1.TokenType.Break:
            case lexer_1.TokenType.Continue:
            case lexer_1.TokenType.Return:
            case lexer_1.TokenType.Global:
            case lexer_1.TokenType.Static:
            case lexer_1.TokenType.Echo:
            case lexer_1.TokenType.Unset:
            case lexer_1.TokenType.ForEach:
            case lexer_1.TokenType.Declare:
            case lexer_1.TokenType.Try:
            case lexer_1.TokenType.Throw:
            case lexer_1.TokenType.Goto:
            case lexer_1.TokenType.Name:
            case lexer_1.TokenType.Semicolon:
            case lexer_1.TokenType.CloseTag:
            case lexer_1.TokenType.Text:
            case lexer_1.TokenType.OpenTag:
            case lexer_1.TokenType.OpenTagEcho:
                return true;
            default:
                return isExpressionStart(t);
        }
    }
})(Parser = exports.Parser || (exports.Parser = {}));
