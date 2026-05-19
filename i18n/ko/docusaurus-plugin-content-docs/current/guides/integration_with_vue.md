---
sidebar_label: Vue와의 통합
title: Vue와의 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Vue와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText 30일 무료 평가판을 다운로드할 수도 있습니다.
---

# Vue와의 통합

:::tip
[Vue](https://vuejs.org/)의 기본 개념과 패턴을 숙지하고 있는지 확인하세요. 복습이 필요하다면 [Vue 3 문서](https://vuejs.org/guide/introduction.html#getting-started)를 참고하세요.
:::

DHTMLX RichText는 Vue와 함께 사용할 수 있습니다. 전체 코드 예제는 [GitHub 데모](https://github.com/DHTMLX/vue-richtext-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 생성하기 전에 [Node.js](https://nodejs.org/en/)를 설치하세요.
:::

공식 스캐폴딩 도구를 사용하여 Vue 프로젝트를 생성합니다:

~~~bash
npm create vue@latest
~~~

이 명령은 `create-vue`를 설치하고 실행합니다. 스캐폴더에서 프로젝트 이름을 입력하라는 메시지가 표시되면 *my-vue-richtext-app*을 입력하세요. 자세한 내용은 [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)를 참고하세요.

### 의존성 설치

앱 디렉토리로 이동합니다:

~~~bash
cd my-vue-richtext-app
~~~

패키지 매니저를 사용하여 의존성을 설치하고 개발 서버를 시작합니다.

[yarn](https://yarnpkg.com/)을 사용하는 경우 실행합니다:

~~~bash
yarn
yarn dev
~~~

[npm](https://www.npmjs.com/)을 사용하는 경우 실행합니다:

~~~bash
npm install
npm run dev
~~~

앱이 localhost에서 실행됩니다(예: `http://localhost:3000`).

## RichText 생성

앱을 중지하고 RichText 패키지를 설치합니다.

### 1단계. 패키지 설치

[평가판 RichText 패키지](/how_to_start/#installing-richtext-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 평가판 라이선스는 30일간 유효합니다.

### 2단계. 컴포넌트 생성

애플리케이션에 RichText를 추가할 Vue 컴포넌트를 생성합니다. *src/components/* 디렉토리에 *Richtext.vue*라는 새 파일을 만드세요.

#### 소스 파일 임포트

*Richtext.vue*를 열고 RichText 소스 파일을 임포트합니다.

로컬 폴더에 설치된 PRO 버전의 경우 다음을 사용합니다:

~~~html title="Richtext.vue"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

평가판의 경우 다음을 사용합니다:

~~~html title="Richtext.vue"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

이 튜토리얼에서는 RichText 평가판을 사용합니다.

#### 컨테이너 설정 및 RichText 초기화

RichText의 컨테이너 요소를 설정하고 `mounted()` 내에서 `Richtext` 생성자로 컴포넌트를 초기화합니다. `unmounted()` 내에서 [`destructor()`](api/methods/destructor.md) 메서드를 호출하여 RichText를 제거합니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // initialize the RichText component
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // destroy RichText
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

프로젝트의 메인 CSS 파일에 RichText와 해당 컨테이너의 스타일을 추가합니다:

~~~css title="main.css"
/* base page styles */
html,
body,
#app { /* use the #app root container */
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

*App.vue*를 열고 데이터를 임포트한 후 `data()` 메서드를 통해 초기화합니다. 값을 `<RichText/>` 컴포넌트에 prop으로 전달합니다:

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

*Richtext.vue*를 열고 prop 값을 RichText 설정에 전달합니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // other configuration properties
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

또는 `mounted()` 내에서 [`setValue()`](api/methods/set-value.md) 메서드를 호출하여 RichText에 데이터를 로드할 수 있습니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // other configuration properties
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

RichText 컴포넌트를 사용할 준비가 되었습니다. `<RichText/>` 요소가 마운트될 때 Vue가 데이터와 함께 에디터를 렌더링합니다. 전체 설정 옵션 목록은 [RichText API 개요](api/overview/main_overview.md)를 참고하세요.

#### 이벤트 처리

RichText는 사용자 동작 시 이벤트를 발생시킵니다. [`api.on()`](api/internal/on.md) 메서드를 사용하여 이벤트를 구독하고 사용자 입력에 반응할 수 있습니다. [전체 이벤트 목록](api/overview/events_overview.md)을 참고하세요.

*Richtext.vue*를 열고 `mounted()` 훅을 업데이트합니다. 아래 예제는 [`print`](api/events/print.md) 이벤트가 발생할 때마다 메시지를 로그에 기록합니다:

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

앱을 시작하면 페이지에 데이터와 함께 RichText가 렌더링되는 것을 확인할 수 있습니다.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

이제 Vue에서 RichText 통합이 완료되었습니다. 필요에 맞게 코드를 커스터마이징하세요. 전체 예제는 [GitHub](https://github.com/DHTMLX/vue-richtext-demo)에서 확인할 수 있습니다.
