---
sidebar_label: setConfig()
title: setConfig Methode
description: Sie können die setConfig Methode in der Dokumentation der DHTMLX JavaScript RichText Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# setConfig()

### Beschreibung

@short: Aktualisiert den RichText-Editor mit neuen Konfigurationseinstellungen.

### Verwendung

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Parameter

- `config` - (erforderlich) ein Objekt, das die RichText-Konfigurationsoptionen enthält. Eine vollständige Liste der Eigenschaften finden Sie [hier](api/overview/properties_overview.md).

:::note
Beim Verwenden der `setConfig()` Methode bleiben zuvor gesetzte Parameter, die im neuen Aufruf nicht enthalten sind, unverändert.
:::

### Beispiel

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // andere Konfigurationseigenschaften
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v2.0 eingeführt.
