---
sidebar_label: api.exec()
title: exec 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 exec 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# api.exec()

### 설명 {#description}

@short: 내부 이벤트를 트리거할 수 있습니다

### 사용법 {#usage}

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 매개변수 {#parameters}

- `event` - (필수) 발생시킬 이벤트
- `config` - (필수) 매개변수가 포함된 구성 객체 (발생시킬 이벤트를 참조하세요)

### 이벤트 {#events}

:::info[정보]
RichText 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// 텍스트 폰트 크기 설정
editor.api.exec("set-font-size", {
    fontSize: "16px"
});
~~~

**변경 이력:** 이 메서드는 v2.0에서 추가되었습니다
