---
sidebar_label: Svelte와의 통합
title: Svelte와의 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Svelte와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# Svelte와의 통합

:::tip
[Svelte](https://svelte.dev/)의 기본 개념과 패턴을 숙지하고 있는지 확인하세요. 복습이 필요하다면 [Svelte 문서](https://svelte.dev/docs)를 참고하세요.
:::

DHTMLX RichText는 Svelte와 함께 동작합니다. 전체 코드 예제는 [GitHub 데모](https://github.com/DHTMLX/svelte-richtext-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 생성하기 전에 [Node.js](https://nodejs.org/en/)와 (선택 사항으로) [Vite](https://vite.dev/)를 설치하세요.
:::

이 튜토리얼은 Vite 기반 Svelte 프로젝트를 사용합니다. SvelteKit 및 다른 옵션에 대해서는 [Svelte 프로젝트 가이드](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)를 참고하세요.

새 Vite 프로젝트를 시작합니다:

~~~bash
npm create vite@latest
~~~

### 의존성 설치

스캐폴더에서 프로젝트 이름을 묻는 메시지가 표시되면 *my-svelte-richtext-app*을 사용하세요. 그런 다음 새 디렉토리로 이동합니다:

~~~bash
cd my-svelte-richtext-app
~~~

패키지 매니저를 사용하여 의존성을 설치하고 개발 서버를 시작합니다.

[yarn](https://yarnpkg.com/)을 사용하는 경우 다음을 실행합니다:

~~~bash
yarn
yarn dev
~~~

[npm](https://www.npmjs.com/)을 사용하는 경우 다음을 실행합니다:

~~~bash
npm install
npm run dev
~~~

앱이 localhost에서 실행됩니다(예: `http://localhost:3000`).

## RichText 생성

앱을 중지하고 RichText 패키지를 설치합니다.

### Step 1. 패키지 설치

[RichText 평가판 패키지](/how_to_start/#installing-richtext-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 평가판 라이선스는 30일 동안 유효합니다.

### Step 2. 컴포넌트 생성

애플리케이션에 RichText를 추가하기 위한 Svelte 컴포넌트를 생성합니다. *src/* 디렉토리에 *Richtext.svelte*라는 새 파일을 만드세요.

#### 소스 파일 가져오기

*Richtext.svelte*를 열고 RichText 소스 파일을 가져옵니다.

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

이 튜토리얼은 RichText 평가판을 사용합니다.

#### 컨테이너 설정 및 RichText 초기화

RichText를 위한 컨테이너 요소를 설정하고 `onMount()` 내부에서 컴포넌트를 초기화합니다. RichText를 제거하려면 `onDestroy()` 내부에서 [`destructor()`](api/methods/destructor.md) 메서드를 호출합니다:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // container for RichText
let editor;

onMount(() => {
    // initialize the RichText component
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // destroy RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### 스타일 추가

프로젝트의 메인 CSS 파일(예: *src/app.css*)에 RichText와 해당 컨테이너의 스타일을 추가합니다:

~~~css title="app.css"
/* base page styles */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText widget */
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

*App.svelte*를 열고, 데이터를 가져온 후 `<RichText/>` 컴포넌트에 prop으로 값을 전달합니다:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

*Richtext.svelte*를 열고 prop 값을 RichText 설정에 전달합니다:

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
        // other configuration properties
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

또는 `onMount()` 내부에서 [`setValue()`](api/methods/set-value.md) 메서드를 호출하여 RichText에 데이터를 로드할 수 있습니다:

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
        // other configuration properties
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

RichText 컴포넌트가 사용 준비를 마쳤습니다. `<RichText/>` 요소가 마운트될 때 Svelte가 데이터와 함께 에디터를 렌더링합니다. 전체 설정 옵션 목록은 [RichText API 개요](api/overview/main_overview.md)를 참고하세요.

#### 이벤트 처리

RichText는 사용자 동작 시 이벤트를 발생시킵니다. [`api.on()`](api/internal/on.md) 메서드로 이벤트를 구독하여 사용자 입력에 반응할 수 있습니다. [전체 이벤트 목록](api/overview/events_overview.md)을 참고하세요.

*Richtext.svelte*를 열고 `onMount()` hook을 업데이트합니다. 아래 예제는 [`print`](api/events/print.md) 이벤트가 발생할 때마다 메시지를 로그에 기록합니다:

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

앱을 시작하면 페이지에 데이터와 함께 RichText가 렌더링됩니다.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

이제 Svelte에서 RichText 통합이 완성되었습니다. 필요에 맞게 코드를 커스터마이즈하세요. 전체 예제는 [GitHub](https://github.com/DHTMLX/svelte-richtext-demo)에서 확인할 수 있습니다.
