---
sidebar_label: api.detach()
title: detach 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 detach 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# api.detach()

### 설명 {#description}

@short: 이벤트 핸들러를 제거/분리할 수 있습니다

### 사용법 {#usage}

~~~jsx {}
api.detach( tag: string ): void;
~~~

### 매개변수 {#parameters}

- `tag` - (필수) 액션 태그의 이름

### 이벤트 {#events}

:::info[정보]
RichText 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### 예제 {#example}

~~~jsx {6-8,10}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**변경 이력:** 이 메서드는 v2.0에서 업데이트되었습니다. `name` 및 `context` 매개변수가 제거되었습니다
