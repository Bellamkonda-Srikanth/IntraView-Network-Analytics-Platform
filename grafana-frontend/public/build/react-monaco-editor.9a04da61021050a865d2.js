"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8926],{79862:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-dropdown {
	height: 100%;
	padding: 0;
}

.monaco-dropdown > .dropdown-label {
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-dropdown > .dropdown-label > .action-label.disabled {
	cursor: default;
}

.monaco-dropdown-with-primary {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-primary > .action-container > .action-label {
	margin-right: 0;
}

.monaco-dropdown-with-primary > .dropdown-action-container > .monaco-dropdown > .dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-primary > .dropdown-action-container > .monaco-dropdown > .dropdown-label > .action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/base/browser/ui/dropdown/dropdown.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,YAAY;CACZ,UAAU;AACX;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;CACxB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,cAAc;CACd,qBAAqB;CACrB,kCAAkC;CAClC,4BAA4B;AAC7B",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-dropdown {
	height: 100%;
	padding: 0;
}

.monaco-dropdown > .dropdown-label {
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-dropdown > .dropdown-label > .action-label.disabled {
	cursor: default;
}

.monaco-dropdown-with-primary {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-primary > .action-container > .action-label {
	margin-right: 0;
}

.monaco-dropdown-with-primary > .dropdown-action-container > .monaco-dropdown > .dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-primary > .dropdown-action-container > .monaco-dropdown > .dropdown-label > .action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}
`],sourceRoot:""}]);const i=n},96854:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-hover {
	cursor: default;
	position: absolute;
	overflow: hidden;
	z-index: 50;
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	box-sizing: initial;
	animation: fadein 100ms linear;
	line-height: 1.5em;
}

.monaco-hover.hidden {
	display: none;
}

.monaco-hover a:hover {
	cursor: pointer;
}

.monaco-hover .hover-contents:not(.html-hover-contents) {
	padding: 4px 8px;
}

.monaco-hover .markdown-hover > .hover-contents:not(.code-hover-contents) {
	max-width: 500px;
	word-wrap: break-word;
}

.monaco-hover .markdown-hover > .hover-contents:not(.code-hover-contents) hr {
	min-width: 100%;
}

.monaco-hover p,
.monaco-hover .code,
.monaco-hover ul {
	margin: 8px 0;
}

.monaco-hover code {
	font-family: var(--monaco-monospace-font);
}

.monaco-hover hr {
	box-sizing: border-box;
	border-left: 0px;
	border-right: 0px;
	margin-top: 4px;
	margin-bottom: -4px;
	margin-left: -8px;
	margin-right: -8px;
	height: 1px;
}

.monaco-hover p:first-child,
.monaco-hover .code:first-child,
.monaco-hover ul:first-child {
	margin-top: 0;
}

.monaco-hover p:last-child,
.monaco-hover .code:last-child,
.monaco-hover ul:last-child {
	margin-bottom: 0;
}

/* MarkupContent Layout */
.monaco-hover ul {
	padding-left: 20px;
}
.monaco-hover ol {
	padding-left: 20px;
}

.monaco-hover li > p {
	margin-bottom: 0;
}

.monaco-hover li > ul {
	margin-top: 0;
}

.monaco-hover code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-hover .monaco-tokenized-source {
	white-space: pre-wrap;
}

.monaco-hover .hover-row.status-bar {
	font-size: 12px;
	line-height: 22px;
}

.monaco-hover .hover-row.status-bar .actions {
	display: flex;
	padding: 0px 8px;
}

.monaco-hover .hover-row.status-bar .actions .action-container {
	margin-right: 16px;
	cursor: pointer;
}

.monaco-hover .hover-row.status-bar .actions .action-container .action .icon {
	padding-right: 4px;
}

.monaco-hover .markdown-hover .hover-contents .codicon {
	color: inherit;
	font-size: inherit;
	vertical-align: middle;
}

.monaco-hover .hover-contents a.code-link:hover,
.monaco-hover .hover-contents a.code-link {
	color: inherit;
}

.monaco-hover .hover-contents a.code-link:before {
	content: '(';
}

.monaco-hover .hover-contents a.code-link:after {
	content: ')';
}

.monaco-hover .hover-contents a.code-link > span {
	text-decoration: underline;
	/** Hack to force underline to show **/
	border-bottom: 1px solid transparent;
	text-underline-position: under;
}

/** Spans in markdown hovers need a margin-bottom to avoid looking cramped: https://github.com/microsoft/vscode/issues/101496 **/
.monaco-hover .markdown-hover .hover-contents:not(.code-hover-contents):not(.html-hover-contents) span {
	margin-bottom: 4px;
	display: inline-block;
}

.monaco-hover-content .action-container a {
	-webkit-user-select: none;
	user-select: none;
}

.monaco-hover-content .action-container.disabled {
	pointer-events: none;
	opacity: 0.4;
	cursor: default;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hover.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,WAAW;CACX,iBAAiB;CACjB,yBAAyB;CACzB,qBAAqB;CACrB,mBAAmB;CACnB,8BAA8B;CAC9B,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,eAAe;AAChB;;AAEA;;;CAGC,aAAa;AACd;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,sBAAsB;CACtB,gBAAgB;CAChB,iBAAiB;CACjB,eAAe;CACf,mBAAmB;CACnB,iBAAiB;CACjB,kBAAkB;CAClB,WAAW;AACZ;;AAEA;;;CAGC,aAAa;AACd;;AAEA;;;CAGC,gBAAgB;AACjB;;AAEA,yBAAyB;AACzB;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,cAAc;CACd,kBAAkB;CAClB,sBAAsB;AACvB;;AAEA;;CAEC,cAAc;AACf;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,0BAA0B;CAC1B,sCAAsC;CACtC,oCAAoC;CACpC,8BAA8B;AAC/B;;AAEA,gIAAgI;AAChI;CACC,kBAAkB;CAClB,qBAAqB;AACtB;;AAEA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,oBAAoB;CACpB,YAAY;CACZ,eAAe;AAChB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-hover {
	cursor: default;
	position: absolute;
	overflow: hidden;
	z-index: 50;
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	box-sizing: initial;
	animation: fadein 100ms linear;
	line-height: 1.5em;
}

.monaco-hover.hidden {
	display: none;
}

.monaco-hover a:hover {
	cursor: pointer;
}

.monaco-hover .hover-contents:not(.html-hover-contents) {
	padding: 4px 8px;
}

.monaco-hover .markdown-hover > .hover-contents:not(.code-hover-contents) {
	max-width: 500px;
	word-wrap: break-word;
}

.monaco-hover .markdown-hover > .hover-contents:not(.code-hover-contents) hr {
	min-width: 100%;
}

.monaco-hover p,
.monaco-hover .code,
.monaco-hover ul {
	margin: 8px 0;
}

.monaco-hover code {
	font-family: var(--monaco-monospace-font);
}

.monaco-hover hr {
	box-sizing: border-box;
	border-left: 0px;
	border-right: 0px;
	margin-top: 4px;
	margin-bottom: -4px;
	margin-left: -8px;
	margin-right: -8px;
	height: 1px;
}

.monaco-hover p:first-child,
.monaco-hover .code:first-child,
.monaco-hover ul:first-child {
	margin-top: 0;
}

.monaco-hover p:last-child,
.monaco-hover .code:last-child,
.monaco-hover ul:last-child {
	margin-bottom: 0;
}

/* MarkupContent Layout */
.monaco-hover ul {
	padding-left: 20px;
}
.monaco-hover ol {
	padding-left: 20px;
}

.monaco-hover li > p {
	margin-bottom: 0;
}

.monaco-hover li > ul {
	margin-top: 0;
}

.monaco-hover code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-hover .monaco-tokenized-source {
	white-space: pre-wrap;
}

.monaco-hover .hover-row.status-bar {
	font-size: 12px;
	line-height: 22px;
}

.monaco-hover .hover-row.status-bar .actions {
	display: flex;
	padding: 0px 8px;
}

.monaco-hover .hover-row.status-bar .actions .action-container {
	margin-right: 16px;
	cursor: pointer;
}

.monaco-hover .hover-row.status-bar .actions .action-container .action .icon {
	padding-right: 4px;
}

.monaco-hover .markdown-hover .hover-contents .codicon {
	color: inherit;
	font-size: inherit;
	vertical-align: middle;
}

.monaco-hover .hover-contents a.code-link:hover,
.monaco-hover .hover-contents a.code-link {
	color: inherit;
}

.monaco-hover .hover-contents a.code-link:before {
	content: '(';
}

.monaco-hover .hover-contents a.code-link:after {
	content: ')';
}

.monaco-hover .hover-contents a.code-link > span {
	text-decoration: underline;
	/** Hack to force underline to show **/
	border-bottom: 1px solid transparent;
	text-underline-position: under;
}

/** Spans in markdown hovers need a margin-bottom to avoid looking cramped: https://github.com/microsoft/vscode/issues/101496 **/
.monaco-hover .markdown-hover .hover-contents:not(.code-hover-contents):not(.html-hover-contents) span {
	margin-bottom: 4px;
	display: inline-block;
}

.monaco-hover-content .action-container a {
	-webkit-user-select: none;
	user-select: none;
}

.monaco-hover-content .action-container.disabled {
	pointer-events: none;
	opacity: 0.4;
	cursor: default;
}
`],sourceRoot:""}]);const i=n},42755:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .selection-anchor {
	background-color: #007ACC;
	width: 2px !important;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/anchorSelect/browser/anchorSelect.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,yBAAyB;CACzB,qBAAqB;AACtB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .selection-anchor {
	background-color: #007ACC;
	width: 2px !important;
}
`],sourceRoot:""}]);const i=n},7997:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .bracket-match {
	box-sizing: border-box;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,sBAAsB;AACvB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .bracket-match {
	box-sizing: border-box;
}
`],sourceRoot:""}]);const i=n},26550:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .contentWidgets .codicon-light-bulb,
.monaco-editor .contentWidgets .codicon-lightbulb-autofix {
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-editor .contentWidgets .codicon-light-bulb:hover,
.monaco-editor .contentWidgets .codicon-lightbulb-autofix:hover {
	cursor: pointer;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/lightBulbWidget.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;;CAEC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;;CAEC,eAAe;AAChB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .contentWidgets .codicon-light-bulb,
.monaco-editor .contentWidgets .codicon-lightbulb-autofix {
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-editor .contentWidgets .codicon-light-bulb:hover,
.monaco-editor .contentWidgets .codicon-lightbulb-autofix:hover {
	cursor: pointer;
}
`],sourceRoot:""}]);const i=n},24259:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.codeActionMenuWidget {
	padding: 8px 0px 8px 0px;
	overflow: auto;
	font-size: 13px;
	border-radius: 5px;
	min-width: 160px;
	z-index: 40;
	display: block;
	/* flex-direction: column;
	flex: 0 1 auto; */
	width: 100%;
	border-width: 0px;
	border-color: none;
	background-color: var(--vscode-menu-background);
	color: var(--vscode-menu-foreground);
	box-shadow: rgb(0,0,0, 16%) 0px 2px 8px;
}

.codeActionMenuWidget .monaco-list:not(.element-focused):focus:before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5; /* make sure we are on top of the tree items */
	content: "";
	pointer-events: none; /* enable click through */
	outline: 0px solid !important; /* we still need to handle the empty tree or no focus item case */
	outline-width: 0px !important;
	outline-style: none !important;
	outline-offset: 0px !important;
}

.codeActionMenuWidget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	border: none !important;
	border-width: 0px !important;
}

/* .codeActionMenuWidget .monaco-list:not(.element-focus) {
	border: none !important;
	border-width: 0px !important;
} */

.codeActionMenuWidget .monaco-list .monaco-scrollable-element .monaco-list-rows {
	height: 100% !important;
}

.codeActionMenuWidget .monaco-list .monaco-scrollable-element {
	overflow: visible;
}
/** Styles for each row in the list element **/

.codeActionMenuWidget .monaco-list .monaco-list-row:not(.separator) {
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0px 26px 0px 26px;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
	width: 100%;
}


.codeActionMenuWidget .monaco-list .monaco-list-row:hover:not(.option-disabled),
.codeActionMenuWidget .monaco-list .moncao-list-row.focused:not(.option-disabled) {
	color: var(--vscode-menu-selectionForeground) !important;
	background-color: var(--vscode-menu-selectionBackground) !important;
}

.codeActionMenuWidget .monaco-list .option-disabled,
.codeActionMenuWidget .monaco-list .option-disabled .focused {
	pointer-events: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: var(--vscode-disabledForeground) !important;
}

.codeActionMenuWidget .monaco-list .separator {
	border-bottom: 1px solid var(--vscode-menu-separatorBackground);
	padding-top: 0px !important;
	/* padding: 30px; */
	width: 100%;
	height: 0px !important;
	opacity: 1;
	font-size: inherit;
	margin: 5px 0 !important;
	border-radius: 0;
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/media/action.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,wBAAwB;CACxB,cAAc;CACd,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,WAAW;CACX,cAAc;CACd;kBACiB;CACjB,WAAW;CACX,iBAAiB;CACjB,kBAAkB;CAClB,+CAA+C;CAC/C,oCAAoC;CACpC,uCAAuC;AACxC;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,YAAY;CACZ,UAAU,EAAE,8CAA8C;CAC1D,WAAW;CACX,oBAAoB,EAAE,yBAAyB;CAC/C,6BAA6B,EAAE,iEAAiE;CAChG,6BAA6B;CAC7B,8BAA8B;CAC9B,8BAA8B;AAC/B;;AAEA;CACC,iBAAiB;CACjB,yBAAyB;CACzB,qBAAqB;CACrB,uBAAuB;CACvB,4BAA4B;AAC7B;;AAEA;;;GAGG;;AAEH;CACC,uBAAuB;AACxB;;AAEA;CACC,iBAAiB;AAClB;AACA,8CAA8C;;AAE9C;CACC,aAAa;CACb,2BAA2B;CAC3B,sBAAsB;CACtB,0BAA0B;CAC1B,4BAA4B;CAC5B,4BAA4B;CAC5B,mBAAmB;CACnB,eAAe;CACf,kBAAkB;CAClB,WAAW;AACZ;;;AAGA;;CAEC,wDAAwD;CACxD,mEAAmE;AACpE;;AAEA;;CAEC,oBAAoB;CACpB,2BAA2B;CAC3B,yBAAyB;CACzB,wBAAwB;CACxB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;CACjB,kDAAkD;AACnD;;AAEA;CACC,+DAA+D;CAC/D,2BAA2B;CAC3B,mBAAmB;CACnB,WAAW;CACX,sBAAsB;CACtB,UAAU;CACV,kBAAkB;CAClB,wBAAwB;CACxB,gBAAgB;CAChB,aAAa;CACb,2BAA2B;CAC3B,sBAAsB;CACtB,4BAA4B;CAC5B,4BAA4B;CAC5B,mBAAmB;CACnB,eAAe;CACf,kBAAkB;AACnB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.codeActionMenuWidget {
	padding: 8px 0px 8px 0px;
	overflow: auto;
	font-size: 13px;
	border-radius: 5px;
	min-width: 160px;
	z-index: 40;
	display: block;
	/* flex-direction: column;
	flex: 0 1 auto; */
	width: 100%;
	border-width: 0px;
	border-color: none;
	background-color: var(--vscode-menu-background);
	color: var(--vscode-menu-foreground);
	box-shadow: rgb(0,0,0, 16%) 0px 2px 8px;
}

.codeActionMenuWidget .monaco-list:not(.element-focused):focus:before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5; /* make sure we are on top of the tree items */
	content: "";
	pointer-events: none; /* enable click through */
	outline: 0px solid !important; /* we still need to handle the empty tree or no focus item case */
	outline-width: 0px !important;
	outline-style: none !important;
	outline-offset: 0px !important;
}

.codeActionMenuWidget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	border: none !important;
	border-width: 0px !important;
}

/* .codeActionMenuWidget .monaco-list:not(.element-focus) {
	border: none !important;
	border-width: 0px !important;
} */

.codeActionMenuWidget .monaco-list .monaco-scrollable-element .monaco-list-rows {
	height: 100% !important;
}

.codeActionMenuWidget .monaco-list .monaco-scrollable-element {
	overflow: visible;
}
/** Styles for each row in the list element **/

.codeActionMenuWidget .monaco-list .monaco-list-row:not(.separator) {
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0px 26px 0px 26px;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
	width: 100%;
}


.codeActionMenuWidget .monaco-list .monaco-list-row:hover:not(.option-disabled),
.codeActionMenuWidget .monaco-list .moncao-list-row.focused:not(.option-disabled) {
	color: var(--vscode-menu-selectionForeground) !important;
	background-color: var(--vscode-menu-selectionBackground) !important;
}

.codeActionMenuWidget .monaco-list .option-disabled,
.codeActionMenuWidget .monaco-list .option-disabled .focused {
	pointer-events: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: var(--vscode-disabledForeground) !important;
}

.codeActionMenuWidget .monaco-list .separator {
	border-bottom: 1px solid var(--vscode-menu-separatorBackground);
	padding-top: 0px !important;
	/* padding: 30px; */
	width: 100%;
	height: 0px !important;
	opacity: 1;
	font-size: inherit;
	margin: 5px 0 !important;
	border-radius: 0;
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
}
`],sourceRoot:""}]);const i=n},61727:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .codelens-decoration {
	overflow: hidden;
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--vscode-editorCodeLens-foreground)
}

