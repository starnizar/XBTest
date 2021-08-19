import TagForm from './components/TagForm'
import Tags from './components/Tags'
import './styles/styles.css'

export function set(tagNames) {
    const allTags = JSON.parse(localStorage.getItem('tags')) || []

    const newTags = tagNames.map((item, index) => {
        return {
            name: item,
            id: (Date.now()+index).toString()
        }
    })

    const updatedTagsArr = [...allTags, ...newTags]
    localStorage.setItem('tags', JSON.stringify(updatedTagsArr))
    updateTagField()
}

export function get() {
    return JSON.parse(localStorage.getItem('tags')) || []
}

export function remove(id) {
    const allTags = JSON.parse(localStorage.getItem('tags'))
    localStorage.setItem('tags', JSON.stringify(allTags.filter(tag => tag.id !== id)))
    updateTagField()
}

function updateTagField() {
    const app = document.querySelector('.app')
    if (document.querySelector('.tagsWrapper')) {
        document.querySelector('.tagsWrapper').remove()
    }
    app.appendChild(Tags())
}

function setToggle() {
    const light = document.querySelector('.lightOff')
    if (toggle.hasAttribute('checked')) {
        toggle.removeAttribute('checked')
        light.classList.toggle('lightOn')
        App()
    } else {
        toggle.setAttribute('checked', 'checked')
        light.classList.toggle('lightOn')
        App()
    }
}

const toggle = document.getElementById('toggle')
toggle.addEventListener('change', event => {
    event.preventDefault()
    setToggle()
})

function App () {
    document.querySelector('.app') ? document.querySelector('.app').remove() : null
    const root = document.getElementById('root')
    const app = document.createElement('div')
    app.classList.add('app')
    root.appendChild(app)
    app.appendChild(TagForm())
    app.appendChild(Tags())
}

App()