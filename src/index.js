import TagForm from './components/TagForm'
import Tags from './components/Tags'
import './styles/styles.css'

export function set(tagName) {
    const allTags = JSON.parse(localStorage.getItem('tags')) || []
    const newTag = [...allTags, {name: tagName, id: Date.now().toString()}]
    localStorage.setItem('tags', JSON.stringify(newTag))
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

const toggle = document.getElementById('toggle')
toggle.addEventListener('change', event => {
    event.preventDefault()
    if (toggle.hasAttribute('checked')) {
        toggle.removeAttribute('checked')
        App()
    } else {
        toggle.setAttribute('checked', 'checked')
        App()
    }
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