.monaco-editor .codelens-decoration>span,
.monaco-editor .codelens-decoration>a {
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	white-space: nowrap;
	vertical-align: sub;
}

.monaco-editor .codelens-decoration>a {
	text-decoration: none;
}

.monaco-editor .codelens-decoration>a:hover {
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration>a:hover .codicon {
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration .codicon {
	vertical-align: middle;
	color: currentColor !important;
	color: var(--vscode-editorCodeLens-foreground);
}

.monaco-editor .codelens-decoration>a:hover .codicon::before {
	cursor: pointer;
}

@keyframes fadein {
	0% {
		opacity: 0;
		visibility: visible;
	}

	100% {
		opacity: 1;
	}
}

.monaco-editor .codelens-decoration.fadein {
	animation: fadein 0.1s linear;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/codelens/browser/codelensWidget.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,gBAAgB;CAChB,qBAAqB;CACrB,uBAAuB;CACvB,mBAAmB;CACnB;AACD;;AAEA;;CAEC,iBAAiB;CACjB,yBAAyB;CACzB,qBAAqB;CACrB,mBAAmB;CACnB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,eAAe;CACf,2DAA2D;AAC5D;;AAEA;CACC,2DAA2D;AAC5D;;AAEA;CACC,sBAAsB;CACtB,8BAA8B;CAC9B,8CAA8C;AAC/C;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC;EACC,UAAU;EACV,mBAAmB;CACpB;;CAEA;EACC,UAAU;CACX;AACD;;AAEA;CACC,6BAA6B;AAC9B",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .codelens-decoration {
	overflow: hidden;
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--vscode-editorCodeLens-foreground)
}

.monaco-editor .codelens-decoration>span,
.monaco-editor .codelens-decoration>a {
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	white-space: nowrap;
	vertical-align: sub;
}

.monaco-editor .codelens-decoration>a {
	text-decoration: none;
}

.monaco-editor .codelens-decoration>a:hover {
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration>a:hover .codicon {
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration .codicon {
	vertical-align: middle;
	color: currentColor !important;
	color: var(--vscode-editorCodeLens-foreground);
}

.monaco-editor .codelens-decoration>a:hover .codicon::before {
	cursor: pointer;
}

@keyframes fadein {
	0% {
		opacity: 0;
		visibility: visible;
	}

	100% {
		opacity: 1;
	}
}

.monaco-editor .codelens-decoration.fadein {
	animation: fadein 0.1s linear;
}
`],sourceRoot:""}]);const i=n},53345:(d,_,t)=>{t.d(_,{A:()=>m});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=t(4417),i=t.n(n),C=new URL(t(68968),t.b),c=a()(r()),l=i()(C);c.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.colorpicker-widget {
	height: 190px;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}

/* Decoration */

.colorpicker-color-decoration,
.hc-light .colorpicker-color-decoration {
	border: solid 0.1em #000;
	box-sizing: border-box;
	margin: 0.1em 0.2em 0 0.2em;
	width: 0.8em;
	height: 0.8em;
	line-height: 0.8em;
	display: inline-block;
	cursor: pointer;
}

.hc-black .colorpicker-color-decoration,
.vs-dark .colorpicker-color-decoration {
	border: solid 0.1em #eee;
}

/* Header */

.colorpicker-header {
	display: flex;
	height: 24px;
	position: relative;
	background: url(${l});
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-header .picked-color {
	width: 216px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 24px;
	cursor: pointer;
	color: white;
	flex: 1;
}

.colorpicker-header .picked-color .codicon {
	color: inherit;
	font-size: 14px;
	position: absolute;
	left: 8px;
}

.colorpicker-header .picked-color.light {
	color: black;
}

.colorpicker-header .original-color {
	width: 74px;
	z-index: inherit;
	cursor: pointer;
}


/* Body */

.colorpicker-body {
	display: flex;
	padding: 8px;
	position: relative;
}

.colorpicker-body .saturation-wrap {
	overflow: hidden;
	height: 150px;
	position: relative;
	min-width: 220px;
	flex: 1;
}

.colorpicker-body .saturation-box {
	height: 150px;
	position: absolute;
}

.colorpicker-body .saturation-selection {
	width: 9px;
	height: 9px;
	margin: -5px 0 0 -5px;
	border: 1px solid rgb(255, 255, 255);
	border-radius: 100%;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
	position: absolute;
}

.colorpicker-body .strip {
	width: 25px;
	height: 150px;
}

.colorpicker-body .hue-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
}

.colorpicker-body .opacity-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: url(${l});
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-body .strip.grabbing {
	cursor: grabbing;
}

.colorpicker-body .slider {
	position: absolute;
	top: 0;
	left: -2px;
	width: calc(100% + 4px);
	height: 4px;
	box-sizing: border-box;
	border: 1px solid rgba(255, 255, 255, 0.71);
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.85);
}

.colorpicker-body .strip .overlay {
	height: 150px;
	pointer-events: none;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorPicker.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,aAAa;CACb,iBAAiB;CACjB,yBAAyB;CACzB,qBAAqB;AACtB;;AAEA,eAAe;;AAEf;;CAEC,wBAAwB;CACxB,sBAAsB;CACtB,2BAA2B;CAC3B,YAAY;CACZ,aAAa;CACb,kBAAkB;CAClB,qBAAqB;CACrB,eAAe;AAChB;;AAEA;;CAEC,wBAAwB;AACzB;;AAEA,WAAW;;AAEX;CACC,aAAa;CACb,YAAY;CACZ,kBAAkB;CAClB,mDAAiR;CACjR,wBAAwB;CACxB,0BAA0B;AAC3B;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,iBAAiB;CACjB,eAAe;CACf,YAAY;CACZ,OAAO;AACR;;AAEA;CACC,cAAc;CACd,eAAe;CACf,kBAAkB;CAClB,SAAS;AACV;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,eAAe;AAChB;;;AAGA,SAAS;;AAET;CACC,aAAa;CACb,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,kBAAkB;CAClB,gBAAgB;CAChB,OAAO;AACR;;AAEA;CACC,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC,UAAU;CACV,WAAW;CACX,qBAAqB;CACrB,oCAAoC;CACpC,mBAAmB;CACnB,0CAA0C;CAC1C,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,YAAY;CACZ,iIAAiI;AAClI;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,YAAY;CACZ,mDAAiR;CACjR,wBAAwB;CACxB,0BAA0B;AAC3B;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,UAAU;CACV,uBAAuB;CACvB,WAAW;CACX,sBAAsB;CACtB,2CAA2C;CAC3C,2CAA2C;AAC5C;;AAEA;CACC,aAAa;CACb,oBAAoB;AACrB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.colorpicker-widget {
	height: 190px;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}

/* Decoration */

.colorpicker-color-decoration,
.hc-light .colorpicker-color-decoration {
	border: solid 0.1em #000;
	box-sizing: border-box;
	margin: 0.1em 0.2em 0 0.2em;
	width: 0.8em;
	height: 0.8em;
	line-height: 0.8em;
	display: inline-block;
	cursor: pointer;
}

.hc-black .colorpicker-color-decoration,
.vs-dark .colorpicker-color-decoration {
	border: solid 0.1em #eee;
}

/* Header */

.colorpicker-header {
	display: flex;
	height: 24px;
	position: relative;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=");
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-header .picked-color {
	width: 216px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 24px;
	cursor: pointer;
	color: white;
	flex: 1;
}

.colorpicker-header .picked-color .codicon {
	color: inherit;
	font-size: 14px;
	position: absolute;
	left: 8px;
}

.colorpicker-header .picked-color.light {
	color: black;
}

.colorpicker-header .original-color {
	width: 74px;
	z-index: inherit;
	cursor: pointer;
}


/* Body */

.colorpicker-body {
	display: flex;
	padding: 8px;
	position: relative;
}

.colorpicker-body .saturation-wrap {
	overflow: hidden;
	height: 150px;
	position: relative;
	min-width: 220px;
	flex: 1;
}

.colorpicker-body .saturation-box {
	height: 150px;
	position: absolute;
}

.colorpicker-body .saturation-selection {
	width: 9px;
	height: 9px;
	margin: -5px 0 0 -5px;
	border: 1px solid rgb(255, 255, 255);
	border-radius: 100%;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
	position: absolute;
}

.colorpicker-body .strip {
	width: 25px;
	height: 150px;
}

.colorpicker-body .hue-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
}

.colorpicker-body .opacity-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=");
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-body .strip.grabbing {
	cursor: grabbing;
}

.colorpicker-body .slider {
	position: absolute;
	top: 0;
	left: -2px;
	width: calc(100% + 4px);
	height: 4px;
	box-sizing: border-box;
	border: 1px solid rgba(255, 255, 255, 0.71);
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.85);
}

.colorpicker-body .strip .overlay {
	height: 150px;
	pointer-events: none;
}
`],sourceRoot:""}]);const m=c},88357:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor.vs .dnd-target,
.monaco-editor.hc-light .dnd-target {
	border-right: 2px dotted black;
	color: white; /* opposite of black */
}
.monaco-editor.vs-dark .dnd-target {
	border-right: 2px dotted #AEAFAD;
	color: #51504f; /* opposite of #AEAFAD */
}
.monaco-editor.hc-black .dnd-target {
	border-right: 2px dotted #fff;
	color: #000; /* opposite of #fff */
}

