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
        vueComponentDom(MeuComponente, this.$refs.meuContainer, { ...props, }, { type: 'append', class: 'my-class', })
    },
    [...]
}
```

*Parâmetros/Parameters*

| N. | Nome/Name | Tipo/Type | Obrigatório/Required | Padrão/Default | Descrição | Description |
|---|---|---|---|---|---|---|
| 1 | component | Object | Sim/Yes | - | O componente a ser inserido | The component to be inserted |
| 2 | container | Node | Sim/Yes | - | O nó do DOM onde inserir o componente | The DOM node where to insert the component |
| 3 | props | JSON | Não | {} | JSON contendo os valores a serem passados para as propriedades do componente. | JSON containing the values to be passed to the component properties. |
| 4 | params | Object | Não/No | { type: 'append', class: '', } | Parâmetros extras, veja na tabela abaixo | Extra parameters, see the table below |

*Parâmetros Extras/Extra Parameters*

| Nome/Name  | Tipo/Type | Obrigatório/Required | Padrão/Default | Descrição | Description |
|---|---|---|---|---|---|
position | String | Não/No | 'append' | Se o componente será inserido no início ou final do container. Aceita: `append` e `prepend` | Whether the component will be inserted at the beginning or end of the container. Accepts: append and prepend |
class | String | Não/No | '' | Classe personalizável para o container do componente inserido | Customizable class for the inserted component container |

> Note que `props` deve usar os nomes das propriedades e não dos atributos.

> Note that `props` must use the names of properties and not attributes.