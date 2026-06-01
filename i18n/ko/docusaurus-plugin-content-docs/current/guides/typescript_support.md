---
sidebar_label: TypeScript 지원
title: TypeScript 지원
description: DHTMLX JavaScript RichText 라이브러리 문서에서 TypeScript 사용에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# TypeScript 지원

v2.0부터 DHTMLX RichText는 추가 설정 없이 사용할 수 있는 내장 TypeScript 정의를 제공합니다.

:::note
<a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet 도구</a>에서 에디터를 사용해 보세요.
:::

## TypeScript의 장점

DHTMLX RichText와 함께 TypeScript를 사용하면 다음과 같은 이점이 있습니다:

- 타입 안전성 — 컴파일러가 빌드 시간에 설정 속성 및 메서드 인수의 잘못된 사용을 잡아냅니다
- 자동 완성 — 입력하는 동안 IDE가 유효한 속성 이름, 메서드 시그니처 및 값 유형을 제안합니다
- 자체 문서화 API — 설정 객체 및 메서드에 대한 타입 주석은 인라인 문서 역할도 합니다

## TypeScript에서 RichText 초기화

아래 예제는 번들된 타입 정의로부터 자동 완성을 사용하여 TypeScript에서 RichText를 초기화합니다:

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## API 타입 참조

모든 설정 속성의 TypeScript 시그니처는 [속성 개요](api/overview/properties_overview.md)를 참조하세요. 메서드 시그니처는 [메서드 개요](api/overview/methods_overview.md)를 참조하세요.
