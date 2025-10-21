# GrapesJS Alpine.js Plugin: spec.md

## 1. Vibe & Philosophy

This plugin is all about **declarative magic**. We're bringing the simplicity and power of Alpine.js directly into the GrapesJS canvas. The goal is to empower users to build highly interactive, modern web experiences visually, without needing to write code post-export. It should feel intuitive for a GrapesJS user and natural for an Alpine.js developer.

The vibe is: **"What you see is what you get... and what you interact with."**

## 2. Core Objective

To seamlessly integrate Alpine.js directives into GrapesJS components by leveraging the Trait Manager. This allows for the visual construction and management of interactive states, event listeners, and data binding directly on the canvas. The final exported code should be clean, functional, and require only the inclusion of the Alpine.js library to work.

## 3. Key Features & Functionality

### 3.1. Alpine.js Trait Provider

-   **Mechanism**: A new `Alpine.js` category will be added to the Trait Manager for all components.
-   **Goal**: Provide a user-friendly interface for adding and modifying Alpine.js directives.

### 3.2. Directive Implementation (Traits)

The following Alpine.js directives will be implemented as traits. The `name` of the trait will correspond to the directive. When a trait is updated, the plugin will update the corresponding attribute on the component's HTML element.

| Trait ID | Trait Type | Description | Renders as Attribute |
| --- | --- | --- | --- |
| `x-data` | `textarea` | Defines the component's reactive data scope as a JavaScript object. | `x-data="{...}"` |
| `x-show` | `text` | Toggles the visibility of the element. Expects a boolean expression. | `x-show="..."` |
| `x-if` | `text` | Conditionally adds or removes the element from the DOM. `template` tag will be auto-wrapped on export. | `<template x-if="..."><div>...</div></template>` |
| `x-on:click` | `text` | Executes a script on mouse click. | `x-on:click="..."` |
| `x-on:submit` | `text` | Executes a script on form submission. | `x-on:submit="..."` |
| `x-bind:class`| `text` | Dynamically applies classes based on data. | `x-bind:class="..."` |
| `x-bind:disabled`| `text` | Dynamically disables an element. | `x-bind:disabled="..."` |
| `x-model` | `text` | Binds the value of an input element to a data property (two-way binding). | `x-model="..."` |
| `x-for` | `textarea`| Creates new DOM elements by iterating through an array. `template` tag required. | `<template x-for="...">...</template>` |
| `x-text` | `text` | Sets the `innerText` of an element to the value of a data property. | `x-text="..."` |
| `x-html` | `textarea`| Sets the `innerHTML` of an element to the value of a data property. | `x-html="..."` |
| `x-transition` | `checkbox` | Applies a simple fade/scale transition on `x-show`. | `x-transition` |

**Developer Notes:**

*   For `x-on:*` and `x-bind:*`, we should consider a more dynamic way to add different events or attributes, perhaps a button to "Add x-on listener" or "Add x-bind attribute" which then prompts for the specific event/attribute name. For this initial spec, we will start with the most common ones.
*   The `x-if` and `x-for` directives require wrapping the component in a `<template>` tag. The plugin should handle this logic on code export. The user will still interact with the component directly on the canvas.

### 3.3. Canvas Interaction & Live Preview

-   **Objective**: To have the Alpine.js interactivity work within the GrapesJS canvas.
-   **Mechanism**: The plugin will ensure that the Alpine.js script is loaded into the canvas iframe. This provides a live preview of the interactive elements.
-   **Requirement**: The GrapesJS configuration must allow for script injection into the canvas. A plugin option to specify the Alpine.js CDN URL is a must.

```javascript
// Example of plugin options
plugins: [
  ['grapesjs-alpine-plugin', {
    alpineCdn: 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js'
  }]
]
```

## 4. Pre-built Interactive Blocks

To accelerate user workflow, the plugin will introduce a new "Alpine.js" block category with pre-configured components.

### 4.1. Accordion Block

-   **Structure**:
    -   A root `div` with `x-data="{ open: false }"`.
    -   A button with `x-on:click="open = !open"` to act as the header.
    -   A content `div` with `x-show="open"` and `x-transition`.
-   **Traits**: The `x-data` will be pre-filled. The user can then customize the content.

### 4.2. Tabs Block

-   **Structure**:
    -   A root `div` with `x-data="{ tab: 'tab1' }"`.
    -   A tab navigation container with buttons, each having `x-on:click="tab = 'tabN'"` and `:class="{ 'active': tab === 'tabN' }"`.
    -   Tab content panels, each with `x-show="tab === 'tabN'"`.
-   **Customization**: Users can add or remove tabs and edit their corresponding content panels.

### 4.3. Modal Block

-   **Structure**:
    -   A trigger button.
    -   A modal container with `x-show` bound to a data property (e.g., `showModal`).
    -   A modal overlay with `x-on:click="showModal = false"`.
    -   The modal content area with a close button (`x-on:click="showModal = false"`).
-   **Initial State**: The `x-data` will be on a parent element, e.g., `x-data="{ showModal: false }"`. The trigger button will have `x-on:click="showModal = true"`.

## 5. Code Export

-   **Goal**: The exported HTML should be clean, readable, and fully functional.
-   **Process**: The plugin will ensure that all the `x-` attributes defined in the traits are correctly rendered in the final HTML.
-   **`x-if` / `x-for` Handling**: As mentioned, the plugin's export process will automatically wrap components with these traits in `<template>` tags.
-   **Dependencies**: The user is responsible for including the Alpine.js script in their final webpage. The documentation should make this clear.

## 6. Future Vibe (Potential Enhancements)

-   **Dynamic Trait Generation**: Allow users to add any `x-on:[event]` or `x-bind:[attribute]` they need.
-   **AlpineJS-aware Components**: Create custom GrapesJS component types that have a deeper understanding of their Alpine.js context, perhaps offering more specific traits.
-   **Integration with Alpine's `$store`**: A way to manage global state within the editor.
-   **Intellisense/Autocomplete** in trait fields for Alpine.js magic properties (`$el`, `$event`, etc.).