.monaco-editor.mouse-default .view-lines,
.monaco-editor.vs-dark.mac.mouse-default .view-lines,
.monaco-editor.hc-black.mac.mouse-default .view-lines,
.monaco-editor.hc-light.mac.mouse-default .view-lines {
	cursor: default;
}
.monaco-editor.mouse-copy .view-lines,
.monaco-editor.vs-dark.mac.mouse-copy .view-lines,
.monaco-editor.hc-black.mac.mouse-copy .view-lines,
.monaco-editor.hc-light.mac.mouse-copy .view-lines {
	cursor: copy;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/dnd/browser/dnd.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;;CAEC,8BAA8B;CAC9B,YAAY,EAAE,sBAAsB;AACrC;AACA;CACC,gCAAgC;CAChC,cAAc,EAAE,wBAAwB;AACzC;AACA;CACC,6BAA6B;CAC7B,WAAW,EAAE,qBAAqB;AACnC;;AAEA;;;;CAIC,eAAe;AAChB;AACA;;;;CAIC,YAAY;AACb",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor.vs .dnd-target,
.monaco-editor.hc-light .dnd-target {
	border-right: 2px dotted black;
	color: white; /* opposite of black */
}
.monaco-editor.vs-dark .dnd-target {
	border-right: 2px dotted #AEAFAD;
	color: #51504f; /* opposite of #AEAFAD */
}
.monaco-editor.hc-black .dnd-target {
	border-right: 2px dotted #fff;
	color: #000; /* opposite of #fff */
}

.monaco-editor.mouse-default .view-lines,
.monaco-editor.vs-dark.mac.mouse-default .view-lines,
.monaco-editor.hc-black.mac.mouse-default .view-lines,
.monaco-editor.hc-light.mac.mouse-default .view-lines {
	cursor: default;
}
.monaco-editor.mouse-copy .view-lines,
.monaco-editor.vs-dark.mac.mouse-copy .view-lines,
.monaco-editor.hc-black.mac.mouse-copy .view-lines,
.monaco-editor.hc-light.mac.mouse-copy .view-lines {
	cursor: copy;
}
`],sourceRoot:""}]);const i=n},45395:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Find widget */
.monaco-editor .find-widget {
	position: absolute;
	z-index: 35;
	height: 33px;
	overflow: hidden;
	line-height: 19px;
	transition: transform 200ms linear;
	padding: 0 4px;
	box-sizing: border-box;
	transform: translateY(calc(-100% - 10px)); /* shadow (10px) */
}

.monaco-workbench.reduce-motion .monaco-editor .find-widget {
	transition: transform 0ms linear;
}

.monaco-editor .find-widget textarea {
	margin: 0px;
}

.monaco-editor .find-widget.hiddenEditor {
	display: none;
}

/* Find widget when replace is toggled on */
.monaco-editor .find-widget.replaceToggled > .replace-part {
	display: flex;
}

.monaco-editor .find-widget.visible  {
	transform: translateY(0);
}

.monaco-editor .find-widget .monaco-inputbox.synthetic-focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

.monaco-editor .find-widget .monaco-inputbox .input {
	background-color: transparent;
	min-height: 0;
}

.monaco-editor .find-widget .monaco-findInput .input {
	font-size: 13px;
}

.monaco-editor .find-widget > .find-part,
.monaco-editor .find-widget > .replace-part {
	margin: 4px 0 0 17px;
	font-size: 12px;
	display: flex;
}

.monaco-editor .find-widget > .find-part .monaco-inputbox,
.monaco-editor .find-widget > .replace-part .monaco-inputbox {
	min-height: 25px;
}


.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {
	padding-right: 22px;
}

.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .input,
.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .mirror,
.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .input,
.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {
	padding-top: 2px;
	padding-bottom: 2px;
}

.monaco-editor .find-widget > .find-part .find-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget > .replace-part .replace-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget .monaco-findInput {
	vertical-align: middle;
	display: flex;
	flex:1;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element {
	/* Make sure textarea inherits the width correctly */
	width: 100%;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element .scrollbar.vertical {
	/* Hide vertical scrollbar */
	opacity: 0;
}

.monaco-editor .find-widget .matchesCount {
	display: flex;
	flex: initial;
	margin: 0 0 0 3px;
	padding: 2px 0 0 2px;
	height: 25px;
	vertical-align: middle;
	box-sizing: border-box;
	text-align: center;
	line-height: 23px;
}

.monaco-editor .find-widget .button {
	width: 16px;
	height: 16px;
	padding: 3px;
	border-radius: 5px;
	display: flex;
	flex: initial;
	margin-left: 3px;
	background-position: center center;
	background-repeat: no-repeat;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* find in selection button */
.monaco-editor .find-widget .codicon-find-selection {
	width: 22px;
	height: 22px;
	padding: 3px;
	border-radius: 5px;
}

.monaco-editor .find-widget .button.left {
	margin-left: 0;
	margin-right: 3px;
}

.monaco-editor .find-widget .button.wide {
	width: auto;
	padding: 1px 6px;
	top: -1px;
}

.monaco-editor .find-widget .button.toggle {
	position: absolute;
	top: 0;
	left: 3px;
	width: 18px;
	height: 100%;
	border-radius: 0;
	box-sizing: border-box;
}

.monaco-editor .find-widget .button.toggle.disabled {
	display: none;
}

.monaco-editor .find-widget .disabled {
	color: var(--vscode-disabledForeground);
	cursor: default;
}

.monaco-editor .find-widget > .replace-part {
	display: none;
}

.monaco-editor .find-widget > .replace-part > .monaco-findInput {
	position: relative;
	display: flex;
	vertical-align: middle;
	flex: auto;
	flex-grow: 0;
	flex-shrink: 0;
}

.monaco-editor .find-widget > .replace-part > .monaco-findInput > .controls {
	position: absolute;
	top: 3px;
	right: 2px;
}

/* REDUCED */
.monaco-editor .find-widget.reduced-find-widget .matchesCount {
	display:none;
}

/* NARROW (SMALLER THAN REDUCED) */
.monaco-editor .find-widget.narrow-find-widget {
	max-width: 257px !important;
}

/* COLLAPSED (SMALLER THAN NARROW) */
.monaco-editor .find-widget.collapsed-find-widget {
	max-width: 170px !important;
}

.monaco-editor .find-widget.collapsed-find-widget .button.previous,
.monaco-editor .find-widget.collapsed-find-widget .button.next,
.monaco-editor .find-widget.collapsed-find-widget .button.replace,
.monaco-editor .find-widget.collapsed-find-widget .button.replace-all,
.monaco-editor .find-widget.collapsed-find-widget > .find-part .monaco-findInput .controls {
	display:none;
}

.monaco-editor .findMatch {
	animation-duration: 0;
	animation-name: inherit !important;
}

.monaco-editor .find-widget .monaco-sash {
	left: 0 !important;
}

.monaco-editor.hc-black .find-widget .button:before {
	position: relative;
	top: 1px;
	left: 2px;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findWidget.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F,gBAAgB;AAChB;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;CACjB,kCAAkC;CAClC,cAAc;CACd,sBAAsB;CACtB,yCAAyC,EAAE,kBAAkB;AAC9D;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,aAAa;AACd;;AAEA,2CAA2C;AAC3C;CACC,aAAa;AACd;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,2CAA2C;CAC3C,oBAAoB;AACrB;;AAEA;CACC,6BAA6B;CAC7B,aAAa;AACd;;AAEA;CACC,eAAe;AAChB;;AAEA;;CAEC,oBAAoB;CACpB,eAAe;CACf,aAAa;AACd;;AAEA;;CAEC,gBAAgB;AACjB;;;AAGA;CACC,mBAAmB;AACpB;;AAEA;;;;CAIC,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,aAAa;CACb,MAAM;AACP;;AAEA;CACC,oDAAoD;CACpD,WAAW;AACZ;;AAEA;CACC,4BAA4B;CAC5B,UAAU;AACX;;AAEA;CACC,aAAa;CACb,aAAa;CACb,iBAAiB;CACjB,oBAAoB;CACpB,YAAY;CACZ,sBAAsB;CACtB,sBAAsB;CACtB,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,aAAa;CACb,gBAAgB;CAChB,kCAAkC;CAClC,4BAA4B;CAC5B,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA,6BAA6B;AAC7B;CACC,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,cAAc;CACd,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,SAAS;AACV;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,SAAS;CACT,WAAW;CACX,YAAY;CACZ,gBAAgB;CAChB,sBAAsB;AACvB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,uCAAuC;CACvC,eAAe;AAChB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,UAAU;CACV,YAAY;CACZ,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,UAAU;AACX;;AAEA,YAAY;AACZ;CACC,YAAY;AACb;;AAEA,kCAAkC;AAClC;CACC,2BAA2B;AAC5B;;AAEA,oCAAoC;AACpC;CACC,2BAA2B;AAC5B;;AAEA;;;;;CAKC,YAAY;AACb;;AAEA;CACC,qBAAqB;CACrB,kCAAkC;AACnC;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,SAAS;AACV",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Find widget */
.monaco-editor .find-widget {
	position: absolute;
	z-index: 35;
	height: 33px;
	overflow: hidden;
	line-height: 19px;
	transition: transform 200ms linear;
	padding: 0 4px;
	box-sizing: border-box;
	transform: translateY(calc(-100% - 10px)); /* shadow (10px) */
}

.monaco-workbench.reduce-motion .monaco-editor .find-widget {
	transition: transform 0ms linear;
}

.monaco-editor .find-widget textarea {
	margin: 0px;
}

.monaco-editor .find-widget.hiddenEditor {
	display: none;
}

/* Find widget when replace is toggled on */
.monaco-editor .find-widget.replaceToggled > .replace-part {
	display: flex;
}

.monaco-editor .find-widget.visible  {
	transform: translateY(0);
}

.monaco-editor .find-widget .monaco-inputbox.synthetic-focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

.monaco-editor .find-widget .monaco-inputbox .input {
	background-color: transparent;
	min-height: 0;
}

.monaco-editor .find-widget .monaco-findInput .input {
	font-size: 13px;
}

.monaco-editor .find-widget > .find-part,
.monaco-editor .find-widget > .replace-part {
	margin: 4px 0 0 17px;
	font-size: 12px;
	display: flex;
}

.monaco-editor .find-widget > .find-part .monaco-inputbox,
.monaco-editor .find-widget > .replace-part .monaco-inputbox {
	min-height: 25px;
}


.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {
	padding-right: 22px;
}

.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .input,
.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .mirror,
.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .input,
.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {
	padding-top: 2px;
	padding-bottom: 2px;
}

.monaco-editor .find-widget > .find-part .find-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget > .replace-part .replace-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget .monaco-findInput {
	vertical-align: middle;
	display: flex;
	flex:1;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element {
	/* Make sure textarea inherits the width correctly */
	width: 100%;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element .scrollbar.vertical {
	/* Hide vertical scrollbar */
	opacity: 0;
}

.monaco-editor .find-widget .matchesCount {
	display: flex;
	flex: initial;
	margin: 0 0 0 3px;
	padding: 2px 0 0 2px;
	height: 25px;
	vertical-align: middle;
	box-sizing: border-box;
	text-align: center;
	line-height: 23px;
}

.monaco-editor .find-widget .button {
	width: 16px;
	height: 16px;
	padding: 3px;
	border-radius: 5px;
	display: flex;
	flex: initial;
	margin-left: 3px;
	background-position: center center;
	background-repeat: no-repeat;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* find in selection button */
.monaco-editor .find-widget .codicon-find-selection {
	width: 22px;
	height: 22px;
	padding: 3px;
	border-radius: 5px;
}

.monaco-editor .find-widget .button.left {
	margin-left: 0;
	margin-right: 3px;
}

.monaco-editor .find-widget .button.wide {
	width: auto;
	padding: 1px 6px;
	top: -1px;
}

.monaco-editor .find-widget .button.toggle {
	position: absolute;
	top: 0;
	left: 3px;
	width: 18px;
	height: 100%;
	border-radius: 0;
	box-sizing: border-box;
}

.monaco-editor .find-widget .button.toggle.disabled {
	display: none;
}

.monaco-editor .find-widget .disabled {
	color: var(--vscode-disabledForeground);
	cursor: default;
}

.monaco-editor .find-widget > .replace-part {
	display: none;
}

.monaco-editor .find-widget > .replace-part > .monaco-findInput {
	position: relative;
	display: flex;
	vertical-align: middle;
	flex: auto;
	flex-grow: 0;
	flex-shrink: 0;
}

.monaco-editor .find-widget > .replace-part > .monaco-findInput > .controls {
	position: absolute;
	top: 3px;
	right: 2px;
}

/* REDUCED */
.monaco-editor .find-widget.reduced-find-widget .matchesCount {
	display:none;
}

/* NARROW (SMALLER THAN REDUCED) */
.monaco-editor .find-widget.narrow-find-widget {
	max-width: 257px !important;
}

/* COLLAPSED (SMALLER THAN NARROW) */
.monaco-editor .find-widget.collapsed-find-widget {
	max-width: 170px !important;
}

.monaco-editor .find-widget.collapsed-find-widget .button.previous,
.monaco-editor .find-widget.collapsed-find-widget .button.next,
.monaco-editor .find-widget.collapsed-find-widget .button.replace,
.monaco-editor .find-widget.collapsed-find-widget .button.replace-all,
.monaco-editor .find-widget.collapsed-find-widget > .find-part .monaco-findInput .controls {
	display:none;
}

.monaco-editor .findMatch {
	animation-duration: 0;
	animation-name: inherit !important;
}

.monaco-editor .find-widget .monaco-sash {
	left: 0 !important;
}

.monaco-editor.hc-black .find-widget .button:before {
	position: relative;
	top: 1px;
	left: 2px;
}
`],sourceRoot:""}]);const i=n},55405:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-collapsed {
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.5s;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 140%;
	margin-left: 2px;
}

