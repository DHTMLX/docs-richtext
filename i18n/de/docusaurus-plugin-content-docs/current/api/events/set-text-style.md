---
sidebar_label: set-text-style
title: set-text-style Ereignis
description: Sie können mehr über das set-text-style-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-text-style

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Textstil festgelegt wird

### Verwendung {#usage}

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Parameter {#parameters}

Der Callback des **set-text-style**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `tag` - ein Textstil

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „set-text-style"-Ereignis abonnieren
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// Neuen Textstil anwenden
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
