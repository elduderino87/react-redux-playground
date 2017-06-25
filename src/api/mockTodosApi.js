import delay from './delay'
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
}
]
class TodosApi {
  static getAllTodos () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos))
      }, delay)
    })
  }
}
export default TodosApi
