---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die imageUploadUrl-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# imageUploadUrl

### Beschreibung {#description}

@short: Optional. Gibt die URL an, die für den Bild-Upload verwendet wird (über Toolbar, Menüleiste, Zwischenablage-Einfügen oder Drag-and-Drop)

Wenn die Eigenschaft gesetzt ist, lädt RichText jedes eingefügte Bild an den angegebenen Endpunkt hoch und fügt die vom Server zurückgegebene URL ein.

Wenn die Eigenschaft weggelassen oder auf einen falschen Wert gesetzt wird (`""`, `null`, `undefined`), wechselt RichText in den **Inline-Modus**: Die Bilddatei wird clientseitig gelesen und direkt als Base64-Daten-URL in den Inhalt eingebettet – kein Server erforderlich. Inline-Bilder, die größer als 1024×800 sind, werden proportional verkleinert, um innerhalb dieser Grenzen zu bleiben.

:::note[Hinweis]
Inline-Bilder (Base64) werden beim integrierten DOCX-/PDF-[Export](api/events/export.md) nicht beibehalten. Wenn Sie auf den Export angewiesen sind, geben Sie eine `imageUploadUrl` an, damit Bilder auf einen externen Speicherort verweisen.
:::

:::caution[Vorsicht]
Die Base64-Kodierung vergrößert die kodierte Nutzlast im Vergleich zur Originaldatei um etwa ein Drittel. Ein Dokument mit mehreren großen Inline-Bildern wächst entsprechend, was die Größe des von [`getValue()`](api/methods/get-value.md) zurückgegebenen Werts, den Speicherbedarf des Editors und den Aufwand für das Speichern oder Übertragen des Inhalts beeinflusst. Verwenden Sie für Dokumente mit vielen oder großen Bildern bevorzugt eine server-seitige `imageUploadUrl`.
:::

### Verwendung {#usage}

~~~jsx {}
imageUploadUrl?: string;
~~~

### Beispiel {#example}

Bilder an einen Server-Endpunkt hochladen:

~~~jsx {3}
// RichText initialisieren
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // andere Konfigurationseigenschaften
});
~~~

Bilder inline als Base64 einfügen (kein Server erforderlich) – lassen Sie die Eigenschaft weg oder übergeben Sie einen leeren String:

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl ist nicht gesetzt, Bilder werden als Base64-Daten-URLs eingefügt
    // andere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt. Ab v2.1 ist die Eigenschaft optional: Wenn sie weggelassen wird, werden Bilder inline als Base64-Daten-URLs eingefügt.

**Verwandte Artikel:** [Konfiguration](guides/configuration.md), [Arbeiten mit dem Server](guides/working_with_server.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