.monaco-editor .margin-view-overlays:hover .codicon,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-collapsed,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon.alwaysShowFoldIcons {
	opacity: 1;
}

.monaco-editor .inline-folded:after {
	color: grey;
	margin: 0.1em 0.2em 0 0.2em;
	content: "\u22EF";
	display: inline;
	line-height: 1em;
	cursor: pointer;
}

`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.css"],names:[],mappings:"AAAA;;;+FAG+F;AAC/F;;;;CAIC,eAAe;CACf,UAAU;CACV,wBAAwB;CACxB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,gBAAgB;AACjB;;AAEA;;;;CAIC,UAAU;AACX;;AAEA;CACC,WAAW;CACX,2BAA2B;CAC3B,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,eAAe;AAChB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-collapsed {
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.5s;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 140%;
	margin-left: 2px;
}

.monaco-editor .margin-view-overlays:hover .codicon,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-collapsed,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon.alwaysShowFoldIcons {
	opacity: 1;
}

.monaco-editor .inline-folded:after {
	color: grey;
	margin: 0.1em 0.2em 0 0.2em;
	content: "\u22EF";
	display: inline;
	line-height: 1em;
	cursor: pointer;
}

`],sourceRoot:""}]);const i=n},81788:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* marker zone */

.monaco-editor .peekview-widget .head .peekview-title .severity-icon {
	display: inline-block;
	vertical-align: text-top;
	margin-right: 4px;
}

