let ForbiddenKeys = [ 
    // Java
    "VOID",

    // SQL
    "ADD","EXCEPT","PERCENT",
    "ALL","EXEC","PLAN",
    "ALTER","EXECUTE","PRECISION",
    "AND","EXISTS","PRIMARY",
    "ANY","EXIT","PRINT",
    "AS","FETCH","PROC",
    "ASC","FILE","PROCEDURE",
    "AUTHORIZATION","FILLFACTOR","PUBLIC",
    "BACKUP","FOR","RAISERROR",
    "BEGIN","FOREIGN","READ",
    "BETWEEN","FREETEXT","READTEXT",
    "BREAK","FREETEXTTABLE","RECONFIGURE",
    "BROWSE","FROM","REFERENCES",
    "BULK","FULL","REPLICATION",
    "BY","FUNCTION","RESTORE",
    "CASCADE","GOTO","RESTRICT",
    "CASE","GRANT","RETURN",
    "CHECK","GROUP","REVOKE",
    "CHECKPOINT","HAVING","RIGHT",
    "CLOSE","HOLDLOCK","ROLLBACK",
    "CLUSTERED","IDENTITY","ROWCOUNT",
    "COALESCE","IDENTITY_INSERT","ROWGUIDCOL",
    "COLLATE","IDENTITYCOL","RULE",
    "COLUMN","IF","SAVE",
    "COMMIT","IN","SCHEMA",
    "COMPUTE","INDEX","SELECT",
    "CONSTRAINT","INNER","SESSION_USER",
    "CONTAINS","INSERT","SET",
    "CONTAINSTABLE","INTERSECT","SETUSER",
    "CONTINUE","INTO","SHUTDOWN",
    "CONVERT","IS","SOME",
    "CREATE","JOIN","STATISTICS",
    "CROSS","KEY","SYSTEM_USER",
    "CURRENT","KILL","TABLE",
    "CURRENT_DATE","LEFT","TEXTSIZE",
    "CURRENT_TIME","LIKE","THEN",
    "CURRENT_TIMESTAMP","LINENO","TO",
    "CURRENT_USER","LOAD","TOP",
    "CURSOR","NATIONAL","TRAN",
    "DATABASE","NOCHECK","TRANSACTION",
    "DBCC","NONCLUSTERED","TRIGGER",
    "DEALLOCATE","NOT","TRUNCATE",
    "DECLARE","NULL","TSEQUAL",
    "DEFAULT","NULLIF","UNION",
    "DELETE","OF","UNIQUE",
    "DENY","OFF","UPDATE",
    "DESCRIPTION",
    "DESC","OFFSETS","UPDATETEXT",
    "DISK","ON","USE",
    "DISTINCT","OPEN","USER",
    "DISTRIBUTED","OPENDATASOURCE","VALUES",
    "DOUBLE","OPENQUERY","VARYING",
    "DROP","OPENROWSET","VIEW",
    "DUMMY","OPENXML","WAITFOR",
    "DUMP","OPTION","WHEN",
    "ELSE","OR","WHERE",
    "END","ORDER","WHILE",
    "ERRLVL","OUTER","WITH",
    "ESCAPE","OVER","WRITETEXT",
    "ABSOLUTE","FOUND","PRESERVE",
    "ACTION","FREE","PRIOR",
    "ADMIN","GENERAL","PRIVILEGES",
    "AFTER","GET","READS",
    "AGGREGATE","GLOBAL","REAL",
    "ALIAS","GO","RECURSIVE",
    "ALLOCATE","GROUPING","REF",
    "ARE","HOST","REFERENCING",
    "ARRAY","HOUR","RELATIVE",
    "ASSERTION","IGNORE","RESULT",
    "AT","IMMEDIATE","RETURNS",
    "BEFORE","INDICATOR","ROLE",
    "BINARY","INITIALIZE","ROLLUP",
    "BIT","INITIALLY","ROUTINE",
    "BLOB","INOUT","ROW",
    "BOOLEAN","INPUT","ROWS",
    "BOTH","INT","SAVEPOINT",
    "BREADTH","INTEGER","SCROLL",
    "CALL","INTERVAL","SCOPE",
    "CASCADED","ISOLATION","SEARCH",
    "CAST","ITERATE","SECOND",
    "CATALOG","LANGUAGE","SECTION",
    "CHAR","LARGE","SEQUENCE",
    "CHARACTER","LAST","SESSION",
    "CLASS","LATERAL","SETS",
    "CLOB","LEADING","SIZE",
    "COLLATION","LESS","SMALLINT",
    "COMPLETION","LEVEL","SPACE",
    "CONNECT","LIMIT","SPECIFIC",
    "CONNECTION","LOCAL","SPECIFICTYPE",
    "CONSTRAINTS","LOCALTIME","SQL",
    "CONSTRUCTOR","LOCALTIMESTAMP","SQLEXCEPTION",
    "CORRESPONDING","LOCATOR","SQLSTATE",
    "CUBE","MAP","SQLWARNING",
    "CURRENT_PATH","MATCH","START",
    "CURRENT_ROLE","MINUTE","STATE",
    "CYCLE","MODIFIES","STATEMENT",
    "DATA","MODIFY","STATIC",
    "DATE","MODULE","STRUCTURE",
    "DAY","MONTH","TEMPORARY",
    "DEC","NAMES","TERMINATE",
    "DECIMAL","NATURAL","THAN",
    "DEFERRABLE","NCHAR","TIME",
    "DEFERRED","NCLOB","TIMESTAMP",
    "DEPTH","NEW","TIMEZONE_HOUR",
    "DEREF","NEXT","TIMEZONE_MINUTE",
    "DESCRIBE","NO","TRAILING",
    "DESCRIPTOR","NONE","TRANSLATION",
    "DESTROY","NUMERIC","TREAT",
    "DESTRUCTOR","OBJECT","TRUE",
    "DETERMINISTIC","OLD","UNDER",
    "DICTIONARY","ONLY","UNKNOWN",
    "DIAGNOSTICS","OPERATION","UNNEST",
    "DISCONNECT","ORDINALITY","USAGE",
    "DOMAIN","OUT","USING",
    "DYNAMIC","OUTPUT","VALUE",
    "EACH","PAD","VARCHAR",
    "END-EXEC","PARAMETER","VARIABLE",
    "EQUALS","PARAMETERS","WHENEVER",
    "EVERY","PARTIAL","WITHOUT",
    "EXCEPTION","PATH","WORK",
    "EXTERNAL","POSTFIX","WRITE",
    "FALSE","PREFIX","YEAR",
    "FIRST","PREORDER","ZONE",
    "FLOAT","PREPARE",

    // Swift keywords
    "associativity", "break", "case", "catch", "class", "continue",
    "convenience", "default", "deinit", "didSet", "do", "else",
    "enum", "extension", "fallthrough", "false", "final", "for",
    "func", "get", "guard", "if", "in", "infix",
    "init", "inout", "internal", "lazy", "let", "mutating",
    "nil", "operator", "override", "postfix", "precedence", "prefix",
    "private", "public", "repeat", "required", "return", "self",
    "set", "static", "struct", "subscript", "super", "switch",
    "throws", "true", "try", "var", "weak", "where",
    "while", "willSet", "abs", "max", "min", "print",
    "Array", "Bool", "Dictionary", "Error", "Int", "Set",
    "String", "Tuple", "UnicodeScalar", "CharacterSet",
    "NSString",
    "description",
]

export default ForbiddenKeys
