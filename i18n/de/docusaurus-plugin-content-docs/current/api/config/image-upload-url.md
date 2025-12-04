---
sidebar_label: imageUploadUrl
title: imageUploadUrl Konfiguration
description: Sie können mehr über die imageUploadUrl Konfiguration in der Dokumentation der DHTMLX JavaScript RichText Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# imageUploadUrl

### Beschreibung

@short: Optional. Definiert die URL, die zum Hochladen von Bildern verwendet wird.

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

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version 2.0 eingeführt.

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
