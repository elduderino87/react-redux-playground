import delay from './delay';
import * as _ from 'lodash';

const notifications = [
  {
    id: 1,
    type: 'selfPlacement',
    title: 'Self Placement #1',
    content: 'You have been assigned self placmeent #1 at Fitzroy medical center',
    isNew: false
  },
  {
    id: 2,
    type: 'selfPlacement',
    title: 'Self Placement #2',
    content: 'You have been assigned self placmeent #2 at Fitzroy medical center',
    isNew: true
  },
  {
    id: 3,
    type: 'selfPlacement',
    title: 'Self Placement #3',
    content: 'You have been assigned self placmeent #3 at Fitzroy medical center',
    isNew: true
  },
  {
    id: 4,
    type: 'selfPlacement',
    title: 'Self Placement #4',
    content: 'You have been assigned self placmeent #4 at Fitzroy medical center',
    isNew: false
  }
]
class NotificationApi {
  static getAllNotifications () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], notifications))
      }, delay)
    })
  }

  static saveNotification (notification) {
    notification = Object.assign({}, notification)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        notification.id = _.max(notifications.map(n => n.id)) + 1
        notifications.push(notification)
        resolve(notification)
      }, delay)
    })
  }
}

export default NotificationApi
