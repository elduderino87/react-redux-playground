import React from 'react'
import PropTypes from 'prop-types'
import './NotificationsView.scss'

export const NotificationsView = ({ notifications, onAdd }) => (
  <div>
    <h4>Notifications View!</h4>
    <ul>
      { notifications.map(notif =>
        <li key={notif.id}>
          <div>
            {notif.title} {notif.isNew ? <i>New</i> : ''}
          </div>
        </li>
      )}
    </ul>
    <input
      type='submit'
      value={'Add Notification'}
      className='btn btn-primary'
      onClick={onAdd} />
  </div>
)
NotificationsView.propTypes = {
  notifications: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
}

export default NotificationsView
