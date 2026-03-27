---
sidebar_label: api.intercept()
title: Methode intercept
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die intercept-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.intercept()

### Beschreibung {#description}

@short: Ermöglicht das Abfangen und Verhindern interner Ereignisse

### Verwendung {#usage}

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameter {#parameters}

- `event` - (erforderlich) ein auszulösendes Ereignis
- `callback` - (erforderlich) ein auszuführender Callback (die Callback-Argumente hängen vom auszulösenden Ereignis ab)

### Ereignisse {#events}

:::info[Info]
Die vollständige Liste der internen RichText-Ereignisse finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel {#example}

~~~jsx {5-10}
// RichText erstellen
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Ändern der Schriftgröße verbieten
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
