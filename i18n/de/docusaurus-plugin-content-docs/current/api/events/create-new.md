---
sidebar_label: create-new
title: create-new Event
description: Entdecken Sie, wie das create-new Event in der DHTMLX JavaScript RichText-Bibliothek funktioniert. Erkunden Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# create-new

### Beschreibung

@short: Dieses Event wird ausgelöst, wenn die Option "Neu" in der Menüleiste ausgewählt wird oder durch die Verwendung von Event Bus-Methoden.

### Verwendung

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameter

Der Callback für das **create-new** Event akzeptiert ein Objekt mit der folgenden Eigenschaft:

- `reset` - gibt an, ob die Historie zurückgesetzt werden soll, wenn eine neue Datei erstellt wird.

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung für das "create-new" Event
editor.api.on("create-new", ({ reset }) => {
    console.log(`Dokument wurde geleert. Die Historie wurde ${reset ? "" : "nicht"} zurückgesetzt.`);
});
// Neue Datei erstellen und Historie zurücksetzen
editor.api.exec("create-new", { reset: true });
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
