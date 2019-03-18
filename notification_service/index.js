import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

function createNotification() {
  return {
    title: 'Still not ready for that exam? 😱',
    body: 'What about testing your abilities with a Quiz? 🤓',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      sticky: false,
      vibrate: true,
    }
  }
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem( NOTIFICATION_KEY )
    .then( Notifications.cancelAllScheduledNotificationsAsync() )
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then( JSON.parse )
    .then( ( data ) => {
      if ( data === null ) {
        Permissions.askAsync( Permissions.NOTIFICATIONS )
          .then( ( { status } ) => {
            if ( status === 'granted' ) {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate( tomorrow.getDate() + 1 )
              tomorrow.setHours( 19 )
              tomorrow.setMinutes( 0 )


              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem( NOTIFICATION_KEY, JSON.stringify( true ) )
            }
          })
      }
    })
}
