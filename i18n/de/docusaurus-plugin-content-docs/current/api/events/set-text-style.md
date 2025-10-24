---
sidebar_label: set-text-style
title: set-text-style Event
description: Entdecken Sie das set-text-style Event in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie Entwickleranleitungen, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-text-style

### Beschreibung

@short: Wird ausgelöst, wenn ein Textstil angewendet wird

### Verwendung

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Parameter

Der Callback für das **set-text-style** Event erhält ein Objekt mit der folgenden Eigenschaft:

- `tag` - gibt den angewendeten Textstil an

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) konsultieren
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "set-text-style" Event hören
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("Textstil wurde aktualisiert");
});
// Textstil ändern
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
