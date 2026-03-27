---
sidebar_label: setConfig()
title: Methode setConfig
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setConfig-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setConfig()

### Beschreibung {#description}

@short: Wendet neue Konfigurationsparameter auf RichText an

### Verwendung {#usage}

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Parameter {#parameters}

- `config` - (erforderlich) das Objekt der RichText-Konfigurationsparameter. Die vollständige Liste der Eigenschaften finden Sie [hier](api/overview/properties_overview.md)

:::note[Hinweis]
Die Methode `setConfig()` behält alle zuvor festgelegten Parameter bei, die im Aufruf der Methode `setConfig()` nicht explizit angegeben werden.
:::

### Beispiel {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // weitere Konfigurationseigenschaften
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
