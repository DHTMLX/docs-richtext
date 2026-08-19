---
sidebar_label: DHTMLX MCP 서버
title: 편집 및 콘텐츠 형식을 위한 DHTMLX RichText MCP 통합
description: MCP 서버는 AI 어시스턴트에게 DHTMLX RichText의 스타일 기본값, 인코더, 트리거 구성에 대한 검증된 최신 문서를 제공합니다.
---

# DHTMLX RichText MCP 서버: 형식, 툴바, 트리거 {#dhtmlx-richtext-mcp-server-formats-toolbar-and-triggers}

DHTMLX RichText는 다양한 구성 옵션을 갖춘 경량 WYSIWYG 에디터입니다. [HTML, 일반 텍스트, Markdown](/#supported-formats) 간에 콘텐츠를 변환하고, [스타일 기본값](guides/configuration.md#configure-default-styles)을 통해 블록 유형별로 타이포그래피를 설정하며, 애플리케이션에 필요한 컨트롤에 맞춰 완전히 커스터마이즈할 수 있는 [툴바](guides/configuration.md#toolbar)를 구성할 수 있습니다. 이를 제대로 활용하려면 암기한 추측이 아니라 각 요소를 현재 설정에 맞춰야 합니다: 스타일 기본값에는 현재 CSS, 특정 형식에는 알맞은 인코더, 커스텀 툴바 버튼에는 유효한 컨트롤 유형이 필요합니다.

DHTMLX MCP 서버는 AI 어시스턴트가 이 모든 내용을 최신 상태로 파악하도록 지원합니다. [멘션 및 트리거 설정](guides/mentions_and_tags.md), [이미지 업로드 계약](guides/working_with_server.md), [DOCX/PDF 내보내기 플로우](api/events/export.md)는 모두 최신 문서에서 가져오므로, 생성된 코드가 실제로 오늘날 에디터가 동작하는 방식과 일치합니다.

### MCP 엔드포인트 {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note[노트]
DHTMLX MCP 서버는 DHTMLX RichText뿐만 아니라 모든 주요 DHTMLX 제품을 다룹니다. 어떤 DHTMLX 컴포넌트로 개발하든 동일한 엔드포인트와 구성 방법을 사용할 수 있습니다.
:::

## MCP 서버의 RichText 지원 범위 {#richtext-coverage-in-the-mcp-server}

툴바 버튼부터 트리거 콜백까지, MCP 서버의 인덱스는 DHTMLX RichText 전체 영역을 다룹니다. 자주 사용되는 조회 항목은 다음과 같습니다:

- [메서드](api/overview/methods_overview.md), [이벤트](api/overview/events_overview.md), [속성](api/overview/properties_overview.md)의 최신 API를 조회하며, 여기에는 [Event Bus](api/overview/event_bus_methods_overview.md) 및 [상태](api/overview/state_methods_overview.md) 메서드도 포함됩니다.
- 컨테이너와 특정 에디터에 필요한 [`toolbar`](api/config/toolbar.md), [`menubar`](api/config/menubar.md)를 포함해 바로 실행 가능한 [초기화](guides/initialization.md) 코드를 생성합니다.
- [`layoutMode`](api/config/layout-mode.md)를 사용해 [클래식 및 문서 레이아웃 모드](guides/configuration.md#layout-modes) 간을 전환하고, 내장 버튼이나 `button`/`richselect`/`colorpicker` 컨트롤 객체로 커스텀 [툴바](guides/configuration.md#toolbar)를 구성합니다.
- 알맞은 인코더와 함께 [`setValue()`](api/methods/set-value.md), [`getValue()`](api/methods/get-value.md), [`insertValue()`](api/methods/insert-value.md)를 통해 HTML, 일반 텍스트, Markdown으로 콘텐츠를 읽거나 씁니다.
- 블록 유형별로 [기본 스타일](guides/configuration.md#configure-default-styles)을 설정하고, 이에 맞는 CSS 규칙을 함께 적용합니다.
- RichText가 요구하는 정확한 요청/응답 계약에 맞춰 [이미지 업로드 엔드포인트](guides/working_with_server.md)를 연결하거나, 인라인 base64 폴백을 사용합니다.
- `triggers` 속성을 통해 [@mentions, #tags, 슬래시 명령](guides/mentions_and_tags.md)을 구성하며, 정적·동기·비동기 데이터 소스를 모두 지원합니다.
- DOCX/PDF 출력을 위한 [`export`](api/events/export.md) 및 [`import`](api/events/import.md)를 처리하고, 인터페이스를 [로컬라이제이션](guides/localization.md)하거나 `--wx-color-primary`를 비롯한 CSS 변수로 [스타일링](guides/stylization.md)합니다.
- RichText를 [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md), [Svelte](guides/integration_with_svelte.md)와 통합합니다.

## MCP 서버가 RichText 프롬프트를 처리하는 방식 {#how-the-mcp-server-handles-a-richtext-prompt}

DHTMLX MCP 서버로 전달된 RichText 요청은 Model Context Protocol(MCP)을 거쳐 Retrieval-Augmented Generation(RAG) 파이프라인을 통과한 후, 두 워크플로 중 하나로 이어집니다: 일치하는 참조 페이지를 반환하는 *Search*, 또는 그 페이지를 읽고 직접 답변하는 *Inference*입니다. RichText 요청은 어시스턴트 입장에서 흔히 두 가지 측면을 가집니다. 하나는 최신 문서가 필요한 부분이고, 다른 하나는 도움 없이도 이미 처리할 줄 아는 부분입니다. 어시스턴트는 MCP에 도달하기 전에 먼저 이 둘을 분리합니다.

다음 프롬프트가 이 과정을 거치는 경로를 살펴보겠습니다: *"이미지가 문서에 삽입되기 전에 회사의 자산 서버로 업로드되도록 DHTMLX RichText를 설정하려면 어떻게 해야 하나요?"*

1. 어시스턴트는 요청에서 문서가 필요한 부분을 추출합니다: RichText가 이미지 업로드 엔드포인트에 기대하는 요청/응답 계약입니다.
2. 서버는 이를 서버 연동 문서와 연결합니다.
3. 이 요청은 실제로 동작하는 코드가 필요하므로 *Search*가 처리합니다(반대로 `insertValue()`가 선택 영역을 대체하는지 커서 위치에 삽입하는지와 같은 더 좁은 질문이라면 *Inference*로 전달됩니다).
4. *Search*는 최신 RichText 문서로 구축된 벡터 인덱스에서 일치하는 페이지를 가져옵니다.
5. 해당 페이지는 컨텍스트로 어시스턴트에게 반환됩니다.
6. 어시스턴트는 해당 계약에 맞춰 업로드 핸들러를 연결한 다음, 자체 지식을 바탕으로 회사 자산 서버에 대한 실제 요청을 채워 넣습니다.

이러한 과정 덕분에 RichText의 서식 및 툴바 제안은 에디터의 현재 동작 방식과 계속 일치합니다.

## AI 도구를 MCP 서버에 연결하기 {#attaching-your-ai-tool-to-the-mcp-server}

MCP 엔드포인트 등록은 도구마다 한 번만 하면 되며, CLI 명령이든 JSON 구성 항목이든 방식과 관계없이 모두 동일한 주소를 가리킵니다:

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

아래에서 널리 사용되는 도구별 설정 단계를 하나씩 다룹니다.

### Claude Code {#claude-code}

:::info[정보]
Claude Code의 모든 MCP 설정 세부사항은 [공식 문서](https://code.claude.com/docs/en/mcp)에 있습니다.
:::

명령줄에서 서버를 등록하려면 다음을 실행합니다:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

직접 구성하고 싶다면 다음 내용을 `.mcp.json`에 추가하십시오:

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

:::info[정보]
Cursor의 [공식 문서](https://cursor.com/en-US/docs/mcp)에서 전체 MCP 구성 안내를 확인할 수 있습니다.
:::

서버를 추가하는 단계:

1. Settings를 엽니다 (Mac에서는 `Cmd+Shift+J`, Windows/Linux에서는 `Ctrl+Shift+J`)
2. **Tools & MCP**로 이동합니다
3. **Add Custom MCP**를 클릭합니다
4. 다음 구성을 붙여넣습니다:

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

:::info[정보]
Antigravity에서 전체 MCP 통합 단계를 확인하려면 [공식 문서](https://antigravity.google/docs/mcp)를 참고하십시오.
:::

DHTMLX MCP 서버를 Google Antigravity에 연결하려면 다음 단계를 완료합니다:

1. 명령 팔레트를 엽니다
2. "mcp add"를 입력합니다
3. "HTTP"를 선택합니다
4. 다음 값을 입력합니다:
- 이름:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info[정보]
Gemini CLI에서 Antigravity CLI로 마이그레이션할 때 변경되는 모든 사항은 [관련 가이드](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)에서 확인할 수 있습니다.
:::

DHTMLX MCP 서버를 Antigravity CLI에 연결하려면 다음 위치 중 한 곳에 `mcp_config.json`을 생성합니다:

- 전역: `~/.gemini/config/mcp_config.json`
- 작업 영역: `.agents/mcp_config.json`

다음 구성을 추가합니다:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

그런 다음 터미널에서 `agy`를 실행합니다.

### ChatGPT {#chatgpt}

:::info[정보]
ChatGPT MCP 커넥터 설정의 모든 단계는 [공식 문서](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)에 상세히 설명되어 있습니다.
:::

커넥터를 구성하는 단계:

1. **Settings** → **Apps & Connectors**로 이동합니다
2. **Advanced settings**를 클릭합니다
3. **Developer mode**를 활성화합니다
4. **Apps & Connectors**로 돌아가 "Create"를 클릭합니다
5. 커넥터 세부정보를 입력합니다:
- 이름:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. **Create**를 클릭합니다

커넥터를 생성하면 ChatGPT가 대화 중에 MCP 서버에서 문서를 가져옵니다.

:::info[정보]
집중적인 코딩 워크플로에는 MCP를 지원하는 다른 도구가 더 적합할 수 있습니다.
:::

### 기타 도구 {#other-tools}

다른 AI 코딩 도구를 사용하는 경우 설정에서 "Model Context Protocol" 또는 "Context Sources"와 같은 라벨을 찾아 해당 위치에 커스텀 소스로 `https://docs.dhtmlx.com/mcp`를 추가하십시오.

## MCP 서버 개인정보 보호 기본사항 {#mcp-server-privacy-basics}

MCP 서버는 오직 원격으로만 실행됩니다: 로컬 실행 없음, 로컬 파일 접근 없음, 개인정보 저장 없음.

기록된 쿼리는 서비스 디버깅 및 개선이라는 단 하나의 목적으로만 사용됩니다.

더 엄격한 개인정보 보호가 필요한 경우 DHTMLX는 쿼리 로깅을 끈 상용 배포 버전을 제공합니다. `info@dhtmlx.com`으로 문의하십시오.

## RichText로 개발할 때 활용할 수 있는 프롬프트 아이디어 {#prompt-ideas-for-building-with-richtext}

RichText 프롬프트는 대개 레이아웃, 콘텐츠 형식, 이미지 처리, 멘션 및 트리거라는 네 가지 영역 중 하나에 속합니다. 아래 그룹은 이 기준으로 구성되어 있으니, 하나를 선택해 자신의 설정에 맞게 조정하십시오.

**레이아웃 및 툴바**

~~~
How do I switch DHTMLX RichText from full-width editing to a document-style layout? Use the docs.
~~~
~~~
How do I build a custom toolbar with only bold, italic, and one custom button?
~~~
~~~
How do I make the built-in layout mode switcher show up as a dropdown instead of a plain button?
~~~

**콘텐츠 및 형식**

~~~
How do I load Markdown content into DHTMLX RichText?
~~~
~~~
How do I read DHTMLX RichText's content out as plain text instead of HTML?
~~~
~~~
How do I insert an HTML link at the current cursor position without replacing the rest of the content?
~~~

**이미지 및 서버 동기화**

~~~
How do I make DHTMLX RichText upload images to my own server instead of embedding them inline?
~~~
~~~
What JSON response does DHTMLX RichText expect from an image upload endpoint?
~~~

**멘션, 태그, 트리거**

~~~
How do I set up an @ mention trigger that looks up users from a server? Use the docs.
~~~
~~~
How do I make a slash command insert just the item text, without the leading slash showing up?
~~~

## RichText 프롬프트를 효과적으로 만드는 방법 {#what-makes-a-richtext-prompt-work}

- **정확한 메서드를 명시하십시오.** `setValue()`는 전체 문서를 교체하고, `insertValue()`는 커서 위치에 삽입하거나 선택 영역을 대체하며, `getValue()`는 콘텐츠를 읽어옵니다. "콘텐츠 업데이트"처럼 모호하게 말하지 말고 정확히 어떤 메서드를 의미하는지 명시하십시오.
- **작업 중인 형식을 명시하십시오.** `setValue()`, `getValue()`, `insertValue()`는 기본값으로 HTML을 사용하지만 `richtext.text.fromText`와 `richtext.markdown.fromMarkdown` 인코더도 받습니다. 어시스턴트가 HTML을 가정하는 대신 올바른 인코더를 전달하도록 형식을 명시하십시오.
- **툴바 컨트롤 유형을 구분하십시오.** `richselect`와 `colorpicker`는 특정 미리 정의된 컨트롤 ID에서만 작동하며, 커스텀 버튼은 `type: "button"`만 지원합니다. 어시스턴트가 무시되는 ID에 유형을 잘못 매칭하지 않도록 추가하려는 유형을 명시하십시오.
- **"Use the docs"를 추가하십시오.** 이미지 업로드 응답 형식이나 `defaultStyles`/CSS 조합에 대해 물을 때 사용하십시오. 둘 다 정확한 JSON 필드, 수동 CSS 규칙 같은 구체적인 계약이 있어 잘못 기억하기 쉽습니다.
