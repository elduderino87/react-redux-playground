import React from 'react'
import PropTypes from 'prop-types'
import './NotificationsView.scss'

export const NotificationsView = ({ notifications, addNotification }) => (
  <div className='notification'>
    <h4>Notifications View!</h4>
    <ul className='notification__list'>
      { notifications.map(notif =>
        <li key={notif.id} className='notification__list-item'>
          <div>
            {notif.title} {notif.isNew ? <i>New</i> : ''}
          </div>
        </li>
      )}
    </ul>
    <input
      type='submit'
      value={'Add Notification'}
      className='btn primary add-notification'
      onClick={addNotification} />
  </div>
)
NotificationsView.propTypes = {
  notifications: PropTypes.array.isRequired,
  addNotification: PropTypes.func.isRequired,
}

export default NotificationsView
