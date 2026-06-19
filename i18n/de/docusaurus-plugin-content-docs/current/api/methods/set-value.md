---
sidebar_label: setValue()
title: setValue-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek können Sie mehr über die setValue-Methode erfahren. Sehen Sie sich Entwicklerleitfäden und die API-Referenz an, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# setValue()

### Beschreibung {#description}

@short: Wendet einen neuen Wert auf RichText an

### Verwendung {#usage}

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameter {#parameters}

- `value` - (erforderlich) ein Wert, der in den RichText eingefügt werden soll
- `encoder` - (optional) ein benutzerdefinierter Parser zum Dekodieren des Werts aus einem benutzerdefinierten Format. Folgende Formate sind verfügbar: `html` (Standard), `text` und `markdown`

Den erforderlichen Encoder erhalten Sie auf folgende Weise:

```jsx
const fromTextEncoder = richtext.text.fromText;             // Text-Encoder
const fromHTMLEncoder = richtext.html.fromHTML;             // HTML-Encoder
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // Markdown-Encoder
```

### Beispiel {#example}

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `mode` wurde entfernt. Der Parameter `encoder` wurde hinzugefügt
