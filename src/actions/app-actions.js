export function setPlayerName(newName) {
	return {
		type: "SET_FIELD",
		payload: {
			playerName: newName
		}
	}
}

export function setRoomCode(newCode) {
	return {
		type: "SET_FIELD",
		payload: {
			roomCode: newCode
		}
	}
}