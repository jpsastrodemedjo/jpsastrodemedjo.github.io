var tipuesearch = {"pages":[{"title":"About me","text":"Hi! I'm John Peter and having finished my MSc degree I am now currently working as a Year 1 medical physics resident at St. Luke's Radiation Oncology Network (SLRON), Rathgar in Dublin, Ireland. My interests include outdoor activities such as running, swimming, cycling, hiking, landscape photography and many more. So the goal of this site is to post Python codes used in the field of medical physics. All code snippets in this site will be written in Python.","tags":"pages","url":"/pages/about-me/","loc":"/pages/about-me/"},{"title":"Python book + website recommendations","text":"Books Automate the boring stuff with Python by Al Sweigart Python 101 by Michael Driscoll Python Data Science Handbook by Jake VanderPlas Websites Python Tips : Useful Python conference videos! Planet Python : Blogs on latest Python updates! Cheatsheets Markdown Cheatsheet Conda Cheatsheet Matplotlib Cheatsheet","tags":"Resources","url":"/articles/2020/04/22/python book recommendations/","loc":"/articles/2020/04/22/python book recommendations/"},{"title":"Python code - test post","text":"/*! * * IPython notebook * */ /* CSS font colors for translated ANSI escape sequences */ /* The color values are a mix of http://www.xcolors.net/dl/baskerville-ivorylight and http://www.xcolors.net/dl/euphrasia */ .ansi-black-fg { color: #3E424D; } .ansi-black-bg { background-color: #3E424D; } .ansi-black-intense-fg { color: #282C36; } .ansi-black-intense-bg { background-color: #282C36; } .ansi-red-fg { color: #E75C58; } .ansi-red-bg { background-color: #E75C58; } .ansi-red-intense-fg { color: #B22B31; } .ansi-red-intense-bg { background-color: #B22B31; } .ansi-green-fg { color: #00A250; } .ansi-green-bg { background-color: #00A250; } .ansi-green-intense-fg { color: #007427; } .ansi-green-intense-bg { background-color: #007427; } .ansi-yellow-fg { color: #DDB62B; } .ansi-yellow-bg { background-color: #DDB62B; } .ansi-yellow-intense-fg { color: #B27D12; } .ansi-yellow-intense-bg { background-color: #B27D12; } .ansi-blue-fg { color: #208FFB; } .ansi-blue-bg { background-color: #208FFB; } .ansi-blue-intense-fg { color: #0065CA; } .ansi-blue-intense-bg { background-color: #0065CA; } .ansi-magenta-fg { color: #D160C4; } .ansi-magenta-bg { background-color: #D160C4; } .ansi-magenta-intense-fg { color: #A03196; } .ansi-magenta-intense-bg { background-color: #A03196; } .ansi-cyan-fg { color: #60C6C8; } .ansi-cyan-bg { background-color: #60C6C8; } .ansi-cyan-intense-fg { color: #258F8F; } .ansi-cyan-intense-bg { background-color: #258F8F; } .ansi-white-fg { color: #C5C1B4; } .ansi-white-bg { background-color: #C5C1B4; } .ansi-white-intense-fg { color: #A1A6B2; } .ansi-white-intense-bg { background-color: #A1A6B2; } .ansi-default-inverse-fg { color: #FFFFFF; } .ansi-default-inverse-bg { background-color: #000000; } .ansi-bold { font-weight: bold; } .ansi-underline { text-decoration: underline; } /* The following styles are deprecated an will be removed in a future version */ .ansibold { font-weight: bold; } .ansi-inverse { outline: 0.5px dotted; } /* use dark versions for foreground, to improve visibility */ .ansiblack { color: black; } .ansired { color: darkred; } .ansigreen { color: darkgreen; } .ansiyellow { color: #c4a000; } .ansiblue { color: darkblue; } .ansipurple { color: darkviolet; } .ansicyan { color: steelblue; } .ansigray { color: gray; } /* and light for background, for the same reason */ .ansibgblack { background-color: black; } .ansibgred { background-color: red; } .ansibggreen { background-color: green; } .ansibgyellow { background-color: yellow; } .ansibgblue { background-color: blue; } .ansibgpurple { background-color: magenta; } .ansibgcyan { background-color: cyan; } .ansibggray { background-color: gray; } div.cell { /* Old browsers */ display: -webkit-box; -webkit-box-orient: vertical; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: vertical; -moz-box-align: stretch; display: box; box-orient: vertical; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: column; align-items: stretch; border-radius: 2px; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; border-width: 1px; border-style: solid; border-color: transparent; width: 100%; padding: 5px; /* This acts as a spacer between cells, that is outside the border */ margin: 0px; outline: none; position: relative; overflow: visible; } div.cell:before { position: absolute; display: block; top: -1px; left: -1px; width: 5px; height: calc(100% + 2px); content: ''; background: transparent; } div.cell.jupyter-soft-selected { border-left-color: #E3F2FD; border-left-width: 1px; padding-left: 5px; border-right-color: #E3F2FD; border-right-width: 1px; background: #E3F2FD; } @media print { div.cell.jupyter-soft-selected { border-color: transparent; } } div.cell.selected, div.cell.selected.jupyter-soft-selected { border-color: #ababab; } div.cell.selected:before, div.cell.selected.jupyter-soft-selected:before { position: absolute; display: block; top: -1px; left: -1px; width: 5px; height: calc(100% + 2px); content: ''; background: #42A5F5; } @media print { div.cell.selected, div.cell.selected.jupyter-soft-selected { border-color: transparent; } } .edit_mode div.cell.selected { border-color: #66BB6A; } .edit_mode div.cell.selected:before { position: absolute; display: block; top: -1px; left: -1px; width: 5px; height: calc(100% + 2px); content: ''; background: #66BB6A; } @media print { .edit_mode div.cell.selected { border-color: transparent; } } .prompt { /* This needs to be wide enough for 3 digit prompt numbers: In[100]: */ min-width: 14ex; /* This padding is tuned to match the padding on the CodeMirror editor. */ padding: 0.4em; margin: 0px; font-family: monospace; text-align: right; /* This has to match that of the the CodeMirror class line-height below */ line-height: 1.21429em; /* Don't highlight prompt number selection */ -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; /* Use default cursor */ cursor: default; } @media (max-width: 540px) { .prompt { text-align: left; } } div.inner_cell { min-width: 0; /* Old browsers */ display: -webkit-box; -webkit-box-orient: vertical; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: vertical; -moz-box-align: stretch; display: box; box-orient: vertical; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: column; align-items: stretch; /* Old browsers */ -webkit-box-flex: 1; -moz-box-flex: 1; box-flex: 1; /* Modern browsers */ flex: 1; } /* input_area and input_prompt must match in top border and margin for alignment */ div.input_area { border: 1px solid #cfcfcf; border-radius: 2px; background: #f7f7f7; line-height: 1.21429em; } /* This is needed so that empty prompt areas can collapse to zero height when there is no content in the output_subarea and the prompt. The main purpose of this is to make sure that empty JavaScript output_subareas have no height. */ div.prompt:empty { padding-top: 0; padding-bottom: 0; } div.unrecognized_cell { padding: 5px 5px 5px 0px; /* Old browsers */ display: -webkit-box; -webkit-box-orient: horizontal; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: horizontal; -moz-box-align: stretch; display: box; box-orient: horizontal; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: row; align-items: stretch; } div.unrecognized_cell .inner_cell { border-radius: 2px; padding: 5px; font-weight: bold; color: red; border: 1px solid #cfcfcf; background: #eaeaea; } div.unrecognized_cell .inner_cell a { color: inherit; text-decoration: none; } div.unrecognized_cell .inner_cell a:hover { color: inherit; text-decoration: none; } @media (max-width: 540px) { div.unrecognized_cell > div.prompt { display: none; } } div.code_cell { /* avoid page breaking on code cells when printing */ } @media print { div.code_cell { page-break-inside: avoid; } } /* any special styling for code cells that are currently running goes here */ div.input { page-break-inside: avoid; /* Old browsers */ display: -webkit-box; -webkit-box-orient: horizontal; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: horizontal; -moz-box-align: stretch; display: box; box-orient: horizontal; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: row; align-items: stretch; } @media (max-width: 540px) { div.input { /* Old browsers */ display: -webkit-box; -webkit-box-orient: vertical; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: vertical; -moz-box-align: stretch; display: box; box-orient: vertical; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: column; align-items: stretch; } } /* input_area and input_prompt must match in top border and margin for alignment */ div.input_prompt { color: #303F9F; border-top: 1px solid transparent; } div.input_area > div.highlight { margin: 0.4em; border: none; padding: 0px; background-color: transparent; } div.input_area > div.highlight > pre { margin: 0px; border: none; padding: 0px; background-color: transparent; } /* The following gets added to the <head> if it is detected that the user has a * monospace font with inconsistent normal/bold/italic height. See * notebookmain.js. Such fonts will have keywords vertically offset with * respect to the rest of the text. The user should select a better font. * See: https://github.com/ipython/ipython/issues/1503 * * .CodeMirror span { * vertical-align: bottom; * } */ .CodeMirror { line-height: 1.21429em; /* Changed from 1em to our global default */ font-size: 14px; height: auto; /* Changed to auto to autogrow */ background: none; /* Changed from white to allow our bg to show through */ } .CodeMirror-scroll { /* The CodeMirror docs are a bit fuzzy on if overflow-y should be hidden or visible.*/ /* We have found that if it is visible, vertical scrollbars appear with font size changes.*/ overflow-y: hidden; overflow-x: auto; } .CodeMirror-lines { /* In CM2, this used to be 0.4em, but in CM3 it went to 4px. We need the em value because */ /* we have set a different line-height and want this to scale with that. */ /* Note that this should set vertical padding only, since CodeMirror assumes that horizontal padding will be set on CodeMirror pre */ padding: 0.4em 0; } .CodeMirror-linenumber { padding: 0 8px 0 4px; } .CodeMirror-gutters { border-bottom-left-radius: 2px; border-top-left-radius: 2px; } .CodeMirror pre { /* In CM3 this went to 4px from 0 in CM2. This sets horizontal padding only, use .CodeMirror-lines for vertical */ padding: 0 0.4em; border: 0; border-radius: 0; } .CodeMirror-cursor { border-left: 1.4px solid black; } @media screen and (min-width: 2138px) and (max-width: 4319px) { .CodeMirror-cursor { border-left: 2px solid black; } } @media screen and (min-width: 4320px) { .CodeMirror-cursor { border-left: 4px solid black; } } /* Original style from softwaremaniacs.org (c) Ivan Sagalaev <Maniac@SoftwareManiacs.Org> Adapted from GitHub theme */ .highlight-base { color: #000; } .highlight-variable { color: #000; } .highlight-variable-2 { color: #1a1a1a; } .highlight-variable-3 { color: #333333; } .highlight-string { color: #BA2121; } .highlight-comment { color: #408080; font-style: italic; } .highlight-number { color: #080; } .highlight-atom { color: #88F; } .highlight-keyword { color: #008000; font-weight: bold; } .highlight-builtin { color: #008000; } .highlight-error { color: #f00; } .highlight-operator { color: #AA22FF; font-weight: bold; } .highlight-meta { color: #AA22FF; } /* previously not defined, copying from default codemirror */ .highlight-def { color: #00f; } .highlight-string-2 { color: #f50; } .highlight-qualifier { color: #555; } .highlight-bracket { color: #997; } .highlight-tag { color: #170; } .highlight-attribute { color: #00c; } .highlight-header { color: blue; } .highlight-quote { color: #090; } .highlight-link { color: #00c; } /* apply the same style to codemirror */ .cm-s-ipython span.cm-keyword { color: #008000; font-weight: bold; } .cm-s-ipython span.cm-atom { color: #88F; } .cm-s-ipython span.cm-number { color: #080; } .cm-s-ipython span.cm-def { color: #00f; } .cm-s-ipython span.cm-variable { color: #000; } .cm-s-ipython span.cm-operator { color: #AA22FF; font-weight: bold; } .cm-s-ipython span.cm-variable-2 { color: #1a1a1a; } .cm-s-ipython span.cm-variable-3 { color: #333333; } .cm-s-ipython span.cm-comment { color: #408080; font-style: italic; } .cm-s-ipython span.cm-string { color: #BA2121; } .cm-s-ipython span.cm-string-2 { color: #f50; } .cm-s-ipython span.cm-meta { color: #AA22FF; } .cm-s-ipython span.cm-qualifier { color: #555; } .cm-s-ipython span.cm-builtin { color: #008000; } .cm-s-ipython span.cm-bracket { color: #997; } .cm-s-ipython span.cm-tag { color: #170; } .cm-s-ipython span.cm-attribute { color: #00c; } .cm-s-ipython span.cm-header { color: blue; } .cm-s-ipython span.cm-quote { color: #090; } .cm-s-ipython span.cm-link { color: #00c; } .cm-s-ipython span.cm-error { color: #f00; } .cm-s-ipython span.cm-tab { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=); background-position: right; background-repeat: no-repeat; } div.output_wrapper { /* this position must be relative to enable descendents to be absolute within it */ position: relative; /* Old browsers */ display: -webkit-box; -webkit-box-orient: vertical; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: vertical; -moz-box-align: stretch; display: box; box-orient: vertical; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: column; align-items: stretch; z-index: 1; } /* class for the output area when it should be height-limited */ div.output_scroll { /* ideally, this would be max-height, but FF barfs all over that */ height: 24em; /* FF needs this *and the wrapper* to specify full width, or it will shrinkwrap */ width: 100%; overflow: auto; border-radius: 2px; -webkit-box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8); box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8); display: block; } /* output div while it is collapsed */ div.output_collapsed { margin: 0px; padding: 0px; /* Old browsers */ display: -webkit-box; -webkit-box-orient: vertical; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: vertical; -moz-box-align: stretch; display: box; box-orient: vertical; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: column; align-items: stretch; } div.out_prompt_overlay { height: 100%; padding: 0px 0.4em; position: absolute; border-radius: 2px; } div.out_prompt_overlay:hover { /* use inner shadow to get border that is computed the same on WebKit/FF */ -webkit-box-shadow: inset 0 0 1px #000; box-shadow: inset 0 0 1px #000; background: rgba(240, 240, 240, 0.5); } div.output_prompt { color: #D84315; } /* This class is the outer container of all output sections. */ div.output_area { padding: 0px; page-break-inside: avoid; /* Old browsers */ display: -webkit-box; -webkit-box-orient: horizontal; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: horizontal; -moz-box-align: stretch; display: box; box-orient: horizontal; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: row; align-items: stretch; } div.output_area .MathJax_Display { text-align: left !important; } div.output_area div.output_area div.output_area img, div.output_area svg { max-width: 100%; height: auto; } div.output_area img.unconfined, div.output_area svg.unconfined { max-width: none; } div.output_area .mglyph > img { max-width: none; } /* This is needed to protect the pre formating from global settings such as that of bootstrap */ .output { /* Old browsers */ display: -webkit-box; -webkit-box-orient: vertical; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: vertical; -moz-box-align: stretch; display: box; box-orient: vertical; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: column; align-items: stretch; } @media (max-width: 540px) { div.output_area { /* Old browsers */ display: -webkit-box; -webkit-box-orient: vertical; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: vertical; -moz-box-align: stretch; display: box; box-orient: vertical; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: column; align-items: stretch; } } div.output_area pre { margin: 0; padding: 1px 0 1px 0; border: 0; vertical-align: baseline; color: black; background-color: transparent; border-radius: 0; } /* This class is for the output subarea inside the output_area and after the prompt div. */ div.output_subarea { overflow-x: auto; padding: 0.4em; /* Old browsers */ -webkit-box-flex: 1; -moz-box-flex: 1; box-flex: 1; /* Modern browsers */ flex: 1; max-width: calc(100% - 14ex); } div.output_scroll div.output_subarea { overflow-x: visible; } /* The rest of the output_* classes are for special styling of the different output types */ /* all text output has this class: */ div.output_text { text-align: left; color: #000; /* This has to match that of the the CodeMirror class line-height below */ line-height: 1.21429em; } /* stdout/stderr are 'text' as well as 'stream', but execute_result/error are *not* streams */ div.output_stderr { background: #fdd; /* very light red background for stderr */ } div.output_latex { text-align: left; } /* Empty output_javascript divs should have no height */ div.output_javascript:empty { padding: 0; } .js-error { color: darkred; } /* raw_input styles */ div.raw_input_container { line-height: 1.21429em; padding-top: 5px; } pre.raw_input_prompt { /* nothing needed here. */ } input.raw_input { font-family: monospace; font-size: inherit; color: inherit; width: auto; /* make sure input baseline aligns with prompt */ vertical-align: baseline; /* padding + margin = 0.5em between prompt and cursor */ padding: 0em 0.25em; margin: 0em 0.25em; } input.raw_input:focus { box-shadow: none; } p.p-space { margin-bottom: 10px; } div.output_unrecognized { padding: 5px; font-weight: bold; color: red; } div.output_unrecognized a { color: inherit; text-decoration: none; } div.output_unrecognized a:hover { color: inherit; text-decoration: none; } .rendered_html { color: #000; /* any extras will just be numbers: */ } .rendered_html :link { text-decoration: underline; } .rendered_html :visited { text-decoration: underline; } .rendered_html h1:first-child { margin-top: 0.538em; } .rendered_html h2:first-child { margin-top: 0.636em; } .rendered_html h3:first-child { margin-top: 0.777em; } .rendered_html h4:first-child { margin-top: 1em; } .rendered_html h5:first-child { margin-top: 1em; } .rendered_html h6:first-child { margin-top: 1em; } .rendered_html ul:not(.list-inline), .rendered_html ol:not(.list-inline) { padding-left: 2em; } .rendered_html * + ul { margin-top: 1em; } .rendered_html * + ol { margin-top: 1em; } .rendered_html pre, .rendered_html tr, .rendered_html th, .rendered_html tbody tr:nth-child(odd) { background: #f5f5f5; } .rendered_html tbody tr:hover { background: rgba(66, 165, 245, 0.2); } .rendered_html * + table { margin-top: 1em; } .rendered_html * + p { margin-top: 1em; } .rendered_html * + img { margin-top: 1em; } .rendered_html img, .rendered_html img.unconfined, .rendered_html * + .alert { margin-top: 1em; } [dir=\"rtl\"] div.text_cell { /* Old browsers */ display: -webkit-box; -webkit-box-orient: horizontal; -webkit-box-align: stretch; display: -moz-box; -moz-box-orient: horizontal; -moz-box-align: stretch; display: box; box-orient: horizontal; box-align: stretch; /* Modern browsers */ display: flex; flex-direction: row; align-items: stretch; } @media (max-width: 540px) { div.text_cell > div.prompt { display: none; } } div.text_cell_render { /*font-family: \"Helvetica Neue\", Arial, Helvetica, Geneva, sans-serif;*/ outline: none; resize: none; width: inherit; border-style: none; padding: 0.5em 0.5em 0.5em 0.4em; color: #000; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; } a.anchor-link:link { text-decoration: none; padding: 0px 20px; visibility: hidden; } h1:hover .anchor-link, h2:hover .anchor-link, h3:hover .anchor-link, h4:hover .anchor-link, h5:hover .anchor-link, h6:hover .anchor-link { visibility: visible; } .text_cell.rendered .input_area { display: none; } .text_cell.rendered .text_cell.rendered .rendered_html tr, .text_cell.rendered .rendered_html th, .text_cell.rendered .text_cell.unrendered .text_cell_render { display: none; } .text_cell .dropzone .input_area { border: 2px dashed #bababa; margin: -1px; } .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6 { font-weight: bold; font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; } .cm-header-1 { font-size: 185.7%; } .cm-header-2 { font-size: 157.1%; } .cm-header-3 { font-size: 128.6%; } .cm-header-4 { font-size: 110%; } .cm-header-5 { font-size: 100%; font-style: italic; } .cm-header-6 { font-size: 100%; font-style: italic; } .highlight .hll { background-color: #ffffcc } .highlight { background: #f8f8f8; } .highlight .c { color: #408080; font-style: italic } /* Comment */ .highlight .err { border: 1px solid #FF0000 } /* Error */ .highlight .k { color: #008000; font-weight: bold } /* Keyword */ .highlight .o { color: #666666 } /* Operator */ .highlight .ch { color: #408080; font-style: italic } /* Comment.Hashbang */ .highlight .cm { color: #408080; font-style: italic } /* Comment.Multiline */ .highlight .cp { color: #BC7A00 } /* Comment.Preproc */ .highlight .cpf { color: #408080; font-style: italic } /* Comment.PreprocFile */ .highlight .c1 { color: #408080; font-style: italic } /* Comment.Single */ .highlight .cs { color: #408080; font-style: italic } /* Comment.Special */ .highlight .gd { color: #A00000 } /* Generic.Deleted */ .highlight .ge { font-style: italic } /* Generic.Emph */ .highlight .gr { color: #FF0000 } /* Generic.Error */ .highlight .gh { color: #000080; font-weight: bold } /* Generic.Heading */ .highlight .gi { color: #00A000 } /* Generic.Inserted */ .highlight .go { color: #888888 } /* Generic.Output */ .highlight .gp { color: #000080; font-weight: bold } /* Generic.Prompt */ .highlight .gs { font-weight: bold } /* Generic.Strong */ .highlight .gu { color: #800080; font-weight: bold } /* Generic.Subheading */ .highlight .gt { color: #0044DD } /* Generic.Traceback */ .highlight .kc { color: #008000; font-weight: bold } /* Keyword.Constant */ .highlight .kd { color: #008000; font-weight: bold } /* Keyword.Declaration */ .highlight .kn { color: #008000; font-weight: bold } /* Keyword.Namespace */ .highlight .kp { color: #008000 } /* Keyword.Pseudo */ .highlight .kr { color: #008000; font-weight: bold } /* Keyword.Reserved */ .highlight .kt { color: #B00040 } /* Keyword.Type */ .highlight .m { color: #666666 } /* Literal.Number */ .highlight .s { color: #BA2121 } /* Literal.String */ .highlight .na { color: #7D9029 } /* Name.Attribute */ .highlight .nb { color: #008000 } /* Name.Builtin */ .highlight .nc { color: #0000FF; font-weight: bold } /* Name.Class */ .highlight .no { color: #880000 } /* Name.Constant */ .highlight .nd { color: #AA22FF } /* Name.Decorator */ .highlight .ni { color: #999999; font-weight: bold } /* Name.Entity */ .highlight .ne { color: #D2413A; font-weight: bold } /* Name.Exception */ .highlight .nf { color: #0000FF } /* Name.Function */ .highlight .nl { color: #A0A000 } /* Name.Label */ .highlight .nn { color: #0000FF; font-weight: bold } /* Name.Namespace */ .highlight .nt { color: #008000; font-weight: bold } /* Name.Tag */ .highlight .nv { color: #19177C } /* Name.Variable */ .highlight .ow { color: #AA22FF; font-weight: bold } /* Operator.Word */ .highlight .w { color: #bbbbbb } /* Text.Whitespace */ .highlight .mb { color: #666666 } /* Literal.Number.Bin */ .highlight .mf { color: #666666 } /* Literal.Number.Float */ .highlight .mh { color: #666666 } /* Literal.Number.Hex */ .highlight .mi { color: #666666 } /* Literal.Number.Integer */ .highlight .mo { color: #666666 } /* Literal.Number.Oct */ .highlight .sa { color: #BA2121 } /* Literal.String.Affix */ .highlight .sb { color: #BA2121 } /* Literal.String.Backtick */ .highlight .sc { color: #BA2121 } /* Literal.String.Char */ .highlight .dl { color: #BA2121 } /* Literal.String.Delimiter */ .highlight .sd { color: #BA2121; font-style: italic } /* Literal.String.Doc */ .highlight .s2 { color: #BA2121 } /* Literal.String.Double */ .highlight .se { color: #BB6622; font-weight: bold } /* Literal.String.Escape */ .highlight .sh { color: #BA2121 } /* Literal.String.Heredoc */ .highlight .si { color: #BB6688; font-weight: bold } /* Literal.String.Interpol */ .highlight .sx { color: #008000 } /* Literal.String.Other */ .highlight .sr { color: #BB6688 } /* Literal.String.Regex */ .highlight .s1 { color: #BA2121 } /* Literal.String.Single */ .highlight .ss { color: #19177C } /* Literal.String.Symbol */ .highlight .bp { color: #008000 } /* Name.Builtin.Pseudo */ .highlight .fm { color: #0000FF } /* Name.Function.Magic */ .highlight .vc { color: #19177C } /* Name.Variable.Class */ .highlight .vg { color: #19177C } /* Name.Variable.Global */ .highlight .vi { color: #19177C } /* Name.Variable.Instance */ .highlight .vm { color: #19177C } /* Name.Variable.Magic */ .highlight .il { color: #666666 } /* Literal.Number.Integer.Long */ In [2]: import numpy as np import matplotlib.pyplot as plt % matplotlib inline In [21]: plt . plot ( range ( 0 , 10 ), 'ro--' ) plt . xlabel ( 'abscissa/units' ) plt . ylabel ( 'ordinate/units' ) plt . grid ( True ) *{stroke-linecap:butt;stroke-linejoin:round;} In [19]: markers = [ '-' , '+' , 'o' , '.' , ',' , 's' , 'd' , 'x' , 'v' , '&#94;' , '<' , '>' , 'p' ] Range = np . random . RandomState ( 0 ) for i in markers : plt . plot ( Range . rand ( 2 ), Range . rand ( 2 ), i , label = \"marker=' {0} '\" . format ( i )) plt . legend ( loc = 'best' , frameon = False ); *{stroke-linecap:butt;stroke-linejoin:round;} In [6]: import this The Zen of Python, by Tim Peters Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated. Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules. Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced. In the face of ambiguity, refuse the temptation to guess. There should be one-- and preferably only one --obvious way to do it. Although that way may not be obvious at first unless you're Dutch. Now is better than never. Although never is often better than *right* now. If the implementation is hard to explain, it's a bad idea. If the implementation is easy to explain, it may be a good idea. Namespaces are one honking great idea -- let's do more of those! if (!document.getElementById('mathjaxscript_pelican_#%@#$@#')) { var mathjaxscript = document.createElement('script'); mathjaxscript.id = 'mathjaxscript_pelican_#%@#$@#'; mathjaxscript.type = 'text/javascript'; mathjaxscript.src = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML'; mathjaxscript[(window.opera ? \"innerHTML\" : \"text\")] = \"MathJax.Hub.Config({\" + \" config: ['MMLorHTML.js'],\" + \" TeX: { extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js'], equationNumbers: { autoNumber: 'AMS' } },\" + \" jax: ['input/TeX','input/MathML','output/HTML-CSS'],\" + \" extensions: ['tex2jax.js','mml2jax.js','MathMenu.js','MathZoom.js'],\" + \" displayAlign: 'center',\" + \" displayIndent: '0em',\" + \" showMathMenu: true,\" + \" tex2jax: { \" + \" inlineMath: [ ['$','$'] ], \" + \" displayMath: [ ['$$','$$'] ],\" + \" processEscapes: true,\" + \" preview: 'TeX',\" + \" }, \" + \" 'HTML-CSS': { \" + \" linebreaks: { automatic: true, width: '95% container' }, \" + \" styles: { '.MathJax_Display, .MathJax .mo, .MathJax .mi, .MathJax .mn': {color: 'black ! important'} }\" + \" } \" + \"}); \"; (document.body || document.getElementsByTagName('head')[0]).appendChild(mathjaxscript); }","tags":"trainee blog","url":"/articles/2020/04/12/python-code-test-post/","loc":"/articles/2020/04/12/python-code-test-post/"},{"title":"Induction","text":"Week 1 Blog Learned how to use Git tracking adding to the staging area committing changes adding files to remote repositories (github) branching and merging) Completed Fundamental of Medical Ethics course Completed IAEA Safety and Quality in RT course Read SLRON Local Rules , Policies & Procedures etc. Learned how to generate a static site with pelican & markdown (in vscode) This is how syntax highlighting works, indent and 3 colons with the name of the language (python3) x = ( \"hello\" ) print ( x ) To deploy a static website to Github pages While in the blog/output folder run the following git commands in order to push files to the username.github.io repository. git init git remote add origin https://github.com/username/username.github.io git add . git commit -m \"initial commit\" git push -u origin master Next, navigate to the blog/source folder run the following git commands in order to push our files to the blog_source repository: git init git remote add origin https://github.com/username/port_blog git add . git commit -m \"initial commit\" git push -u origin master After running both sequences of Git commands we should be able to see our files loaded into their respective repositories on Github. To view the website type https://jpsastrodemedjo.github.io into your web browser. Markdown Cheatsheet Week 2 To-do list Read HSE Polices + Procedures Python Session with Pat (Wed) Radiation Safety Procedures Q+A (Thurs) Basic Interactions oral exam (Fri)","tags":"Trainee Blog","url":"/articles/2020/04/04/Induction/","loc":"/articles/2020/04/04/Induction/"}]};