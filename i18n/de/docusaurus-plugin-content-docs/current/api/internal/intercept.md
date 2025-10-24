---
sidebar_label: api.intercept()
title: intercept Methode
description: Sie können die intercept Methode in der Dokumentation der DHTMLX JavaScript RichText Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.intercept()

### Beschreibung

@short: Bietet eine Möglichkeit, interne Ereignisse abzufangen und zu blockieren, bevor sie weiterverarbeitet werden.

### Verwendung

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameter

- `event` - (erforderlich) der Name des abzufangenden Ereignisses
- `callback` - (erforderlich) eine Funktion, die ausgeführt wird, wenn das Ereignis auftritt (Argumente hängen vom jeweiligen Ereignis ab)

### Ereignisse

:::info
Die vollständige Liste der internen RichText-Ereignisse finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel

~~~jsx {5-10}
// RichText erstellen
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Verhindert die Änderung der Schriftgröße außer auf "36px"
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v2.0 hinzugefügt
