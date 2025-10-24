---
sidebar_label: Svelte와의 통합
title: Svelte와의 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Svelte와의 통합에 대해 알아보세요. 개발자 가이드 및 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 직접 시도해보며, DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# Svelte와의 통합

:::tip
이 가이드를 따라하기 전에 **Svelte**의 기본적인 내용을 알고 있으면 도움이 됩니다. 빠르게 복습하고 싶다면 [**Svelte 공식 문서**](https://svelte.dev/)를 참고하세요.
:::

DHTMLX RichText는 **Svelte**와 잘 호환됩니다. Svelte 앱에서 DHTMLX RichText를 사용하는 방법에 대한 실용적인 코드 예제도 제공됩니다. 더 많은 정보와 예제는 [**GitHub 예제**](https://github.com/DHTMLX/svelte-richtext-demo)에서 확인할 수 있습니다.

## 프로젝트 생성

:::info
새 프로젝트를 시작하기 전에 [**Vite**](https://vite.dev/) (선택사항)와 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

**Svelte** 프로젝트를 설정하는 방법에는 여러 가지가 있습니다:

- [**SvelteKit**](https://kit.svelte.dev/) 사용

또는

- **Svelte와 Vite** 조합 사용 (SvelteKit 없이):

~~~json
npm create vite@latest
~~~

더 자세한 내용은 [관련 문서](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)를 참고하세요.

### 의존성 설치

프로젝트 이름을 **my-svelte-richtext-app**으로 하고, 해당 디렉터리로 이동합니다:

~~~json
cd my-svelte-richtext-app
~~~

이제 의존성을 설치하고, 선택한 패키지 매니저를 사용하여 개발 서버를 시작하세요:

- [**yarn**](https://yarnpkg.com/) 사용 시:

~~~json
yarn
yarn start
~~~

- [**npm**](https://www.npmjs.com/) 사용 시:

~~~json
npm install
npm run dev
~~~

앱이 로컬에서 실행되며 (예: `http://localhost:3000`), 브라우저에서 확인할 수 있습니다.

## RichText 생성

DHTMLX RichText 소스 코드를 준비해야 합니다. 계속 진행하기 전에 앱을 중지하고 RichText 패키지를 설치하세요.

### 1단계. 패키지 설치

[**평가판 RichText 패키지**](how_to_start.md#installing-richtext-via-npm-or-yarn)를 다운로드하고, README 파일의 안내에 따라 설치하세요. 평가판은 30일간 동작합니다.

### 2단계. 컴포넌트 생성

이제 Svelte용 RichText 컴포넌트를 만들 차례입니다. ***src/*** 디렉터리에 ***Richtext.svelte*** 파일을 새로 만듭니다.

#### 소스 파일 임포트

***Richtext.svelte***에서 RichText 소스 파일을 임포트합니다. 사용하는 버전에 따라 임포트 경로가 다릅니다:

- PRO 버전을 로컬에 설치한 경우:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- 평가판 버전 사용 시:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

이 가이드에서는 **평가판** 버전을 예시로 사용합니다.

#### 컨테이너 설정 및 RichText 추가

앱에 RichText를 표시하려면 컨테이너를 설정하고, 컴포넌트를 생성자와 함께 초기화해야 합니다:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // RichText용 컨테이너
let editor;

onMount(() => {
    // RichText 컴포넌트 초기화
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // RichText 정리
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### 데이터 로딩

RichText에 데이터를 불러오기 위해 데이터셋이 필요합니다. ***src/*** 디렉터리에 ***data.js*** 파일을 만들고, 샘플 데이터를 추가하세요:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

이제 ***App.svelte***에서 데이터를 임포트하고, `<RichText/>` 컴포넌트에 prop으로 전달하세요:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

이제 ***Richtext.svelte***를 수정하여 전달받은 **props**를 RichText 설정에 사용하세요:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        value
        // 기타 설정 옵션
    })
});

onDestroy(() => {
    editor.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

또는, Svelte의 `onMount()`에서 [`setValue()`](api/methods/set-value.md) 메서드를 사용하여 데이터를 로드할 수도 있습니다:

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
        // 기타 설정 옵션
    })

    editor.setValue(value);
});

onDestroy(() => {
    editor.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

이 시점에서 RichText 컴포넌트는 설정이 완료되었으며, 페이지에 추가하면 데이터와 함께 로드됩니다. 필요에 따라 설정을 조정할 수 있습니다. 더 많은 옵션은 [RichText API 문서](api/overview/main_overview.md)를 참고하세요.

#### 이벤트 처리

RichText는 특정 동작이 발생할 때 이벤트를 발생시키며, 이를 감지하여 원하는 코드를 실행할 수 있습니다. [이벤트 전체 목록](api/overview/events_overview.md)을 참고하세요.

이벤트를 처리하려면 `onMount()` 메서드에서 ***Richtext.svelte***를 다음과 같이 업데이트하세요:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {})

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

### 3단계. 앱에 RichText 추가

앱에서 컴포넌트를 사용하려면 **App.svelte**를 열고, 기본 내용을 다음과 같이 교체하세요:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";
    
    const { value } = getData();
</script>

<RichText value={value}  />
~~~

이제 앱을 실행하면, RichText가 데이터와 함께 페이지에 표시됩니다.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

이렇게 하면 DHTMLX RichText와 Svelte의 통합이 완료됩니다. 필요에 따라 코드를 자유롭게 수정해보세요. 더 발전된 예제가 궁금하다면 [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo)에서 확인할 수 있습니다.
