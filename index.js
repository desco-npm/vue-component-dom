import Vue from 'vue'
import objectMap from 'object-map'

export default (_component, _container, _props = {}, _params = {}) => {
    const type = _params.type || 'append'
    const personalClass = _params.class || ''

    const ComponentExtend = Vue.extend(_component)
    const ComponentObj = new ComponentExtend()

    objectMap(_props, (v, k) => {
        ComponentObj[k] = v
    })

    const Component = ComponentObj.$mount().$el
    const subContainer = document.createElement('div')

    subContainer.style="display: inline-block;"
    subContainer.classList.add('desco-vue-component-dom')

    if (personalClass) {
        subContainer.classList.add(personalClass)
    }

    subContainer.appendChild(Component)
        
    if (type === 'prepend') {
        _container.insertBefore(subContainer, _container.childNodes[0])
    }
    else {
        _container.appendChild(subContainer)
    }
}