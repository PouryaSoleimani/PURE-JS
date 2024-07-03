// & META CHARACTERS _________________________________________________________________
// | --> OR 
//  . --> means all of the letters except linebreak. --> [.] means the . letter
//  []  --> we can define a specific group of letters between brackets --> [abcdef]
/// _ ^ --> means NOT --> [^cg] --> means all of letters except "c" and "g" .
// - ( dash ) --> means "to" when using inside [] --> [A-Z] --> means from A to Z .
// ** __>>>>>> [A-Z][a-z][0-9] | . - ^ []
// & REPEAT CHARACTERS _______________________________________________________________
// + -> means our expression and inside the [] , plus the rest of the world , and the rest is a MUST
//_ * -> means our expression and inside the [] , but the [] is not so necessary.
// .+ --> means from and until --> www .+ com --> means expression which starts with www and ends with com
// & GROUPING ________________________________________________________________________
// {} ---> specify the numbers of group members we want --> {2} --> word divided in 2 member groups {2,4} -> between 2 and 4 
// ( |  | ) --> grouping characters and put the between pipes |
// & ANCHODORS _______________________________________________________________________
// --> ^ = BEGINNING and start of a string --> ^[A|B|C] --> starts with a or b or c
// --> $ = END of a string
// --> \b = searching a expression at the end of the word --> com\b --> searching "COM" at the end of the words 
// & SHORTHANDS _____________________________________________________________________
// \w = selects everything --> [A-Z][a-z][0-9]
// \W = the opposite form of the \w
// \d = selects all of the Numbers --> [0-9]
// \D = the opposite form of the \d
// \s = selects all of spaces and line breaks
// \S = the opposite form of the \s
// & LOOKAHEAD AND LOOKBEHIND _______________________________________________________
// ---> (?=) --> this means we must have a expression after our expression /(T|t) he (? = f) / 
// --> (?!) --> the opposite form of ?= , that means not continuing with ...


