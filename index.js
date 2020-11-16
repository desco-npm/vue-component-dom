import Vue from 'vue'

export default (_component, _container, _type = 'append') => {
    const ComponentExtend = Vue.extend(_component)
    const ComponentObj = new ComponentExtend()
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