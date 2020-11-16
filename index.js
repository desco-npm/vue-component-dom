import Vue from 'vue'
import objectMap from 'object-map'

export default (_component, _container, _props = {}, _type = 'append') => {
    const ComponentExtend = Vue.extend(_component)
    const ComponentObj = new ComponentExtend()

    objectMap(_props, (v, k) => {
        ComponentObj[k] = v
    })

    const Component = ComponentObj.$mount().$el
    const subContainer = document.createElement('div')

    subContainer.style="display: inline-block;"

    subContainer.appendChild(Component)
        
    if (_type === 'prepend') {
        _container.insertBefore(subContainer, _container.childNodes[0])
    }
    else {
        _container.appendChild(subContainer)
    }
}