.monaco-editor .marker-widget {
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .marker-widget > .stale {
	opacity: 0.6;
	font-style: italic;
}

.monaco-editor .marker-widget .title {
	display: inline-block;
	padding-right: 5px;
}

.monaco-editor .marker-widget .descriptioncontainer {
	position: absolute;
	white-space: pre;
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	padding: 8px 12px 0 20px;
}

.monaco-editor .marker-widget .descriptioncontainer .message {
	display: flex;
	flex-direction: column;
}

.monaco-editor .marker-widget .descriptioncontainer .message .details {
	padding-left: 6px;
}

.monaco-editor .marker-widget .descriptioncontainer .message .source,
.monaco-editor .marker-widget .descriptioncontainer .message span.code {
	opacity: 0.6;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link {
	opacity: 0.6;
	color: inherit;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:before {
	content: '(';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:after {
	content: ')';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {
	text-decoration: underline;
	/** Hack to force underline to show **/
	border-bottom: 1px solid transparent;
	text-underline-position: under;
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .marker-widget .descriptioncontainer .filename {
	cursor: pointer;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/media/gotoErrorWidget.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F,gBAAgB;;AAEhB;CACC,qBAAqB;CACrB,wBAAwB;CACxB,iBAAiB;AAClB;;AAEA;CACC,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,iBAAiB;CACjB,yBAAyB;CACzB,qBAAqB;CACrB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;;CAEC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,cAAc;AACf;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,0BAA0B;CAC1B,sCAAsC;CACtC,oCAAoC;CACpC,8BAA8B;CAC9B,wCAAwC;AACzC;;AAEA;CACC,8CAA8C;AAC/C;;AAEA;CACC,eAAe;AAChB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* marker zone */

.monaco-editor .peekview-widget .head .peekview-title .severity-icon {
	display: inline-block;
	vertical-align: text-top;
	margin-right: 4px;
}

.monaco-editor .marker-widget {
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .marker-widget > .stale {
	opacity: 0.6;
	font-style: italic;
}

.monaco-editor .marker-widget .title {
	display: inline-block;
	padding-right: 5px;
}

.monaco-editor .marker-widget .descriptioncontainer {
	position: absolute;
	white-space: pre;
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	padding: 8px 12px 0 20px;
}

.monaco-editor .marker-widget .descriptioncontainer .message {
	display: flex;
	flex-direction: column;
}

.monaco-editor .marker-widget .descriptioncontainer .message .details {
	padding-left: 6px;
}

.monaco-editor .marker-widget .descriptioncontainer .message .source,
.monaco-editor .marker-widget .descriptioncontainer .message span.code {
	opacity: 0.6;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link {
	opacity: 0.6;
	color: inherit;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:before {
	content: '(';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:after {
	content: ')';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {
	text-decoration: underline;
	/** Hack to force underline to show **/
	border-bottom: 1px solid transparent;
	text-underline-position: under;
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .marker-widget .descriptioncontainer .filename {
	cursor: pointer;
}
`],sourceRoot:""}]);const i=n},31503:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .goto-definition-link {
	text-decoration: underline;
	cursor: pointer;
}`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,0BAA0B;CAC1B,eAAe;AAChB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .goto-definition-link {
	text-decoration: underline;
	cursor: pointer;
}`],sourceRoot:""}]);const i=n},26378:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* -- zone widget */
.monaco-editor .zone-widget .zone-widget-container.reference-zone-widget {
	border-top-width: 1px;
	border-bottom-width: 1px;
}

.monaco-editor .reference-zone-widget .inline {
	display: inline-block;
	vertical-align: top;
}

.monaco-editor .reference-zone-widget .messages {
	height: 100%;
	width: 100%;
	text-align: center;
	padding: 3em 0;
}

.monaco-editor .reference-zone-widget .ref-tree {
	line-height: 23px;
	background-color: var(--vscode-peekViewResult-background);
	color: var(--vscode-peekViewResult-lineForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .reference {
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file {
	display: inline-flex;
	width: 100%;
	height: 100%;
	color: var(--vscode-peekViewResult-fileForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .selected .reference-file {
	color: inherit !important;
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .monaco-list-rows > .monaco-list-row.selected:not(.highlighted) {
	background-color: var(--vscode-peekViewResult-selectionBackground);
	color: var(--vscode-peekViewResult-selectionForeground) !important;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file .count {
	margin-right: 12px;
	margin-left: auto;
}

.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight {
	background-color: var(--vscode-peekViewResult-matchHighlightBackground);
}

.monaco-editor .reference-zone-widget .preview .reference-decoration {
	background-color: var(--vscode-peekViewEditor-matchHighlightBackground);
	border: 2px solid var(--vscode-peekViewEditor-matchHighlightBorder);
	box-sizing: border-box;
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .monaco-editor-background,
.monaco-editor .reference-zone-widget .preview .monaco-editor .inputarea.ime-input {
	background-color: var(--vscode-peekViewEditor-background);
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .margin {
	background-color: var(--vscode-peekViewEditorGutter-background);
}

/* High Contrast Theming */

.monaco-editor.hc-black .reference-zone-widget .ref-tree .reference-file,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .reference-file {
	font-weight: bold;
}

.monaco-editor.hc-black .reference-zone-widget .ref-tree .referenceMatch .highlight,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .referenceMatch .highlight {
	border: 1px dotted var(--vscode-contrastActiveBorder, transparent);
	box-sizing: border-box;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/peek/referencesWidget.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F,mBAAmB;AACnB;CACC,qBAAqB;CACrB,wBAAwB;AACzB;;AAEA;CACC,qBAAqB;CACrB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,yDAAyD;CACzD,kDAAkD;AACnD;;AAEA;CACC,uBAAuB;CACvB,gBAAgB;AACjB;;AAEA;CACC,oBAAoB;CACpB,WAAW;CACX,YAAY;CACZ,kDAAkD;AACnD;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,kEAAkE;CAClE,kEAAkE;AACnE;;AAEA;CACC,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA;CACC,uEAAuE;AACxE;;AAEA;CACC,uEAAuE;CACvE,mEAAmE;CACnE,sBAAsB;AACvB;;AAEA;;CAEC,yDAAyD;AAC1D;;AAEA;CACC,+DAA+D;AAChE;;AAEA,0BAA0B;;AAE1B;;CAEC,iBAAiB;AAClB;;AAEA;;CAEC,kEAAkE;CAClE,sBAAsB;AACvB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* -- zone widget */
.monaco-editor .zone-widget .zone-widget-container.reference-zone-widget {
	border-top-width: 1px;
	border-bottom-width: 1px;
}

.monaco-editor .reference-zone-widget .inline {
	display: inline-block;
	vertical-align: top;
}

.monaco-editor .reference-zone-widget .messages {
	height: 100%;
	width: 100%;
	text-align: center;
	padding: 3em 0;
}

.monaco-editor .reference-zone-widget .ref-tree {
	line-height: 23px;
	background-color: var(--vscode-peekViewResult-background);
	color: var(--vscode-peekViewResult-lineForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .reference {
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file {
	display: inline-flex;
	width: 100%;
	height: 100%;
	color: var(--vscode-peekViewResult-fileForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .selected .reference-file {
	color: inherit !important;
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .monaco-list-rows > .monaco-list-row.selected:not(.highlighted) {
	background-color: var(--vscode-peekViewResult-selectionBackground);
	color: var(--vscode-peekViewResult-selectionForeground) !important;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file .count {
	margin-right: 12px;
	margin-left: auto;
}

.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight {
	background-color: var(--vscode-peekViewResult-matchHighlightBackground);
}

.monaco-editor .reference-zone-widget .preview .reference-decoration {
	background-color: var(--vscode-peekViewEditor-matchHighlightBackground);
	border: 2px solid var(--vscode-peekViewEditor-matchHighlightBorder);
	box-sizing: border-box;
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .monaco-editor-background,
.monaco-editor .reference-zone-widget .preview .monaco-editor .inputarea.ime-input {
	background-color: var(--vscode-peekViewEditor-background);
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .margin {
	background-color: var(--vscode-peekViewEditorGutter-background);
}

/* High Contrast Theming */

.monaco-editor.hc-black .reference-zone-widget .ref-tree .reference-file,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .reference-file {
	font-weight: bold;
}

.monaco-editor.hc-black .reference-zone-widget .ref-tree .referenceMatch .highlight,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .referenceMatch .highlight {
	border: 1px dotted var(--vscode-contrastActiveBorder, transparent);
	box-sizing: border-box;
}
`],sourceRoot:""}]);const i=n},58169:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .suggest-preview-additional-widget {
	white-space: nowrap;
}

.monaco-editor .suggest-preview-additional-widget .content-spacer {
	color: transparent;
	white-space: pre;
}

.monaco-editor .suggest-preview-additional-widget .button {
	display: inline-block;
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .ghost-text-hidden {
	opacity: 0;
	font-size: 0;
}

.monaco-editor .ghost-text-decoration {
	font-style: italic;
}

.monaco-editor .suggest-preview-text {
	font-style: italic;
}

.monaco-editor .inline-completion-text-to-replace {
	text-decoration: underline;
	text-underline-position: under;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/ghostText.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,eAAe;CACf,0BAA0B;CAC1B,8BAA8B;AAC/B;;AAEA;CACC,UAAU;CACV,YAAY;AACb;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,0BAA0B;CAC1B,8BAA8B;AAC/B",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .suggest-preview-additional-widget {
	white-space: nowrap;
}

.monaco-editor .suggest-preview-additional-widget .content-spacer {
	color: transparent;
	white-space: pre;
}

.monaco-editor .suggest-preview-additional-widget .button {
	display: inline-block;
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .ghost-text-hidden {
	opacity: 0;
	font-size: 0;
}

.monaco-editor .ghost-text-decoration {
	font-style: italic;
}

.monaco-editor .suggest-preview-text {
	font-style: italic;
}

.monaco-editor .inline-completion-text-to-replace {
	text-decoration: underline;
	text-underline-position: under;
}
`],sourceRoot:""}]);const i=n},1177:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .detected-link,
.monaco-editor .detected-link-active {
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .detected-link-active {
	cursor: pointer;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.css"],names:[],mappings:"AAAA;;;+FAG+F;AAC/F;;CAEC,0BAA0B;CAC1B,8BAA8B;AAC/B;;AAEA;CACC,eAAe;AAChB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .detected-link,
.monaco-editor .detected-link-active {
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .detected-link-active {
	cursor: pointer;
}
`],sourceRoot:""}]);const i=n},7201:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .monaco-editor-overlaymessage {
	padding-bottom: 8px;
	z-index: 10000;
}

.monaco-editor .monaco-editor-overlaymessage.below {
	padding-bottom: 0;
	padding-top: 8px;
	z-index: 10000;
}

@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}
.monaco-editor .monaco-editor-overlaymessage.fadeIn {
	animation: fadeIn 150ms ease-out;
}

@keyframes fadeOut {
	from { opacity: 1; }
	to { opacity: 0; }
}
.monaco-editor .monaco-editor-overlaymessage.fadeOut {
	animation: fadeOut 100ms ease-out;
}

.monaco-editor .monaco-editor-overlaymessage .message {
	padding: 1px 4px;
	color: var(--vscode-inputValidation-infoForeground);
	background-color: var(--vscode-inputValidation-infoBackground);
	border: 1px solid var(--vscode-inputValidation-infoBorder);
}

.monaco-editor.hc-black .monaco-editor-overlaymessage .message,
.monaco-editor.hc-light .monaco-editor-overlaymessage .message {
	border-width: 2px;
}

.monaco-editor .monaco-editor-overlaymessage .anchor {
	width: 0 !important;
	height: 0 !important;
	border-color: transparent;
	border-style: solid;
	z-index: 1000;
	border-width: 8px;
	position: absolute;
}

.monaco-editor .monaco-editor-overlaymessage .anchor.top {
	border-bottom-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage .anchor.below {
	border-top-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage:not(.below) .anchor.top,
.monaco-editor .monaco-editor-overlaymessage.below .anchor.below {
	display: none;
}

.monaco-editor .monaco-editor-overlaymessage.below .anchor.top {
	display: inherit;
	top: -8px;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,OAAO,UAAU,EAAE;CACnB,KAAK,UAAU,EAAE;AAClB;AACA;CACC,gCAAgC;AACjC;;AAEA;CACC,OAAO,UAAU,EAAE;CACnB,KAAK,UAAU,EAAE;AAClB;AACA;CACC,iCAAiC;AAClC;;AAEA;CACC,gBAAgB;CAChB,mDAAmD;CACnD,8DAA8D;CAC9D,0DAA0D;AAC3D;;AAEA;;CAEC,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,oBAAoB;CACpB,yBAAyB;CACzB,mBAAmB;CACnB,aAAa;CACb,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,6DAA6D;AAC9D;;AAEA;CACC,0DAA0D;AAC3D;;AAEA;;CAEC,aAAa;AACd;;AAEA;CACC,gBAAgB;CAChB,SAAS;AACV",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .monaco-editor-overlaymessage {
	padding-bottom: 8px;
	z-index: 10000;
}

.monaco-editor .monaco-editor-overlaymessage.below {
	padding-bottom: 0;
	padding-top: 8px;
	z-index: 10000;
}

@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}
.monaco-editor .monaco-editor-overlaymessage.fadeIn {
	animation: fadeIn 150ms ease-out;
}

@keyframes fadeOut {
	from { opacity: 1; }
	to { opacity: 0; }
}
.monaco-editor .monaco-editor-overlaymessage.fadeOut {
	animation: fadeOut 100ms ease-out;
}

.monaco-editor .monaco-editor-overlaymessage .message {
	padding: 1px 4px;
	color: var(--vscode-inputValidation-infoForeground);
	background-color: var(--vscode-inputValidation-infoBackground);
	border: 1px solid var(--vscode-inputValidation-infoBorder);
}

.monaco-editor.hc-black .monaco-editor-overlaymessage .message,
.monaco-editor.hc-light .monaco-editor-overlaymessage .message {
	border-width: 2px;
}

.monaco-editor .monaco-editor-overlaymessage .anchor {
	width: 0 !important;
	height: 0 !important;
	border-color: transparent;
	border-style: solid;
	z-index: 1000;
	border-width: 8px;
	position: absolute;
}

.monaco-editor .monaco-editor-overlaymessage .anchor.top {
	border-bottom-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage .anchor.below {
	border-top-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage:not(.below) .anchor.top,
.monaco-editor .monaco-editor-overlaymessage.below .anchor.below {
	display: none;
}

.monaco-editor .monaco-editor-overlaymessage.below .anchor.top {
	display: inherit;
	top: -8px;
}
`],sourceRoot:""}]);const i=n},20991:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .parameter-hints-widget {
	/* Must be higher than the sash's z-index and terminal canvases but lower than the suggest widget */
	z-index: 39;
	display: flex;
	flex-direction: column;
	line-height: 1.5em;
	cursor: default;
}

.monaco-editor .parameter-hints-widget > .phwrapper {
	max-width: 440px;
	display: flex;
	flex-direction: row;
}

.monaco-editor .parameter-hints-widget.multiple {
	min-height: 3.3em;
	padding: 0;
}

.monaco-editor .parameter-hints-widget.visible {
	transition: left .05s ease-in-out;
}

.monaco-editor .parameter-hints-widget p,
.monaco-editor .parameter-hints-widget ul {
	margin: 8px 0;
}

.monaco-editor .parameter-hints-widget .monaco-scrollable-element,
.monaco-editor .parameter-hints-widget .body {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: 100%;
}

.monaco-editor .parameter-hints-widget .signature {
	padding: 4px 5px;
}

.monaco-editor .parameter-hints-widget .docs {
	padding: 0 10px 0 5px;
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .docs.empty {
	display: none;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs {
	white-space: initial;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs a:hover {
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs code {
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .parameter-hints-widget .docs  .monaco-tokenized-source,
.monaco-editor .parameter-hints-widget .docs .code {
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .docs code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-editor .parameter-hints-widget .controls {
	display: none;
	flex-direction: column;
	align-items: center;
	min-width: 22px;
	justify-content: flex-end;
}

.monaco-editor .parameter-hints-widget.multiple .controls {
	display: flex;
	padding: 0 2px;
}

.monaco-editor .parameter-hints-widget.multiple .button {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .button.previous {
	bottom: 24px;
}

.monaco-editor .parameter-hints-widget .overloads {
	text-align: center;
	height: 12px;
	line-height: 12px;
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .parameter-hints-widget .signature .parameter.active {
	font-weight: bold;
}

.monaco-editor .parameter-hints-widget .documentation-parameter > .parameter {
	font-weight: bold;
	margin-right: 0.5em;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,mGAAmG;CACnG,WAAW;CACX,aAAa;CACb,sBAAsB;CACtB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,UAAU;AACX;;AAEA;CACC,iCAAiC;AAClC;;AAEA;;CAEC,aAAa;AACd;;AAEA;;CAEC,aAAa;CACb,OAAO;CACP,sBAAsB;CACtB,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,qBAAqB;AACtB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;;CAEC,qBAAqB;AACtB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,cAAc;AACf;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,4BAA4B;CAC5B,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,iBAAiB;CACjB,yCAAyC;AAC1C;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;AACpB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .parameter-hints-widget {
	/* Must be higher than the sash's z-index and terminal canvases but lower than the suggest widget */
	z-index: 39;
	display: flex;
	flex-direction: column;
	line-height: 1.5em;
	cursor: default;
}

.monaco-editor .parameter-hints-widget > .phwrapper {
	max-width: 440px;
	display: flex;
	flex-direction: row;
}

.monaco-editor .parameter-hints-widget.multiple {
	min-height: 3.3em;
	padding: 0;
}

.monaco-editor .parameter-hints-widget.visible {
	transition: left .05s ease-in-out;
}

.monaco-editor .parameter-hints-widget p,
.monaco-editor .parameter-hints-widget ul {
	margin: 8px 0;
}

.monaco-editor .parameter-hints-widget .monaco-scrollable-element,
.monaco-editor .parameter-hints-widget .body {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: 100%;
}

.monaco-editor .parameter-hints-widget .signature {
	padding: 4px 5px;
}

.monaco-editor .parameter-hints-widget .docs {
	padding: 0 10px 0 5px;
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .docs.empty {
	display: none;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs {
	white-space: initial;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs a:hover {
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs code {
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .parameter-hints-widget .docs  .monaco-tokenized-source,
.monaco-editor .parameter-hints-widget .docs .code {
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .docs code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-editor .parameter-hints-widget .controls {
	display: none;
	flex-direction: column;
	align-items: center;
	min-width: 22px;
	justify-content: flex-end;
}

.monaco-editor .parameter-hints-widget.multiple .controls {
	display: flex;
	padding: 0 2px;
}

.monaco-editor .parameter-hints-widget.multiple .button {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .button.previous {
	bottom: 24px;
}

.monaco-editor .parameter-hints-widget .overloads {
	text-align: center;
	height: 12px;
	line-height: 12px;
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .parameter-hints-widget .signature .parameter.active {
	font-weight: bold;
}

.monaco-editor .parameter-hints-widget .documentation-parameter > .parameter {
	font-weight: bold;
	margin-right: 0.5em;
}
`],sourceRoot:""}]);const i=n},69734:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .peekview-widget .head {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title {
	display: flex;
	align-items: center;
	font-size: 13px;
	margin-left: 20px;
	min-width: 0;
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .peekview-widget .head .peekview-title.clickable {
	cursor: pointer;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname:not(:empty) {
	font-size: 0.9em;
	margin-left: 0.5em;
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .peekview-widget .head .peekview-title .meta {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname {
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .filename {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .meta:not(:empty)::before {
	content: '-';
	padding: 0 0.3em;
}

.monaco-editor .peekview-widget .head .peekview-actions {
	flex: 1;
	text-align: right;
	padding-right: 2px;
}

.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar {
	display: inline-block;
}

.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar,
.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar > .actions-container {
	height: 100%;
}

.monaco-editor .peekview-widget > .body {
	border-top: 1px solid;
	position: relative;
}

.monaco-editor .peekview-widget .head .peekview-title .codicon {
	margin-right: 4px;
}

.monaco-editor .peekview-widget .monaco-list .monaco-list-row.focused .codicon {
	color: inherit !important;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/media/peekViewWidget.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,sBAAsB;CACtB,aAAa;CACb,8BAA8B;CAC9B,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,eAAe;CACf,iBAAiB;CACjB,YAAY;CACZ,uBAAuB;CACvB,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,uBAAuB;CACvB,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,uBAAuB;AACxB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,OAAO;CACP,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;;CAEC,YAAY;AACb;;AAEA;CACC,qBAAqB;CACrB,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,yBAAyB;AAC1B",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .peekview-widget .head {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title {
	display: flex;
	align-items: center;
	font-size: 13px;
	margin-left: 20px;
	min-width: 0;
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .peekview-widget .head .peekview-title.clickable {
	cursor: pointer;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname:not(:empty) {
	font-size: 0.9em;
	margin-left: 0.5em;
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .peekview-widget .head .peekview-title .meta {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname {
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .filename {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .meta:not(:empty)::before {
	content: '-';
	padding: 0 0.3em;
}

.monaco-editor .peekview-widget .head .peekview-actions {
	flex: 1;
	text-align: right;
	padding-right: 2px;
}

.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar {
	display: inline-block;
}

.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar,
.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar > .actions-container {
	height: 100%;
}

.monaco-editor .peekview-widget > .body {
	border-top: 1px solid;
	position: relative;
}

.monaco-editor .peekview-widget .head .peekview-title .codicon {
	margin-right: 4px;
}

.monaco-editor .peekview-widget .monaco-list .monaco-list-row.focused .codicon {
	color: inherit !important;
}
`],sourceRoot:""}]);const i=n},38869:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .rename-box {
	z-index: 100;
	color: inherit;
}

.monaco-editor .rename-box.preview {
	padding: 3px 3px 0 3px;
}

.monaco-editor .rename-box .rename-input {
	padding: 3px;
	width: calc(100% - 6px);
}

.monaco-editor .rename-box .rename-label {
	display: none;
	opacity: .8;
}

.monaco-editor .rename-box.preview .rename-label {
	display: inherit;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameInputField.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,YAAY;CACZ,cAAc;AACf;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,WAAW;AACZ;;AAEA;CACC,gBAAgB;AACjB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .rename-box {
	z-index: 100;
	color: inherit;
}

.monaco-editor .rename-box.preview {
	padding: 3px 3px 0 3px;
}

.monaco-editor .rename-box .rename-input {
	padding: 3px;
	width: calc(100% - 6px);
}

.monaco-editor .rename-box .rename-label {
	display: none;
	opacity: .8;
}

.monaco-editor .rename-box.preview .rename-label {
	display: inherit;
}
`],sourceRoot:""}]);const i=n},90069:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .snippet-placeholder {
	min-width: 2px;
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetTabstopHighlightBorder, transparent);
}

.monaco-editor .finish-snippet-placeholder {
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetFinalTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetFinalTabstopHighlightBorder, transparent);
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetSession.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,cAAc;CACd,oBAAoB;CACpB,kBAAkB;CAClB,qFAAqF;CACrF,8EAA8E;AAC/E;;AAEA;CACC,oBAAoB;CACpB,kBAAkB;CAClB,0FAA0F;CAC1F,mFAAmF;AACpF",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .snippet-placeholder {
	min-width: 2px;
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetTabstopHighlightBorder, transparent);
}

.monaco-editor .finish-snippet-placeholder {
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetFinalTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetFinalTabstopHighlightBorder, transparent);
}
`],sourceRoot:""}]);const i=n},87160:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Suggest widget*/

.monaco-editor .suggest-widget {
	width: 430px;
	z-index: 40;
	display: flex;
	flex-direction: column;
}

.monaco-editor .suggest-widget.message {
	flex-direction: row;
	align-items: center;
}

.monaco-editor .suggest-widget,
.monaco-editor .suggest-details {
	flex: 0 1 auto;
	width: 100%;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorSuggestWidget-border);
	background-color: var(--vscode-editorSuggestWidget-background);
}

.monaco-editor.hc-black .suggest-widget,
.monaco-editor.hc-black .suggest-details,
.monaco-editor.hc-light .suggest-widget,
.monaco-editor.hc-light .suggest-details {
	border-width: 2px;
}

/* Styles for status bar part */


.monaco-editor .suggest-widget .suggest-status-bar {
	box-sizing: border-box;
	display: none;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 100%;
	font-size: 80%;
	padding: 0 4px 0 4px;
	border-top: 1px solid var(--vscode-editorSuggestWidget-border);
	overflow: hidden;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar {
	display: flex;
}

.monaco-editor .suggest-widget .suggest-status-bar .left {
	padding-right: 8px;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-label {
	color: var(--vscode-editorSuggestWidgetStatus-foreground);
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label {
	margin-right: 0;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label::after {
	content: ', ';
	margin-right: 0.3em;
}

.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row>.contents>.main>.right>.readMore,
.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: none;
}

.monaco-editor .suggest-widget.with-status-bar:not(.docs-side) .monaco-list .monaco-list-row:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: 100%;
}

/* Styles for Message element for when widget is loading or is empty */

.monaco-editor .suggest-widget>.message {
	padding-left: 22px;
}

/** Styles for the list element **/

.monaco-editor .suggest-widget>.tree {
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-widget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}

/** Styles for each row in the list element **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row {
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	padding-right: 10px;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused {
	color: var(--vscode-editorSuggestWidget-selectedForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .codicon {
	color: var(--vscode-editorSuggestWidget-selectedIconForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents {
	flex: 1;
	height: 100%;
	overflow: hidden;
	padding-left: 2px;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main {
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: pre;
	justify-content: space-between;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	display: flex;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.focused)>.contents>.main .monaco-icon-label {
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-widget:not(.frozen) .monaco-highlighted-label .highlight {
	font-weight: bold;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-highlightForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-focusHighlightForeground);
}

/** ReadMore Icon styles **/

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore::before {
	color: inherit;
	opacity: 1;
	font-size: 14px;
	cursor: pointer;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close {
	position: absolute;
	top: 6px;
	right: 2px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close:hover,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore:hover {
	opacity: 1;
}

/** signature, qualifier, type/details opacity **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	opacity: 0.7;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.signature-label {
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.6;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.qualifier-label {
	margin-left: 12px;
	opacity: 0.4;
	font-size: 85%;
	line-height: initial;
	text-overflow: ellipsis;
	overflow: hidden;
	align-self: center;
}

/** Type Info and icon next to the label in the focused completion item **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	font-size: 85%;
	margin-left: 1.1em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label>.monaco-tokenized-source {
	display: inline;
}

/** Details: if using CompletionItem#details, show on focus **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	display: none;
}

.monaco-editor .suggest-widget:not(.shows-details) .monaco-list .monaco-list-row.focused>.contents>.main>.right>.details-label {
	display: inline;
}

/** Details: if using CompletionItemLabel#details, always show **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.right>.details-label,
.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row.focused:not(.string-label)>.contents>.main>.right>.details-label {
	display: inline;
}

/** Ellipsis on hover **/

.monaco-editor .suggest-widget:not(.docs-side) .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: calc(100% - 26px);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left {
	flex-shrink: 1;
	flex-grow: 1;
	overflow: hidden;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 0;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.left>.monaco-icon-label {
	max-width: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 1;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	overflow: hidden;
	flex-shrink: 4;
	max-width: 70%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: inline-block;
	position: absolute;
	right: 10px;
	width: 18px;
	height: 18px;
	visibility: hidden;
}

/** Do NOT display ReadMore when docs is side/below **/

.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: none !important;
}

/** Do NOT display ReadMore when using plain CompletionItemLabel (details/documentation might not be resolved) **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.right>.readMore {
	display: none;
}

/** Focused item can show ReadMore, but can't when docs is side/below **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: inline-block;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right>.readMore {
	visibility: visible;
}

/** Styles for each row in the list **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated {
	opacity: 0.66;
	text-decoration: unset;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated>.monaco-icon-label-container>.monaco-icon-name-container {
	text-decoration: line-through;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label::before {
	height: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon {
	display: block;
	height: 16px;
	width: 16px;
	margin-left: 2px;
	background-repeat: no-repeat;
	background-size: 80%;
	background-position: center;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.hide {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .suggest-icon {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .icon,
.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .suggest-icon::before {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.customcolor .colorspan {
	margin: 0 0 0 0.3em;
	border: 0.1em solid #000;
	width: 0.7em;
	height: 0.7em;
	display: inline-block;
}

/** Styles for the docs of the completion item in focus **/

.monaco-editor .suggest-details-container {
	z-index: 41;
}

.monaco-editor .suggest-details {
	display: flex;
	flex-direction: column;
	cursor: default;
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-details.focused {
	border-color: var(--vscode-focusBorder);
}

.monaco-editor .suggest-details a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .suggest-details a:hover {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .suggest-details code {
	background-color: var(--vscode-textCodeBlock-background);
}

.monaco-editor .suggest-details.no-docs {
	display: none;
}

.monaco-editor .suggest-details>.monaco-scrollable-element {
	flex: 1;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body {
	box-sizing: border-box;
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type {
	flex: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.7;
	white-space: pre;
	margin: 0 24px 0 0;
	padding: 4px 0 12px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type.auto-wrap {
	white-space: normal;
	word-break: break-all;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs {
	margin: 0;
	padding: 4px 5px;
	white-space: pre-wrap;
}

.monaco-editor .suggest-details.no-type>.monaco-scrollable-element>.body>.docs {
	margin-right: 24px;
	overflow: hidden;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs {
	padding: 0;
	white-space: initial;
	min-height: calc(1rem + 8px);
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div,
.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>span:not(:empty) {
	padding: 4px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:first-child {
	margin-top: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:last-child {
	margin-bottom: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .monaco-tokenized-source {
	white-space: pre;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs .code {
	white-space: pre-wrap;
	word-wrap: break-word;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .codicon {
	vertical-align: sub;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>p:empty {
	display: none;
}

.monaco-editor .suggest-details code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-editor .suggest-details ul {
	padding-left: 20px;
}

.monaco-editor .suggest-details ol {
	padding-left: 20px;
}

.monaco-editor .suggest-details p code {
	font-family: var(--monaco-monospace-font);
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/media/suggest.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F,kBAAkB;;AAElB;CACC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,mBAAmB;AACpB;;AAEA;;CAEC,cAAc;CACd,WAAW;CACX,mBAAmB;CACnB,iBAAiB;CACjB,sDAAsD;CACtD,8DAA8D;AAC/D;;AAEA;;;;CAIC,iBAAiB;AAClB;;AAEA,+BAA+B;;;AAG/B;CACC,sBAAsB;CACtB,aAAa;CACb,qBAAqB;CACrB,8BAA8B;CAC9B,WAAW;CACX,cAAc;CACd,oBAAoB;CACpB,8DAA8D;CAC9D,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,yDAAyD;AAC1D;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;;CAEC,aAAa;AACd;;AAEA;CACC,WAAW;AACZ;;AAEA,sEAAsE;;AAEtE;CACC,kBAAkB;AACnB;;AAEA,kCAAkC;;AAElC;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,iBAAiB;CACjB,yBAAyB;CACzB,qBAAqB;AACtB;;AAEA,8CAA8C;;AAE9C;CACC,aAAa;CACb,2BAA2B;CAC3B,sBAAsB;CACtB,mBAAmB;CACnB,4BAA4B;CAC5B,4BAA4B;CAC5B,mBAAmB;CACnB,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,2DAA2D;AAC5D;;AAEA;CACC,+DAA+D;AAChE;;AAEA;CACC,OAAO;CACP,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,gBAAgB;CAChB,uBAAuB;CACvB,gBAAgB;CAChB,8BAA8B;AAC/B;;AAEA;;CAEC,aAAa;AACd;;AAEA;CACC,mDAAmD;AACpD;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,4DAA4D;AAC7D;;AAEA;CACC,iEAAiE;AAClE;;AAEA,2BAA2B;;AAE3B;;CAEC,cAAc;CACd,UAAU;CACV,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,UAAU;AACX;;AAEA;;CAEC,UAAU;AACX;;AAEA,iDAAiD;;AAEjD;CACC,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,uBAAuB;CACvB,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,cAAc;CACd,oBAAoB;CACpB,uBAAuB;CACvB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA,0EAA0E;;AAE1E;CACC,cAAc;CACd,kBAAkB;CAClB,gBAAgB;CAChB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,eAAe;AAChB;;AAEA,8DAA8D;;AAE9D;CACC,aAAa;AACd;;AAEA;CACC,eAAe;AAChB;;AAEA,iEAAiE;;AAEjE;;CAEC,eAAe;AAChB;;AAEA,wBAAwB;;AAExB;CACC,wBAAwB;AACzB;;AAEA;CACC,cAAc;CACd,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,cAAc;AACf;;AAEA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,WAAW;CACX,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA,sDAAsD;;AAEtD;CACC,wBAAwB;AACzB;;AAEA,iHAAiH;;AAEjH;CACC,aAAa;AACd;;AAEA,wEAAwE;;AAExE;CACC,qBAAqB;AACtB;;AAEA;CACC,mBAAmB;AACpB;;AAEA,sCAAsC;;AAEtC;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,cAAc;CACd,YAAY;CACZ,WAAW;CACX,gBAAgB;CAChB,4BAA4B;CAC5B,oBAAoB;CACpB,2BAA2B;AAC5B;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;;CAEC,aAAa;AACd;;AAEA;CACC,mBAAmB;CACnB,wBAAwB;CACxB,YAAY;CACZ,aAAa;CACb,qBAAqB;AACtB;;AAEA,0DAA0D;;AAE1D;CACC,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,mDAAmD;AACpD;;AAEA;CACC,uCAAuC;AACxC;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,8CAA8C;AAC/C;;AAEA;CACC,wDAAwD;AACzD;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,sBAAsB;CACtB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,OAAO;CACP,gBAAgB;CAChB,uBAAuB;CACvB,YAAY;CACZ,gBAAgB;CAChB,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;CACC,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;CACC,SAAS;CACT,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,UAAU;CACV,oBAAoB;CACpB,4BAA4B;AAC7B;;AAEA;;CAEC,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,qBAAqB;AACtB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,yCAAyC;AAC1C",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Suggest widget*/

.monaco-editor .suggest-widget {
	width: 430px;
	z-index: 40;
	display: flex;
	flex-direction: column;
}

.monaco-editor .suggest-widget.message {
	flex-direction: row;
	align-items: center;
}

.monaco-editor .suggest-widget,
.monaco-editor .suggest-details {
	flex: 0 1 auto;
	width: 100%;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorSuggestWidget-border);
	background-color: var(--vscode-editorSuggestWidget-background);
}

.monaco-editor.hc-black .suggest-widget,
.monaco-editor.hc-black .suggest-details,
.monaco-editor.hc-light .suggest-widget,
.monaco-editor.hc-light .suggest-details {
	border-width: 2px;
}

/* Styles for status bar part */


.monaco-editor .suggest-widget .suggest-status-bar {
	box-sizing: border-box;
	display: none;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 100%;
	font-size: 80%;
	padding: 0 4px 0 4px;
	border-top: 1px solid var(--vscode-editorSuggestWidget-border);
	overflow: hidden;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar {
	display: flex;
}

.monaco-editor .suggest-widget .suggest-status-bar .left {
	padding-right: 8px;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-label {
	color: var(--vscode-editorSuggestWidgetStatus-foreground);
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label {
	margin-right: 0;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label::after {
	content: ', ';
	margin-right: 0.3em;
}

.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row>.contents>.main>.right>.readMore,
.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: none;
}

.monaco-editor .suggest-widget.with-status-bar:not(.docs-side) .monaco-list .monaco-list-row:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: 100%;
}

/* Styles for Message element for when widget is loading or is empty */

.monaco-editor .suggest-widget>.message {
	padding-left: 22px;
}

/** Styles for the list element **/

.monaco-editor .suggest-widget>.tree {
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-widget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}

/** Styles for each row in the list element **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row {
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	padding-right: 10px;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused {
	color: var(--vscode-editorSuggestWidget-selectedForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .codicon {
	color: var(--vscode-editorSuggestWidget-selectedIconForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents {
	flex: 1;
	height: 100%;
	overflow: hidden;
	padding-left: 2px;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main {
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: pre;
	justify-content: space-between;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	display: flex;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.focused)>.contents>.main .monaco-icon-label {
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-widget:not(.frozen) .monaco-highlighted-label .highlight {
	font-weight: bold;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-highlightForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-focusHighlightForeground);
}

/** ReadMore Icon styles **/

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore::before {
	color: inherit;
	opacity: 1;
	font-size: 14px;
	cursor: pointer;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close {
	position: absolute;
	top: 6px;
	right: 2px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close:hover,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore:hover {
	opacity: 1;
}

/** signature, qualifier, type/details opacity **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	opacity: 0.7;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.signature-label {
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.6;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.qualifier-label {
	margin-left: 12px;
	opacity: 0.4;
	font-size: 85%;
	line-height: initial;
	text-overflow: ellipsis;
	overflow: hidden;
	align-self: center;
}

/** Type Info and icon next to the label in the focused completion item **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	font-size: 85%;
	margin-left: 1.1em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label>.monaco-tokenized-source {
	display: inline;
}

/** Details: if using CompletionItem#details, show on focus **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	display: none;
}

.monaco-editor .suggest-widget:not(.shows-details) .monaco-list .monaco-list-row.focused>.contents>.main>.right>.details-label {
	display: inline;
}

/** Details: if using CompletionItemLabel#details, always show **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.right>.details-label,
.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row.focused:not(.string-label)>.contents>.main>.right>.details-label {
	display: inline;
}

/** Ellipsis on hover **/

.monaco-editor .suggest-widget:not(.docs-side) .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: calc(100% - 26px);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left {
	flex-shrink: 1;
	flex-grow: 1;
	overflow: hidden;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 0;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.left>.monaco-icon-label {
	max-width: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 1;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	overflow: hidden;
	flex-shrink: 4;
	max-width: 70%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: inline-block;
	position: absolute;
	right: 10px;
	width: 18px;
	height: 18px;
	visibility: hidden;
}

/** Do NOT display ReadMore when docs is side/below **/

.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: none !important;
}

/** Do NOT display ReadMore when using plain CompletionItemLabel (details/documentation might not be resolved) **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.right>.readMore {
	display: none;
}

/** Focused item can show ReadMore, but can't when docs is side/below **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: inline-block;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right>.readMore {
	visibility: visible;
}

/** Styles for each row in the list **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated {
	opacity: 0.66;
	text-decoration: unset;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated>.monaco-icon-label-container>.monaco-icon-name-container {
	text-decoration: line-through;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label::before {
	height: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon {
	display: block;
	height: 16px;
	width: 16px;
	margin-left: 2px;
	background-repeat: no-repeat;
	background-size: 80%;
	background-position: center;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.hide {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .suggest-icon {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .icon,
.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .suggest-icon::before {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.customcolor .colorspan {
	margin: 0 0 0 0.3em;
	border: 0.1em solid #000;
	width: 0.7em;
	height: 0.7em;
	display: inline-block;
}

/** Styles for the docs of the completion item in focus **/

.monaco-editor .suggest-details-container {
	z-index: 41;
}

.monaco-editor .suggest-details {
	display: flex;
	flex-direction: column;
	cursor: default;
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-details.focused {
	border-color: var(--vscode-focusBorder);
}

.monaco-editor .suggest-details a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .suggest-details a:hover {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .suggest-details code {
	background-color: var(--vscode-textCodeBlock-background);
}

.monaco-editor .suggest-details.no-docs {
	display: none;
}

.monaco-editor .suggest-details>.monaco-scrollable-element {
	flex: 1;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body {
	box-sizing: border-box;
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type {
	flex: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.7;
	white-space: pre;
	margin: 0 24px 0 0;
	padding: 4px 0 12px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type.auto-wrap {
	white-space: normal;
	word-break: break-all;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs {
	margin: 0;
	padding: 4px 5px;
	white-space: pre-wrap;
}

.monaco-editor .suggest-details.no-type>.monaco-scrollable-element>.body>.docs {
	margin-right: 24px;
	overflow: hidden;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs {
	padding: 0;
	white-space: initial;
	min-height: calc(1rem + 8px);
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div,
.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>span:not(:empty) {
	padding: 4px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:first-child {
	margin-top: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:last-child {
	margin-bottom: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .monaco-tokenized-source {
	white-space: pre;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs .code {
	white-space: pre-wrap;
	word-wrap: break-word;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .codicon {
	vertical-align: sub;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>p:empty {
	display: none;
}

.monaco-editor .suggest-details code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-editor .suggest-details ul {
	padding-left: 20px;
}

.monaco-editor .suggest-details ol {
	padding-left: 20px;
}

.monaco-editor .suggest-details p code {
	font-family: var(--monaco-monospace-font);
}
`],sourceRoot:""}]);const i=n},6065:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.editor-banner {
	box-sizing: border-box;
	cursor: default;
	width: 100%;
	font-size: 12px;
	display: flex;
	overflow: visible;

	height: 26px;

	background: var(--vscode-banner-background);
}


.editor-banner .icon-container {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	padding: 0 6px 0 10px;
}

.editor-banner .icon-container.custom-icon {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 16px;
	width: 16px;
	padding: 0;
	margin: 0 6px 0 10px;
}

.editor-banner .message-container {
	display: flex;
	align-items: center;
	line-height: 26px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.editor-banner .message-container p {
	margin-block-start: 0;
	margin-block-end: 0;
}

.editor-banner .message-actions-container {
	flex-grow: 1;
	flex-shrink: 0;
	line-height: 26px;
	margin: 0 4px;
}

.editor-banner .message-actions-container a.monaco-button {
	width: inherit;
	margin: 2px 8px;
	padding: 0px 12px;
}

.editor-banner .message-actions-container a {
	padding: 3px;
	margin-left: 12px;
	text-decoration: underline;
}

.editor-banner .action-container {
	padding: 0 10px 0 6px;
}

.editor-banner {
	background-color: var(--vscode-banner-background);
}

.editor-banner,
.editor-banner .action-container .codicon,
.editor-banner .message-actions-container .monaco-link {
	color: var(--vscode-banner-foreground);
}

.editor-banner .icon-container .codicon {
	color: var(--vscode-banner-iconForeground);
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/bannerController.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,sBAAsB;CACtB,eAAe;CACf,WAAW;CACX,eAAe;CACf,aAAa;CACb,iBAAiB;;CAEjB,YAAY;;CAEZ,2CAA2C;AAC5C;;;AAGA;CACC,aAAa;CACb,cAAc;CACd,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;CACC,4BAA4B;CAC5B,kCAAkC;CAClC,qBAAqB;CACrB,WAAW;CACX,UAAU;CACV,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,cAAc;CACd,iBAAiB;CACjB,aAAa;AACd;;AAEA;CACC,cAAc;CACd,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,0BAA0B;AAC3B;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,iDAAiD;AAClD;;AAEA;;;CAGC,sCAAsC;AACvC;;AAEA;CACC,0CAA0C;AAC3C",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.editor-banner {
	box-sizing: border-box;
	cursor: default;
	width: 100%;
	font-size: 12px;
	display: flex;
	overflow: visible;

	height: 26px;

	background: var(--vscode-banner-background);
}


.editor-banner .icon-container {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	padding: 0 6px 0 10px;
}

.editor-banner .icon-container.custom-icon {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 16px;
	width: 16px;
	padding: 0;
	margin: 0 6px 0 10px;
}

.editor-banner .message-container {
	display: flex;
	align-items: center;
	line-height: 26px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.editor-banner .message-container p {
	margin-block-start: 0;
	margin-block-end: 0;
}

.editor-banner .message-actions-container {
	flex-grow: 1;
	flex-shrink: 0;
	line-height: 26px;
	margin: 0 4px;
}

.editor-banner .message-actions-container a.monaco-button {
	width: inherit;
	margin: 2px 8px;
	padding: 0px 12px;
}

.editor-banner .message-actions-container a {
	padding: 3px;
	margin-left: 12px;
	text-decoration: underline;
}

.editor-banner .action-container {
	padding: 0 10px 0 6px;
}

.editor-banner {
	background-color: var(--vscode-banner-background);
}

.editor-banner,
.editor-banner .action-container .codicon,
.editor-banner .message-actions-container .monaco-link {
	color: var(--vscode-banner-foreground);
}

.editor-banner .icon-container .codicon {
	color: var(--vscode-banner-iconForeground);
}
`],sourceRoot:""}]);const i=n},18245:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .unicode-highlight {
	border: 1px solid var(--vscode-editorUnicodeHighlight-border);
	background-color: var(--vscode-editorUnicodeHighlight-background);
	box-sizing: border-box;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,6DAA6D;CAC7D,iEAAiE;CACjE,sBAAsB;AACvB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .unicode-highlight {
	border: 1px solid var(--vscode-editorUnicodeHighlight-border);
	background-color: var(--vscode-editorUnicodeHighlight-background);
	box-sizing: border-box;
}
`],sourceRoot:""}]);const i=n},12889:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .zone-widget {
	position: absolute;
	z-index: 10;
}


