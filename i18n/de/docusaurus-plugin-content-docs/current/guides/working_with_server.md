---
sidebar_label: Arbeiten mit dem Server
title: Arbeiten mit dem Server
description: Erfahren Sie, wie RichText mit einem Backend für Bild-Uploads kommuniziert, einschließlich des Request/Response-Vertrags und wie Sie Ihren eigenen Server einbinden. Durchsuchen Sie Entwickler-Guides und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Arbeiten mit dem Server {#working-with-the-server}

RichText läuft vollständig im Browser und benötigt kein Backend zum Bearbeiten oder Speichern von Inhalten. Ihre Anwendung kann den Inhalt des Editors frei speichern, wo immer sie möchte. Die einzige Funktion, die von einem Server profitiert, ist der **Bild-Upload**: Wenn ein Benutzer ein Bild in das Dokument einfügt, kann RichText die Datei entweder inline in den Inhalt einbetten oder an einen HTTP-Endpunkt senden und einen Link darauf speichern.

Dieser Guide erklärt:

- was standardmäßig passiert, wenn kein Upload-Server konfiguriert ist
- den genauen HTTP-Vertrag, den der Server implementieren muss
- wie RichText die vom Server zurückgegebene URL verwendet
- wie Sie die Funktion mit dem Demo-Backend ausprobieren können

## Standardverhalten: Inline-Bilder {#default-behavior-inline-images}

Wenn Sie die Eigenschaft [`imageUploadUrl`](api/config/image-upload-url.md) nicht setzen, fällt RichText auf Inline-Bilder zurück. Wenn der Benutzer ein Bild einfügt, liest RichText die Datei im Browser, kodiert die Originaldatei als `data:image/...;base64,...`-URL und schreibt diese direkt als `src` des `<img>`-Elements in den Editor-Inhalt. RichText begrenzt die angezeigte Größe über die Attribute `width`/`height` auf einen 1024×800-Bereich, aber die eingebetteten Bytes sind die originale Datei in voller Auflösung — der Client skaliert oder kodiert sie nicht um.

Dies funktioniert ohne jedes Backend und ist praktisch für schnelle Demos, hat aber klare Einschränkungen:

- die kodierten Bytes leben im Dokument, daher wächst das gespeicherte HTML mit jedem Bild
- dasselbe Bild in zwei Dokumenten wird zweimal gespeichert — es gibt keine gemeinsame Ressource zur Deduplizierung
- da die Bytes keine separate Ressource sind, kann der Server sie weder über ein CDN ausliefern noch nachbearbeiten (skalieren, umkodieren, scannen)
- Inline-Bilder werden durch den integrierten DOCX/PDF-[Export](api/events/export.md) nicht erhalten — wenn Sie auf den Export angewiesen sind, konfigurieren Sie einen Upload-Server, damit Bilder auf eine externe URL verweisen

## Eigenen Server schreiben {#write-your-own-server}

Verweisen Sie RichText in Produktionsanwendungen mit [`imageUploadUrl`](api/config/image-upload-url.md) auf einen Server:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // andere Konfigurationseigenschaften
});
~~~

Ein minimaler Upload-Endpunkt muss:

1. Einen `multipart/form-data`-POST mit einem Dateifeld namens `upload` akzeptieren.
2. Die Datei validieren (erlaubte Typen, maximale Größe).
3. Die Datei an einem Ort speichern, von dem der Browser des Benutzers sie abrufen kann (eine über HTTP bereitgestellte lokale Festplatte, S3, ein CDN usw.).
4. Das Bild optional skalieren oder anderweitig verarbeiten.
5. Mit einem JSON-Objekt antworten, das `status: "server"` enthält, `value` auf die öffentliche URL der gespeicherten Datei setzt sowie die `width` und `height` des Bildes in Pixeln.

### Was der Client sendet {#what-the-client-sends}

Wenn [`imageUploadUrl`](api/config/image-upload-url.md) gesetzt ist, sendet RichText die ausgewählte Datei direkt an diese URL (ohne `/images` oder einen anderen Pfad anzuhängen), sodass die übergebene URL das vollständige POST-Ziel ist.

