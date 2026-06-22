---
sidebar_label: triggers
title: triggers 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 triggers 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# triggers

### 설명 {#description}

@short: 선택 사항입니다. 멘션, 태그 및 기타 토큰 삽입을 위한 드롭다운 트리거를 정의합니다

사용자가 설정된 문자(예: `@` 또는 `#`)를 입력하면 RichText가 미리 정의된 항목이 담긴 드롭다운을 엽니다. 사용자가 항목을 선택하면 RichText가 해당 항목을 편집 불가능한 토큰(`<a data-token="..." data-token-id="...">`)으로 문서에 삽입합니다.

### 사용법 {#usage}

~~~jsx {}
triggers?: Array<{
    trigger: string,
    data: Array<{ id?: string | number; label?: string; url?: string }>
        | ((query: string) =>
            Array<{ id?: string | number; label?: string; url?: string }>
            | Promise<Array<{ id?: string | number; label?: string; url?: string }>>),
    showTrigger?: boolean,
    action?: (item) => void
}>;
~~~

### 파라미터 {#parameters}

`triggers` 배열의 각 항목에는 다음 필드를 사용할 수 있습니다:

- `trigger` - (필수) 제안 드롭다운을 여는 문자입니다(예: `"@"`, `"#"`, `"/"`, `"$"`)
- `data` - (필수) 드롭다운의 데이터 소스로, 배열이나 동기 함수 또는 비동기 함수를 사용할 수 있습니다. [데이터 소스 형식](#data-source-forms)을 참고하세요
- `showTrigger` - (선택 사항) `true`(기본값)로 설정하면 삽입된 토큰에 트리거 문자가 유지됩니다(예: `@Alice`). `false`로 설정하면 `label`만 삽입됩니다(예: `Alice`)
- `action` - (선택 사항) 사용자가 항목을 선택할 때 호출되는 커스텀 callback입니다. 설정 시, RichText는 입력된 트리거 텍스트(트리거 문자와 쿼리)를 제거하고 토큰을 삽입하는 **대신** `action(item)`을 호출합니다. callback은 선택된 항목을 받으며 원하는 콘텐츠를 삽입하거나 커스텀 코드를 실행할 수 있습니다. `action` 파라미터는 `showTrigger`보다 우선하며, `action`이 설정된 경우 `showTrigger`는 효과가 없습니다. [커스텀 action](#custom-action)을 참고하세요

### 데이터 소스 형식 {#data-source-forms}

* **정적 배열** — RichText가 쿼리를 `label`과 대조하여 자동으로 배열을 필터링합니다(대소문자 구분 없음, `startsWith`):

~~~jsx {3-7}
new richtext.Richtext("#root", {
    triggers: [{
        trigger: "@",
        data: [
            { id: "alice", label: "Alice" },
            { id: "bob",   label: "Bob"   }
        ]
    }]
});
~~~

* **동기 함수** — RichText가 현재 `query` 문자열과 함께 함수를 호출합니다. 직접 필터링을 수행하고 일치하는 배열을 반환합니다:

~~~jsx {3-6}
new richtext.Richtext("#root", {
    triggers: [{
        trigger: "#",
        data: query => tags.filter(t =>
            t.label.toLowerCase().startsWith(query.toLowerCase())
        )
    }]
});
~~~

* **비동기 함수** — RichText가 현재 `query` 문자열과 함께 함수를 호출합니다. 일치하는 배열로 resolve되는 `Promise`를 반환합니다. 서버 측 검색에 유용합니다:

~~~jsx {3-8}
new richtext.Richtext("#root", {
    triggers: [{
        trigger: "+",
        data: async query => {
            const res = await fetch(`/api/users?q=${encodeURIComponent(query)}`);
            const users = await res.json();
            return users.map(u => ({ id: String(u.id), label: u.name, url: u.website }));
        }
    }]
});
~~~

### 제안 항목 필드 {#suggestion-item-fields}

`data`의 각 항목(또는 함수가 반환하는 각 항목)에는 다음 필드가 있습니다:

- `id` - (선택 사항) 삽입된 토큰에 저장되는 고유 식별자입니다. 생략하면 RichText가 자동으로 ID를 생성합니다
- `label` - (선택 사항) 드롭다운에 표시되고 문서에 삽입되는 텍스트입니다. 기본 렌더링에서만 필수입니다. 커스텀 [`triggerTemplate`](api/config/trigger-template.md)을 사용하면 다른 필드를 기반으로 항목을 렌더링할 수 있으므로(예: `template(({ data }) => data.id)`) `label`을 생략할 수 있습니다
- `url` - (선택 사항) 항목과 연결된 URL입니다. RichText가 이 URL을 삽입된 토큰의 `href` 속성으로 저장합니다. 토큰을 `Ctrl+Click`하면 링크가 열립니다

항목에는 `id`, `label`, `url` 외에도 커스텀 필드를 추가할 수 있습니다(예: 이모지를 위한 `code`, 아바타를 위한 `image` 및 `name`). 이러한 추가 필드는 [`triggerTemplate`](api/config/trigger-template.md) callback과 `action` callback에 전달됩니다.

### 렌더링된 토큰 {#rendered-token}

사용자가 드롭다운에서 항목을 선택하면 RichText가 편집 불가능한 토큰 요소를 문서에 삽입합니다:

~~~html {}
<a data-token="@" data-token-id="alice" href="mailto:alice@example.com">@Alice</a>
~~~

- `@` (`data-token="@"` 내) - 항목의 `trigger`
- `alice` (`data-token-id="alice"` 내) - 항목의 `id`
- `mailto:alice@example.com` (`href="mailto:alice@example.com"` 내) - 항목의 `url`
- `@Alice` - `trigger`와 `label`의 조합. `showTrigger: false`로 설정하면 `Alice`만 표시됩니다

CSS로 토큰을 타겟팅하려면 `data-token` 및 `data-token-id` 속성을 사용하세요. 예를 들어, 특정 사용자의 모든 멘션을 강조 표시할 수 있습니다:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
}
~~~

### 커스텀 action {#custom-action}

기본적으로 사용자가 항목을 선택하면 RichText가 해당 항목을 토큰으로 문서에 삽입합니다. `action` 파라미터를 설정하면 대신 커스텀 코드를 실행할 수 있습니다. RichText가 입력된 트리거 문자열(트리거 문자와 쿼리)을 제거하고, 선택된 항목과 함께 `action(item)` callback을 호출합니다. 토큰이 삽입되지 않으므로 문서에 추가할 내용을 직접 결정하거나 커스텀 코드를 실행할 수 있습니다. `action` 파라미터는 `showTrigger`보다 우선합니다. `action`이 설정된 경우 `showTrigger`는 무시됩니다.

#### 이모지 추가 {#add-emoji}

일반적인 사용 사례는 `:` 트리거로 이모지를 삽입하는 것으로, 각 항목에는 커스텀 `code` 필드가 포함됩니다. `action`과 [`triggerTemplate`](api/config/trigger-template.md)을 함께 사용하면 드롭다운에 label 대신 이모지 자체를 표시할 수 있습니다:

~~~jsx {8,12}
const { template, Richtext } = richtext;

const editor = new Richtext("#root", {
    triggers: [
        {
            trigger: ":",
            data: emoji, // [{ id: "apple", label: "apple", code: "1F34E" }, ...]
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // 드롭다운에 (레이블만이 아니라) 이모지 자체를 렌더링
    triggerTemplate: template(({ data }) => `${emojiFromCode(data.code)} ${data.label}`)
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}
~~~

#### 카테고리별 이모지 그룹화 {#group-emoji-by-categories}

`data` 파라미터가 함수인 경우 기본 `label` 매칭에 제한되지 않습니다. 직접 필터링을 수행하고 드롭다운에 카테고리 헤더를 유지할 수 있습니다. `label` 필드는 포함하고 `code`는 포함하지 않는 헤더 항목을 추가하세요. `data` 함수는 먼저 쿼리와 일치하는 이모지를 찾은 후, 일치하는 항목이 있는 카테고리의 헤더와 함께 이모지를 반환합니다:

~~~jsx {18-26,31-33,41}
const { template, Richtext } = richtext;

// 헤더 항목에는 `code` 필드가 없습니다. 이모지 항목에는 있습니다
const emoji = [
    { id: "$smileys", label: "Smileys",                 category: 1 }, // 카테고리
    { id: "grinning", label: "grinning", code: "1F600", category: 1 },
    { id: "smile",    label: "smile",    code: "1F604", category: 1 },
    { id: "$animals", label: "Animals",                 category: 2 }, // 카테고리
    { id: "dog",      label: "dog",      code: "1F436", category: 2 },
    { id: "cat",      label: "cat",      code: "1F431", category: 2 }
];

const editor = new Richtext("#root", {
    triggers: [
        {
            trigger: ":",
            data: query => {
                const matched = emoji.filter(item =>
                    item.code &&
                    item.label.toLowerCase().startsWith(query.toLowerCase().trim())
                );
                const categories = new Set(matched.map(item => item.category));
                // 일치하는 이모지와 여전히 일치하는 카테고리의 헤더를 유지
                return emoji.filter(item =>
                    item.code ? matched.includes(item) : categories.has(item.category)
                );
            },
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // 이모지 행은 일반적으로, 카테고리 헤더는 굵게 렌더링
    triggerTemplate: template(({ data }) =>
        data.code ? `${emojiFromCode(data.code)} ${data.label}` : `<b>${data.label}</b>`
    )
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}

// 헤더에는 `code`가 없습니다 — 헤더 선택은 무시하여 절대 삽입되지 않도록 합니다
editor.api.intercept("insert-token", ({ data }) => !!data.code);
~~~

#### 슬래시 스타일 명령 메뉴 추가 {#add-slash-style-command-menu}

`action`을 사용하면 슬래시 스타일 명령 메뉴(Notion이나 Slack의 `/`와 유사)를 구성할 수 있습니다. 각 항목의 `id`에 명령 이름을 저장하고, 커스텀 `config` 필드에 옵션을 저장한 후, callback에서 [`api.exec`](api/internal/exec.md)으로 실행합니다:

~~~jsx {13}
// 각 항목은 api.exec 액션 이름을 `id`에, 해당 매개변수를 `config`에 저장합니다
const commands = [
    { id: "set-text-style", label: "Heading 1",     config: { tag: "h1" } },
    { id: "insert-list",    label: "Bulleted list", config: { type: "bulleted" } },
    { id: "insert-line",    label: "Divider" } // 설정 없음 → `|| {}` 적용됨
];

const editor = new richtext.Richtext("#root", {
    triggers: [
        {
            trigger: "/",
            data: commands,
            action: item => editor.api.exec(item.id, item.config || {})
        }
    ]
});
~~~

### 예제 {#example}

다음 예제는 두 가지 트리거를 설정합니다. `@`는 멘션용(각 항목에 토큰의 `href`가 되는 `url` 포함)이고, `#`는 태그용(label만 포함)입니다:

~~~jsx {4,11}
new richtext.Richtext("#root", {
    triggers: [
        {
            trigger: "@",
            data: [
                { id: "alice", label: "Alice", url: "mailto:alice@example.com" },
                { id: "bob",   label: "Bob",   url: "mailto:bob@example.com"   }
            ]
        },
        {
            trigger: "#",
            data: [
                { id: "css",  label: "CSS"  },
                { id: "html", label: "HTML" }
            ]
        }
    ]
});
~~~

**변경 이력:** 이 속성은 v2.1에서 추가되었습니다

**관련 샘플:**

- [RichText. 멘션, 태그 및 비동기 조회](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)
- [RichText. 트리거별 커스텀 드롭다운 템플릿](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext)
- [RichText. 이모지 자동 완성](https://snippet.dhtmlx.com/g5z1d868?tag=richtext)
- [RichText. 슬래시 명령](https://snippet.dhtmlx.com/e0mrmyam?tag=richtext)
- [RichText. 멘션 찾기 및 강조 표시](https://snippet.dhtmlx.com/8y6zvzh2?tag=richtext)
- [RichText. 모든 멘션 강조 표시](https://snippet.dhtmlx.com/2rbo12jx?tag=richtext)

**관련 문서:** [멘션과 태그](guides/mentions_and_tags.md)
