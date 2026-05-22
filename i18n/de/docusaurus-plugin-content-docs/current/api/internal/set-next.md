---
sidebar_label: api.setNext()
title: setNext-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setNext-Methode. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.setNext()

### Beschreibung

@short: Ermöglicht das Hinzufügen einer Aktion in die Event-Bus-Reihenfolge

### Verwendung

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parameter

- `next` - (erforderlich) die Aktion, die in die **Event-Bus**-Reihenfolge aufgenommen werden soll  

### Beispiel

~~~jsx {10-11}
const server = "https://some-backend-url";
// Assume that you have a custom server service class named someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Integrate someServerService into the Event Bus order of widget
    editor.api.setNext(someServerService);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
