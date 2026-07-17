# Translation Glossary — All documentation template phrases

Purpose: a single reference for translations of recurring template phrases in the documentation
([../docs/](../docs/)). Consult it when translating new articles and when reviewing localizations —
the wording and markdown markup (`**...:**`, `### ...`, full-width `：` for zh) must match verbatim.

The **canonical** (most frequent) variant is given.

---

## 1. Section labels (bold lead before a link)

RichText puts the colon **inside** the bold markers (`**...:**`); zh uses a full-width colon `：`.

Use the **singular** form when a single item is referenced, the **plural** form for a list of two or
more. ko/zh have no number inflection — the same label serves both. The number must agree with the
English source (e.g. `**Related sample:**` → singular, `**Related samples:**` → plural).

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `**Related articles:**` | `**Связанные статьи:**` | `**Verwandte Artikel:**` | `**관련 문서:**` | `**相关文章：**` |
| `**Related sample:**` | `**Связанный пример:**` | `**Verwandtes Beispiel:**` | `**관련 샘플:**` | `**相关示例：**` |
| `**Related samples:**` | `**Связанные примеры:**` | `**Verwandte Beispiele:**` | `**관련 샘플:**` | `**相关示例：**` |

ko: `관련 샘플` is canonical for *sample(s)*; the variant `관련 예제` also occurs and should be
normalized to `관련 샘플`.

## 2. Section headings

Headings keep the original English slug as a `{#...}` anchor (e.g. `### Описание {#description}`) so
cross-page `#anchor` links stay valid — only the visible title is translated. The explicit `{#id}`
must match the English auto-slug **exactly**, including any leading dashes for headings that begin
with a list marker or inline code (e.g. `### - \`fire()\` → ...` keeps `{#--fire--...}`).

**API-page template:**

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `### Description` | `### Описание` | `### Beschreibung` | `### 설명` | `### 描述` |
| `### Usage` | `### Использование` | `### Verwendung` | `### 사용법` | `### 用法` |
| `### Example` | `### Пример` | `### Beispiel` | `### 예제` | `### 示例` |
| `### Parameters` | `### Параметры` | `### Parameter` | `### 파라미터` | `### 参数` |
| `### Returns` | `### Возвращает` | `### Rückgabewert` | `### 반환값` | `### 返回值` |
| `### Default config` | `### Конфигурация по умолчанию` | `### Standardkonfiguration` | `### 기본 설정` | `### 默认配置` |

- ko: `파라미터` is canonical; the variants `매개변수` and untranslated `Parameters` in **headings**
  should be normalized to `파라미터` (running prose that uses `매개변수` grammatically is left as is).
- ko: `예제` is canonical for *Example*; the variant `예시` should be normalized to `예제`.
- ko: `기본 설정` is canonical for *Default config*; the variant `기본 구성` should be normalized.
- ru: `Конфигурация по умолчанию` is canonical; the shorter `Конфиг по умолчанию` should be
  normalized.

**Changelog headings (`news/whats_new.md`, `news/migration.md`):**

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `### New functionality` | `### Новые возможности` | `### Neue Funktionalität` | `### 새로운 기능` | `### 新功能` |
| `### New API` | `### Новый API` | `### Neue API` | `### 새로운 API` | `### 新增 API` |
| `### Updated API` | `### Обновлённый API` | `### Aktualisierte API` | `### 업데이트된 API` | `### 更新的 API` |
| `### Fixes` | `### Исправления` | `### Fehlerbehebungen` | `### 수정 사항` | `### 修复` |
| `### Methods migration` | `### Миграция методов` | `### Migration der Methoden` | `### 메서드 마이그레이션` | `### 方法迁移` |
| `### Properties migration` | `### Миграция свойств` | `### Migration der Eigenschaften` | `### 프로퍼티 마이그레이션` | `### 属性迁移` |

`API` stays the Latin `API` in every changelog heading (never the Cyrillic `АПИ`).

**Navigation heading:**

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `## What's next` | `## Что дальше` | `## Wie geht es weiter?` | `## 다음 단계` | `## 下一步` |

## 3. Admonition block titles (`:::note`, `:::tip` …)

RichText sets these titles **explicitly in markdown** via the `:::type[Title]` syntax (e.g.
`:::note[Примечание]`), so the visible title comes from the `.md` file, not the theme defaults. The
block **type** (`:::note`, `:::tip`, …) is never translated — only the bracketed `[Title]` is.

The same wording is mirrored in the `theme.admonition.*` keys of `i18n/<locale>/code.json` (the
fallback for any block without an explicit title); the two must stay in sync. Canon: **capitalized
first letter**, with each type distinct (no `caution`/`warning` duplicates).

| Type | ru | de | ko | zh |
|---|---|---|---|---|
| `:::note` | `Примечание` | `Hinweis` | `참고` | `注意` |
| `:::tip` | `Совет` | `Tipp` | `팁` | `提示` |
| `:::info` | `Информация` | `Info` | `정보` | `信息` |
| `:::warning` | `Предупреждение` | `Warnung` | `경고` | `警告` |
| `:::caution` | `Осторожно` | `Vorsicht` | `주의` | `谨慎` |
| `:::important` | `Важно` | `Wichtig` | `중요` | `重要` |
| `:::danger` | `Опасно` | `Gefahr` | `위험` | `危险` |

## 4. Do not translate

Keep these terms in English (Latin script) across all locales.

**Product & modules:**
- `RichText` — the widget/product name (e.g. "DHTMLX RichText"). *The generic concept* — rich text —
  may be localized; only the product/widget name stays `RichText`.
- `DHTMLX`, `dhx` (the `dhx.*` code namespace)
- `Event Bus` — the module name. Keep the English spelling; German may hyphenate it inside a compound
  (`Event-Bus-Methoden`). Do not localize it (ru `шина событий`, zh `事件总线` → `Event Bus`).

**Frameworks & libraries:**
- `React`, `Vue`, `Svelte`, `Angular`

**Runtime, languages & tooling:**
- `Node.js`, `Vite`
- `JavaScript`, `TypeScript`
- `npm`, `yarn`, `CLI`

**Data formats:**
- `JSON`

**Services:**
- `GitHub`, `CDN`

**Other:**
- `API` — always the Latin `API`, never the Cyrillic transliteration `АПИ`.
- Code identifiers (method / config / event names, `dhx.*`) inside backticks are never translated.
