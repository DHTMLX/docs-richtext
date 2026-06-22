---
sidebar_label: insert-token
title: insert-token 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-token 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# insert-token

### 설명 {#description}

@short: 사용자가 제안 항목을 선택하고 RichText가 해당 항목을 토큰으로 삽입한 후 발생합니다

`insert-token` 이벤트는 사용자가 트리거 드롭다운(멘션, 태그 또는 [`triggers`](api/config/triggers.md) 속성을 통해 설정한 사용자 정의 트리거)에서 항목을 선택한 후 발생합니다.

### 사용법 {#usage}

~~~jsx {}
"insert-token": ({
    data: {
        id?: string | number,
        label?: string,
        url?: string,
        // ...트리거의 데이터 소스에 있는 사용자 정의 필드
    },
    trigger: string,
    showTrigger?: boolean,
    action?: (item) => void
}) => boolean | void;
~~~

### 매개변수 {#parameters}

`insert-token` 이벤트의 callback은 다음 필드를 포함하는 객체를 받습니다.

- `data` - 선택된 제안 항목입니다. 항목의 `id`, `label`, `url`과 트리거의 `data` 소스에 추가한 사용자 정의 필드를 포함합니다
- `trigger` - 드롭다운을 열었던 트리거 문자입니다 (예: `"@"` 또는 `"#"`)
- `showTrigger` - `false`이면 RichText는 `label`만 삽입하고, 그렇지 않으면 위젯이 트리거 문자도 함께 표시합니다 (기본값)
- `action` - 일치하는 [트리거](api/config/triggers.md)에 정의된 사용자 정의 동작입니다. 설정된 경우 이 매개변수가 토큰 삽입보다 우선합니다. RichText는 입력된 텍스트(트리거 문자 및 쿼리)를 제거하고 토큰을 삽입하는 대신 `action(data)`를 호출합니다. 이 경우 `showTrigger` 매개변수는 효과가 없습니다

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하십시오.
:::

### 예제 {#example}

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "insert-token" 이벤트 구독
editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

**변경 이력:** 이 이벤트는 v2.1에서 추가되었습니다

**관련 샘플:** [RichText. 멘션, 태그 및 비동기 조회](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**관련 문서:** [멘션 및 태그](guides/mentions_and_tags.md)