.monaco-editor .zone-widget .zone-widget-container {
	border-top-style: solid;
	border-bottom-style: solid;
	border-top-width: 0;
	border-bottom-width: 0;
	position: relative;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/contrib/zoneWidget/browser/zoneWidget.css"],names:[],mappings:"AAAA;;;+FAG+F;AAC/F;CACC,kBAAkB;CAClB,WAAW;AACZ;;;AAGA;CACC,uBAAuB;CACvB,0BAA0B;CAC1B,mBAAmB;CACnB,sBAAsB;CACtB,kBAAkB;AACnB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .zone-widget {
	position: absolute;
	z-index: 10;
}


.monaco-editor .zone-widget .zone-widget-container {
	border-top-style: solid;
	border-bottom-style: solid;
	border-top-width: 0;
	border-bottom-width: 0;
	position: relative;
}
`],sourceRoot:""}]);const i=n},3343:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .accessibilityHelpWidget {
	padding: 10px;
	vertical-align: middle;
	overflow: scroll;
}`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,aAAa;CACb,sBAAsB;CACtB,gBAAgB;AACjB",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .accessibilityHelpWidget {
	padding: 10px;
	vertical-align: middle;
	overflow: scroll;
}`],sourceRoot:""}]);const i=n},59337:(d,_,t)=>{t.d(_,{A:()=>E});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=t(4417),i=t.n(n),C=new URL(t(37584),t.b),c=new URL(t(86060),t.b),l=a()(r()),m=i()(C),g=i()(c);l.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .iPadShowKeyboard {
	width: 58px;
	min-width: 0;
	height: 36px;
	min-height: 0;
	margin: 0;
	padding: 0;
	position: absolute;
	resize: none;
	overflow: hidden;
	background: url(${m}) center center no-repeat;
	border: 4px solid #F6F6F6;
	border-radius: 4px;
}

.monaco-editor.vs-dark .iPadShowKeyboard {
	background: url(${g}) center center no-repeat;
	border: 4px solid #252526;
}`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,SAAS;CACT,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,2EAAqnD;CACrnD,yBAAyB;CACzB,kBAAkB;AACnB;;AAEA;CACC,2EAAqnD;CACrnD,yBAAyB;AAC1B",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .iPadShowKeyboard {
	width: 58px;
	min-width: 0;
	height: 36px;
	min-height: 0;
	margin: 0;
	padding: 0;
	position: absolute;
	resize: none;
	overflow: hidden;
	background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==") center center no-repeat;
	border: 4px solid #F6F6F6;
	border-radius: 4px;
}

