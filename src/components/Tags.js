import {get} from '../index'
import {remove} from '../index'

export default function Tags() {
    const allTags = get()
    const tagsField = document.createElement('div')
    const toggle = document.getElementById('toggle')

    tagsField.classList.add('tagsWrapper')

    allTags && allTags.map(item => {
        const tagBox = document.createElement('div')
        tagBox.classList.add('tagBox')
        const tag = document.createElement('span')
        const deleteBtn = document.createElement('button')
        tag.innerHTML = `${item.name}`
        toggle.hasAttribute('checked')
            ? deleteBtn.disabled = true
            : deleteBtn.disabled = false
        deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`
        deleteBtn.addEventListener('click', event => {
            remove(item.id)
        })
        tagBox.appendChild(tag)
        tagBox.appendChild(deleteBtn)
        tagsField.appendChild(tagBox)
    })

    return tagsField
}