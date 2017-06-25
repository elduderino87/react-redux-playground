import * as types from './actionTypes';
import notificationsApi from '../api/mockNotificationApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadNotificationsSuccess(notifications) {
  return { type: types.LOAD_NOTIFICATIONS_SUCCESS, notifications};
}

export function addNotificationSuccess(notification) {
  return {type: types.ADD_NOTIFICATION_SUCCESS, notification};
}

export function loadNotifications() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return notificationsApi.getAllNotifications().then(notifications => {
      dispatch(loadNotificationsSuccess(notifications));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addNotification(notif) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return notificationsApi.saveNotification(notif).then(notif => {
        dispatch(addNotificationSuccess(notif));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}