.monaco-editor.vs-dark .iPadShowKeyboard {
	background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==") center center no-repeat;
	border: 4px solid #252526;
}`],sourceRoot:""}]);const E=l},72931:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .tokens-inspect-widget {
	z-index: 50;
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	padding: 10px;
}

.tokens-inspect-separator {
	height: 1px;
	border: 0;
}

.monaco-editor .tokens-inspect-widget .tm-token {
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .tokens-inspect-widget .tm-token-length {
	font-weight: normal;
	font-size: 60%;
	float: right;
}

.monaco-editor .tokens-inspect-widget .tm-metadata-table {
	width: 100%;
}

.monaco-editor .tokens-inspect-widget .tm-metadata-value {
	font-family: var(--monaco-monospace-font);
	text-align: right;
}

.monaco-editor .tokens-inspect-widget .tm-token-type {
	font-family: var(--monaco-monospace-font);
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,WAAW;CACX,iBAAiB;CACjB,yBAAyB;CACzB,qBAAqB;CACrB,aAAa;AACd;;AAEA;CACC,WAAW;CACX,SAAS;AACV;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,mBAAmB;CACnB,cAAc;CACd,YAAY;AACb;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,yCAAyC;CACzC,iBAAiB;AAClB;;AAEA;CACC,yCAAyC;AAC1C",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .tokens-inspect-widget {
	z-index: 50;
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	padding: 10px;
}

.tokens-inspect-separator {
	height: 1px;
	border: 0;
}

.monaco-editor .tokens-inspect-widget .tm-token {
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .tokens-inspect-widget .tm-token-length {
	font-weight: normal;
	font-size: 60%;
	float: right;
}

.monaco-editor .tokens-inspect-widget .tm-metadata-table {
	width: 100%;
}

.monaco-editor .tokens-inspect-widget .tm-metadata-value {
	font-family: var(--monaco-monospace-font);
	text-align: right;
}

.monaco-editor .tokens-inspect-widget .tm-token-type {
	font-family: var(--monaco-monospace-font);
}
`],sourceRoot:""}]);const i=n},19055:(d,_,t)=>{t.d(_,{A:()=>i});var s=t(71354),r=t.n(s),A=t(76314),a=t.n(A),n=a()(r());n.push([d.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-action-bar .action-item.menu-entry .action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}


.monaco-dropdown-with-default {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-default > .action-container > .action-label {
	margin-right: 0;
}

.monaco-dropdown-with-default > .action-container.menu-entry > .action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}

.monaco-dropdown-with-default > .dropdown-action-container > .monaco-dropdown > .dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-default > .dropdown-action-container > .monaco-dropdown > .dropdown-label > .action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}
`,"",{version:3,sources:["webpack://./node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.css"],names:[],mappings:"AAAA;;;+FAG+F;;AAE/F;CACC,WAAW;CACX,YAAY;CACZ,4BAA4B;CAC5B,wBAAwB;CACxB,qBAAqB;AACtB;;;AAGA;CACC,wBAAwB;CACxB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,4BAA4B;CAC5B,wBAAwB;CACxB,qBAAqB;AACtB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,cAAc;CACd,qBAAqB;CACrB,kCAAkC;CAClC,4BAA4B;AAC7B",sourcesContent:[`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-action-bar .action-item.menu-entry .action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}


