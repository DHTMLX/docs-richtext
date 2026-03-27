---
sidebar_label: set-line-height
title: set-line-height Ereignis
description: Sie können mehr über das set-line-height-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-line-height

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Zeilenabstand festgelegt wird

### Verwendung {#usage}

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **set-line-height**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `lineHeight` - ein Zeilenabstand

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „set-line-height"-Ereignis abonnieren
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// Neuen Zeilenabstand anwenden
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
