---
sidebar_label: Lokalisierung
title: Lokalisierung
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Lokalisierung. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Lokalisierung

RichText unterstützt die Lokalisierung aller Schnittstellenbeschriftungen. Erstellen Sie ein neues Gebietsschema oder passen Sie ein integriertes an, und wenden Sie das Ergebnis über die Editor-Konfiguration an.

## Standardgebietsschema

Standardmäßig verwendet RichText das englische Gebietsschema:

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

:::info
RichText wird auch mit den integrierten Gebietsschemas Deutsch (`de`) und Chinesisch (`cn`) ausgeliefert. Auf ein beliebiges integriertes Gebietsschema kann über den Namespace `richtext.locales` zugegriffen werden: `richtext.locales.en`, `richtext.locales.de`, `richtext.locales.cn`.
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

## Benutzerdefiniertes Gebietsschema anwenden

Erstellen Sie ein Gebietsschema-Objekt (oder passen Sie ein integriertes an) mit Übersetzungen für alle Schnittstellenbeschriftungen. Wenden Sie das Gebietsschema bei der Initialisierung an oder wechseln Sie es zur Laufzeit, wie unten gezeigt.

### Gebietsschema bei der Initialisierung anwenden

Übergeben Sie das Gebietsschema an die Eigenschaft [`locale`](api/config/locale.md) in der Konstruktorkonfiguration:

~~~jsx
const editor = new richtext.Richtext("#root", {
    locale: richtext.locales.de
    // other configuration properties
});
~~~

### Gebietsschema zur Laufzeit wechseln

Rufen Sie die Methode [`setLocale()`](api/methods/set-locale.md) auf, um das Gebietsschema nach der Initialisierung zu wechseln:

~~~jsx
editor.setLocale(richtext.locales.cn);
~~~

Um das standardmäßige englische Gebietsschema wiederherzustellen, rufen Sie [`setLocale()`](api/methods/set-locale.md) ohne Argumente oder mit `null` auf:

~~~jsx
editor.setLocale();
~~~

## Beispiel

Das folgende Beispiel wechselt zwischen mehreren RichText-Gebietsschemas:

<iframe src="https://snippet.dhtmlx.com/zxjrin3i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
