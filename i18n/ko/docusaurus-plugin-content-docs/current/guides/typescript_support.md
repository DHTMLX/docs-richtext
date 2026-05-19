---
sidebar_label: TypeScript support
title: TypeScript support
description: DHTMLX JavaScript RichText 라이브러리와 TypeScript를 함께 사용하는 방법을 문서에서 확인하세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판을 다운로드할 수도 있습니다.
---

# TypeScript support

v2.0부터 DHTMLX RichText에는 별도의 설정 없이 바로 사용할 수 있는 TypeScript 정의가 기본으로 포함되어 있습니다.

:::note
<a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a>에서 에디터를 직접 사용해 보세요.
:::

## TypeScript의 장점

DHTMLX RichText와 TypeScript를 함께 사용하면 다음과 같은 이점을 얻을 수 있습니다:

- 타입 안정성 — 컴파일러가 빌드 시점에 구성 속성과 메서드 인수의 잘못된 사용을 감지합니다
- 자동 완성 — IDE가 입력하는 동안 유효한 속성 이름, 메서드 시그니처, 값 타입을 제안합니다
- 자체 문서화 API — 구성 객체와 메서드의 타입 어노테이션이 인라인 문서 역할을 합니다

## TypeScript에서 RichText 초기화

아래 예제는 번들된 타입 정의를 통해 자동 완성을 지원하는 TypeScript에서 RichText를 초기화하는 방법을 보여줍니다:

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## API 타입 레퍼런스

모든 구성 속성의 TypeScript 시그니처는 [Properties overview](api/overview/properties_overview.md)를 참조하세요. 메서드 시그니처는 [Methods overview](api/overview/methods_overview.md)를 참조하세요.
