---
sidebar_label: api.setNext()
title: setNext Methode
description: Sie können die setNext-Methode in der Dokumentation der DHTMLX JavaScript RichText Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.setNext()

### Beschreibung

@short: Diese Methode ermöglicht es Ihnen, eine Aktion in die Event Bus-Sequenz einzufügen.

### Verwendung

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parameter

- `next` - (erforderlich) die Aktion, die in die **Event Bus**-Sequenz eingefügt werden soll  

### Beispiel

~~~jsx {10-11}
const server = "https://some-backend-url";
// Angenommen, Sie haben eine benutzerdefinierte Server-Service-Klasse namens someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Fügen Sie someServerService in die Event Bus-Sequenz des Widgets ein
    editor.api.setNext(someServerService);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v2.0 hinzugefügt
