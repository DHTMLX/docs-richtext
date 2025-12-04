---
sidebar_label: imageUploadUrl
title: imageUploadUrl 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 imageUploadUrl 구성에 대해 알아보실 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# imageUploadUrl

### 설명

@short: 선택 사항입니다. 이미지를 업로드할 때 사용될 URL을 정의합니다.

### 사용법

~~~jsx {}
imageUploadUrl?: string;
~~~

### 예제

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // 기타 구성 속성들
});
~~~

**변경 로그:** 이 속성은 버전 2.0에서 도입되었습니다.

**관련 문서:** [구성](guides/configuration.md)

**관련 샘플:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