.monaco-dropdown-with-default {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-default > .action-container > .action-label {
	margin-right: 0;
}

.monaco-dropdown-with-default > .action-container.menu-entry > .action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}

.monaco-dropdown-with-default > .dropdown-action-container > .monaco-dropdown > .dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-default > .dropdown-action-container > .monaco-dropdown > .dropdown-label > .action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}
`],sourceRoot:""}]);const i=n},43749:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(79862),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},25925:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(96854),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},80978:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(42755),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},45088:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(7997),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},28838:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(26550),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},79518:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(24259),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},8322:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(61727),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},51580:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(53345),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},79008:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(88357),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},68926:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(45395),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},73152:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(55405),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},44029:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(81788),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},30568:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(31503),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},65577:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(26378),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},56588:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(58169),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},89532:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(1177),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},81424:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(7201),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},21862:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(20991),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},16803:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(69734),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},57136:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(38869),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},28130:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(90069),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},69269:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(87160),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},82788:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(6065),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},91856:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(18245),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},13336:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(12889),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},34908:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(3343),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},778:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(59337),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},43152:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(72931),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},83910:(d,_,t)=>{var s=t(85072),r=t.n(s),A=t(97825),a=t.n(A),n=t(40),i=t.n(n),C=t(55056),c=t.n(C),l=t(10540),m=t.n(l),g=t(41113),E=t.n(g),o=t(19055),e={};e.styleTagTransform=E(),e.setAttributes=c(),e.insert=i().bind(null,"head"),e.domAPI=a(),e.insertStyleElement=m();var u=r()(o.A,e),p=o.A&&o.A.locals?o.A.locals:void 0},68968:d=>{d.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII="},37584:d=>{d.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},86060:d=>{d.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);

//# sourceMappingURL=react-monaco-editor.9a04da61021050a865d2.js.map