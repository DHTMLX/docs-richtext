---
sidebar_label: Vue와의 통합
title: Vue와의 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Vue와의 통합 방법을 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# Vue와의 통합

:::tip[팁]
이 문서를 읽기 전에 [**Vue**](https://vuejs.org/)의 기본 개념과 패턴에 익숙해지시기 바랍니다. 지식을 복습하려면 [**Vue 3 문서**](https://vuejs.org/guide/introduction.html#getting-started)를 참조하십시오.
:::

DHTMLX RichText는 **Vue**와 호환됩니다. DHTMLX RichText를 **Vue 3**와 함께 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 해당 [**GitHub 예제**](https://github.com/DHTMLX/vue-richtext-demo)를 참조하십시오.

## 프로젝트 생성하기 {#creating-a-project}

:::info[정보]
새 프로젝트를 시작하기 전에 [**Node.js**](https://nodejs.org/en/)를 설치하십시오.
:::

**Vue** 프로젝트를 생성하려면 다음 명령어를 실행합니다:

~~~json
npm create vue@latest
~~~

이 명령어는 공식 **Vue** 프로젝트 스캐폴딩 도구인 `create-vue`를 설치하고 실행합니다. 자세한 내용은 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)을 확인하십시오.

프로젝트 이름을 **my-vue-richtext-app**으로 지정합니다.

### 의존성 설치 {#installation-of-dependencies}

앱 폴더로 이동합니다:

~~~json
cd my-vue-richtext-app
~~~

의존성을 설치하고 dev server를 시작합니다. 패키지 매니저를 사용합니다:

- [**yarn**](https://yarnpkg.com/)을 사용하는 경우 다음 명령어를 실행합니다:

~~~jsx
yarn
yarn start // 또는 yarn dev
~~~

- [**npm**](https://www.npmjs.com/)을 사용하는 경우 다음 명령어를 실행합니다:

~~~json
npm install
npm run dev
~~~

앱은 localhost에서 실행됩니다 (예: `http://localhost:3000`).

## RichText 생성하기 {#creating-richtext}

이제 DHTMLX RichText 소스 코드를 가져와야 합니다. 먼저 앱을 중지하고 RichText 패키지 설치를 진행합니다.

### 1단계: 패키지 설치 {#step-1-package-installation}

[**trial RichText 패키지**](/how_to_start/#installing-richtext-via-npm-or-yarn)를 다운로드하고 README 파일에 설명된 단계를 따르십시오. trial RichText는 30일 동안만 사용 가능합니다.

### 2단계: 컴포넌트 생성 {#step-2-component-creation}

이제 애플리케이션에 RichText를 추가하기 위한 Vue 컴포넌트를 생성해야 합니다. ***src/components/*** 폴더에 새 파일을 생성하고 ***Richtext.vue***로 이름을 지정합니다.

#### 소스 파일 가져오기 {#import-source-files}

***Richtext.vue*** 파일을 열고 RichText 소스 파일을 가져옵니다. 참고 사항:

- PRO 버전을 사용하고 로컬 폴더에서 RichText 패키지를 설치한 경우, 가져오기 경로는 다음과 같습니다:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- trial 버전의 RichText를 사용하는 경우, 다음 경로를 지정하십시오:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

이 튜토리얼에서는 RichText의 **trial** 버전을 구성하는 방법을 확인할 수 있습니다.

#### 컨테이너 설정 및 RichText 추가 {#setting-containers-and-adding-richtext}

페이지에 RichText를 표시하려면 RichText용 컨테이너를 생성하고 해당 생성자를 사용하여 컴포넌트를 초기화해야 합니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // RichText 컴포넌트 초기화
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // RichText 소멸
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### 스타일 추가 {#adding-styles}

RichText를 올바르게 표시하려면 프로젝트의 메인 CSS 파일에 RichText 및 컨테이너에 대한 중요한 스타일을 지정해야 합니다:

~~~css title="main.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#app { /* #app 루트 컨테이너를 사용하는지 확인하십시오 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 컨테이너 스타일 지정 */
.component_container {
    height: 100%;
    margin: 0 auto;
}

/* RichText 위젯 스타일 지정 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로드하기 {#loading-data}

RichText에 데이터를 추가하려면 데이터 세트를 제공해야 합니다. ***src/*** 폴더에 ***data.js*** 파일을 생성하고 데이터를 추가합니다:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

그런 다음 ***App.vue*** 파일을 열고 데이터를 가져와 내부 `data()` 메서드를 통해 초기화합니다. 이후 새로 생성된 `<RichText/>` 컴포넌트에 데이터를 **props**로 전달할 수 있습니다:

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

***Richtext.vue*** 파일로 이동하여 전달된 **props**를 RichText 구성 객체에 적용합니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // 다른 구성 속성들
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

Vue의 `mounted()` 메서드 내에서 [`setValue()`](api/methods/set-value.md) 메서드를 사용하여 RichText에 데이터를 로드할 수도 있습니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // 다른 구성 속성들
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

이제 RichText 컴포넌트를 사용할 준비가 되었습니다. 요소가 페이지에 추가되면 데이터와 함께 RichText가 초기화됩니다. 필요한 구성 설정도 제공할 수 있습니다. [RichText API 문서](api/overview/main_overview.md)를 방문하여 사용 가능한 전체 속성 목록을 확인하십시오.

#### 이벤트 처리 {#handling-events}

사용자가 RichText에서 어떤 동작을 수행하면 이벤트가 발생합니다. 이러한 이벤트를 사용하여 동작을 감지하고 원하는 코드를 실행할 수 있습니다. [전체 이벤트 목록](api/overview/events_overview.md)을 참조하십시오.

***Richtext.vue***를 열고 `mounted()` 메서드를 완성합니다:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.cont, {});

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

이후 앱을 시작하면 페이지에 데이터가 로드된 RichText를 확인할 수 있습니다.

<div className="img_border">
![RichText 초기화](../assets/trial_richtext.png)
</div>

이제 DHTMLX RichText를 Vue와 통합하는 방법을 알게 되었습니다. 요구 사항에 맞게 코드를 커스터마이즈할 수 있습니다. 최종 고급 예제는 [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo)에서 확인할 수 있습니다.
