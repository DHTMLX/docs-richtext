---
sidebar_label: TypeScript 지원
title: TypeScript 지원
description: DHTMLX JavaScript RichText 라이브러리에서 TypeScript를 사용하는 방법을 문서에서 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드하실 수 있습니다.
---

# TypeScript 지원 {#typescript-support}

v2.0부터 DHTMLX RichText에는 별도의 설정 없이 바로 사용할 수 있는 TypeScript 정의가 내장되어 있습니다.

:::note[참고]
<a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a>에서 에디터를 직접 체험해 보세요.
:::

## TypeScript의 장점 {#advantages-of-typescript}

DHTMLX RichText와 TypeScript를 함께 사용하면 다음과 같은 이점이 있습니다.

- 타입 안전성 — 컴파일러가 빌드 시점에 설정 프로퍼티와 메서드 인수의 잘못된 사용을 감지합니다
- 자동 완성 — IDE가 입력 중에 유효한 프로퍼티 이름, 메서드 시그니처, 값 유형을 제안합니다
- 자기 문서화 API — 설정 객체와 메서드의 타입 어노테이션이 인라인 문서 역할을 합니다

## TypeScript에서 RichText 초기화하기 {#initialize-richtext-in-typescript}

아래 예제는 번들된 타입 정의의 자동 완성 기능을 활용하여 TypeScript에서 RichText를 초기화하는 방법을 보여 줍니다.

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## API 타입 참조하기 {#reference-api-types}

모든 설정 프로퍼티의 TypeScript 시그니처는 [프로퍼티 개요](api/overview/properties_overview.md)를 참조하세요. 메서드 시그니처는 [메서드 개요](api/overview/methods_overview.md)를 참조하세요.