Die Anfrage verwendet einen Standard-HTML-Formular-Upload:

- **Methode:** `POST`
- **Content-Type:** `multipart/form-data`
- **Body:** ein Dateifeld namens `upload`

### Was der Client zurückerwartet {#what-the-client-expects-back}

Der Server muss mit einem JSON-Objekt antworten. RichText liest die folgenden Felder:

| Feld     | Typ     | Bedeutung                                                                 |
| -------- | ------- | ------------------------------------------------------------------------- |
| `status` | string  | Erfolgsmarkierung — geben Sie `"server"` bei einem erfolgreichen Upload zurück. Der Uploader verwendet dieses Feld, um einen abgeschlossenen Upload von einem fehlgeschlagenen zu unterscheiden; jeder andere Wert (zum Beispiel `"error"`) markiert den Upload als fehlgeschlagen. Das eingefügte Bild selbst wird aus `value`, `width` und `height` erstellt. |
| `value`  | string  | URL des gespeicherten Bildes. RichText schreibt diese Zeichenkette unverändert als `src` des eingefügten `<img>` in das Dokument. |
| `width`  | integer | Breite des eingefügten Bildes in Pixeln.                                  |
| `height` | integer | Höhe des eingefügten Bildes in Pixeln.                                    |

#### Erfolgreiche Antwort {#successful-response}

Ein erfolgreicher Upload gibt die gespeicherte Bild-URL und ihre Abmessungen zurück:

~~~json
{
    "status": "server",
    "value": "https://cdn.example.com/uploads/abc123.png",
    "width": 320,
    "height": 207
}
~~~

#### Fehlgeschlagener Upload {#failed-upload}

Ein fehlgeschlagener Upload gibt einen anderen Status als `"server"` zurück:

~~~json
{
    "status": "error"
}
~~~

### Hochgeladenes Bild bereitstellen {#serve-the-uploaded-image}

Die `value`-URL ist die einzige Verbindung zwischen dem Upload und jedem späteren Lesen des Dokuments. RichText fügt die URL direkt in das Dokument ein, sodass jeder Client, der den gespeicherten Inhalt öffnet (der Editor selbst, ein Export, eine veröffentlichte Seite), das Bild über ein einfaches `GET` von dieser URL abruft.

Das bedeutet:

- die URL muss vom Browser des Benutzers erreichbar sein, was in der Regel bedeutet, dass sie **absolut** sein muss
- der Host kann sich vom Upload-Endpunkt unterscheiden (zum Beispiel können Sie Uploads auf Ihrem eigenen Server akzeptieren und eine CDN- oder Object-Storage-URL zurückgeben)
- wenn sich der Bild-Host auf einem anderen Origin befindet, stellen Sie sicher, dass er dem Browser das Laden des Bildes erlaubt (CORS oder einfach öffentlicher Lesezugriff)
- der Server muss diese URL so lange verfügbar halten, wie Dokumente auf sie verweisen; RichText speichert die Bytes nicht zwischen und kopiert sie nicht

Das URL-Layout selbst ist **nicht** Teil des Vertrags. Solange der Browser die URL per `GET` abrufen und Bild-Bytes empfangen kann, sind Pfad, Query-String und sogar das Schema vollständig dem Backend überlassen.

### Mit dem Demo-Server ausprobieren {#try-it-against-the-demo-server}

Ein funktionierendes Backend, das diesen Vertrag implementiert, steht zum Testen der Funktion zur Verfügung:

~~~jsx
new richtext.Richtext("#root", {
    imageUploadUrl: "https://docs.dhtmlx.com/richtext-backend/images"
    // andere Konfigurationseigenschaften
});
~~~

Der Demo-Server skaliert große Bilder, speichert sie auf der Festplatte und gibt URLs zurück, die er selbst ausliefert. Er ist nur für die Evaluierung und Demos gedacht. Verwenden Sie ihn nicht für Produktions-Editoren.

**Verwandte Artikel:**

- [Konfiguration](guides/configuration.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)
