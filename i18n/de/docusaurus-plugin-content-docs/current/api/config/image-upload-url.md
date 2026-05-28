---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die imageUploadUrl-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# imageUploadUrl

### Beschreibung

@short: Optional. Gibt die URL an, die für den Bild-Upload verwendet wird

### Verwendung

~~~jsx {}
imageUploadUrl?: string;
~~~

### Beispiel

~~~jsx {3}
// RichText initialisieren
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
