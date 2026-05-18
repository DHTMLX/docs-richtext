---
sidebar_label: setValue()
title: setValue Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setValue-Methode. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setValue()

### Beschreibung

@short: Wendet einen neuen Wert auf RichText an

### Verwendung

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameter

- `value` - (erforderlich) ein Wert, der in den RichText eingefügt wird
- `encoder` - (optional) ein benutzerdefinierter Parser, der den Inhalt des RichText in ein benutzerdefiniertes Format kodiert. Folgende Formate stehen zur Verfügung: `html` (Standard) und `text`

Den erforderlichen Encoder erhalten Sie auf folgende Weise:

```jsx
const fromTextEncoder = richtext.text.fromText; // text encoder
const fromHTMLEncoder = richtext.html.fromHTML; // html encoder
```

### Beispiel

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `mode` wurde entfernt. Der Parameter `encoder` wurde hinzugefügt
