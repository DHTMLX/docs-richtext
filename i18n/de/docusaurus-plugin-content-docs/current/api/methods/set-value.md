---
sidebar_label: setValue()
title: Methode setValue
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setValue-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setValue()

### Beschreibung {#description}

@short: Wendet einen neuen Wert auf RichText an

### Verwendung {#usage}

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameter {#parameters}

- `value` - (erforderlich) ein in RichText einzufügender Wert
- `encoder` - (optional) ein benutzerdefinierter Parser zum Kodieren des RichText-Inhalts in ein benutzerdefiniertes Format. Folgende Formate sind verfügbar: `html` (Standard) und `text`

Den erforderlichen Encoder erhalten Sie auf folgende Weise:

```jsx
const fromTextEncoder = richtext.text.fromText; // text encoder
const fromHTMLEncoder = richtext.html.fromHTML; // html encoder
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
