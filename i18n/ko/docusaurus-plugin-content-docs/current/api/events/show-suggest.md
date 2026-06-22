---
sidebar_label: show-suggest
title: show-suggest 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 show-suggest 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# show-suggest

### 설명 {#description}

@short: 구성된 트리거에 대한 제안 드롭다운이 열릴 때 발생합니다

`show-suggest` 이벤트는 RichText가 현재 트리거에 대해 비어 있지 않은 항목 목록을 확인한 후, 드롭다운이 열리기 직전에 발생합니다. 이 이벤트를 가로채어 항목을 조정하거나, 드롭다운의 위치를 변경하거나, 드롭다운을 취소할 수 있습니다.

### 사용법 {#usage}

~~~jsx {}
"show-suggest": ({
    trigger: string,
    query: string,
    items: Array<{
        id?: string | number,
        label?: string,
        url?: string,
        // ...트리거의 데이터 소스에서 가져온 모든 커스텀 필드
    }>,
    pos: DOMRect
}) => boolean | void;
~~~

### 매개변수 {#parameters}

`show-suggest` 이벤트의 callback은 다음 필드를 포함하는 객체를 수신합니다.

- `trigger` - 드롭다운을 열었던 트리거 문자
- `query` - 트리거 문자 뒤에 입력된 텍스트 (`items` 필터링에 사용됨)
- `items` - 확인(및 이미 필터링)된 제안 항목 목록. 각 항목은 [제안 항목 형태](api/config/triggers.md#suggestion-item-fields)를 따릅니다: 선택적 `id`, `label`, `url` 및 [`triggerTemplate`](api/config/trigger-template.md)에서 사용되는 모든 커스텀 필드(예: `image` 또는 `name`)
- `pos` - 커서 위치를 나타내는 `DOMRect`; 드롭다운을 화면에 배치하는 데 사용됩니다

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하세요.
:::

### 예제 {#example}

~~~jsx {6-11}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
    // 기타 구성 속성
});
// 드롭다운이 열리기 전에 제안 목록을 재정의합니다
editor.api.intercept("show-suggest", (state) => {
    if (state.trigger === "@" && state.query === "") {
        return { ...state, items: state.items.slice(0, 5) };
    }
});
~~~

**변경 이력:** 이 이벤트는 v2.1에서 추가되었습니다

**관련 샘플:** [RichText. 멘션, 태그 및 비동기 조회](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**관련 문서:** [멘션 및 태그](guides/mentions_and_tags.md)
