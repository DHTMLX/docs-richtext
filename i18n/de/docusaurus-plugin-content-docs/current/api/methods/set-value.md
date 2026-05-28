---
sidebar_label: setValue()
title: setValue Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setValue-Methode. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setValue()

### Beschreibung

@short: Wendet einen neuen Wert auf RichText an

### Verwendung

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameter

- `value` - (erforderlich) ein Wert, der in den RichText eingefügt werden soll
- `encoder` - (optional) ein benutzerdefinierter Parser, der den Inhalt des RichText in ein benutzerdefiniertes Format kodiert. Die folgenden Formate sind verfügbar: `html` (Standard) und `text`

Der erforderliche Encoder kann wie folgt abgerufen werden:

```jsx
const fromTextEncoder = richtext.text.fromText; // text encoder
const fromHTMLEncoder = richtext.html.fromHTML; // html encoder
```

### Beispiel

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `mode` wurde entfernt. Der Parameter `encoder` wurde hinzugefügt
