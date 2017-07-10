import EventEmitter from 'event-emitter'

const eventManager = EventEmitter()

const send = (eventName, ...args) => {eventManager.emit(eventName, ...args)}
const receive = (eventName, callback) => {eventManager.on(eventName, callback)}

export default eventManager
export { send, receive }