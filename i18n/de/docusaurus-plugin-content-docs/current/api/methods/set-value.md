---
sidebar_label: setValue()
title: setValue-Methode
description: Sie können mehr über die setValue-Methode in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# setValue()

### Beschreibung

@short: Aktualisiert den RichText-Inhalt mit einem neuen Wert

### Verwendung

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameter

- `value` - (erforderlich) der Inhalt, der in den RichText eingefügt werden soll
- `encoder` - (optional) ein benutzerdefinierter Parser, um den RichText-Inhalt in ein bestimmtes Format zu kodieren. Verfügbare Formate sind: `html` (Standard) und `text`

Den gewünschten Encoder erhalten Sie wie folgt:

```jsx
const fromTextEncoder = richtext.text.fromText; // Text-Encoder
const fromHTMLEncoder = richtext.html.fromHTML; // HTML-Encoder
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

**Änderungsprotokoll:** Die Methode wurde in Version 2.0 aktualisiert. Der Parameter `mode` wurde entfernt. Der Parameter `encoder` wurde hinzugefügt.
