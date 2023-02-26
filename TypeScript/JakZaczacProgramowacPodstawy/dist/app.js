import { render } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/renderCategories.helper.js";
const taskNameInputElement = document.querySelector('#name');
const tasksContainerElement = document.querySelector('.tasks');
const btn = document.querySelector('.btn');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = ['general', 'work', 'gym', 'hobby'];
const tasks = [{ name: 'wyrzucić smieci', done: false, category: 'general' }, { name: 'pójść na siłkę', done: false, category: 'gym' }, { name: 'nakarmić kota', done: false, category: 'general' }];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    const addedName = taskNameInputElement.value;
    addTask({ name: addedName, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
addTask({ name: 'klata', category: 'gym', done: false });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
