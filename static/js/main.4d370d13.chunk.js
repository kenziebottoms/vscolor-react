(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){e.exports.genTheme=function(t){var n,o,r,a,i,s,c,u,g=t.syntax,d=t.bg,p=t.fg,m=t.pos,l=t.neg,f=t.ui,y=e.exports.gradient(d,p);n=d,o=y[0],r=y[1],a=y[2],i=y[3],s=y[5],c=y[7],u=p;var h,b,v,k,S,w=e.exports.gradient(n,o)[5],x="#00000000";h=g[0]||null,b=g[1]||null,v=g[2]||null,k=g[3]||null,S=g[4]||null,g[5],g[6];var j="".concat(m,"44"),B="".concat(l,"44");return{colors:{foreground:u,errorForeground:l,focusBorder:x,contrastBorder:n,"input.foreground":u,"input.background":o,"input.placeholderForeground":s,"input.border":"".concat(f,"44"),"inputOption.activeBorder":u,"inputValidation.infoBackground":v,"inputValidation.infoBorder":v,"inputValidation.warningBackground":B,"inputValidation.warningBorder":B,"inputValidation.errorBackground":l,"inputValidation.errorBorder":l,"dropdown.background":n,"dropdown.foreground":u,"dropdown.border":x,"list.errorForeground":l,"list.warningForeground":l,"list.invalidItemForeground":l,"list.focusBackground":a,"list.focusForeground":u,"list.activeSelectionBackground":r,"list.activeSelectionForeground":u,"list.inactiveSelectionBackground":r,"list.inactiveFocusBackground":r,"list.inactiveSelectionForeground":u,"list.hoverBackground":o,"list.hoverForeground":u,"list.highlightForeground":u,"pickerGroup.foreground":v,"button.foreground":n,"button.background":f,"button.hoverBackground":v,"badge.background":f,"badge.foreground":n,"scrollbarSlider.background":a,"scrollbarSlider.hoverBackground":r,"scrollbarSlider.activeBackground":r,"progressBar.background":v,"editor.background":n,"editor.foreground":u,"editorWidget.background":n,"editor.selectionBackground":r,"editor.inactiveSelectionBackground":"".concat(p,"11"),"editor.selectionHighlightBackground":"".concat(p,"0a"),"editor.findMatchHighlightBackground":j,"editor.findRangeHighlightBackground":"".concat(p,"22"),"editor.hoverHighlightBackground":"".concat(p,"11"),"editorSuggestWidget.background":o,"editorSuggestWidget.border":i,"editorSuggestWidget.foreground":u,"editorHoverWidget.background":o,"editorHoverWidget.border":f,"diffEditor.insertedTextBackground":j,"diffEditor.removedTextBackground":B,"diffEditor.insertedTextBorder":x,"diffEditor.removedTextBorder":x,"merge.currentHeaderBackground":v,"merge.incomingHeaderBackground":v,"editorOverviewRuler.currentContentForeground":v,"editorOverviewRuler.incomingContentForeground":v,"editorOverviewRuler.commonContentForeground":v,"editor.lineHighlightBackground":"".concat(p,"11"),"editor.lineHighlightBorder":x,"editor.rangeHighlightBackground":"".concat(p,"22"),"editorCursor.foreground":s,"editorIndentGuide.background":r,"editorIndentGuide.activeBackground":i,"editorLineNumber.foreground":s,"editorRuler.foreground":s,"editorError.foreground":l,"editorWarning.foreground":l,"editorMarkerNavigationError.background":l,"editorMarkerNavigationWarning.background":l,"editorMarkerNavigation.background":n,"editor.wordHighlightBackground":r,"editor.wordHighlightStrongBackground":o,"peekViewTitle.background":n,"peekViewTitleLabel.foreground":u,"peekView.border":v,"peekViewResult.lineForeground":u,"peekViewResult.fileForeground":u,"peekViewResult.selectionForeground":u,"peekViewResult.matchHighlightBackground":j,"peekViewEditor.matchHighlightBackground":j,"tab.activeBackground":r,"tab.inactiveBackground":o,"tab.border":n,"tab.activeBorder":f,"tab.unfocusedActiveBorder":n,"tab.activeForeground":u,"tab.inactiveForeground":s,"editorGroupHeader.tabsBackground":n,"editorGroupHeader.tabsBorder":n,"panel.background":n,"panel.border":r,"panelTitle.activeForeground":u,"panelTitle.inactiveForeground":s,"panelTitle.activeBorder":f,"statusBar.foreground":"".concat(u,"88"),"statusBar.background":n,"statusBar.noFolderBackground":n,"statusBar.border":n,"statusBar.debuggingBackground":B,"activityBar.background":n,"activityBar.foreground":"".concat(f,"55"),"activityBar.border":x,"activityBar.dropBackground":"".concat(f,"55"),"activityBarBadge.background":f,"activityBarBadge.foreground":n,"sideBar.background":w,"sideBar.foreground":u,"sideBar.border":x,"sideBarTitle.foreground":u,"sideBarSectionHeader.background":n,"sideBarSectionHeader.foreground":s,"titleBar.activeForeground":s,"titleBar.inactiveForeground":s,"titleBar.activeBackground":n,"debugExceptionWidget.border":v,"debugExceptionWidget.background":n,"editorGutter.modifiedBackground":"".concat(f,"44"),"editorGutter.addedBackground":j,"editorGutter.deletedBackground":B,"debugToolBar.background":n,"extensionButton.prominentBackground":v,"extensionButton.prominentForeground":n,"extensionButton.prominentHoverBackground":v,"settings.textInputBackground":r,"settings.checkboxBackground":r,"settings.numberInputBackground":r,"settings.dropdownBackground":r,"settings.checkboxForeground":u,"settings.inactiveSelectedItemBorder":f,"settings.modifiedItemForeground":f,"settings.textInputBorder":x,"settings.checkboxBorder":x,"settings.numberInputBorder":x,"settings.dropdownBorder":x,"terminal.ansiBlack":c,"terminal.ansiRed":l,"terminal.ansiGreen":m,"terminal.ansiYellow":k,"terminal.ansiBlue":S,"terminal.ansiMagenta":h,"terminal.ansiCyan":v,"terminal.ansiWhite":u,"terminal.ansiBrightBlack":c,"terminal.ansiBrightRed":l,"terminal.ansiBrightGreen":m,"terminal.ansiBrightYellow":k,"terminal.ansiBrightBlue":v,"terminal.ansiBrightMagenta":b,"terminal.ansiBrightCyan":v,"terminal.ansiBrightWhite":u,"gitDecoration.modifiedResourceForeground":f,"gitDecoration.untrackedResourceForeground":m,"gitDecoration.ignoredResourceForeground":s,"gitDecoration.conflictingResourceForeground":l,"textLink.foreground":S,"textLink.activeForeground":S||h},tokenColors:[{settings:{foreground:u}},{name:"Comment",scope:"comment",settings:{foreground:i}},{name:"Comment Block",scope:"comment.block",settings:{foreground:s}},{name:"String",scope:["string","string.quoted"],settings:{foreground:v}},{name:"RegExp String",scope:["string.regexp","string.regexp keyword.other","punctuation.definition.template-expression"],settings:{foreground:k}},{name:"Template Strings",scope:["string.template meta.template.expression","string.template.js"],settings:{foreground:h}},{name:"Boolean",scope:"constant.language.boolean",settings:{foreground:S||h}},{name:"Support Constant Math",scope:"support.constant.math",settings:{foreground:k}},{name:"Built-in constant",scope:["constant.language","punctuation.definition.constant","variable.other.constant","source.elixir constant.other.symbol.elixir","source.elixir constant.other.keywords.elixir"],settings:{foreground:S||c}},{name:"User-defined constant",scope:["constant.character","constant.other"],settings:{foreground:k}},{name:"Support Constant, `new` keyword, Special Method Keyword",scope:["support.constant","keyword.other.special-method","keyword.other.new"],settings:{foreground:S||h}},{name:"JSON Support Constants",scope:"support.constant.json",settings:{foreground:k}},{name:"Constant Character Escape",scope:"constant.character.escape",settings:{foreground:S||v}},{name:"Number",scope:["constant.numeric","constant.character.numeric"],settings:{foreground:k}},{name:"Variable",scope:"variable",settings:{foreground:k}},{name:"Keyword",scope:["punctuation.accessor","keyword"],settings:{foreground:c}},{name:"Keyword Other Unit",scope:"keyword.other.unit",settings:{foreground:b}},{name:"Keyword Operator",scope:"keyword.operator",settings:{foreground:b}},{name:"Storage",scope:"storage",settings:{foreground:b}},{name:"Null",scope:"constant.language.null",settings:{foreground:S||s}},{name:"Storage type",scope:["storage.type","meta.var.expr storage.type","meta.class meta.method.declaration meta.var.expr storage.type.js"],settings:{foreground:h}},{name:"Class name",scope:["entity.name.class","meta.class entity.name.type.class"],settings:{foreground:k}},{name:"Inherited class",scope:"entity.other.inherited-class",settings:{foreground:v}},{name:"Function name",scope:"entity.name.function",settings:{foreground:k}},{name:"Function Parameters",scope:"variable.parameter",settings:{foreground:v}},{name:"Meta Tag",scope:["punctuation.definition.tag","meta.tag"],settings:{foreground:u}},{name:"Entity Names in Code Documentations",scope:["entity.name.type.instance.jsdoc","entity.name.type.instance.phpdoc"],settings:{foreground:u}},{name:"Other Variables in Code Documentations",scope:["variable.other.jsdoc","variable.other.phpdoc"],settings:{foreground:v}},{name:"HTML Tag names",scope:["support.class.component","meta.tag.other.html","meta.tag.other.js","meta.tag.other.tsx","meta.tag.js","meta.tag.tsx","meta.tag.html"],settings:{foreground:b}},{name:"Important HTML Tag Names",scope:["meta.tag.structure.body entity.name.tag","meta.tag.structure.head entity.name.tag","meta.tag.structure.html entity.name.tag","meta.tag.metadata.style entity.name.tag","meta.tag.structure.html punctuation.definition.tag","meta.tag.structure.head punctuation.definition.tag","meta.tag.structure.body punctuation.definition.tag","meta.tag.metadata.style punctuation.definition.tag"],settings:{fontStyle:"bold"}},{name:"HTML Tag names",scope:["entity.name.tag.tsx","entity.name.tag.js","entity.name.tag","punctuation.definition.tag"],settings:{foreground:v}},{name:"HTML Script Tag",scope:["meta.tag.metadata.script entity.name.tag","meta.tag.metadata.script punctuation.definition.tag"],settings:{foreground:S||h}},{name:"HTML Punctuation Definition Tag",scope:"punctuation.definition.tag.html",settings:{foreground:S||h}},{name:"Tag attribute",scope:"entity.other.attribute-name",settings:{foreground:k}},{name:"HTML attribute values",scope:"meta.attribute string.quoted",settings:{foreground:h}},{name:"ID Attribute Name in HTML",scope:["entity.other.attribute-name.id.html","meta.attribute.id.html entity.other.attribute-name","meta.attribute.name.html entity.other.attribute-name","meta.attribute.href.html entity.other.attribute-name","meta.attribute.src.html entity.other.attribute-name"],settings:{foreground:b}},{name:"Entity Name Tag Custom",scope:"entity.name.tag.custom",settings:{foreground:k}},{name:"Unicode",scope:"constant.character.entity.named",settings:{foreground:h}},{name:"HTML Doctype",scope:["meta.tag.sgml.doctype.html","entity.name.tag.doctype","meta.tag.sgml.doctype","meta.tag.metadata.doctype.html entity.name.tag.html","meta.tag.metadata.doctype.html entity.other.attribute-name.html","meta.tag.metadata.doctype.html punctuation.definition.tag"],settings:{foreground:"".concat(b,"99"),fontStyle:"italic"}},{name:"Library (function & constant)",scope:["support.constant"],settings:{foreground:v}},{name:"Support Constant Property Value meta",scope:"support.constant.meta.property-value",settings:{foreground:S||h}},{name:"Library class/type",scope:["support.type","support.class"],settings:{foreground:k}},{name:"Support Variable DOM",scope:"support.variable.dom",settings:{foreground:k}},{name:"Keyword Operator Relational",scope:"keyword.operator.relational",settings:{foreground:b}},{name:"Keyword Operator Assignment",scope:"keyword.operator.assignment",settings:{foreground:b}},{name:"Meta Brace",scope:"meta.brace",settings:{foreground:u}},{name:"Meta Delimiter Period",scope:"meta.delimiter.period",settings:{foreground:b}},{name:"Object Comma",scope:"object.comma",settings:{foreground:u}},{name:"Variable Parameter Function",scope:"variable.parameter.function",settings:{foreground:S||h}},{name:"Support Type Property Name & entity name tags",scope:["support.type.vendored.property-name","support.constant.vendored.property-value","support.type.property-name","meta.property-list entity.name.tag"],settings:{foreground:v}},{name:"Entity Name tag reference in stylesheets",scope:"meta.property-list entity.name.tag.reference",settings:{foreground:h}},{name:"Constant Other Color RGB Value Punctuation Definition Constant",scope:["constant.other.color.rgb-value punctuation.definition.constant","constant.other.color.rgb-value.hex.css"],settings:{foreground:S||h}},{name:"Constant Other Color",scope:"constant.other.color",settings:{foreground:b}},{name:"Meta Selector",scope:"meta.selector",settings:{foreground:b}},{name:"Entity Other Attribute Name Id",scope:"entity.other.attribute-name.id",settings:{foreground:v}},{name:"Meta Property Name",scope:"meta.property-name",settings:{foreground:v}},{name:"Punctuation Definition Parameters",scope:"punctuation.definition.parameters",settings:{foreground:u}},{name:"Keyword Control Operator",scope:"keyword.control.operator",settings:{foreground:S||h}},{name:"Keyword Operator Logical",scope:"keyword.operator.logical",settings:{foreground:b}},{name:"Variable Instances",scope:["variable.instance","variable.other.instance","variable.reaedwrite.instance","variable.other.readwrite.instance"],settings:{foreground:h}},{name:"Language Variable",scope:"variable.language",settings:{foreground:h}},{name:"Variable Property Other",scope:["variable.other.property"],settings:{foreground:b}},{name:"Variable Property Other",scope:"variable.other.object.property",settings:{foreground:u}},{name:"Entity Name Function",scope:"entity.name.function",settings:{foreground:k}},{name:"Keyword Operator Comparison",scope:"keyword.operator.comparison",settings:{foreground:b}},{name:"Support Function",scope:"support.function",settings:{foreground:u}},{name:"Invalid",scope:["invalid","invalid.deprecated"],settings:{foreground:l}},{name:"Invalid Broken",scope:"invalid.broken",settings:{foreground:l}},{name:"Invalid Unimplemented",scope:"invalid.unimplemented",settings:{foreground:l}},{name:"Invalid Illegal",scope:"invalid.illegal",settings:{foreground:l}},{name:"Support Variable Property",scope:"support.variable.property",settings:{foreground:S||h}},{name:"DOM Support Variable Property",scope:"support.variable.property.dom.js",settings:{foreground:S||v}},{name:"Variable Function",scope:"variable.function",settings:{foreground:S||u}},{name:"Variable Interpolation",scope:"variable.interpolation",settings:{foreground:h}},{name:"Meta Function Call",scope:"meta.function-call",settings:{foreground:k}},{name:"Punctuation Section Embedded",scope:"punctuation.section.embedded",settings:{foreground:h}},{name:"Italics",scope:"italic",settings:{foreground:b,fontStyle:"italic"}},{name:"Bold",scope:"bold",settings:{foreground:k,fontStyle:"bold"}},{name:"Quote",scope:"quote",settings:{foreground:v}},{name:"Raw Code",scope:"raw",settings:{foreground:v}},{name:"CoffeeScript Variable Assignment",scope:"variable.assignment.coffee",settings:{foreground:S||h}},{name:"CoffeeScript Parameter Function",scope:"variable.parameter.function.coffee",settings:{foreground:u}},{name:"CoffeeScript Assignments",scope:"variable.assignment.coffee",settings:{foreground:S||h}},{name:"C# Readwrite Variables",scope:"variable.other.readwrite.cs",settings:{foreground:u}},{name:"C# Classes & Storage types",scope:["entity.name.type.class.cs","storage.type.cs"],settings:{foreground:k}},{name:"C# Namespaces",scope:"entity.name.type.namespace.cs",settings:{foreground:b}},{name:"Tag names in Stylesheets",scope:["entity.name.tag.css","entity.name.tag.less","entity.name.tag.custom.css"],settings:{foreground:h}},{name:"@media Query Headers",scope:["keyword.control.at-rule","keyword.control.at-rule punctuation.definition"],settings:{foreground:S,fontStyle:"bold"}},{name:"CSS Special Symbols",scope:["entity.name.tag.wildcard.css","entity.name.tag.wildcard.less","entity.name.tag.wildcard.scss","entity.name.tag.wildcard.sass","keyword.operator.combinator.css"],settings:{foreground:S,fontStyle:"bold"}},{name:"CSS Units and Numbers",scope:["source.css keyword.other.unit","source.css constant.numeric"],settings:{foreground:b}},{name:"Attribute Name for CSS",scope:"meta.attribute-selector.css entity.other.attribute-name.attribute",settings:{foreground:S||h}},{name:"CSS Property Names",scope:"support.type.property-name.css",settings:{foreground:u}},{name:"CSS Property Values",scope:["meta.property-value.scss","meta.property-value.scss support.type.property-name.css"],settings:{foreground:k}},{name:"Variables in SASS At-Rules",scope:["source.css.scss meta.at-rule variable","source.css.sass meta.at-rule variable"],settings:{foreground:k}},{name:"Attribute Name for SASS",scope:["meta.attribute-selector.scss entity.other.attribute-name.attribute","meta.attribute-selector.sass entity.other.attribute-name.attribute"],settings:{foreground:S||h}},{name:"Tag names in SASS",scope:["entity.name.tag.scss","entity.name.tag.sass"],settings:{foreground:h}},{name:"SASS Keyword Other Unit",scope:["keyword.other.unit.scss","keyword.other.unit.sass"],settings:{foreground:b}},{name:"SASS Support Functions",scope:["support.function.misc.scss","support.function.misc.sass"],settings:{foreground:v}},{name:"Vue Directives",scope:"meta.directive.vue entity.other.attribute-name",settings:{foreground:b}},{name:"Vue Directive variables",scope:["source.directive.vue variable.other.readwrite.js","source.directive.vue punctuation.definition.string"],settings:{foreground:h}},{name:"String Params in Vue Directives",scope:"meta.directive.vue string.quoted.single.js",settings:{foreground:S||h}},{name:"String HTML Attribute Values",scope:"source.vue meta.tag string.quoted",settings:{foreground:u}},{name:"Vue Template Tag",scope:"source.vue entity.name.tag.template.html",settings:{fontStyle:"bold"}},{name:"Vue Script Tag",scope:["source.vue entity.name.tag.script.html"],settings:{fontStyle:"bold"}},{name:"Elixir Classes",scope:["source.elixir support.type.elixir","source.elixir meta.module.elixir entity.name.class.elixir"],settings:{foreground:k}},{name:"Elixir Functions",scope:"source.elixir entity.name.function",settings:{foreground:k}},{name:"Elixir String Punctuations",scope:"source.elixir punctuation.definition.string",settings:{foreground:v}},{name:"Elixir",scope:["source.elixir variable.other.readwrite.module.elixir","source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"],settings:{foreground:k}},{name:"Elixir Binary Punctuations",scope:"source.elixir .punctuation.binary.elixir",settings:{foreground:b}},{name:"Go Function Calls",scope:"source.go meta.function-call.go",settings:{foreground:k}},{name:"JavaScript Classes",scope:"meta.class entity.name.type.class.js",settings:{foreground:k}},{name:"JavaScript Method Declaration e.g. `constructor`",scope:"meta.method.declaration storage.type.js",settings:{foreground:k,fontStyle:""}},{name:"JavaScript Terminator",scope:"terminator.js",settings:{foreground:u}},{name:"JavaScript Meta Punctuation Definition",scope:"meta.js punctuation.definition.js",settings:{foreground:u}},{name:"JavaScript Imported Modules",scope:["variable.other.meta.import.js","meta.import.js variable.other"],settings:{foreground:b}},{name:"JavaScript Import Statements",scope:["source.js keyword.control"],settings:{foreground:S||h}},{name:"JavaScript Export Default",scope:["support.type.object.module.js"],settings:{foreground:"".concat(k,"99")}},{name:"JavaScript Conditionals",scope:["source.js keyword.control.conditional"],settings:{foreground:S||h}},{name:"JavaScript Hex",scope:"constant.numeric.hex.js",settings:{foreground:S||k}},{name:"JavaScript Variable Parameter Function",scope:"variable.parameter.function.js",settings:{foreground:v}},{name:"JavaScript Variable Other ReadWrite",scope:"variable.other.readwrite.js",settings:{foreground:u}},{name:"JavaScript Variable Other ReadWrite",scope:"string.quoted.double.js meta.object-literal.key",settings:{foreground:b}},{name:"JavaScript[React] Variable Other Object",scope:["variable.other.object.js","variable.other.object.jsx","variable.object.property.js","variable.object.property.jsx"],settings:{foreground:u}},{name:"React/JSX HTML Tag names",scope:["meta.jsx entity.name.tag.js","meta.jsx punctuation.definition.tag"],settings:{foreground:u}},{name:"JavaScript Variables",scope:["variable.js","variable.other.js"],settings:{foreground:u}},{name:"JavaScript Entity Name Type",scope:["entity.name.type.js","entity.name.type.module.js"],settings:{foreground:k}},{name:"JavaScript Support Classes",scope:"support.class.js",settings:{foreground:u}},{name:"JavaScript Object Keys (String)",scope:["meta.object-literal.key.js string.quoted","meta.object-literal.key.js"],settings:{foreground:b}},{name:"JSON Property Names",scope:"support.type.property-name.json",settings:{foreground:h}},{name:"JSON Property values (string)",scope:["string.quoted.double.json meta.structure.dictionary.value.json","string.quoted.double.json punctuation.definition.string.json"],settings:{foreground:v}},{name:"Specific JSON Property values like null",scope:"meta.structure.dictionary.json meta.structure.dictionary.value constant.language",settings:{foreground:S||h}},{name:"Ruby Variables",scope:"variable.other.ruby",settings:{foreground:u}},{name:"Ruby Hashkeys",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:S||h}},{name:"LESS Tag names",scope:"entity.name.tag.less",settings:{foreground:h}},{name:"Attribute Name for LESS",scope:"meta.attribute-selector.less entity.other.attribute-name.attribute",settings:{foreground:S||h}},{name:"Markdown Headings",scope:"markup.heading.markdown",settings:{foreground:k}},{name:"Markdown Italics",scope:"markup.italic.markdown",settings:{foreground:h,fontStyle:"italic"}},{name:"Markdown Bold",scope:"markup.bold.markdown",settings:{foreground:u,fontStyle:"bold"}},{name:"Markdown Quote + others",scope:"markup.quote.markdown",settings:{foreground:v,fontStyle:"italic"}},{name:"Markdown Raw Code + others",scope:"markup.inline.raw.markdown",settings:{foreground:v}},{name:"Markdown Links",scope:["markup.underline.link.markdown","markup.underline.link.image.markdown"],settings:{foreground:v}},{name:"Markdown Link Title and Description",scope:["string.other.link.title.markdown","string.other.link.description.markdown"],settings:{foreground:u}},{name:"Markdown Punctuation",scope:["punctuation.definition.string.markdown","punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","meta.link.inline.markdown punctuation.definition.string"],settings:{foreground:k}},{name:"Markdown MetaData Punctuation",scope:["punctuation.definition.metadata.markdown"],settings:{foreground:h}},{name:"Markdown List Punctuation",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:b}},{name:"Support Classes in PHP",scope:"support.class.php",settings:{foreground:k}},{name:"Punctuations in PHP function calls",scope:"meta.function-call.php punctuation",settings:{foreground:u}},{name:"PHP Global Variables",scope:"variable.other.global.php",settings:{foreground:k}},{name:"Declaration Punctuation in PHP Global Variables",scope:"variable.other.global.php punctuation.definition.variable",settings:{foreground:k}},{name:"Language Constants in Python",scope:"constant.language.python",settings:{foreground:S||h}},{name:"Python Function Parameter and Arguments",scope:["variable.parameter.function.python","meta.function-call.arguments.python"],settings:{foreground:v}},{name:"Punctuations in Python",scope:"punctuation.python",settings:{foreground:u}},{name:"Decorator Functions in Python",scope:"entity.name.function.decorator.python",settings:{foreground:k}},{name:"TypeScript[React] Variables and Object Properties",scope:["variable.other.readwrite.alias.ts","variable.other.readwrite.alias.tsx","variable.other.readwrite.ts","variable.other.readwrite.tsx","variable.other.object.ts","variable.other.object.tsx","variable.object.property.ts","variable.object.property.tsx","variable.other.ts","variable.other.tsx","variable.tsx","variable.ts"],settings:{foreground:u}},{name:"TypeScript[React] Entity Name Types",scope:["entity.name.type.ts","entity.name.type.tsx"],settings:{foreground:k}},{name:"TypeScript[React] Node Classes",scope:["support.class.node.ts","support.class.node.tsx"],settings:{foreground:k}},{name:"TypeScript[React] Entity Name Types as Parameters",scope:["meta.type.parameters.ts entity.name.type","meta.type.parameters.tsx entity.name.type"],settings:{foreground:u}},{name:"TypeScript[React] Import Punctuations",scope:["meta.import.ts punctuation.definition.block","meta.import.tsx punctuation.definition.block"],settings:{foreground:u}},{name:"TypeScript[React] Punctuation Decorators",scope:["meta.decorator punctuation.decorator.ts","meta.decorator punctuation.decorator.tsx"],settings:{foreground:k}},{name:"TypeScript[React] Punctuation Decorators",scope:["meta.jsx.children.tsx","meta.tag.js meta.jsx.children.tsx"],settings:{foreground:k}},{name:"YAML Entity Name Tags",scope:"entity.name.tag.yaml",settings:{foreground:S||h}},{name:"comment docs",scope:"comment.block.javadoc keyword.other.documentation",settings:{foreground:"".concat(b,"90")}},{name:"comment docs",scope:"comment.block.javadoc entity.name.type.class",settings:{foreground:"".concat(k,"90")}},{name:"comment docs",scope:"comment.block.javadoc variable.parameter",settings:{foreground:"".concat(v,"90")}},{name:"Separating Commas",scope:"punctuation.separator",settings:{foreground:c}},{name:"Java strings",scope:"string.quoted.double.java",settings:{foreground:k}},{name:"Generic storage type",scope:"storage.type.generic.java",settings:{foreground:S||h}},{name:"Other object variables",scope:"variable.other.object.java",settings:{foreground:u}},{name:"Instance function calls",scope:"meta.method-call.java entity.name.function.java",settings:{foreground:v}},{name:"Other object variables",scope:["storage.modifier.import.java","meta.import.java storage.modifier.java"],settings:{foreground:"".concat(b,"99")}},{name:"Other object variables",scope:"keyword.other.import.java",settings:{foreground:"".concat(v,"99")}},{name:"Other object variables",scope:"meta.import.java punctuation",settings:{foreground:"".concat(u,"99")}},{name:"Normalize font style of certain Components",scope:["meta.property-list.css meta.property-value.css variable.other.less","meta.property-list.scss variable.scss","meta.property-list.sass variable.sass","keyword.other.unit","keyword.operator.logical","keyword.operator.arithmetic","keyword.operator.bitwise","keyword.operator.increment","keyword.operator.ternary","keyword.operator.comparison","keyword.operator.assignment","keyword.operator.operator","keyword.control.ternary","keyword.operator.or.regexp","punctuation.definintion.string","punctuation"],settings:{fontStyle:""}},{name:"Italicsify certain tokens",scope:["meta.import.ts meta.block.ts variable.other.readwrite.alias.ts","meta.import.tsx meta.block.tsx variable.other.readwrite.alias.tsx","meta.import.js variable.other","entity.name.function.ts","entity.name.function.tsx","support.type.primitive","entity.name.tag.yaml","meta.tag.sgml.doctype.html","entity.name.tag.doctype","meta.tag.sgml.doctype","entity.other.attribute-name","entity.name.tag.custom","source.js.jsx keyword.control.flow.js","support.type.property.css","support.function.basic_functions","variable.assignment.coffee","support.function.basic_functions","keyword.operator.expression.typeof","keyword.operator.type.annotation","assignment.coffee","entity.name.type.ts","support.constant.math","meta.object-literal.key","meta.var.expr storage.type","parameter","italic","quote","keyword","storage","language","type .function","type.function","storage.type.class","type.var","meta.parameter","variable.parameter","meta.parameters","keyword.control","modifier","this","comment"],settings:{fontStyle:"italic"}},{scope:"token.info-token",settings:{foreground:h}},{scope:"token.warn-token",settings:{foreground:l}},{scope:"token.error-token",settings:{foreground:l}},{scope:"token.debug-token",settings:{foreground:v}}]}},e.exports.genSettings=function(t){var n=e.exports.genTheme(t);return{"workbench.colorCustomizations":n.colors,"editor.tokenColorCustomizations":{textMateRules:n.tokenColors}}};var n=function(e,t,n){var o=parseInt(e.slice(1),16),r=parseInt(t.slice(1),16),a=o>>16,i=o>>8&255,s=255&o,c=r>>16,u=r>>8&255,g=255&r;return"#"+(16777216+65536*(Math.round((c-a)*n)+a)+256*(Math.round((u-i)*n)+i)+(Math.round((g-s)*n)+s)).toString(16).slice(1)};e.exports.gradient=function(e,t){return[n(e,t,.075),n(e,t,.125),n(e,t,.2),n(e,t,.3),n(e,t,.4),n(e,t,.5),n(e,t,.6),n(e,t,.7),n(e,t,.9)]}},268:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(92),i=n.n(a),s=n(56),c=n(15),u=n(16),g=n(18),d=n(17),p=n(19),m=n(93),l=(n(264),n(20)),f=(n(268),n(94)),y=(n(272),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(g.a)(this,Object(d.a)(t).call(this,e))).state={hover:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"control",onClick:this.props.onClick,onMouseEnter:function(){return e.setState({hover:!0})},onMouseLeave:function(){return e.setState({hover:!1})}},r.a.createElement("div",{className:"tooltip",style:{background:this.props.bg,color:this.props.toolTipFg+"88"}},this.props.toolTip),r.a.createElement("div",{className:"icon",style:{background:this.props.bg,color:this.state.hover?this.props.hoverFg:"inherit"}},r.a.createElement(f.a,{icon:this.props.icon})))}}]),t}(o.Component)),h=(n(273),function(e){function t(){return Object(c.a)(this,t),Object(g.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"classNames",value:function(){return["swatch",this.props.active?"active":"",this.props.new?"new":""].join(" ")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.classNames(),style:{background:this.props.color},onClick:function(){return e.props.onClick()}},r.a.createElement("span",{className:"hover"},"\xd7"),r.a.createElement("span",{className:"add"},this.props.new?"+":"\xa0"))}}]),t}(o.Component));h.defaultProps={color:"#fff",active:!0,new:!1};var b=h,v=n(25),k=n(274),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(g.a)(this,Object(d.a)(t).call(this,e))).save=function(){return window.localStorage.setItem("theme",JSON.stringify(n.state.theme))},n.getSaved=function(){var e=window.localStorage.getItem("theme");if(e){var t=JSON.parse(e),n=t.bg,o=t.fg,r=t.syntax;return{bg:n,fg:o,pos:t.pos,neg:t.neg,syntax:r,ui:t.ui}}return{bg:"#000000",fg:"#ffffff",pos:"#00ff00",neg:"#ff0000",syntax:["#ffff00"],ui:"#0000ff"}},n.importFromClipboard=function(){return navigator.clipboard.readText().then(function(e){return n.importSpine(e)}).catch(function(e){return console.log(e)})},n.getActiveColor=function(){return-1!==n.state.active.indexOf("syntax")?n.state.theme.syntax[n.state.active.split(":")[1]]:n.state.theme[n.state.active]},n.updateActiveColor=function(e,t){var o={theme:n.state.theme};-1!==n.state.active.indexOf("syntax")?o.theme.syntax[n.state.active.split(":")[1]]=e.hex:o.theme[n.state.active]=e.hex,n.setState(o)},n.clickSwatch=function(e){if(n.state.active==="syntax:"+e){var t=n.state.theme.syntax.slice();t.splice(e,1),n.updateSyntax(t)}else n.setState({active:"syntax:"+e})},n.copyToClipboard=function(e){return navigator.clipboard.writeText(e)},n.addSwatch=function(){var e=n.state.theme.syntax.slice(),t=e.push("#fff")-1;n.updateSyntax(e),n.setState({active:"syntax:"+t})},n.updateSyntax=function(e){var t={theme:n.state.theme};t.theme.syntax=e,n.setState({stateUpdate:t})},n.shuffleSyntax=function(){return n.updateSyntax(k.shuffle(n.state.theme.syntax))},n.importSpine=function(e){var t=n.validateSpine(e);t?e.value="ERROR: "+t.message:(n.setState({theme:JSON.parse(e)}),e.value="")},n.validateSpine=function(e){try{var t=JSON.parse(e),n=/^#([0-9a-f]{3}){1,2}$/i,o=[].concat(Object(s.a)(["bg","fg","pos","neg","ui"].map(function(e){return t[e]})),Object(s.a)(t.syntax)).filter(function(e){return!(e&&n.test(e))}).join(", ");return!!o&&{status:400,message:"Invalid hex code(s): "+o}}catch(r){return r}},n.renderSwatch=function(e){return r.a.createElement(b,{onClick:function(){n.setState({active:e})},color:n.state.theme[e],active:n.state.active===e})},n.renderControl=function(e,t,o){return r.a.createElement(y,{onClick:e,icon:t,bg:n.state.theme.bg,toolTipFg:n.state.theme.fg,fg:n.state.theme.ui+"55",hoverFg:n.state.theme.ui+"88",toolTip:o})},n.renderSyntaxSwatches=function(){return n.state.theme.syntax.map(function(e,t){return r.a.createElement(b,{key:t,color:n.state.theme.syntax[t],onClick:function(){n.clickSwatch(t)},active:n.state.active==="syntax:"+t,new:!1})})},n.state={theme:null,active:"bg"},n.state.theme=n.getSaved(),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper",style:{background:this.state.theme.bg,color:this.state.theme.fg}},r.a.createElement("section",{className:"controls",style:{background:this.state.theme.bg,color:this.state.theme.ui+"55"}},this.renderControl(this.importFromClipboard,l.d,"Import from clipboard"),this.renderControl(this.save,l.e,"Save theme"),this.renderControl(function(){return e.copyToClipboard(JSON.stringify(e.state.theme))},l.a,"Copy theme spine"),this.renderControl(function(){return e.copyToClipboard(JSON.stringify(Object(v.genTheme)(e.state.theme)))},l.b,"Copy theme code"),this.renderControl(function(){return e.copyToClipboard(JSON.stringify(Object(v.genSettings)(e.state.theme)))},l.c,"Copy workspace settings")),r.a.createElement("section",{className:"sidebar",style:{background:Object(v.gradient)(this.state.theme.bg,Object(v.gradient)(this.state.theme.bg,this.state.theme.fg)[0])[5],color:this.state.theme.fg}},r.a.createElement(m.ChromePicker,{color:this.getActiveColor(),onChange:this.updateActiveColor})),r.a.createElement("section",{className:"content"},r.a.createElement("div",null,this.renderSwatch("bg"),r.a.createElement("h3",null,"Background"),this.renderSwatch("fg"),r.a.createElement("h3",null,"Foreground"),this.renderSwatch("pos"),r.a.createElement("h3",null,"Positive color"),this.renderSwatch("neg"),r.a.createElement("h3",null,"Negative color"),r.a.createElement("div",{className:"syntax"},this.state.theme.syntax.map(function(t,n){return r.a.createElement(b,{key:n,color:e.state.theme.syntax[n],onClick:function(){e.clickSwatch(n)},active:e.state.active==="syntax:"+n,new:!1})}),r.a.createElement(b,{key:"new",active:!1,new:!0,onClick:this.addSwatch})),r.a.createElement("h3",null,"Syntax colors\xa0",r.a.createElement("button",{onClick:this.shuffleSyntax},"Shuffle")),this.renderSwatch("ui"),r.a.createElement("h3",null,"UI accent"))))}}]),t}(o.Component);i.a.render(r.a.createElement(S,null),document.getElementById("root"))},95:function(e,t,n){e.exports=n(275)}},[[95,1,2]]]);
//# sourceMappingURL=main.4d370d13.chunk.js.map