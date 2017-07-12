import io from 'socket.io-client/dist/socket.io'
import ports from '../ports.js'
import { send, receive } from '../messaging'

var networkManager = {

	socket: io(ports.backend, { autoConnect: false })
}

networkManager.connectToServer = function(playerName, roomCode) {
	
	this.socket.on('connect', () => this.sendConnectionParameters(playerName, roomCode) )
	this.socket.on('webClientConnectionRequest/accept', this.onConnectionAccepted)
	this.socket.on('webClientConnectionRequest/reject', this.onConnectionRejected)
	this.socket.on('connect_error', () => send('connectToServer/error'))
	this.socket.on('connect_timeout', () => send('connectToServer/timeout'))
	this.socket.on('invalidRoomCode', () => console.log('invalidCode'))
	this.socket.open()
}

networkManager.sendConnectionParameters = function(playerName, roomCode) {
	this.socket.emit('webClient', { playerName, roomCode })
}

networkManager.onConnectionAccepted = function(eventArgs) {
	console.log('accepted')
	send('connectToServer/accept', eventArgs)
}

networkManager.onConnectionRejected = function(eventArgs) {
	console.log('rejected')
	send('connectToServer/reject', eventArgs)
}

receive('connectToServer', networkManager.connectToServer.bind(networkManager))

export default networkManager