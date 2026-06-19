---
sidebar_label: 로컬라이제이션
title: 로컬라이제이션
description: DHTMLX JavaScript RichText 라이브러리 문서에서 로컬라이제이션에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 로컬라이제이션 {#localization}

RichText는 모든 인터페이스 레이블의 로컬라이제이션을 지원합니다. 새 로케일을 생성하거나 내장 로케일을 수정한 후, 에디터 설정을 통해 결과를 적용하십시오.

## 기본 로케일 {#default-locale}

기본적으로 RichText는 영어 로케일을 적용합니다:

~~~jsx
const en = {
    richtext: {
        // buttons/actions
        Undo: "Undo",
        Redo: "Redo",
        Style: "Style",
        "Font family": "Font family",
        "Font size": "Font size",
        Bold: "Bold",
        Italic: "Italic",
        Underline: "Underline",
        Strikethrough: "Strikethrough",
        Subscript: "Subscript",
        Superscript: "Superscript",
        "Text color": "Text color",
        "Background color": "Background color",
        "Left align": "Left align",
        "Center align": "Center align",
        "Right align": "Right align",
        Justify: "Justify",
        "Line height": "Line height",
        Outdent: "Outdent",
        Indent: "Indent",
        "Insert link": "Insert link",
        "Insert image": "Insert image",
        "Insert horizontal line": "Insert horizontal line",
        "Clear formatting": "Clear formatting",
        Print: "Print",
        "Fullscreen mode": "Fullscreen mode",
        "Layout mode": "Layout mode",
        "Classic mode": "Classic mode",
        "Document mode": "Document mode",

        // menubar exclusive options
        File: "File",
        Import: "Import",
        Export: "Export",
        Edit: "Edit",
        Cut: "Cut",
        Copy: "Copy",
        Paste: "Paste",
        View: "View",
        Insert: "Insert",
        Format: "Format",
        Help: "Help",
        New: "New",
        Link: "Link",
        Image: "Image",
        "Horizontal line": "Horizontal line",
        Text: "Text",
        "Heading 1": "Heading 1",
        "Heading 2": "Heading 2",
        "Heading 3": "Heading 3",
        "Heading 4": "Heading 4",
        "Heading 5": "Heading 5",
        "Heading 6": "Heading 6",
        Align: "Align",
        Left: "Left",
        Center: "Center",
        Right: "Right",
        Justified: "Justified",
        "Keyboard shortcuts": "Keyboard shortcuts",

        // clipboard
        "Operation failed. Please check your browser's clipboard permissions.":
            "Operation failed. Please check your browser's clipboard permissions.",

        // block style dropdown
        Heading: "Heading",
        Quote: "Quote",
        Paragraph: "Paragraph",
        "Text style": "Text style",
        Lists: "Lists",

        normal: "normal",
        default: "default",

        // lists
        "Bulleted list": "Bulleted list",
        "Numbered list": "Numbered list",

        // links
        "Enter text to display": "Enter text to display",
        "Paste link": "Paste link",
        "Link copied to clipboard": "Link copied to clipboard",

        // shortcut groups
        "Text formatting": "Text formatting",
        Editing: "Editing",
        "Special actions": "Special actions",

        // colors
        Black: "Black",
        Gray: "Gray",
        White: "White",
        Red: "Red",
        Orange: "Orange",
        Yellow: "Yellow",
        Lime: "Lime",
        Green: "Green",
        Teal: "Teal",
        Cyan: "Cyan",
        Blue: "Blue",
        Indigo: "Indigo",
        Magenta: "Magenta",

        // shades
        "Light gray": "Light gray",
        "Medium gray": "Medium gray",
        "Dark gray": "Dark gray",
        "Light red": "Light red",
        "Medium red": "Medium red",
        "Dark red": "Dark red",
        "Light orange": "Light orange",
        "Medium orange": "Medium orange",
        "Dark orange": "Dark orange",
        "Light yellow": "Light yellow",
        "Medium yellow": "Medium yellow",
        "Dark yellow": "Dark yellow",
        "Light lime": "Light lime",
        "Medium lime": "Medium lime",
        "Dark lime": "Dark lime",
        "Light green": "Light green",
        "Medium green": "Medium green",
        "Dark green": "Dark green",
        "Light teal": "Light teal",
        "Medium teal": "Medium teal",
        "Dark teal": "Dark teal",
        "Light cyan": "Light cyan",
        "Medium cyan": "Medium cyan",
        "Dark cyan": "Dark cyan",
        "Light blue": "Light blue",
        "Medium blue": "Medium blue",
        "Dark blue": "Dark blue",
        "Light indigo": "Light indigo",
        "Medium indigo": "Medium indigo",
        "Dark indigo": "Dark indigo",
        "Light magenta": "Light magenta",
        "Medium magenta": "Medium magenta",
        "Dark magenta": "Dark magenta"
    }
};
~~~

:::info[정보]
RichText에는 내장 독일어(`de`) 및 중국어(`cn`) 로케일도 포함되어 있습니다. `richtext.locales` 네임스페이스를 통해 내장 로케일에 접근할 수 있습니다: `richtext.locales.en`, `richtext.locales.de`, `richtext.locales.cn`.
:::

<details>
<summary><code>de</code> locale</summary>

~~~jsx
const de = {
    richtext: {
        // buttons/actions
        Undo: "Rückgängig",
        Redo: "Wiederholen",
        Style: "Stil",
        "Font family": "Schriftart",
        "Font size": "Schriftgröße",
        Bold: "Fett",
        Italic: "Kursiv",
        Underline: "Unterstrichen",
        Strikethrough: "Durchgestrichen",
        Subscript: "Tiefgestellt",
        Superscript: "Hochgestellt",
        "Text color": "Textfarbe",
        "Background color": "Hintergrundfarbe",
        "Left align": "Linksbündig",
        "Center align": "Zentriert",
        "Right align": "Rechtsbündig",
        Justify: "Blocksatz",
        "Line height": "Zeilenhöhe",
        Outdent: "Einzug verringern",
        Indent: "Einzug erhöhen",
        "Insert link": "Link einfügen",
        "Insert image": "Bild einfügen",
        "Insert horizontal line": "Horizontale Linie einfügen",
        "Clear formatting": "Formatierung löschen",
        Print: "Drucken",
        "Fullscreen mode": "Vollbildmodus",
        "Layout mode": "Layout-Modus",
        "Classic mode": "Klassischer Modus",
        "Document mode": "Dokumentenmodus",

        // menubar exclusive options
        File: "Datei",
        Import: "Importieren",
        Export: "Exportieren",
        Edit: "Bearbeiten",
        Cut: "Ausschneiden",
        Copy: "Kopieren",
        Paste: "Einfügen",
        View: "Ansicht",
        Insert: "Einfügen",
        Format: "Format",
        Help: "Hilfe",
        New: "Neu",
        Link: "Link",
        Image: "Bild",
        "Horizontal line": "Horizontale Linie",
        Text: "Text",
        "Heading 1": "Überschrift 1",
        "Heading 2": "Überschrift 2",
        "Heading 3": "Überschrift 3",
        "Heading 4": "Überschrift 4",
        "Heading 5": "Überschrift 5",
        "Heading 6": "Überschrift 6",
        Align: "Ausrichten",
        Left: "Links",
        Center: "Zentriert",
        Right: "Rechts",
        Justified: "Blocksatz",
        "Keyboard shortcuts": "Tastenkürzel",

        // clipboard
        "Operation failed. Please check your browser's clipboard permissions.":
            "Operation fehlgeschlagen. Bitte überprüfen Sie die Berechtigungen für die Zwischenablage Ihres Browsers.",

        // block style dropdown
        Heading: "Überschrift",
        Quote: "Zitat",
        Paragraph: "Absatz",
        "Text style": "Textstil",
        Lists: "Listen",

        normal: "normal",
        default: "standard",

        // lists
        "Bulleted list": "Liste mit Aufzählungszeichen",
        "Numbered list": "Nummerierte Liste",

        // links
        "Enter text to display": "Text zum Anzeigen eingeben",
        "Paste link": "Link einfügen",
        "Link copied to clipboard": "Link in die Zwischenablage kopiert",

        // shortcut groups
        "Text formatting": "Textformatierung",
        Editing: "Bearbeitung",
        "Special actions": "Spezielle Aktionen",

        // colors
        Black: "Schwarz",
        Gray: "Grau",
        White: "Weiß",
        Red: "Rot",
        Orange: "Orange",
        Yellow: "Gelb",
        Lime: "Limette",
        Green: "Grün",
        Teal: "Türkis",
        Cyan: "Cyan",
        Blue: "Blau",
        Indigo: "Indigo",
        Magenta: "Magenta",

        // shades
        "Light gray": "Hellgrau",
        "Medium gray": "Mittelgrau",
        "Dark gray": "Dunkelgrau",
        "Light red": "Hellrot",
        "Medium red": "Mittelrot",
        "Dark red": "Dunkelrot",
        "Light orange": "Hellorange",
        "Medium orange": "Mittelorange",
        "Dark orange": "Dunkelorange",
        "Light yellow": "Hellgelb",
        "Medium yellow": "Mittleres Gelb",
        "Dark yellow": "Dunkelgelb",
        "Light lime": "Hellgrün",
        "Medium lime": "Mittleres Grün",
        "Dark lime": "Dunkelgrün",
        "Light green": "Hellgrün",
        "Medium green": "Mittleres Grün",
        "Dark green": "Dunkelgrün",
        "Light teal": "Hellblau",
        "Medium teal": "Mittelblau",
        "Dark teal": "Dunkelblau",
        "Light cyan": "Hellcyan",
        "Medium cyan": "Mittleres Cyan",
        "Dark cyan": "Dunkelcyan",
        "Light blue": "Hellblau",
        "Medium blue": "Mittelblau",
        "Dark blue": "Dunkelblau",
        "Light indigo": "Hellindigo",
        "Medium indigo": "Mittelindigo",
        "Dark indigo": "Dunkelindigo",
        "Light magenta": "Hellmagenta",
        "Medium magenta": "Mittleres Magenta",
        "Dark magenta": "Dunkelmagenta"
    }
};
~~~
</details>

<details>
<summary><code>cn</code> locale</summary>

~~~jsx
const cn = {
    richtext: {
        // buttons/actions
        Undo: "撤销",
        Redo: "重做",
        Style: "样式",
        "Font family": "字体",
        "Font size": "字体大小",
        Bold: "粗体",
        Italic: "斜体",
        Underline: "下划线",
        Strikethrough: "删除线",
        Subscript: "下标",
        Superscript: "上标",
        "Text color": "文本颜色",
        "Background color": "背景颜色",
        "Left align": "左对齐",
        "Center align": "居中对齐",
        "Right align": "右对齐",
        Justify: "两端对齐",
        "Line height": "行高",
        Outdent: "减少缩进",
        Indent: "增加缩进",
        "Insert link": "插入链接",
        "Insert image": "插入图片",
        "Insert horizontal line": "插入水平线",
        "Clear formatting": "清除格式",
        Print: "打印",
        "Fullscreen mode": "全屏模式",
        "Layout mode": "布局模式",
        "Classic mode": "经典模式",
        "Document mode": "文档模式",

        // menubar exclusive options
        File: "文件",
        Import: "导入",
        Export: "导出",
        Edit: "编辑",
        Cut: "剪切",
        Copy: "复制",
        Paste: "粘贴",
        View: "视图",
        Insert: "插入",
        Format: "格式",
        Help: "帮助",
        New: "新建",
        Link: "链接",
        Image: "图片",
        "Horizontal line": "水平线",
        Text: "文本",
        "Heading 1": "标题 1",
        "Heading 2": "标题 2",
        "Heading 3": "标题 3",
        "Heading 4": "标题 4",
        "Heading 5": "标题 5",
        "Heading 6": "标题 6",
        Align: "对齐",
        Left: "左",
        Center: "居中",
        Right: "右",
        Justified: "两端对齐",
        "Keyboard shortcuts": "键盘快捷键",

        // clipboard
        "Operation failed. Please check your browser's clipboard permissions.":
            "操作失败。请检查浏览器的剪贴板权限。",

        // block style dropdown
        Heading: "标题",
        Quote: "引用",
        Paragraph: "段落",
        "Text style": "文本样式",
        Lists: "列表",

        normal: "普通的",
        default: "默认",

        // lists
        "Bulleted list": "项目符号列表",
        "Numbered list": "编号列表",

        // links
        "Enter text to display": "输入要显示的文本",
        "Paste link": "粘贴链接",
        "Link copied to clipboard": "链接已复制到剪贴板",

        // shortcut groups
        "Text formatting": "文本格式化",
        Editing: "编辑",
        "Special actions": "特殊操作",

        // colors
        Black: "黑色",
        Gray: "灰色",
        White: "白色",
        Red: "红色",
        Orange: "橙色",
        Yellow: "黄色",
        Lime: "酸橙色",
        Green: "绿色",
        Teal: "水鸭色",
        Cyan: "青色",
        Blue: "蓝色",
        Indigo: "靛蓝色",
        Magenta: "洋红色",

        // shades
        "Light gray": "浅灰色",
        "Medium gray": "中灰色",
        "Dark gray": "深灰色",
        "Light red": "浅红色",
        "Medium red": "中红色",
        "Dark red": "深红色",
        "Light orange": "浅橙色",
        "Medium orange": "中橙色",
        "Dark orange": "深橙色",
        "Light yellow": "浅黄色",
        "Medium yellow": "中黄色",
        "Dark yellow": "深黄色",
        "Light lime": "浅酸橙色",
        "Medium lime": "中酸橙色",
        "Dark lime": "深酸橙色",
        "Light green": "浅绿色",
        "Medium green": "中绿色",
        "Dark green": "深绿色",
        "Light teal": "浅水鸭色",
        "Medium teal": "中水鸭色",
        "Dark teal": "深水鸭色",
        "Light cyan": "浅青色",
        "Medium cyan": "中青色",
        "Dark cyan": "深青色",
        "Light blue": "浅蓝色",
        "Medium blue": "中蓝色",
        "Dark blue": "深蓝色",
        "Light indigo": "浅靛蓝色",
        "Medium indigo": "中靛蓝色",
        "Dark indigo": "深靛蓝色",
        "Light magenta": "浅洋红色",
        "Medium magenta": "中洋红色",
        "Dark magenta": "深洋红色"
    }
};
~~~
</details>

## 사용자 정의 로케일 적용 {#apply-a-custom-locale}

모든 인터페이스 레이블에 대한 번역을 포함한 로케일 객체를 생성하거나 내장 로케일을 수정하십시오. 아래와 같이 초기화 시 로케일을 적용하거나 런타임에 전환할 수 있습니다.

### 초기화 시 로케일 적용 {#apply-the-locale-at-initialization}

생성자 설정의 [`locale`](api/config/locale.md) 속성에 로케일을 전달하십시오:

~~~jsx
const editor = new richtext.Richtext("#root", {
    locale: richtext.locales.de
    // other configuration properties
});
~~~

### 런타임에 로케일 전환 {#switch-the-locale-at-runtime}

초기화 후 로케일을 변경하려면 [`setLocale()`](api/methods/set-locale.md) 메서드를 호출하십시오:

~~~jsx
editor.setLocale(richtext.locales.cn);
~~~

기본 영어 로케일로 복원하려면 인수 없이 또는 `null`을 전달하여 [`setLocale()`](api/methods/set-locale.md)을 호출하십시오:

~~~jsx
editor.setLocale();
~~~

## 예제 {#example}

아래 예제는 여러 RichText 로케일을 순환하는 방법을 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/zxjrin3i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
