import delay from './delay'

const todoTypes = [
    { name: 'PlacementSurvey', id:1 },
    { name: 'SelfSelectablePlacement', id:2 },
    { name:'SelfPlacement', id:3 }
]

class TodoTypesApi {
  static getAllTodoTypes () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todoTypes))
      }, delay)
    })
  }
}

export default TodoTypesApi
