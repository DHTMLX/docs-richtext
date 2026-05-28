---
sidebar_label: getValue()
title: getValue Method
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getValue-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# getValue()

### Beschreibung

@short: Gibt den Wert des RichText zurück

### Verwendung

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Parameter

- `encoder` - (optional) ein Parser, der den Inhalt des RichText in ein benutzerdefiniertes Format kodiert. Folgende Formate sind verfügbar: `html` (Standard) und `text`

Den benötigten Encoder erhalten Sie auf folgende Weise:

```jsx
const toTextEncoder = richtext.text.toText; // Text-Encoder
const toHTMLEncoder = richtext.html.toHTML; // HTML-Encoder
```

### Beispiel

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
