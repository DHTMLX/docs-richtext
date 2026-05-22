---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die imageUploadUrl-Konfiguration. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# imageUploadUrl

### Description

@short: Optional. Gibt die URL an, die für den Bild-Upload verwendet wird

### Usage

~~~jsx {}
imageUploadUrl?: string;
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
