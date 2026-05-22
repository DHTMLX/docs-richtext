---
sidebar_label: api.exec()
title: exec 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 exec 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 무료 30일 평가판을 다운로드하세요.
---

# api.exec()

### Description

@short: 내부 이벤트를 트리거할 수 있습니다

### Usage

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameters

- `event` - (필수) 실행할 이벤트
- `config` - (필수) 파라미터가 포함된 config 객체 (실행할 이벤트를 참조하세요)

### Events

:::info
RichText 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// set the text font size
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Change log:** The method was added in v2.0
