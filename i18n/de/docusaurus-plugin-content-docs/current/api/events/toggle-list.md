---
sidebar_label: toggle-list
title: toggle-list Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-list-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toggle-list

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Benutzer eine Liste für die ausgewählten Blöcke aktiviert oder deaktiviert

Das `toggle-list`-Event steuert die kontextabhängigen Schaltflächen für nummerierte und ungeordnete Listen. Anstatt eine neue Liste einzufügen, analysiert das Event die aktuelle Auswahl und wählt automatisch eines von vier Verhaltensweisen:

| Modus           | Wann es ausgelöst wird                                                              | Ergebnis                                                                              |
| --------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Einschließen**  | Die Auswahl umfasst nur Absätze                                                    | Jeder Absatz wird zu einem Listenelement innerhalb eines neuen Listen-Containers      |
| **Ausschließen**  | Jedes ausgewählte Element befindet sich in einer Liste des angeklickten Typs       | Die Elemente werden wieder zu Absätzen; der Listen-Container wird entfernt            |
| **Konvertieren**  | Jedes ausgewählte Element befindet sich in einer Liste, aber mindestens eine Liste hat den anderen Typ | Die Liste wechselt ihren Typ (ungeordnet ↔ nummeriert) an Ort und Stelle |
| **Gemischt**      | Die Auswahl enthält sowohl Absätze als auch Listenelemente                         | Absätze werden zu Elementen und alles wird in einer Liste des angegebenen Typs zusammengeführt |

### Verwendung {#usage}

~~~jsx {}
"toggle-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameter {#parameters}

Der Callback des `toggle-list`-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `type` - der Typ der Liste, die umgeschaltet werden soll. Die folgenden Werte sind möglich:
    - `"bulleted"` - ungeordnete (nicht nummerierte) Liste
    - `"numbered"` - geordnete (nummerierte) Liste

:::info[Info]
Um interne Events zu verarbeiten, verwenden Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md)
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "toggle-list"-Event abonnieren
editor.api.on("toggle-list", (obj) => {
    console.log(obj.type);
    console.log("The list was toggled");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0.6 hinzugefügt
