---
sidebar_label: DHTMLX MCP-Server
title: DHTMLX RichText MCP-Integration für Bearbeitung und Inhaltsformate
description: Der MCP-Server versorgt KI-Assistenten mit verifizierter, aktueller Dokumentation zu den Standardstilen, Encodern und der Trigger-Konfiguration von DHTMLX RichText.
---

# DHTMLX RichText MCP-Server: Formate, Symbolleiste und Trigger {#dhtmlx-richtext-mcp-server-formats-toolbar-and-triggers}

DHTMLX RichText ist ein leichtgewichtiger WYSIWYG-Editor mit einer breiten Konfigurationsfläche. Sie können Inhalte zwischen [HTML, Klartext und Markdown](/#supported-formats) konvertieren, die Typografie pro Blocktyp über [Standardstile](guides/configuration.md#configure-default-styles) festlegen und eine vollständig anpassbare [Symbolleiste](guides/configuration.md#toolbar) erstellen, die sich an die Steuerelemente anpasst, die eine Anwendung benötigt. Um daraus den vollen Nutzen zu ziehen, müssen Sie jedes Element mit dem aktuellen Setup abgleichen: aktuelles CSS für Standardstile, den richtigen Encoder für ein bestimmtes Format und gültige Steuerelementtypen für benutzerdefinierte Symbolleisten-Schaltflächen — statt sich auf eine auswendig gelernte Vermutung zu verlassen.

Der DHTMLX MCP-Server hält einen KI-Assistenten in all diesen Punkten auf dem aktuellen Stand. Das [Setup für Erwähnungen und Trigger](guides/mentions_and_tags.md), der [Vertrag für den Bild-Upload](guides/working_with_server.md) und der [DOCX-/PDF-Exportablauf](api/events/export.md) stammen alle aus der aktuellen Dokumentation, sodass generierter Code dem tatsächlichen Verhalten des Editors von heute entspricht.

### MCP-Endpunkt {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note[Hinweis]
Der DHTMLX MCP-Server deckt alle wichtigen DHTMLX-Produkte ab, nicht nur DHTMLX RichText. Derselbe Endpunkt und dieselben Konfigurationsanweisungen funktionieren unabhängig davon, mit welcher DHTMLX-Komponente Sie arbeiten.
:::

## RichText-Abdeckung im MCP-Server {#richtext-coverage-in-the-mcp-server}

Von Symbolleisten-Schaltflächen bis zu Trigger-Callbacks deckt der Index des MCP-Servers die gesamte Oberfläche von DHTMLX RichText ab. Häufige Nachschlagevorgänge:

- Nachschlagen der aktuellen API für [Methoden](api/overview/methods_overview.md), [Events](api/overview/events_overview.md) und [Eigenschaften](api/overview/properties_overview.md), einschließlich der [Event Bus](api/overview/event_bus_methods_overview.md)- und [Zustand](api/overview/state_methods_overview.md)-Methoden.
- Generieren von sofort lauffähigem [Initialisierungscode](guides/initialization.md) mit dem Container, [`toolbar`](api/config/toolbar.md) und [`menubar`](api/config/menubar.md), die ein bestimmter Editor benötigt.
- Wechseln zwischen dem [klassischen und dem Dokument-Layout-Modus](guides/configuration.md#layout-modes) mit [`layoutMode`](api/config/layout-mode.md) sowie Erstellen einer benutzerdefinierten [Symbolleiste](guides/configuration.md#toolbar) aus integrierten Schaltflächen oder `button`/`richselect`/`colorpicker`-Steuerelementobjekten.
- Lesen oder Schreiben von Inhalten als HTML, Klartext oder Markdown über [`setValue()`](api/methods/set-value.md), [`getValue()`](api/methods/get-value.md) und [`insertValue()`](api/methods/insert-value.md) mit dem passenden Encoder.
- Festlegen von [Standardstilen](guides/configuration.md#configure-default-styles) pro Blocktyp zusammen mit den passenden CSS-Regeln.
- Anbinden eines [Bild-Upload-Endpunkts](guides/working_with_server.md) an den genauen Request-/Response-Vertrag, den RichText erwartet, oder Verwenden des Inline-Base64-Fallbacks.
- Konfigurieren von [@Erwähnungen, #Tags und Slash-Befehlen](guides/mentions_and_tags.md) über die Eigenschaft `triggers`, einschließlich statischer, synchroner und asynchroner Datenquellen.
- Verarbeiten von [`export`](api/events/export.md) und [`import`](api/events/import.md) für DOCX-/PDF-Ausgabe sowie [Lokalisieren](guides/localization.md) der Oberfläche oder [Stylen](guides/stylization.md) mit `--wx-color-primary` und anderen CSS-Variablen.
- Integrieren von RichText mit [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md) und [Svelte](guides/integration_with_svelte.md).

## So verarbeitet der MCP-Server einen RichText-Prompt {#how-the-mcp-server-handles-a-richtext-prompt}

Eine RichText-Anfrage an den DHTMLX MCP-Server durchläuft eine Retrieval-Augmented-Generation-Pipeline (RAG) über das Model Context Protocol (MCP), bevor sie in einem von zwei Workflows landet: *Search*, der passende Referenzseiten zurückliefert, oder *Inference*, der diese Seiten liest und direkt antwortet. Eine RichText-Anfrage hat für den Assistenten oft zwei Seiten: eine, die aktuelle Dokumentation benötigt, und eine, die er bereits ohne Hilfe bearbeiten kann. Der Assistent trennt die erste ab, bevor überhaupt etwas den MCP erreicht.

Verfolgen Sie den Prompt *„Wie richte ich DHTMLX RichText so ein, dass Bilder auf den Asset-Server meines Unternehmens hochgeladen werden, bevor sie in das Dokument eingefügt werden?“* durch die Pipeline:

1. Der Assistent extrahiert die dokumentationsrelevante Seite der Anfrage: den Request-/Response-Vertrag, den RichText von einem Bild-Upload-Endpunkt erwartet.
2. Der Server ordnet sie der Dokumentation „Arbeiten mit dem Server“ zu.
3. Die Anfrage benötigt funktionierenden Code, daher übernimmt *Search* sie (eine engere Frage, etwa ob `insertValue()` eine Auswahl ersetzt oder an der Cursorposition einfügt, würde stattdessen an *Inference* gehen).
4. *Search* ruft die passenden Seiten aus einem Vektorindex ab, der auf der aktuellen RichText-Dokumentation aufgebaut ist.
5. Diese Seiten werden dem Assistenten als Kontext zurückgegeben.
6. Der Assistent bindet den Upload-Handler passend zu diesem Vertrag ein und füllt anschließend die eigentliche Anfrage an den Asset-Server des Unternehmens aus eigenem Wissen aus.

Dank dieses Ablaufs bleiben die Formatierungs- und Symbolleisten-Vorschläge für RichText mit dem tatsächlichen Verhalten des Editors von heute im Einklang.

## KI-Tool mit dem MCP-Server verbinden {#attaching-your-ai-tool-to-the-mcp-server}

Die Registrierung des MCP-Endpunkts muss pro Tool nur einmal erfolgen — egal ob per CLI-Befehl oder JSON-Konfigurationseintrag — und alle zielen auf dieselbe Adresse:

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Die Einrichtungsschritte für gängige Tools werden im Folgenden einzeln behandelt.

### Claude Code {#claude-code}

:::info[Info]
Alle Details zur MCP-Einrichtung für Claude Code finden Sie in der [offiziellen Dokumentation](https://code.claude.com/docs/en/mcp).
:::

Um den Server über die Befehlszeile zu registrieren, führen Sie Folgendes aus:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Möchten Sie es lieber manuell einrichten? Fügen Sie Folgendes in Ihre `.mcp.json` ein:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info[Info]
Die [offizielle Dokumentation](https://cursor.com/en-US/docs/mcp) von Cursor enthält die vollständige Anleitung zur MCP-Konfiguration.
:::

Schritte zum Hinzufügen des Servers:

1. Öffnen Sie die Einstellungen (`Cmd+Shift+J` unter Mac, `Ctrl+Shift+J` unter Windows/Linux)
2. Gehen Sie zu **Tools & MCP**
3. Klicken Sie auf **Add Custom MCP**
4. Fügen Sie die folgende Konfiguration ein:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info[Info]
Die vollständigen Schritte zur MCP-Integration in Antigravity finden Sie in der [offiziellen Dokumentation](https://antigravity.google/docs/mcp).
:::

Das sind die Schritte, um den DHTMLX MCP-Server mit Google Antigravity zu verbinden:

1. Öffnen Sie die Befehlspalette
2. Geben Sie „mcp add“ ein
3. Wählen Sie „HTTP“
4. Geben Sie die folgenden Werte an:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info[Info]
Das [zugehörige Handbuch](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) erläutert alle Änderungen bei der Migration von Gemini CLI zu Antigravity CLI.
:::

Um den DHTMLX MCP-Server mit Antigravity CLI zu verbinden, erstellen Sie `mcp_config.json` an einem der folgenden Speicherorte:

- Global: `~/.gemini/config/mcp_config.json`
- Arbeitsbereich: `.agents/mcp_config.json`

Fügen Sie die folgende Konfiguration hinzu:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Führen Sie anschließend `agy` im Terminal aus.

### ChatGPT {#chatgpt}

:::info[Info]
Jeder Schritt der Einrichtung des ChatGPT-MCP-Connectors ist in der [offiziellen Dokumentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) beschrieben.
:::

Schritte zur Konfiguration des Connectors:

1. Gehen Sie zu **Settings** → **Apps & Connectors**
2. Klicken Sie auf **Advanced settings**
3. Aktivieren Sie **Developer mode**
4. Kehren Sie zu **Apps & Connectors** zurück und klicken Sie auf „Create“
5. Geben Sie die Connector-Details ein:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Klicken Sie auf **Create**

Nachdem Sie den Connector erstellt haben, ruft ChatGPT während der Unterhaltungen Dokumentation vom MCP-Server ab.

:::info[Info]
Für intensive Coding-Workflows sind andere MCP-fähige Tools möglicherweise besser geeignet.
:::

### Andere Tools {#other-tools}

Prüfen Sie bei jedem anderen KI-Coding-Tool die Einstellungen auf eine Bezeichnung wie „Model Context Protocol“ oder „Context Sources“ und fügen Sie dort `https://docs.dhtmlx.com/mcp` als benutzerdefinierte Quelle hinzu.

## Grundlagen zum Datenschutz beim MCP-Server {#mcp-server-privacy-basics}

Der MCP-Server läuft ausschließlich remote: keine lokale Ausführung, kein lokaler Dateizugriff, keine gespeicherten personenbezogenen Daten.

Protokollierte Anfragen dienen einem einzigen Zweck: dem Debugging und der Verbesserung des Dienstes.

DHTMLX bietet für strengere Datenschutzanforderungen eine kommerzielle Bereitstellung mit deaktivierter Anfrageprotokollierung an. Kontaktieren Sie uns unter `info@dhtmlx.com`.

## Prompt-Ideen für die Entwicklung mit RichText {#prompt-ideas-for-building-with-richtext}

RichText-Prompts lassen sich meist einem von vier Bereichen zuordnen: Layout, Inhaltsformat, Bildverarbeitung oder Erwähnungen und Trigger. Die folgenden Gruppen sind entsprechend gegliedert; wählen Sie eine aus und passen Sie sie an Ihr Setup an.

**Layout und Symbolleiste**

~~~
How do I switch DHTMLX RichText from full-width editing to a document-style layout? Use the docs.
~~~
~~~
How do I build a custom toolbar with only bold, italic, and one custom button?
~~~
~~~
How do I make the built-in layout mode switcher show up as a dropdown instead of a plain button?
~~~

**Inhalt und Formate**

~~~
How do I load Markdown content into DHTMLX RichText?
~~~
~~~
How do I read DHTMLX RichText's content out as plain text instead of HTML?
~~~
~~~
How do I insert an HTML link at the current cursor position without replacing the rest of the content?
~~~

**Bilder und Server-Synchronisierung**

~~~
How do I make DHTMLX RichText upload images to my own server instead of embedding them inline?
~~~
~~~
What JSON response does DHTMLX RichText expect from an image upload endpoint?
~~~

**Erwähnungen, Tags und Trigger**

~~~
How do I set up an @ mention trigger that looks up users from a server? Use the docs.
~~~
~~~
How do I make a slash command insert just the item text, without the leading slash showing up?
~~~

## Was einen RichText-Prompt wirkungsvoll macht {#what-makes-a-richtext-prompt-work}

- **Nennen Sie die genaue Methode.** `setValue()` ersetzt das gesamte Dokument, `insertValue()` fügt an der Cursorposition ein oder ersetzt eine Auswahl, und `getValue()` liest den Inhalt aus. Geben Sie an, welche Methode Sie meinen, statt „den Inhalt aktualisieren“ zu schreiben.
- **Geben Sie an, mit welchem Format Sie arbeiten.** `setValue()`, `getValue()` und `insertValue()` verwenden standardmäßig HTML, akzeptieren aber die Encoder `richtext.text.fromText` und `richtext.markdown.fromMarkdown`. Nennen Sie das Format, damit der Assistent den richtigen Encoder übergibt, statt HTML anzunehmen.
- **Unterscheiden Sie die Steuerelementtypen der Symbolleiste.** `richselect` und `colorpicker` funktionieren nur bei bestimmten vordefinierten Steuerelement-IDs; benutzerdefinierte Schaltflächen unterstützen nur `type: "button"`. Geben Sie an, welchen Typ Sie hinzufügen, damit der Assistent keinen Typ mit einer ID kombiniert, die ihn ignoriert.
- **Fügen Sie „Use the docs“ hinzu** für die Struktur der Bild-Upload-Response oder die Kombination aus `defaultStyles`/CSS. Beide haben einen spezifischen Vertrag (exakte JSON-Felder, manuelle CSS-Regeln), den man sich leicht falsch merkt.
