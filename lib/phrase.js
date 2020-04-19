'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var PhraseType;
(function (PhraseType) {
    PhraseType[PhraseType["Unknown"] = 0] = "Unknown";
    PhraseType[PhraseType["AdditiveExpression"] = 1] = "AdditiveExpression";
    PhraseType[PhraseType["AnonymousClassDeclaration"] = 2] = "AnonymousClassDeclaration";
    PhraseType[PhraseType["AnonymousClassDeclarationHeader"] = 3] = "AnonymousClassDeclarationHeader";
    PhraseType[PhraseType["AnonymousFunctionCreationExpression"] = 4] = "AnonymousFunctionCreationExpression";
    PhraseType[PhraseType["AnonymousFunctionHeader"] = 5] = "AnonymousFunctionHeader";
    PhraseType[PhraseType["AnonymousFunctionUseClause"] = 6] = "AnonymousFunctionUseClause";
    PhraseType[PhraseType["AnonymousFunctionUseVariable"] = 7] = "AnonymousFunctionUseVariable";
    PhraseType[PhraseType["ArgumentExpressionList"] = 8] = "ArgumentExpressionList";
    PhraseType[PhraseType["ArrayCreationExpression"] = 9] = "ArrayCreationExpression";
    PhraseType[PhraseType["ArrayElement"] = 10] = "ArrayElement";
    PhraseType[PhraseType["ArrayInitialiserList"] = 11] = "ArrayInitialiserList";
    PhraseType[PhraseType["ArrayKey"] = 12] = "ArrayKey";
    PhraseType[PhraseType["ArrayValue"] = 13] = "ArrayValue";
    PhraseType[PhraseType["BitwiseExpression"] = 14] = "BitwiseExpression";
    PhraseType[PhraseType["BreakStatement"] = 15] = "BreakStatement";
    PhraseType[PhraseType["ByRefAssignmentExpression"] = 16] = "ByRefAssignmentExpression";
    PhraseType[PhraseType["CaseStatement"] = 17] = "CaseStatement";
    PhraseType[PhraseType["CaseStatementList"] = 18] = "CaseStatementList";
    PhraseType[PhraseType["CastExpression"] = 19] = "CastExpression";
    PhraseType[PhraseType["CatchClause"] = 20] = "CatchClause";
    PhraseType[PhraseType["CatchClauseList"] = 21] = "CatchClauseList";
    PhraseType[PhraseType["CatchNameList"] = 22] = "CatchNameList";
    PhraseType[PhraseType["ClassBaseClause"] = 23] = "ClassBaseClause";
    PhraseType[PhraseType["ClassConstantAccessExpression"] = 24] = "ClassConstantAccessExpression";
    PhraseType[PhraseType["ClassConstDeclaration"] = 25] = "ClassConstDeclaration";
    PhraseType[PhraseType["ClassConstElement"] = 26] = "ClassConstElement";
    PhraseType[PhraseType["ClassConstElementList"] = 27] = "ClassConstElementList";
    PhraseType[PhraseType["ClassDeclaration"] = 28] = "ClassDeclaration";
    PhraseType[PhraseType["ClassDeclarationBody"] = 29] = "ClassDeclarationBody";
    PhraseType[PhraseType["ClassDeclarationHeader"] = 30] = "ClassDeclarationHeader";
    PhraseType[PhraseType["ClassInterfaceClause"] = 31] = "ClassInterfaceClause";
    PhraseType[PhraseType["ClassMemberDeclarationList"] = 32] = "ClassMemberDeclarationList";
    PhraseType[PhraseType["ClassModifiers"] = 33] = "ClassModifiers";
    PhraseType[PhraseType["ClassTypeDesignator"] = 34] = "ClassTypeDesignator";
    PhraseType[PhraseType["CloneExpression"] = 35] = "CloneExpression";
    PhraseType[PhraseType["ClosureUseList"] = 36] = "ClosureUseList";
    PhraseType[PhraseType["CoalesceExpression"] = 37] = "CoalesceExpression";
    PhraseType[PhraseType["CompoundAssignmentExpression"] = 38] = "CompoundAssignmentExpression";
    PhraseType[PhraseType["CompoundStatement"] = 39] = "CompoundStatement";
    PhraseType[PhraseType["TernaryExpression"] = 40] = "TernaryExpression";
    PhraseType[PhraseType["ConstantAccessExpression"] = 41] = "ConstantAccessExpression";
    PhraseType[PhraseType["ConstDeclaration"] = 42] = "ConstDeclaration";
    PhraseType[PhraseType["ConstElement"] = 43] = "ConstElement";
    PhraseType[PhraseType["ConstElementList"] = 44] = "ConstElementList";
    PhraseType[PhraseType["ContinueStatement"] = 45] = "ContinueStatement";
    PhraseType[PhraseType["DeclareDirective"] = 46] = "DeclareDirective";
    PhraseType[PhraseType["DeclareStatement"] = 47] = "DeclareStatement";
    PhraseType[PhraseType["DefaultStatement"] = 48] = "DefaultStatement";
    PhraseType[PhraseType["DoStatement"] = 49] = "DoStatement";
    PhraseType[PhraseType["DoubleQuotedStringLiteral"] = 50] = "DoubleQuotedStringLiteral";
    PhraseType[PhraseType["EchoIntrinsic"] = 51] = "EchoIntrinsic";
    PhraseType[PhraseType["ElseClause"] = 52] = "ElseClause";
    PhraseType[PhraseType["ElseIfClause"] = 53] = "ElseIfClause";
    PhraseType[PhraseType["ElseIfClauseList"] = 54] = "ElseIfClauseList";
    PhraseType[PhraseType["EmptyIntrinsic"] = 55] = "EmptyIntrinsic";
    PhraseType[PhraseType["EncapsulatedExpression"] = 56] = "EncapsulatedExpression";
    PhraseType[PhraseType["EncapsulatedVariable"] = 57] = "EncapsulatedVariable";
    PhraseType[PhraseType["EncapsulatedVariableList"] = 58] = "EncapsulatedVariableList";
    PhraseType[PhraseType["EqualityExpression"] = 59] = "EqualityExpression";
    PhraseType[PhraseType["Error"] = 60] = "Error";
    PhraseType[PhraseType["ErrorClassMemberDeclaration"] = 61] = "ErrorClassMemberDeclaration";
    PhraseType[PhraseType["ErrorClassTypeDesignatorAtom"] = 62] = "ErrorClassTypeDesignatorAtom";
    PhraseType[PhraseType["ErrorControlExpression"] = 63] = "ErrorControlExpression";
    PhraseType[PhraseType["ErrorExpression"] = 64] = "ErrorExpression";
    PhraseType[PhraseType["ErrorScopedAccessExpression"] = 65] = "ErrorScopedAccessExpression";
    PhraseType[PhraseType["ErrorTraitAdaptation"] = 66] = "ErrorTraitAdaptation";
    PhraseType[PhraseType["ErrorVariable"] = 67] = "ErrorVariable";
    PhraseType[PhraseType["ErrorVariableAtom"] = 68] = "ErrorVariableAtom";
    PhraseType[PhraseType["EvalIntrinsic"] = 69] = "EvalIntrinsic";
    PhraseType[PhraseType["ExitIntrinsic"] = 70] = "ExitIntrinsic";
    PhraseType[PhraseType["ExponentiationExpression"] = 71] = "ExponentiationExpression";
    PhraseType[PhraseType["ExpressionList"] = 72] = "ExpressionList";
    PhraseType[PhraseType["ExpressionStatement"] = 73] = "ExpressionStatement";
    PhraseType[PhraseType["FinallyClause"] = 74] = "FinallyClause";
    PhraseType[PhraseType["ForControl"] = 75] = "ForControl";
    PhraseType[PhraseType["ForeachCollection"] = 76] = "ForeachCollection";
    PhraseType[PhraseType["ForeachKey"] = 77] = "ForeachKey";
    PhraseType[PhraseType["ForeachStatement"] = 78] = "ForeachStatement";
    PhraseType[PhraseType["ForeachValue"] = 79] = "ForeachValue";
    PhraseType[PhraseType["ForEndOfLoop"] = 80] = "ForEndOfLoop";
    PhraseType[PhraseType["ForExpressionGroup"] = 81] = "ForExpressionGroup";
    PhraseType[PhraseType["ForInitialiser"] = 82] = "ForInitialiser";
    PhraseType[PhraseType["ForStatement"] = 83] = "ForStatement";
    PhraseType[PhraseType["FullyQualifiedName"] = 84] = "FullyQualifiedName";
    PhraseType[PhraseType["FunctionCallExpression"] = 85] = "FunctionCallExpression";
    PhraseType[PhraseType["FunctionDeclaration"] = 86] = "FunctionDeclaration";
    PhraseType[PhraseType["FunctionDeclarationBody"] = 87] = "FunctionDeclarationBody";
    PhraseType[PhraseType["FunctionDeclarationHeader"] = 88] = "FunctionDeclarationHeader";
    PhraseType[PhraseType["FunctionStaticDeclaration"] = 89] = "FunctionStaticDeclaration";
    PhraseType[PhraseType["FunctionStaticInitialiser"] = 90] = "FunctionStaticInitialiser";
    PhraseType[PhraseType["GlobalDeclaration"] = 91] = "GlobalDeclaration";
    PhraseType[PhraseType["GotoStatement"] = 92] = "GotoStatement";
    PhraseType[PhraseType["HaltCompilerStatement"] = 93] = "HaltCompilerStatement";
    PhraseType[PhraseType["HeredocStringLiteral"] = 94] = "HeredocStringLiteral";
    PhraseType[PhraseType["Identifier"] = 95] = "Identifier";
    PhraseType[PhraseType["IfStatement"] = 96] = "IfStatement";
    PhraseType[PhraseType["IncludeExpression"] = 97] = "IncludeExpression";
    PhraseType[PhraseType["IncludeOnceExpression"] = 98] = "IncludeOnceExpression";
    PhraseType[PhraseType["InlineText"] = 99] = "InlineText";
    PhraseType[PhraseType["InstanceOfExpression"] = 100] = "InstanceOfExpression";
    PhraseType[PhraseType["InstanceofTypeDesignator"] = 101] = "InstanceofTypeDesignator";
    PhraseType[PhraseType["InterfaceBaseClause"] = 102] = "InterfaceBaseClause";
    PhraseType[PhraseType["InterfaceDeclaration"] = 103] = "InterfaceDeclaration";
    PhraseType[PhraseType["InterfaceDeclarationBody"] = 104] = "InterfaceDeclarationBody";
    PhraseType[PhraseType["InterfaceDeclarationHeader"] = 105] = "InterfaceDeclarationHeader";
    PhraseType[PhraseType["InterfaceMemberDeclarationList"] = 106] = "InterfaceMemberDeclarationList";
    PhraseType[PhraseType["IssetIntrinsic"] = 107] = "IssetIntrinsic";
    PhraseType[PhraseType["ListIntrinsic"] = 108] = "ListIntrinsic";
    PhraseType[PhraseType["LogicalExpression"] = 109] = "LogicalExpression";
    PhraseType[PhraseType["MemberModifierList"] = 110] = "MemberModifierList";
    PhraseType[PhraseType["MemberName"] = 111] = "MemberName";
    PhraseType[PhraseType["MethodCallExpression"] = 112] = "MethodCallExpression";
    PhraseType[PhraseType["MethodDeclaration"] = 113] = "MethodDeclaration";
    PhraseType[PhraseType["MethodDeclarationBody"] = 114] = "MethodDeclarationBody";
    PhraseType[PhraseType["MethodDeclarationHeader"] = 115] = "MethodDeclarationHeader";
    PhraseType[PhraseType["MethodReference"] = 116] = "MethodReference";
    PhraseType[PhraseType["MultiplicativeExpression"] = 117] = "MultiplicativeExpression";
    PhraseType[PhraseType["NamedLabelStatement"] = 118] = "NamedLabelStatement";
    PhraseType[PhraseType["NamespaceAliasingClause"] = 119] = "NamespaceAliasingClause";
    PhraseType[PhraseType["NamespaceDefinition"] = 120] = "NamespaceDefinition";
    PhraseType[PhraseType["NamespaceName"] = 121] = "NamespaceName";
    PhraseType[PhraseType["NamespaceUseClause"] = 122] = "NamespaceUseClause";
    PhraseType[PhraseType["NamespaceUseClauseList"] = 123] = "NamespaceUseClauseList";
    PhraseType[PhraseType["NamespaceUseDeclaration"] = 124] = "NamespaceUseDeclaration";
    PhraseType[PhraseType["NamespaceUseGroupClause"] = 125] = "NamespaceUseGroupClause";
    PhraseType[PhraseType["NamespaceUseGroupClauseList"] = 126] = "NamespaceUseGroupClauseList";
    PhraseType[PhraseType["NullStatement"] = 127] = "NullStatement";
    PhraseType[PhraseType["ObjectCreationExpression"] = 128] = "ObjectCreationExpression";
    PhraseType[PhraseType["ParameterDeclaration"] = 129] = "ParameterDeclaration";
    PhraseType[PhraseType["ParameterDeclarationList"] = 130] = "ParameterDeclarationList";
    PhraseType[PhraseType["PostfixDecrementExpression"] = 131] = "PostfixDecrementExpression";
    PhraseType[PhraseType["PostfixIncrementExpression"] = 132] = "PostfixIncrementExpression";
    PhraseType[PhraseType["PrefixDecrementExpression"] = 133] = "PrefixDecrementExpression";
    PhraseType[PhraseType["PrefixIncrementExpression"] = 134] = "PrefixIncrementExpression";
    PhraseType[PhraseType["PrintIntrinsic"] = 135] = "PrintIntrinsic";
    PhraseType[PhraseType["PropertyAccessExpression"] = 136] = "PropertyAccessExpression";
    PhraseType[PhraseType["PropertyDeclaration"] = 137] = "PropertyDeclaration";
    PhraseType[PhraseType["PropertyElement"] = 138] = "PropertyElement";
    PhraseType[PhraseType["PropertyElementList"] = 139] = "PropertyElementList";
    PhraseType[PhraseType["PropertyInitialiser"] = 140] = "PropertyInitialiser";
    PhraseType[PhraseType["QualifiedName"] = 141] = "QualifiedName";
    PhraseType[PhraseType["QualifiedNameList"] = 142] = "QualifiedNameList";
    PhraseType[PhraseType["RelationalExpression"] = 143] = "RelationalExpression";
    PhraseType[PhraseType["RelativeQualifiedName"] = 144] = "RelativeQualifiedName";
    PhraseType[PhraseType["RelativeScope"] = 145] = "RelativeScope";
    PhraseType[PhraseType["RequireExpression"] = 146] = "RequireExpression";
    PhraseType[PhraseType["RequireOnceExpression"] = 147] = "RequireOnceExpression";
    PhraseType[PhraseType["ReturnStatement"] = 148] = "ReturnStatement";
    PhraseType[PhraseType["ReturnType"] = 149] = "ReturnType";
    PhraseType[PhraseType["ScopedCallExpression"] = 150] = "ScopedCallExpression";
    PhraseType[PhraseType["ScopedMemberName"] = 151] = "ScopedMemberName";
    PhraseType[PhraseType["ScopedPropertyAccessExpression"] = 152] = "ScopedPropertyAccessExpression";
    PhraseType[PhraseType["ShellCommandExpression"] = 153] = "ShellCommandExpression";
    PhraseType[PhraseType["ShiftExpression"] = 154] = "ShiftExpression";
    PhraseType[PhraseType["SimpleAssignmentExpression"] = 155] = "SimpleAssignmentExpression";
    PhraseType[PhraseType["SimpleVariable"] = 156] = "SimpleVariable";
    PhraseType[PhraseType["StatementList"] = 157] = "StatementList";
    PhraseType[PhraseType["StaticVariableDeclaration"] = 158] = "StaticVariableDeclaration";
    PhraseType[PhraseType["StaticVariableDeclarationList"] = 159] = "StaticVariableDeclarationList";
    PhraseType[PhraseType["SubscriptExpression"] = 160] = "SubscriptExpression";
    PhraseType[PhraseType["SwitchStatement"] = 161] = "SwitchStatement";
    PhraseType[PhraseType["ThrowStatement"] = 162] = "ThrowStatement";
    PhraseType[PhraseType["TraitAdaptationList"] = 163] = "TraitAdaptationList";
    PhraseType[PhraseType["TraitAlias"] = 164] = "TraitAlias";
    PhraseType[PhraseType["TraitDeclaration"] = 165] = "TraitDeclaration";
    PhraseType[PhraseType["TraitDeclarationBody"] = 166] = "TraitDeclarationBody";
    PhraseType[PhraseType["TraitDeclarationHeader"] = 167] = "TraitDeclarationHeader";
    PhraseType[PhraseType["TraitMemberDeclarationList"] = 168] = "TraitMemberDeclarationList";
    PhraseType[PhraseType["TraitPrecedence"] = 169] = "TraitPrecedence";
    PhraseType[PhraseType["TraitUseClause"] = 170] = "TraitUseClause";
    PhraseType[PhraseType["TraitUseSpecification"] = 171] = "TraitUseSpecification";
    PhraseType[PhraseType["TryStatement"] = 172] = "TryStatement";
    PhraseType[PhraseType["TypeDeclaration"] = 173] = "TypeDeclaration";
    PhraseType[PhraseType["UnaryOpExpression"] = 174] = "UnaryOpExpression";
    PhraseType[PhraseType["UnsetIntrinsic"] = 175] = "UnsetIntrinsic";
    PhraseType[PhraseType["VariableList"] = 176] = "VariableList";
    PhraseType[PhraseType["VariableNameList"] = 177] = "VariableNameList";
    PhraseType[PhraseType["VariadicUnpacking"] = 178] = "VariadicUnpacking";
    PhraseType[PhraseType["WhileStatement"] = 179] = "WhileStatement";
    PhraseType[PhraseType["YieldExpression"] = 180] = "YieldExpression";
    PhraseType[PhraseType["YieldFromExpression"] = 181] = "YieldFromExpression";
})(PhraseType = exports.PhraseType || (exports.PhraseType = {}));
function phraseTypeToString(type) {
    switch (type) {
        case PhraseType.Unknown:
            return 'Unknown';
        case PhraseType.AdditiveExpression:
            return 'AdditiveExpression';
        case PhraseType.AnonymousClassDeclaration:
            return 'AnonymousClassDeclaration';
        case PhraseType.AnonymousClassDeclarationHeader:
            return 'AnonymousClassDeclarationHeader';
        case PhraseType.AnonymousFunctionCreationExpression:
            return 'AnonymousFunctionCreationExpression';
        case PhraseType.AnonymousFunctionHeader:
            return 'AnonymousFunctionHeader';
        case PhraseType.AnonymousFunctionUseClause:
            return 'AnonymousFunctionUseClause';
        case PhraseType.AnonymousFunctionUseVariable:
            return 'AnonymousFunctionUseVariable';
        case PhraseType.ArgumentExpressionList:
            return 'ArgumentExpressionList';
        case PhraseType.ArrayCreationExpression:
            return 'ArrayCreationExpression';
        case PhraseType.ArrayElement:
            return 'ArrayElement';
        case PhraseType.ArrayInitialiserList:
            return 'ArrayInitialiserList';
        case PhraseType.ArrayKey:
            return 'ArrayKey';
        case PhraseType.ArrayValue:
            return 'ArrayValue';
        case PhraseType.BitwiseExpression:
            return 'BitwiseExpression';
        case PhraseType.BreakStatement:
            return 'BreakStatement';
        case PhraseType.ByRefAssignmentExpression:
            return 'ByRefAssignmentExpression';
        case PhraseType.CaseStatement:
            return 'CaseStatement';
        case PhraseType.CaseStatementList:
            return 'CaseStatementList';
        case PhraseType.CastExpression:
            return 'CastExpression';
        case PhraseType.CatchClause:
            return 'CatchClause';
        case PhraseType.CatchClauseList:
            return 'CatchClauseList';
        case PhraseType.CatchNameList:
            return 'CatchNameList';
        case PhraseType.ClassBaseClause:
            return 'ClassBaseClause';
        case PhraseType.ClassConstantAccessExpression:
            return 'ClassConstantAccessExpression';
        case PhraseType.ClassConstDeclaration:
            return 'ClassConstDeclaration';
        case PhraseType.ClassConstElement:
            return 'ClassConstElement';
        case PhraseType.ClassConstElementList:
            return 'ClassConstElementList';
        case PhraseType.ClassDeclaration:
            return 'ClassDeclaration';
        case PhraseType.ClassDeclarationBody:
            return 'ClassDeclarationBody';
        case PhraseType.ClassDeclarationHeader:
            return 'ClassDeclarationHeader';
        case PhraseType.ClassInterfaceClause:
            return 'ClassInterfaceClause';
        case PhraseType.ClassMemberDeclarationList:
            return 'ClassMemberDeclarationList';
        case PhraseType.ClassModifiers:
            return 'ClassModifiers';
        case PhraseType.ClassTypeDesignator:
            return 'ClassTypeDesignator';
        case PhraseType.CloneExpression:
            return 'CloneExpression';
        case PhraseType.ClosureUseList:
            return 'ClosureUseList';
        case PhraseType.CoalesceExpression:
            return 'CoalesceExpression';
        case PhraseType.CompoundAssignmentExpression:
            return 'CompoundAssignmentExpression';
        case PhraseType.CompoundStatement:
            return 'CompoundStatement';
        case PhraseType.TernaryExpression:
            return 'TernaryExpression';
        case PhraseType.ConstantAccessExpression:
            return 'ConstantAccessExpression';
        case PhraseType.ConstDeclaration:
            return 'ConstDeclaration';
        case PhraseType.ConstElement:
            return 'ConstElement';
        case PhraseType.ConstElementList:
            return 'ConstElementList';
        case PhraseType.ContinueStatement:
            return 'ContinueStatement';
        case PhraseType.DeclareDirective:
            return 'DeclareDirective';
        case PhraseType.DeclareStatement:
            return 'DeclareStatement';
        case PhraseType.DefaultStatement:
            return 'DefaultStatement';
        case PhraseType.DoStatement:
            return 'DoStatement';
        case PhraseType.DoubleQuotedStringLiteral:
            return 'DoubleQuotedStringLiteral';
        case PhraseType.EchoIntrinsic:
            return 'EchoIntrinsic';
        case PhraseType.ElseClause:
            return 'ElseClause';
        case PhraseType.ElseIfClause:
            return 'ElseIfClause';
        case PhraseType.ElseIfClauseList:
            return 'ElseIfClauseList';
        case PhraseType.EmptyIntrinsic:
            return 'EmptyIntrinsic';
        case PhraseType.EncapsulatedExpression:
            return 'EncapsulatedExpression';
        case PhraseType.EncapsulatedVariable:
            return 'EncapsulatedVariable';
        case PhraseType.EncapsulatedVariableList:
            return 'EncapsulatedVariableList';
        case PhraseType.EqualityExpression:
            return 'EqualityExpression';
        case PhraseType.Error:
            return 'Error';
        case PhraseType.ErrorClassMemberDeclaration:
            return 'ErrorClassMemberDeclaration';
        case PhraseType.ErrorClassTypeDesignatorAtom:
            return 'ErrorClassTypeDesignatorAtom';
        case PhraseType.ErrorControlExpression:
            return 'ErrorControlExpression';
        case PhraseType.ErrorExpression:
            return 'ErrorExpression';
        case PhraseType.ErrorScopedAccessExpression:
            return 'ErrorScopedAccessExpression';
        case PhraseType.ErrorTraitAdaptation:
            return 'ErrorTraitAdaptation';
        case PhraseType.ErrorVariable:
            return 'ErrorVariable';
        case PhraseType.ErrorVariableAtom:
            return 'ErrorVariableAtom';
        case PhraseType.EvalIntrinsic:
            return 'EvalIntrinsic';
        case PhraseType.ExitIntrinsic:
            return 'ExitIntrinsic';
        case PhraseType.ExponentiationExpression:
            return 'ExponentiationExpression';
        case PhraseType.ExpressionList:
            return 'ExpressionList';
        case PhraseType.ExpressionStatement:
            return 'ExpressionStatement';
        case PhraseType.FinallyClause:
            return 'FinallyClause';
        case PhraseType.ForControl:
            return 'ForControl';
        case PhraseType.ForeachCollection:
            return 'ForeachCollection';
        case PhraseType.ForeachKey:
            return 'ForeachKey';
        case PhraseType.ForeachStatement:
            return 'ForeachStatement';
        case PhraseType.ForeachValue:
            return 'ForeachValue';
        case PhraseType.ForEndOfLoop:
            return 'ForEndOfLoop';
        case PhraseType.ForExpressionGroup:
            return 'ForExpressionGroup';
        case PhraseType.ForInitialiser:
            return 'ForInitialiser';
        case PhraseType.ForStatement:
            return 'ForStatement';
        case PhraseType.FullyQualifiedName:
            return 'FullyQualifiedName';
        case PhraseType.FunctionCallExpression:
            return 'FunctionCallExpression';
        case PhraseType.FunctionDeclaration:
            return 'FunctionDeclaration';
        case PhraseType.FunctionDeclarationHeader:
            return 'FunctionDeclarationHeader';
        case PhraseType.FunctionDeclarationBody:
            return 'FunctionDeclarationBody';
        case PhraseType.FunctionStaticDeclaration:
            return 'FunctionStaticDeclaration';
        case PhraseType.FunctionStaticInitialiser:
            return 'FunctionStaticInitialiser';
        case PhraseType.GlobalDeclaration:
            return 'GlobalDeclaration';
        case PhraseType.GotoStatement:
            return 'GotoStatement';
        case PhraseType.HaltCompilerStatement:
            return 'HaltCompilerStatement';
        case PhraseType.HeredocStringLiteral:
            return 'HeredocStringLiteral';
        case PhraseType.Identifier:
            return 'Identifier';
        case PhraseType.IfStatement:
            return 'IfStatement';
        case PhraseType.IncludeExpression:
            return 'IncludeExpression';
        case PhraseType.IncludeOnceExpression:
            return 'IncludeOnceExpression';
        case PhraseType.InlineText:
            return 'InlineText';
        case PhraseType.InstanceOfExpression:
            return 'InstanceOfExpression';
        case PhraseType.InstanceofTypeDesignator:
            return 'InstanceofTypeDesignator';
        case PhraseType.InterfaceBaseClause:
            return 'InterfaceBaseClause';
        case PhraseType.InterfaceDeclaration:
            return 'InterfaceDeclaration';
        case PhraseType.InterfaceDeclarationBody:
            return 'InterfaceDeclarationBody';
        case PhraseType.InterfaceDeclarationHeader:
            return 'InterfaceDeclarationHeader';
        case PhraseType.InterfaceMemberDeclarationList:
            return 'InterfaceMemberDeclarationList';
        case PhraseType.IssetIntrinsic:
            return 'IssetIntrinsic';
        case PhraseType.ListIntrinsic:
            return 'ListIntrinsic';
        case PhraseType.LogicalExpression:
            return 'LogicalExpression';
        case PhraseType.MemberModifierList:
            return 'MemberModifierList';
        case PhraseType.MemberName:
            return 'MemberName';
        case PhraseType.MethodCallExpression:
            return 'MethodCallExpression';
        case PhraseType.MethodDeclaration:
            return 'MethodDeclaration';
        case PhraseType.MethodDeclarationBody:
            return 'MethodDeclarationBody';
        case PhraseType.MethodDeclarationHeader:
            return 'MethodDeclarationHeader';
        case PhraseType.MethodReference:
            return 'MethodReference';
        case PhraseType.MultiplicativeExpression:
            return 'MultiplicativeExpression';
        case PhraseType.NamedLabelStatement:
            return 'NamedLabelStatement';
        case PhraseType.NamespaceAliasingClause:
            return 'NamespaceAliasingClause';
        case PhraseType.NamespaceDefinition:
            return 'NamespaceDefinition';
        case PhraseType.NamespaceName:
            return 'NamespaceName';
        case PhraseType.NamespaceUseClause:
            return 'NamespaceUseClause';
        case PhraseType.NamespaceUseClauseList:
            return 'NamespaceUseClauseList';
        case PhraseType.NamespaceUseDeclaration:
            return 'NamespaceUseDeclaration';
        case PhraseType.NamespaceUseGroupClause:
            return 'NamespaceUseGroupClause';
        case PhraseType.NamespaceUseGroupClauseList:
            return 'NamespaceUseGroupClauseList';
        case PhraseType.NullStatement:
            return 'NullStatement';
        case PhraseType.ObjectCreationExpression:
            return 'ObjectCreationExpression';
        case PhraseType.ParameterDeclaration:
            return 'ParameterDeclaration';
        case PhraseType.ParameterDeclarationList:
            return 'ParameterDeclarationList';
        case PhraseType.PostfixDecrementExpression:
            return 'PostfixDecrementExpression';
        case PhraseType.PostfixIncrementExpression:
            return 'PostfixIncrementExpression';
        case PhraseType.PrefixDecrementExpression:
            return 'PrefixDecrementExpression';
        case PhraseType.PrefixIncrementExpression:
            return 'PrefixIncrementExpression';
        case PhraseType.PrintIntrinsic:
            return 'PrintIntrinsic';
        case PhraseType.PropertyAccessExpression:
            return 'PropertyAccessExpression';
        case PhraseType.PropertyDeclaration:
            return 'PropertyDeclaration';
        case PhraseType.PropertyElement:
            return 'PropertyElement';
        case PhraseType.PropertyElementList:
            return 'PropertyElementList';
        case PhraseType.PropertyInitialiser:
            return 'PropertyInitialiser';
        case PhraseType.QualifiedName:
            return 'QualifiedName';
        case PhraseType.QualifiedNameList:
            return 'QualifiedNameList';
        case PhraseType.RelationalExpression:
            return 'RelationalExpression';
        case PhraseType.RelativeQualifiedName:
            return 'RelativeQualifiedName';
        case PhraseType.RelativeScope:
            return 'RelativeScope';
        case PhraseType.RequireExpression:
            return 'RequireExpression';
        case PhraseType.RequireOnceExpression:
            return 'RequireOnceExpression';
        case PhraseType.ReturnStatement:
            return 'ReturnStatement';
        case PhraseType.ReturnType:
            return 'ReturnType';
        case PhraseType.ScopedCallExpression:
            return 'ScopedCallExpression';
        case PhraseType.ScopedMemberName:
            return 'ScopedMemberName';
        case PhraseType.ScopedPropertyAccessExpression:
            return 'ScopedPropertyAccessExpression';
        case PhraseType.ShellCommandExpression:
            return 'ShellCommandExpression';
        case PhraseType.ShiftExpression:
            return 'ShiftExpression';
        case PhraseType.SimpleAssignmentExpression:
            return 'SimpleAssignmentExpression';
        case PhraseType.SimpleVariable:
            return 'SimpleVariable';
        case PhraseType.StatementList:
            return 'StatementList';
        case PhraseType.StaticVariableDeclaration:
            return 'StaticVariableDeclaration';
        case PhraseType.StaticVariableDeclarationList:
            return 'StaticVariableDeclarationList';
        case PhraseType.SubscriptExpression:
            return 'SubscriptExpression';
        case PhraseType.SwitchStatement:
            return 'SwitchStatement';
        case PhraseType.ThrowStatement:
            return 'ThrowStatement';
        case PhraseType.TraitAdaptationList:
            return 'TraitAdaptationList';
        case PhraseType.TraitAlias:
            return 'TraitAlias';
        case PhraseType.TraitDeclaration:
            return 'TraitDeclaration';
        case PhraseType.TraitDeclarationBody:
            return 'TraitDeclarationBody';
        case PhraseType.TraitDeclarationHeader:
            return 'TraitDeclarationHeader';
        case PhraseType.TraitMemberDeclarationList:
            return 'TraitMemberDeclarationList';
        case PhraseType.TraitPrecedence:
            return 'TraitPrecedence';
        case PhraseType.TraitUseClause:
            return 'TraitUseClause';
        case PhraseType.TraitUseSpecification:
            return 'TraitUseSpecification';
        case PhraseType.TryStatement:
            return 'TryStatement';
        case PhraseType.TypeDeclaration:
            return 'TypeDeclaration';
        case PhraseType.UnaryOpExpression:
            return 'UnaryOpExpression';
        case PhraseType.UnsetIntrinsic:
            return 'UnsetIntrinsic';
        case PhraseType.VariableList:
            return 'VariableList';
        case PhraseType.VariableNameList:
            return 'VariableNameList';
        case PhraseType.VariadicUnpacking:
            return 'VariadicUnpacking';
        case PhraseType.WhileStatement:
            return 'WhileStatement';
        case PhraseType.YieldExpression:
            return 'YieldExpression';
        case PhraseType.YieldFromExpression:
            return 'YieldFromExpression';
        default:
            return '';
    }
}
exports.phraseTypeToString = phraseTypeToString;
