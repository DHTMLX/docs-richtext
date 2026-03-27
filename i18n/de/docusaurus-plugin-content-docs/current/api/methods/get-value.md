---
sidebar_label: getValue()
title: Methode getValue
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getValue-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# getValue()

### Beschreibung {#description}

@short: Gibt den RichText-Wert zurück

### Verwendung {#usage}

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Parameter {#parameters}

- `encoder` - (optional) ein Parser zum Kodieren des RichText-Inhalts in ein benutzerdefiniertes Format. Folgende Formate sind verfügbar: `html` (Standard) und `text`

Den erforderlichen Encoder erhalten Sie auf folgende Weise:

```jsx
const toTextEncoder = richtext.text.toText; // text encoder
const toHTMLEncoder = richtext.html.toHTML; // html encoder
```

### Beispiel {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // legt den Standardwert fest (HTML-Format)
    // weitere Konfigurationseigenschaften
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `mode` wurde entfernt. Der Parameter `encoder` wurde hinzugefügt
