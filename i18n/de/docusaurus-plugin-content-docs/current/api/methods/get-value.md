---
sidebar_label: getValue()
title: getValue-Methode
description: Sie können die getValue-Methode in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# getValue()

### Beschreibung

@short: Ruft den aktuellen Wert des RichText-Editors ab

### Verwendung

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Parameter

- `encoder` - (optional) ein Parser, der den RichText-Inhalt in ein bestimmtes Format konvertiert. Verfügbare Optionen sind `html` (Standard) und `text`

Um den gewünschten Encoder zu erhalten, verwenden Sie Folgendes:

```jsx
const toTextEncoder = richtext.text.toText; // Text-Encoder
const toHTMLEncoder = richtext.html.toHTML; // HTML-Encoder
```

### Beispiel

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // setzt den Standardwert (HTML-Format)
    // andere Konfigurationseigenschaften
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**Änderungsprotokoll:** Die Methode wurde in Version 2.0 aktualisiert. Der Parameter `mode` wurde entfernt. Der Parameter `encoder` wurde hinzugefügt
