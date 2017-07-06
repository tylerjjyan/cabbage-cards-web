import {connect} from 'react-redux'
import EventManager from '../../event-manager'
import { pushLocation } from '../../actions/navigation-actions'
import { setPlayerName, setRoomCode } from '../../actions/app-actions.js'

//map state to props function provides access to data from the state tree
//similar to selecetors (later on will replace with createSelector from reselect like we do at machobear)
const mapStateToProps = state => ({
	playerName: state.app.playerName,
	roomCode: state.app.roomCode
})

//all changes to statetrees must be done by dispatching an action
//dispatching an action means sending an object to the state tree that contains a type parameter (required), and any additional data
//this function is used to wrap any function that changes the state tree in a dispatch function
//only functions wrapped by the dispatch function can manipulate the state tree
//if you have functions that don't modify the state tree, you shouldn't put it here (you can but it's not what mapDispatchToProps is meant to do)
const mapDispatchToProps = dispatch => ({
	goToTest: () => {dispatch(
		pushLocation('test', { val: 1})
	)},

	setPlayerName: (event) => {dispatch(
		setPlayerName(event.target.value) //CHANGE HANLDERS RETURN A FRIGGIN EVENT LIKE IN NORMAL HTML, REACT PLSSS
	)},

	setRoomCode: (event) => {dispatch(
		setRoomCode(event.target.value)
	)},
})

//filter props from mapStateToProp, mapDispatchToProp, and props passed to the component itself
//useful if you want your dispatch functions to have access to the state tree
//i'm just using it to call the connection function, which needs the playername and droom code, which exists in the statee tree
//i've put the econnection function here for now and you can continute to do so until i can think of a better way to separate the data from the view
//like with a context
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
	...propsFromState,
	...ownProps,
	...propsFromDispatch,
	connectToServer: () => EventManager.emit('connectToServer', propsFromState.playerName, propsFromState.roomCode)
})

//connect will return another function that does the actual  connecting, so when you import it you need to do connect(view)
//where view is your react component that you want to be able to receive data from the state tree
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)