---
sidebar_label: Vue 통합
title: Vue 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Vue와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# Vue 통합

:::tip
기본적인 [Vue](https://vuejs.org/) 개념과 패턴에 익숙한지 확인하세요. 복습이 필요하다면 [Vue 3 문서](https://vuejs.org/guide/introduction.html#getting-started)를 참조하세요.
:::

DHTMLX RichText는 Vue와 함께 작동합니다. 전체 코드 예제는 [GitHub 데모](https://github.com/DHTMLX/vue-richtext-demo)를 참조하세요.

## 프로젝트 만들기

:::info
새 프로젝트를 만들기 전에 [Node.js](https://nodejs.org/en/) 를 설치하세요.
:::

공식 스캐폴딩 도구로 Vue 프로젝트를 생성합니다:

~~~bash
npm create vue@latest
~~~

이 명령은 `create-vue` 를 설치하고 실행합니다. 스캐폴더가 프로젝트 이름을 묻는 경우 *my-vue-richtext-app* 을 사용합니다. 자세한 내용은 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)을 참조하세요.

### 종속성 설치

앱 디렉토리로 전환합니다:

~~~bash
cd my-vue-richtext-app
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

애플리케이션에 RichText를 추가하기 위한 Vue 컴포넌트를 생성합니다. *src/components/* 디렉토리에 *Richtext.vue* 라는 새 파일을 생성합니다.

#### 소스 파일 가져오기

*Richtext.vue* 를 열고 RichText 소스 파일을 가져옵니다.

로컬 폴더에서 설치한 PRO 버전의 경우 다음을 사용합니다:

~~~html title="Richtext.vue"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

평가판 버전의 경우 다음을 사용합니다:

~~~html title="Richtext.vue"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

이 튜토리얼에서는 RichText의 평가판 버전을 사용합니다.

#### 컨테이너 설정 및 RichText 초기화

RichText에 대한 컨테이너 요소를 설정하고 `mounted()` 내에서 `Richtext` 생성자로 컴포넌트를 초기화합니다. RichText를 제거하려면 `unmounted()` 내에서 [`destructor()`](api/methods/destructor.md) 메서드를 호출합니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // RichText 컴포넌트 초기화
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // RichText 제거
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### 스타일 추가

프로젝트의 메인 CSS 파일에 RichText 및 컨테이너용 스타일을 추가합니다:

~~~css title="main.css"
/* 기본 페이지 스타일 */
html,
body,
#app { /* #app 루트 컨테이너 사용 */
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

*App.vue* 를 열고 데이터를 가져온 다음 `data()` 메서드를 통해 초기화합니다. 값을 prop으로 `<RichText/>` 컴포넌트에 전달합니다:

~~~html {} title="App.vue"
<script>
import RichText from "./components/Richtext.vue";
import { getData } from "./data";

export default {
    components: { RichText },
    data() {
        const { value } = getData();
        return { value };
    }
};
</script>

<template>
    <RichText :value="value" />
</template>
~~~

*Richtext.vue* 를 열고 prop 값을 RichText 설정에 전달합니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // 기타 설정 속성
        });
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

또는, `mounted()` 내에서 [`setValue()`](api/methods/set-value.md) 메서드를 호출하여 RichText에 데이터를 로드합니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // 기타 설정 속성
        });

        this.editor.setValue(this.value);
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

RichText 컴포넌트가 사용할 준비가 되었습니다. `<RichText/>` 요소가 마운트되면 Vue가 데이터와 함께 에디터를 렌더링합니다. 설정 옵션의 전체 목록은 [RichText API 개요](api/overview/main_overview.md)를 참조하세요.

#### 이벤트 처리

RichText는 사용자 작업 시 이벤트를 발생시킵니다. 사용자 입력에 반응하려면 [`api.on()`](api/internal/on.md) 메서드로 이벤트를 구독합니다. [전체 이벤트 목록](api/overview/events_overview.md)을 참조하세요.

*Richtext.vue* 를 열고 `mounted()` 훅을 업데이트합니다. 아래 예제는 모든 [`print`](api/events/print.md) 이벤트마다 메시지를 기록합니다:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {});

        this.editor.api.on("print", () => {
            console.log("The document is printing");
        });
    },

    unmounted() {
        this.editor.destructor();
    }
}
</script>

// ...
~~~

앱을 시작하여 페이지에서 데이터와 함께 렌더링되는 RichText를 확인하세요.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

이제 Vue에 동작하는 RichText 통합이 완료되었습니다. 필요에 맞게 코드를 사용자 정의하세요. 전체 예제는 [GitHub](https://github.com/DHTMLX/vue-richtext-demo)에서 확인할 수 있습니다.
