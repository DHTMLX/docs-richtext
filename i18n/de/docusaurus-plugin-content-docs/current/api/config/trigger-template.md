---
sidebar_label: triggerTemplate
title: triggerTemplate Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die triggerTemplate-Konfiguration. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# triggerTemplate

### Beschreibung {#description}

@short: Optional. Passt an, wie RichText Einträge im Vorschlags-Dropdown rendert, das durch einen [`triggers`](api/config/triggers.md)-Eintrag geöffnet wird

Standardmäßig zeigt das Dropdown den `label`-Wert jedes Eintrags als einfachen Text an. Verwenden Sie `triggerTemplate`, um aufwendigere Zeilen zu rendern – zum Beispiel einen Avatar zusammen mit einem Namen und einer E-Mail-Adresse.

### Verwendung {#usage}

~~~jsx {}
function triggerTemplate({ data, trigger }) {
    return "HTML template of the suggestion item";
};
~~~

### Parameter {#parameters}

Die Callback-Funktion nimmt ein Objekt mit den folgenden Parametern entgegen:

- `data` - das aktuelle Vorschlags-Element (`{ id, label, url }`, zuzüglich beliebiger benutzerdefinierter Felder, die Sie der `data`-Quelle des Triggers hinzufügen)
- `trigger` - das Trigger-Zeichen, das das Dropdown geöffnet hat (`"@"`, `"#"` usw.)

:::tip[Tipp]
Die Standard-Breite des Dropdowns beträgt `160px`. Wenn Sie für Ihr Template mehr Platz benötigen, fügen Sie den übergeordneten Selektor `.wx-editor` vor dem Selektor ein:

~~~css {}
.wx-editor .wx-suggest-anchor {
    width: 220px;
}
~~~
:::

### Beispiel {#example}

Der folgende Code-Ausschnitt konfiguriert zwei Trigger: `@` für Erwähnungen und `#` für Tags. Verwenden Sie `triggerTemplate`, um den `trigger`-Wert auszuwerten und jedes Dropdown unterschiedlich zu rendern. Für das `@`-Dropdown gibt das Template eine benutzerdefinierte HTML-Zeile mit einem Avatar (`data.image`), einem Nickname (`data.label`) und einem vollständigen Namen (`data.name`) zurück. Für den `#`-Trigger verwendet das Template den `label`:

~~~jsx {5-6,8-15}
const { template, Richtext } = richtext;

new Richtext("#root", {
    triggers: [
        { trigger: "@", data: people },
        { trigger: "#", data: tags }
    ],
    triggerTemplate: template(obj => {
        if (obj.trigger === "@") {
            return `<div class="user">
                <img class="user-avatar" src="${obj.data.image}">
                <div class="user-nickname">${obj.data.label}</div>
                <div class="user-name">${obj.data.name}</div>
            </div>`;
        }
        // andere Trigger (zum Beispiel "#") verwenden den einfachen Label
        return obj.data.label;
    })
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.1 hinzugefügt

**Verwandte Artikel:** [Erwähnungen und Tags](guides/mentions_and_tags.md)
