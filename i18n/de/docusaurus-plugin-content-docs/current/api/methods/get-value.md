---
sidebar_label: getValue()
title: getValue()-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getValue-Methode. Sehen Sie sich Entwickleranleitungen und die API-Referenz an, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# getValue()

### Beschreibung {#description}

@short: Gibt den Wert des RichText zurück

### Verwendung {#usage}

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Parameter {#parameters}

- `encoder` - (optional) ein Parser zum Kodieren des RichText-Inhalts in ein benutzerdefiniertes Format. Folgende Formate sind verfügbar: `html` (Standard), `text` und `markdown`

Den erforderlichen Encoder erhalten Sie auf folgende Weise:

```jsx
const toTextEncoder = richtext.text.toText;             // Text-Encoder
const toHTMLEncoder = richtext.html.toHTML;             // HTML-Encoder
const toMarkdownEncoder = richtext.markdown.toMarkdown; // Markdown-Encoder
```

### Beispiel {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // setzt den Standardwert (HTML-Format)
    // weitere Konfigurationseigenschaften
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `mode` wurde entfernt. Der Parameter `encoder` wurde hinzugefügt
