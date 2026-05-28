---
sidebar_label: set-text-style
title: set-text-style Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-style-Event. Entwicklerhandbücher und API-Referenz durchsuchen, Codebeispiele und Live-Demos ausprobieren und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunterladen.
---

# set-text-style

### Beschreibung

@short: Wird ausgelöst, wenn ein Textstil festgelegt wird

### Verwendung

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Parameter

Der Callback des **set-text-style**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `tag` - ein Textstil

:::info
Zur Verarbeitung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "set-text-style"-Event abonnieren
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// neuen Textstil anwenden
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
