import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const style = {
	display: 'flex',
	flexDirection: 'column'
}

//initial screen where players input the room code and their name
const ConnectionScreen = props => {
	return(
	<div style={style}>
		<input type="text" placeholder="Player Name" id="playerNameField" onChange={props.setPlayerName.bind(this)} value={props.playerName}/>{/*i can make this as long as i want AHHAHAHA*/}
		<input type="text" placeholder="Room Code" id="roomCodeField" onChange={props.setRoomCode.bind(this)} value={props.roomCode}/>
		<button onClick={props.connectToServer} id="connectButton">Connect</button>
	</div>
)}

ConnectionScreen.propTypes = {
	connectToServer: PropTypes.func,
	setPlayerName: PropTypes.func.isRequired,
	setRoomCode: PropTypes.func.isRequired,
	playerName: PropTypes.string,
	roomCode: PropTypes.string
}

export default ConnectionScreen