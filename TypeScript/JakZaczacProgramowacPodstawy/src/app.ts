import { Task, Category } from "./types/types.js"
import { render } from "./helpers/render-tasks.helper.js"
import { renderCategories } from "./helpers/renderCategories.helper.js"

const taskNameInputElement:HTMLInputElement = document.querySelector('#name') 
const tasksContainerElement: HTMLElement= document.querySelector('.tasks')
const btn: HTMLButtonElement = document.querySelector('.btn')
const categoriesContainerElement: HTMLElement = document.querySelector('.categories')

let selectedCategory: Category;

const categories: Category[] = ['general', 'work', 'gym', 'hobby']

const tasks: Task[] = [{name : 'wyrzucić smieci', done: false, category: 'general'}, {name: 'pójść na siłkę', done: false, category: 'gym'}, {name: 'nakarmić kota', done: false, category: 'general'}]


const addTask = (task: Task) => {
    tasks.push(task)
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const selectedRadioElement:HTMLInputElement = document.querySelector("input[type='radio']:checked")

    const addedName: string = taskNameInputElement.value
    addTask({name:addedName, done: false, category: selectedCategory})
    render(tasks, tasksContainerElement)
})

addTask({name: 'klata', category: 'gym', done: false})

renderCategories(categories, categoriesContainerElement, updateSelectedCategory)
render(tasks, tasksContainerElement) 