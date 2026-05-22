---
sidebar_label: setConfig()
title: setConfig Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setConfig-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setConfig()

### Beschreibung

@short: Wendet neue Konfigurationsparameter auf RichText an

### Verwendung

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Parameter

- `config` - (erforderlich) das Objekt mit den RichText-Konfigurationsparametern. Die vollständige Liste der Eigenschaften finden Sie [hier](api/overview/properties_overview.md)

:::note
Die Methode `setConfig()` behält alle zuvor gesetzten Parameter bei, die nicht explizit im Aufruf von `setConfig()` angegeben werden.
:::

### Beispiel

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // other configuration properties
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
