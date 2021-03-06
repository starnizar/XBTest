import {set} from '../index'

export default function () {
    const tagForm = document.createElement('form')
    const input = document.createElement('input')
    const addBtn = document.createElement('button')
    const toggle = document.getElementById('toggle')

    input.setAttribute('placeholder', 'Enter tag name')
    addBtn.innerHTML = 'Add'
    if(toggle.hasAttribute('checked')){
        addBtn.disabled = true
        input.setAttribute('readonly', 'readonly')
    } else {
        addBtn.disabled = false
        input.removeAttribute('readonly')
    }
    tagForm.appendChild(input)
    tagForm.appendChild(addBtn)

    addBtn.addEventListener('click', event => {
        event.preventDefault()
        if (!input.value.trim()) {
            return alert('Tag name field is empty')
        }
        const tagsArr = input.value.trim().split(' ')
        set(tagsArr)
        input.value = ''
    })
    return tagForm
}