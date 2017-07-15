import delay from './delay'
import * as _ from 'lodash'

const todos = [{
  id: 1,
  type: 'PlacementSurvey',
  title: 'Placement Survey #1',
  content: 'You have been assigned self placmeent #1 at Fitzroy medical center',
  isNew: false
},
{
  id: 2,
  type: 'PlacementSurvey',
  title: 'Placement Survey #2',
  content: 'You have been assigned self placmeent #2 at Fitzroy medical center',
  isNew: false
},
{
  id: 3,
  type: 'PlacementSurvey',
  title: 'Placement Survey #3',
  content: 'You have been assigned self placmeent #3 at Fitzroy medical center',
  isNew: true
}]

class TodosApi {
  static generateId = () => {
    return _.max(todos.map(n => n.id)) + 1
  }
  static getAllTodos () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos))
      }, delay)
    })
  }
  static saveTodo (todo) {
    todo = Object.assign({}, todo)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTodoTitleLength = 5
        if (todo.title.length < minTodoTitleLength) {
          reject(new Error(`Title must be at least ${minTodoTitleLength} characters.`))
        }

        if (todo.id) {
          const existingTodoIndex = todos.findIndex(a => a.id === todo.id)
          todos.splice(existingTodoIndex, 1, todo)
        } else {
          todo.id = this.generateId(todo)
          todos.push(todo)
        }

        resolve(todo)
      }, delay)
    })
  }
}
export default TodosApi
