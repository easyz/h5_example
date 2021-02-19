﻿define(
"vs/editor/editor.main.nls",{
"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})","操作栏"],
"vs/base/browser/ui/findinput/findInput":["input","Use Regular Expression","Match Whole Word","Match Case"],
"vs/base/common/errors":["{0}. Error code: {1}","Permission Denied (HTTP {0})","Permission Denied","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Unknown Connection Error ({0})","An unknown connection error occurred. Either you are no longer connected to the internet or the server you are connected to is offline.","{0}: {1}","An unknown error occurred. Please consult the log for more details.","An unknown error occurred. Please consult the log for more details.","{0} ({1} errors in total)","An unknown error occurred. Please consult the log for more details.","Not Implemented","Illegal argument: {0}","Illegal argument","Illegal state: {0}","Illegal state","Failed to load a required file. Either you are no longer connected to the internet or the server you are connected to is offline. Please refresh the browser to try again.","Failed to load a required file. Please restart the application to try again. Details: {0}"],
"vs/base/common/json":["Invalid symbol","Invalid number format","Property name expected","Value expected","Colon expected","Value expected","Comma expected","Value expected","Closing brace expected","Value expected","Comma expected","Value expected","Closing bracket expected","Value expected","End of content expected"],
"vs/base/common/keyCodes":["Windows","Ctrl","Shift","Alt","Command","Windows"],
"vs/base/common/severity":["Error","Warning","Info"],
"vs/base/common/strings":["{0}-{1}-{2} {3}:{4}:{5}","{0}:{1}:{2}"],
"vs/editor/browser/view/viewImpl":["Editor content"],
"vs/editor/common/config/commonEditorConfig":["Editor configuration","Controls the font family.","Controls the font size.","Controls the line height.","Controls visibility of line numbers","Controls visibility of the glyph margin",'Controls the rendering size of tabs in characters. Accepted values: "auto", 2, 4, 6, etc. If set to "auto", the value will be guessed when a file is opened.','Controls if the editor will insert spaces for tabs. Accepted values:  "auto", true, false. If set to "auto", the value will be guessed when a file is opened.',"Controls if selections have rounded corners","Controls if the editor will scroll beyond the last line","Controls after how many characters the editor will wrap to the next line. Setting this to 0 turns on viewport width wrapping","Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.","A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events","Controls if quick suggestions should show up or not while typing","Controls the delay in ms after which quick suggestions will show up","Controls if the editor should automatically close brackets after opening them","Controls if the editor should automatically format the line after typing","Controls if suggestions should automatically show up when typing trigger characters","Controls whether the editor should highlight similar matches to the selection","Controls the number of decorations that can show up at the same position in the overview ruler","Controls if the cursor should be hidden in the overview ruler.","Controls whether the editor should render whitespace characters","Controls if the editor shows reference information for the modes that support it","Controls if the diff editor shows the diff side by side or inline","Controls if the diff editor shows changes in leading or trailing whitespace as diffs"],
"vs/editor/common/controller/cursor":["Unexpected exception while executing command."],
"vs/editor/common/model/textModelWithTokens":["The mode has failed while tokenizing the input."],
"vs/editor/common/modes/languageExtensionPoint":["Contributes language declarations.","ID of the language.","Name aliases for the language.","File extensions associated to the language.","File names associated to the language.","Mime types associated to the language.","A regular expression matching the first line of a file of the language.","A relative path to a file containing configuration options for the language.","Empty value for `contributes.{0}`","property `{0}` is mandatory and must be of type `string`","property `{0}` can be omitted and must be of type `string[]`","property `{0}` can be omitted and must be of type `string[]`","property `{0}` can be omitted and must be of type `string`","property `{0}` can be omitted and must be of type `string`","property `{0}` can be omitted and must be of type `string[]`","property `{0}` can be omitted and must be of type `string[]`","Invalid `contributes.{0}`. Expected an array."],
"vs/editor/common/services/bulkEdit":["These files have changed in the meantime: {0}"],
"vs/editor/contrib/clipboard/browser/clipboard":["Cut","Copy","Paste"],
"vs/editor/contrib/comment/common/comment":["Toggle Line Comment","Add Line Comment","Remove Line Comment","Toggle Block Comment"],
"vs/editor/contrib/contextmenu/browser/contextmenu":["Show Editor Context Menu"],
"vs/editor/contrib/find/browser/find":["Select All Occurences of Find Match","Find","Find Next","Find Previous","Replace","Move Last Selection To Next Find Match","Add Selection To Next Find Match"],
"vs/editor/contrib/find/browser/findWidget":["Find","Find","Previous match (Shift+F3)","Next match (F3)","Find in selection","Close (Escape)","Replace","Replace","Replace","Replace All","Toggle Replace mode"],
"vs/editor/contrib/format/common/formatActions":["代码格式化"],
"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":["Click to show the {0} definitions for '{1}'.","预览定义","跳转到定义","Go to Type Definition"],
"vs/editor/contrib/gotoError/browser/gotoError":["Suggested fixes: ","Suggested fix: ","Go to Next Error or Warning","Go to Previous Error or Warning"],
"vs/editor/contrib/hover/browser/modesContentHover":["Loading..."],
"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Replace with Previous Value","Replace with Next Value"],
"vs/editor/contrib/linesOperations/common/linesOperations":["Delete Line","Trim Trailing Whitespace","Move Line Down","Move Line Up","Copy Line Down","Copy Line Up","Indent Line","Outdent Line","Insert Line Above","Insert Line Below"],
"vs/editor/contrib/links/browser/links":["Cmd + click to follow link","Ctrl + click to follow link","Invalid URI: cannot open {0}","Open Link"],
"vs/editor/contrib/multicursor/common/multicursor":["Insert Cursor Above","Insert Cursor Below"],
"vs/editor/contrib/parameterHints/browser/parameterHints":["Trigger Parameter Hints"],
"vs/editor/contrib/quickFix/browser/quickFix":["Quick Fix"],
"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["Loading...","No fix suggestions."],
"vs/editor/contrib/quickOpen/browser/gotoLine":["Go to line {0} and column {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a column between 1 and {0} to navigate to","Go to Line...","Type a line number, followed by an optional colon and a column number to navigate to"],
"vs/editor/contrib/quickOpen/browser/gotoLine.contribution":["Go to Line..."],
"vs/editor/contrib/quickOpen/browser/quickCommand":["快捷键","Type the name of an action you want to execute"],
"vs/editor/contrib/quickOpen/browser/quickCommand.contribution":["快捷键"],
"vs/editor/contrib/quickOpen/browser/quickOutline":["跳转...","Type the name of an identifier you wish to navigate to","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],
"vs/editor/contrib/quickOpen/browser/quickOutline.contribution":["Go to Symbol..."],
"vs/editor/contrib/referenceSearch/browser/referenceSearch":["Loading...","No results","查找所有引用","Show References"],
"vs/editor/contrib/referenceSearch/browser/referenceSearchWidget":["{0} references","{0} reference","no preview available","References"],
"vs/editor/contrib/rename/browser/rename":["修改所有出现过的单词"],
"vs/editor/contrib/rename/browser/rename2":["No result.","重命名变量"],
"vs/editor/contrib/smartSelect/common/jumpToBracket":["Go to Bracket"],
"vs/editor/contrib/smartSelect/common/smartSelect":["Expand Select","Shrink Select"],
"vs/editor/contrib/suggest/browser/suggest":["Trigger Suggest"],
"vs/editor/contrib/suggest/browser/suggestWidget":["Loading...","No suggestions."],
"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Toggle Use of Tab Key for Setting Focus"],
"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Close"],
"vs/languages/css/common/css.contribution":["CSS configuration","Controls CSS validation and problem severities."],
"vs/languages/css/common/services/lintRules":["When using a vendor-specific prefix make sure to also include all other vendor-specific properties","When using a vendor-specific prefix also include the standard property","Do not use duplicate style definitions","Do not use empty rulesets","Import statements do not load in parallel","Do not use width or height when using padding or border","The universal selector (*) is known to be slow","No unit for zero needed","@font-face rule must define 'src' and 'font-family' properties","Hex colors must consist of three or six hex numbers","Invalid number of parameters","Unknown property.","IE hacks are only necessary when supporting IE7 and older","Unknown vendor specific property.","Property is ignored due to the display. E.g. with 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect","Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.","Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.","Selectors should not contain IDs because these rules are too tightly coupled with the HTML.","Enables or disables all validations"],
"vs/languages/javascript/common/javascript.contribution":["JavaScript configuration","Controls how JavaScript IntelliSense works.","Always include all words from the current document.","Complete functions with their parameter signature.","Controls how JavaScript validation works.","Controls VSCode's Javascript validation. If set to false both syntax and sematic validation is disabled","Run linter checks for JavaScript files - overrides validate.lint.* settings.","Check JavaScript files for syntax errors.","Controls various aspects of validation.","Don't spare curly brackets.","Empty block should have a comment.","Use '!==' and '===' instead of '!=' and '=='.","Missing semicolon.","Unexpected output of the 'typeof'-operator.","Semicolon instead of block.","Function inside loop.","Function with lowercase name used as constructor.","Looks for mistyped triple-slash references.","Unused local variable.","Unused local function.","Parameter don't match a function signature","Don't re-declare a variable and change its type.","Don't use an undeclared variable.","Don't use an unknown property.","Don't require an unknown module.","Don't re-declare a variable type by an assignment.","Only use numbers for arthimetic operations.","Don't use instanceof with primitive types.","Function with return-statement used as constructor."],
"vs/languages/json/common/json.contribution":["JSON configuration","Associate schemas to JSON files in the current project","A URL to a schema or a relative path to a schema in the current directory","A file pattern that can contain '*' to match against when resolving JSON files to schemas.","An array of file patterns to match against when resolving JSON files to schemas.","The schema definition for the given URL. The schema only needs to be provided to avoid accesses to the schema URL."],
"vs/languages/less/common/less.contribution":["LESS configuration","Controls LESS validation and problem severities."],
"vs/languages/markdown/common/markdown.contribution":["Markdown preview configuration","A list of URLs or local paths to CSS style sheets to use from the markdown preview."],
"vs/languages/sass/common/sass.contribution":["Sass configuration","Controls Sass validation and problem severities."],
"vs/languages/typescript/common/typescript.contribution":["TypeScript configuration","Controls how TypeScript IntelliSense works.","Always include all words from the current document.","Complete functions with their parameter signature.","Controls various aspects of validation.","Don't spare curly brackets.","Empty block should have a comment.","Use '!==' and '===' instead of '!=' and '=='.","Missing semicolon.","Unexpected output of the 'typeof'-operator.","Semicolon instead of block.","Function inside loop.","Function with lowercase name used as constructor.","Looks for mistyped triple-slash references.","Unused local variable.","Unused local function.","Unused private member.","Don't spare the return-type annotation for functions."],
"vs/platform/configuration/common/configurationRegistry":["Contributes configuration settings.","A summary of the settings. This label will be used in the settings file as separating comment.","Type of the configuration, needs to be 'object'","Description of the configuration properties."],
"vs/platform/keybinding/browser/keybindingServiceImpl":["Here are other available commands: ","({0}) was pressed. Waiting for second key of chord...","The key combination ({0}, {1}) is not a command."],
"vs/platform/message/common/message":["Close","Cancel"],
"vs/platform/plugins/common/abstractPluginService":["Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.","Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.","Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).","Activating extension `{0}` failed: {1}."],
"vs/platform/plugins/common/pluginsRegistry":["Got empty extension description","property `{0}` is mandatory and must be of type `string`","property `{0}` is mandatory and must be of type `string`","property `{0}` is mandatory and must be of type `object`","property `{0}` is mandatory and must be of type `string`","property `{0}` can be omitted or must be of type `string[]`","property `{0}` can be omitted or must be of type `string[]`","properties `{0}` and `{1}` must both be specified or must both be omitted","property `{0}` can be omitted or must be of type `string`","Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.","properties `{0}` and `{1}` must both be specified or must both be omitted","The publisher of the VSCode extension.","Activation events for the VSCode extension.","Dependencies to other extensions.","Script executed before the package is published as a VSCode extension.","All contributions of the VSCode extension represented by this package.","Contributes output views.","The label of the output view."],
"vs/platform/theme/common/themes":["Light","Dark","High Contrast"]});