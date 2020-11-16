# vue-component-dom

Importe componentes no DOM do VueJS programaticamente, direto pelo JavaScript.

Import components into the VueJS DOM programmatically, directly through JavaScript.

## Instalação / Install

```
npm install --save @desco/vue-component-dom
```

## Uso / Use

```
<template>
    <div>
        <div ref="meuContainer></div>
    </div>
</template>
import vueComponentDom from '@desco/vue-component-dom'
import MeuComponente from "./MeuComponente

export default {
    [...]
    mounted: () {
        vueComponentDom(MeuComponente, this.$refs.meuContainer)
    }
    [...]
}
```