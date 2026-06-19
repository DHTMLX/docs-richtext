---
sidebar_label: insertValue()
title: insertValue-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die insertValue-Methode. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insertValue()

### Beschreibung {#description}

@short: Fügt Text, Markdown oder HTML-Inhalt an der aktuellen Cursorposition ein oder ersetzt den markierten Text

### Verwendung {#usage}

~~~jsx {}
insertValue: (value: string, encoder?: any): void;
~~~

### Parameter {#parameters}

- `value` - (erforderlich) ein Wert, der an der aktuellen Cursorposition in das RichText eingefügt wird. Ist eine Auswahl aktiv, wird diese durch den neuen Wert ersetzt
- `encoder` - (optional) ein Parser zum Dekodieren des eingefügten Werts. Folgende Formate stehen zur Verfügung: `html` (Standard), `text` und `markdown`

Den benötigten Encoder erhalten Sie auf folgende Weise:

```jsx
const fromTextEncoder = richtext.text.fromText;             // text encoder
const fromHTMLEncoder = richtext.html.fromHTML;             // html encoder
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // markdown encoder
```

### Beispiel {#example}

~~~jsx {6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// inserts an HTML link with custom attributes at the cursor position
editor.insertValue("<a href=\"https://example.com\" title=\"Example\">link</a>");
~~~

Der eingefügte Inhalt wird als einzelner Verlaufseintrag hinzugefügt und kann mit einem einzigen **Rückgängig**-Schritt wiederhergestellt werden.

**Änderungsprotokoll:** Die Methode wurde in v2.1 hinzugefügt
