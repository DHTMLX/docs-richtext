---
sidebar_label: toggle-list
title: toggle-list 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toggle-list 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# toggle-list

### 설명 {#description}

@short: 사용자가 선택한 블록에서 목록을 토글할 때 발생합니다

`toggle-list` 이벤트는 상황 인식 기반의 글머리 기호/번호 목록 버튼을 구동합니다. 새 목록을 삽입하는 대신, 이벤트는 현재 선택 영역을 검사하여 다음 네 가지 동작 중 하나를 자동으로 선택합니다:

| 모드           | 발생 조건                                                        | 결과                                                                 |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Wrap**       | 선택 영역이 단락으로만 이루어진 경우                             | 각 단락이 하나의 새 목록 컨테이너 안에서 목록 항목으로 변환됩니다   |
| **Unwrap**     | 선택된 모든 항목이 클릭한 유형의 목록에 속한 경우               | 항목이 단락으로 되돌아가고 목록 컨테이너가 제거됩니다               |
| **Convert**    | 선택된 모든 항목이 목록에 속하지만, 목록 중 하나 이상이 다른 유형인 경우 | 목록 유형이 제자리에서 전환됩니다 (글머리 기호 ↔ 번호)        |
| **Mixed**      | 선택 영역에 단락과 목록 항목이 혼합된 경우                       | 단락이 항목으로 변환되어 해당 유형의 하나의 목록으로 합쳐집니다     |

### 사용법 {#usage}

~~~jsx {}
"toggle-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### 파라미터 {#parameters}

`toggle-list` 이벤트의 callback은 다음 파라미터를 포함한 객체를 받을 수 있습니다:

- `type` - 토글할 목록의 유형입니다. 다음 값을 지정할 수 있습니다:
    - `"bulleted"` - 글머리 기호(비순서) 목록
    - `"numbered"` - 번호(순서) 목록

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하세요.
:::

### 예제 {#example}

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "toggle-list" 이벤트 구독
editor.api.on("toggle-list", (obj) => {
    console.log(obj.type);
    console.log("The list was toggled");
});
~~~

**변경 로그:** 이 이벤트는 v2.0.6에서 추가되었습니다
