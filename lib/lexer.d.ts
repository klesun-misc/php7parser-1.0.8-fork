export enum TokenType {
    Unknown = 0,
    EndOfFile = 1,
    Abstract = 2,
    Array = 3,
    As = 4,
    Break = 5,
    Callable = 6,
    Case = 7,
    Catch = 8,
    Class = 9,
    ClassConstant = 10,
    Clone = 11,
    Const = 12,
    Continue = 13,
    Declare = 14,
    Default = 15,
    Do = 16,
    Echo = 17,
    Else = 18,
    ElseIf = 19,
    Empty = 20,
    EndDeclare = 21,
    EndFor = 22,
    EndForeach = 23,
    EndIf = 24,
    EndSwitch = 25,
    EndWhile = 26,
    EndHeredoc = 27,
    Eval = 28,
    Exit = 29,
    Extends = 30,
    Final = 31,
    Finally = 32,
    For = 33,
    ForEach = 34,
    Function = 35,
    Global = 36,
    Goto = 37,
    HaltCompiler = 38,
    If = 39,
    Implements = 40,
    Include = 41,
    IncludeOnce = 42,
    InstanceOf = 43,
    InsteadOf = 44,
    Interface = 45,
    Isset = 46,
    List = 47,
    And = 48,
    Or = 49,
    Xor = 50,
    Namespace = 51,
    New = 52,
    Print = 53,
    Private = 54,
    Public = 55,
    Protected = 56,
    Require = 57,
    RequireOnce = 58,
    Return = 59,
    Static = 60,
    Switch = 61,
    Throw = 62,
    Trait = 63,
    Try = 64,
    Unset = 65,
    Use = 66,
    Var = 67,
    While = 68,
    Yield = 69,
    YieldFrom = 70,
    DirectoryConstant = 71,
    FileConstant = 72,
    LineConstant = 73,
    FunctionConstant = 74,
    MethodConstant = 75,
    NamespaceConstant = 76,
    TraitConstant = 77,
    StringLiteral = 78,
    FloatingLiteral = 79,
    EncapsulatedAndWhitespace = 80,
    Text = 81,
    IntegerLiteral = 82,
    Name = 83,
    VariableName = 84,
    Equals = 85,
    Tilde = 86,
    Colon = 87,
    Semicolon = 88,
    Exclamation = 89,
    Dollar = 90,
    ForwardSlash = 91,
    Percent = 92,
    Comma = 93,
    AtSymbol = 94,
    Backtick = 95,
    Question = 96,
    DoubleQuote = 97,
    SingleQuote = 98,
    LessThan = 99,
    GreaterThan = 100,
    Asterisk = 101,
    AmpersandAmpersand = 102,
    Ampersand = 103,
    AmpersandEquals = 104,
    CaretEquals = 105,
    LessThanLessThan = 106,
    LessThanLessThanEquals = 107,
    GreaterThanGreaterThan = 108,
    GreaterThanGreaterThanEquals = 109,
    BarEquals = 110,
    Plus = 111,
    PlusEquals = 112,
    AsteriskAsterisk = 113,
    AsteriskAsteriskEquals = 114,
    Arrow = 115,
    OpenBrace = 116,
    OpenBracket = 117,
    OpenParenthesis = 118,
    CloseBrace = 119,
    CloseBracket = 120,
    CloseParenthesis = 121,
    QuestionQuestion = 122,
    Bar = 123,
    BarBar = 124,
    Caret = 125,
    Dot = 126,
    DotEquals = 127,
    CurlyOpen = 128,
    MinusMinus = 129,
    ForwardslashEquals = 130,
    DollarCurlyOpen = 131,
    FatArrow = 132,
    ColonColon = 133,
    Ellipsis = 134,
    PlusPlus = 135,
    EqualsEquals = 136,
    GreaterThanEquals = 137,
    EqualsEqualsEquals = 138,
    ExclamationEquals = 139,
    ExclamationEqualsEquals = 140,
    LessThanEquals = 141,
    Spaceship = 142,
    Minus = 143,
    MinusEquals = 144,
    PercentEquals = 145,
    AsteriskEquals = 146,
    Backslash = 147,
    BooleanCast = 148,
    UnsetCast = 149,
    StringCast = 150,
    ObjectCast = 151,
    IntegerCast = 152,
    FloatCast = 153,
    StartHeredoc = 154,
    ArrayCast = 155,
    OpenTag = 156,
    OpenTagEcho = 157,
    CloseTag = 158,
    Comment = 159,
    DocumentComment = 160,
    Whitespace = 161,
}
export enum LexerMode {
    Initial = 0,
    Scripting = 1,
    LookingForProperty = 2,
    DoubleQuotes = 3,
    NowDoc = 4,
    HereDoc = 5,
    EndHereDoc = 6,
    Backtick = 7,
    VarOffset = 8,
    LookingForVarName = 9,
}
export interface Token {
    tokenType: TokenType;
    offset: number;
    length: number;
    modeStack: LexerMode[];
}
export declare namespace Token {
    function create(type: TokenType, offset: number, length: number, modeStack: LexerMode[]): Token;
}
export declare namespace Lexer {
    function setInput(text: string, lexerModeStack?: LexerMode[], position?: number): void;
    function lex(): Token;
}
export declare function tokenTypeToString(type: TokenType): "Unknown" | "EndOfFile" | "Abstract" | "Array" | "As" | "Break" | "Callable" | "Case" | "Catch" | "Class" | "ClassConstant" | "Clone" | "Const" | "Continue" | "Declare" | "Default" | "Do" | "Echo" | "Else" | "ElseIf" | "Empty" | "EndDeclare" | "EndFor" | "EndForeach" | "EndIf" | "EndSwitch" | "EndWhile" | "EndHeredoc" | "Eval" | "Exit" | "Extends" | "Final" | "Finally" | "For" | "ForEach" | "Function" | "Global" | "Goto" | "HaltCompiler" | "If" | "Implements" | "Include" | "IncludeOnce" | "InstanceOf" | "InsteadOf" | "Interface" | "Isset" | "List" | "And" | "Or" | "Xor" | "Namespace" | "New" | "Print" | "Private" | "Public" | "Protected" | "Require" | "RequireOnce" | "Return" | "Static" | "Switch" | "Throw" | "Trait" | "Try" | "Unset" | "Use" | "Var" | "While" | "Yield" | "YieldFrom" | "DirectoryConstant" | "FileConstant" | "LineConstant" | "FunctionConstant" | "MethodConstant" | "NamespaceConstant" | "TraitConstant" | "StringLiteral" | "FloatingLiteral" | "EncapsulatedAndWhitespace" | "Text" | "IntegerLiteral" | "Name" | "VariableName" | "Equals" | "Tilde" | "Colon" | "Semicolon" | "Exclamation" | "Dollar" | "ForwardSlash" | "Percent" | "Comma" | "AtSymbol" | "Backtick" | "Question" | "DoubleQuote" | "SingleQuote" | "LessThan" | "GreaterThan" | "Asterisk" | "AmpersandAmpersand" | "Ampersand" | "AmpersandEquals" | "CaretEquals" | "LessThanLessThan" | "LessThanLessThanEquals" | "GreaterThanGreaterThan" | "GreaterThanGreaterThanEquals" | "BarEquals" | "Plus" | "PlusEquals" | "AsteriskAsterisk" | "AsteriskAsteriskEquals" | "Arrow" | "OpenBrace" | "OpenBracket" | "OpenParenthesis" | "CloseBrace" | "CloseBracket" | "CloseParenthesis" | "QuestionQuestion" | "Bar" | "BarBar" | "Caret" | "Dot" | "DotEquals" | "CurlyOpen" | "MinusMinus" | "ForwardslashEquals" | "DollarCurlyOpen" | "FatArrow" | "ColonColon" | "Ellipsis" | "PlusPlus" | "EqualsEquals" | "GreaterThanEquals" | "EqualsEqualsEquals" | "ExclamationEquals" | "ExclamationEqualsEquals" | "LessThanEquals" | "Spaceship" | "Minus" | "MinusEquals" | "PercentEquals" | "AsteriskEquals" | "Backslash" | "BooleanCast" | "UnsetCast" | "StringCast" | "ObjectCast" | "IntegerCast" | "FloatCast" | "StartHeredoc" | "ArrayCast" | "OpenTag" | "OpenTagEcho" | "CloseTag" | "Comment" | "DocumentComment" | "Whitespace";
