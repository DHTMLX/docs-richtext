---
sidebar_label: Svelte 통합
title: Svelte 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Svelte와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# Svelte 통합

:::tip
기본적인 [Svelte](https://svelte.dev/) 개념과 패턴에 익숙한지 확인하세요. 복습이 필요하다면 [Svelte 문서](https://svelte.dev/docs)를 참조하세요.
:::

DHTMLX RichText는 Svelte와 함께 작동합니다. 전체 코드 예제는 [GitHub 데모](https://github.com/DHTMLX/svelte-richtext-demo)를 참조하세요.

## 프로젝트 만들기

:::info
새 프로젝트를 만들기 전에 [Node.js](https://nodejs.org/en/) 및 (선택 사항) [Vite](https://vite.dev/) 를 설치하세요.
:::

이 튜토리얼에서는 Vite 기반의 Svelte 프로젝트를 사용합니다. SvelteKit 및 기타 옵션은 [Svelte 프로젝트 가이드](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)를 참조하세요.

새로운 Vite 프로젝트를 시작합니다:

~~~bash
npm create vite@latest
~~~

### 종속성 설치

스캐폴더가 프로젝트 이름을 묻는 경우 *my-svelte-richtext-app* 을 사용합니다. 그런 다음 새 디렉토리로 전환합니다:

~~~bash
cd my-svelte-richtext-app
~~~

패키지 관리자로 종속성을 설치하고 개발 서버를 시작합니다.

[yarn](https://yarnpkg.com/) 의 경우 다음을 실행합니다:

~~~bash
yarn
yarn dev
~~~

[npm](https://www.npmjs.com/) 의 경우 다음을 실행합니다:

~~~bash
npm install
npm run dev
~~~

앱은 localhost에서 실행됩니다(예: `http://localhost:3000`).

## RichText 만들기

앱을 중지하고 RichText 패키지를 설치합니다.

### 1단계. 패키지 설치

[평가판 RichText 패키지](/how_to_start/#installing-richtext-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따릅니다. 평가판 라이선스는 30일간 유효합니다.

### 2단계. 컴포넌트 생성

애플리케이션에 RichText를 추가하기 위한 Svelte 컴포넌트를 생성합니다. *src/* 디렉토리에 *Richtext.svelte* 라는 새 파일을 생성합니다.

#### 소스 파일 가져오기

*Richtext.svelte* 를 열고 RichText 소스 파일을 가져옵니다.

로컬 폴더에서 설치한 PRO 버전의 경우 다음을 사용합니다:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

평가판 버전의 경우 다음을 사용합니다:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

이 튜토리얼에서는 RichText의 평가판 버전을 사용합니다.

#### 컨테이너 설정 및 RichText 초기화

RichText에 대한 컨테이너 요소를 설정하고 `onMount()` 내에서 컴포넌트를 초기화합니다. RichText를 제거하려면 `onDestroy()` 내에서 [`destructor()`](api/methods/destructor.md) 메서드를 호출합니다:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // RichText 용 컨테이너
let editor;

onMount(() => {
    // RichText 컴포넌트 초기화
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // RichText 제거
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### 스타일 추가

프로젝트의 메인 CSS 파일(예: *src/app.css*)에 RichText 및 컨테이너용 스타일을 추가합니다:

~~~css title="app.css"
/* 기본 페이지 스타일 */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 컨테이너 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText 위젯 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로드

RichText에 데이터를 제공합니다. *src/* 디렉토리에 *data.js* 파일을 생성합니다:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

*App.svelte* 를 열고 데이터를 가져오며 값을 prop으로 `<RichText/>` 컴포넌트에 전달합니다:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

*Richtext.svelte* 를 열고 prop 값을 RichText 설정에 전달합니다:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value;

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        value
        // 기타 설정 속성
    });
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

또는, `onMount()` 내에서 [`setValue()`](api/methods/set-value.md) 메서드를 호출하여 RichText에 데이터를 로드합니다:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value;

let richtext_container; 
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        // 기타 설정 속성
    });

    editor.setValue(value);
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

RichText 컴포넌트가 사용할 준비가 되었습니다. `<RichText/>` 요소가 마운트되면 Svelte가 데이터와 함께 에디터를 렌더링합니다. 설정 옵션의 전체 목록은 [RichText API 개요](api/overview/main_overview.md)를 참조하세요.

#### 이벤트 처리

RichText는 사용자 작업 시 이벤트를 발생시킵니다. 사용자 입력에 반응하려면 [`api.on()`](api/internal/on.md) 메서드로 이벤트를 구독합니다. [전체 이벤트 목록](api/overview/events_overview.md)을 참조하세요.

*Richtext.svelte* 를 열고 `onMount()` 훅을 업데이트합니다. 아래 예제는 모든 [`print`](api/events/print.md) 이벤트마다 메시지를 기록합니다:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {});

    editor.api.on("print", () => {
        console.log("The document is printing");
    });
});

onDestroy(() => {
    editor?.destructor();
});
</script>

// ...
~~~

앱을 시작하여 페이지에서 데이터와 함께 렌더링되는 RichText를 확인하세요.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

이제 Svelte에 동작하는 RichText 통합이 완료되었습니다. 필요에 맞게 코드를 사용자 정의하세요. 전체 예제는 [GitHub](https://github.com/DHTMLX/svelte-richtext-demo)에서 확인할 수 있습니다.
