'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function phraseTypeToString(type) {
    switch (type) {
        case 0:
            return 'Unknown';
        case 1:
            return 'AdditiveExpression';
        case 2:
            return 'AnonymousClassDeclaration';
        case 3:
            return 'AnonymousClassDeclarationHeader';
        case 4:
            return 'AnonymousFunctionCreationExpression';
        case 5:
            return 'AnonymousFunctionHeader';
        case 6:
            return 'AnonymousFunctionUseClause';
        case 7:
            return 'AnonymousFunctionUseVariable';
        case 8:
            return 'ArgumentExpressionList';
        case 9:
            return 'ArrayCreationExpression';
        case 10:
            return 'ArrayElement';
        case 11:
            return 'ArrayInitialiserList';
        case 12:
            return 'ArrayKey';
        case 13:
            return 'ArrayValue';
        case 14:
            return 'BitwiseExpression';
        case 15:
            return 'BreakStatement';
        case 16:
            return 'ByRefAssignmentExpression';
        case 17:
            return 'CaseStatement';
        case 18:
            return 'CaseStatementList';
        case 19:
            return 'CastExpression';
        case 20:
            return 'CatchClause';
        case 21:
            return 'CatchClauseList';
        case 22:
            return 'CatchNameList';
        case 23:
            return 'ClassBaseClause';
        case 24:
            return 'ClassConstantAccessExpression';
        case 25:
            return 'ClassConstDeclaration';
        case 26:
            return 'ClassConstElement';
        case 27:
            return 'ClassConstElementList';
        case 28:
            return 'ClassDeclaration';
        case 29:
            return 'ClassDeclarationBody';
        case 30:
            return 'ClassDeclarationHeader';
        case 31:
            return 'ClassInterfaceClause';
        case 32:
            return 'ClassMemberDeclarationList';
        case 33:
            return 'ClassModifiers';
        case 34:
            return 'ClassTypeDesignator';
        case 35:
            return 'CloneExpression';
        case 36:
            return 'ClosureUseList';
        case 37:
            return 'CoalesceExpression';
        case 38:
            return 'CompoundAssignmentExpression';
        case 39:
            return 'CompoundStatement';
        case 40:
            return 'TernaryExpression';
        case 41:
            return 'ConstantAccessExpression';
        case 42:
            return 'ConstDeclaration';
        case 43:
            return 'ConstElement';
        case 44:
            return 'ConstElementList';
        case 45:
            return 'ContinueStatement';
        case 46:
            return 'DeclareDirective';
        case 47:
            return 'DeclareStatement';
        case 48:
            return 'DefaultStatement';
        case 49:
            return 'DoStatement';
        case 50:
            return 'DoubleQuotedStringLiteral';
        case 51:
            return 'EchoIntrinsic';
        case 52:
            return 'ElseClause';
        case 53:
            return 'ElseIfClause';
        case 54:
            return 'ElseIfClauseList';
        case 55:
            return 'EmptyIntrinsic';
        case 56:
            return 'EncapsulatedExpression';
        case 57:
            return 'EncapsulatedVariable';
        case 58:
            return 'EncapsulatedVariableList';
        case 59:
            return 'EqualityExpression';
        case 60:
            return 'Error';
        case 61:
            return 'ErrorClassMemberDeclaration';
        case 62:
            return 'ErrorClassTypeDesignatorAtom';
        case 63:
            return 'ErrorControlExpression';
        case 64:
            return 'ErrorExpression';
        case 65:
            return 'ErrorScopedAccessExpression';
        case 66:
            return 'ErrorTraitAdaptation';
        case 67:
            return 'ErrorVariable';
        case 68:
            return 'ErrorVariableAtom';
        case 69:
            return 'EvalIntrinsic';
        case 70:
            return 'ExitIntrinsic';
        case 71:
            return 'ExponentiationExpression';
        case 72:
            return 'ExpressionList';
        case 73:
            return 'ExpressionStatement';
        case 74:
            return 'FinallyClause';
        case 75:
            return 'ForControl';
        case 76:
            return 'ForeachCollection';
        case 77:
            return 'ForeachKey';
        case 78:
            return 'ForeachStatement';
        case 79:
            return 'ForeachValue';
        case 80:
            return 'ForEndOfLoop';
        case 81:
            return 'ForExpressionGroup';
        case 82:
            return 'ForInitialiser';
        case 83:
            return 'ForStatement';
        case 84:
            return 'FullyQualifiedName';
        case 85:
            return 'FunctionCallExpression';
        case 86:
            return 'FunctionDeclaration';
        case 88:
            return 'FunctionDeclarationHeader';
        case 87:
            return 'FunctionDeclarationBody';
        case 89:
            return 'FunctionStaticDeclaration';
        case 90:
            return 'FunctionStaticInitialiser';
        case 91:
            return 'GlobalDeclaration';
        case 92:
            return 'GotoStatement';
        case 93:
            return 'HaltCompilerStatement';
        case 94:
            return 'HeredocStringLiteral';
        case 95:
            return 'Identifier';
        case 96:
            return 'IfStatement';
        case 97:
            return 'IncludeExpression';
        case 98:
            return 'IncludeOnceExpression';
        case 99:
            return 'InlineText';
        case 100:
            return 'InstanceOfExpression';
        case 101:
            return 'InstanceofTypeDesignator';
        case 102:
            return 'InterfaceBaseClause';
        case 103:
            return 'InterfaceDeclaration';
        case 104:
            return 'InterfaceDeclarationBody';
        case 105:
            return 'InterfaceDeclarationHeader';
        case 106:
            return 'InterfaceMemberDeclarationList';
        case 107:
            return 'IssetIntrinsic';
        case 108:
            return 'ListIntrinsic';
        case 109:
            return 'LogicalExpression';
        case 110:
            return 'MemberModifierList';
        case 111:
            return 'MemberName';
        case 112:
            return 'MethodCallExpression';
        case 113:
            return 'MethodDeclaration';
        case 114:
            return 'MethodDeclarationBody';
        case 115:
            return 'MethodDeclarationHeader';
        case 116:
            return 'MethodReference';
        case 117:
            return 'MultiplicativeExpression';
        case 118:
            return 'NamedLabelStatement';
        case 119:
            return 'NamespaceAliasingClause';
        case 120:
            return 'NamespaceDefinition';
        case 121:
            return 'NamespaceName';
        case 122:
            return 'NamespaceUseClause';
        case 123:
            return 'NamespaceUseClauseList';
        case 124:
            return 'NamespaceUseDeclaration';
        case 125:
            return 'NamespaceUseGroupClause';
        case 126:
            return 'NamespaceUseGroupClauseList';
        case 127:
            return 'NullStatement';
        case 128:
            return 'ObjectCreationExpression';
        case 129:
            return 'ParameterDeclaration';
        case 130:
            return 'ParameterDeclarationList';
        case 131:
            return 'PostfixDecrementExpression';
        case 132:
            return 'PostfixIncrementExpression';
        case 133:
            return 'PrefixDecrementExpression';
        case 134:
            return 'PrefixIncrementExpression';
        case 135:
            return 'PrintIntrinsic';
        case 136:
            return 'PropertyAccessExpression';
        case 137:
            return 'PropertyDeclaration';
        case 138:
            return 'PropertyElement';
        case 139:
            return 'PropertyElementList';
        case 140:
            return 'PropertyInitialiser';
        case 141:
            return 'QualifiedName';
        case 142:
            return 'QualifiedNameList';
        case 143:
            return 'RelationalExpression';
        case 144:
            return 'RelativeQualifiedName';
        case 145:
            return 'RelativeScope';
        case 146:
            return 'RequireExpression';
        case 147:
            return 'RequireOnceExpression';
        case 148:
            return 'ReturnStatement';
        case 149:
            return 'ReturnType';
        case 150:
            return 'ScopedCallExpression';
        case 151:
            return 'ScopedMemberName';
        case 152:
            return 'ScopedPropertyAccessExpression';
        case 153:
            return 'ShellCommandExpression';
        case 154:
            return 'ShiftExpression';
        case 155:
            return 'SimpleAssignmentExpression';
        case 156:
            return 'SimpleVariable';
        case 157:
            return 'StatementList';
        case 158:
            return 'StaticVariableDeclaration';
        case 159:
            return 'StaticVariableDeclarationList';
        case 160:
            return 'SubscriptExpression';
        case 161:
            return 'SwitchStatement';
        case 162:
            return 'ThrowStatement';
        case 163:
            return 'TraitAdaptationList';
        case 164:
            return 'TraitAlias';
        case 165:
            return 'TraitDeclaration';
        case 166:
            return 'TraitDeclarationBody';
        case 167:
            return 'TraitDeclarationHeader';
        case 168:
            return 'TraitMemberDeclarationList';
        case 169:
            return 'TraitPrecedence';
        case 170:
            return 'TraitUseClause';
        case 171:
            return 'TraitUseSpecification';
        case 172:
            return 'TryStatement';
        case 173:
            return 'TypeDeclaration';
        case 174:
            return 'UnaryOpExpression';
        case 175:
            return 'UnsetIntrinsic';
        case 176:
            return 'VariableList';
        case 177:
            return 'VariableNameList';
        case 178:
            return 'VariadicUnpacking';
        case 179:
            return 'WhileStatement';
        case 180:
            return 'YieldExpression';
        case 181:
            return 'YieldFromExpression';
        default:
            return '';
    }
}
exports.phraseTypeToString = phraseTypeToString;
