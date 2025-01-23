import React, { Component} from 'react'
import { Link } from 'react-router'

import NameInput from './NameInput'
import SetGameType from './SetGameType'
import GameMain from './GameMain'

export default class Ttt extends Component {

	constructor (props) {
		super(props)

		this.state = {
			game_type: null,
			difficulty: 'easy',
			game_step: this.set_game_step()
		}
	}

//	------------------------	------------------------	------------------------

	render () {

		const {game_step} = this.state

		console.log(game_step)

		return (
			<section id='TTT_game'>
				<div id='page-container'>
					{game_step == 'set_name' && <NameInput 
														onSetName={this.saveUserName.bind(this)} 
												/>}

					{game_step != 'set_name' && 
						<div>
							<h2>Welcome, {app.settings.curr_user.name}</h2>
						</div>
					}

					{game_step == 'set_game_type' && <SetGameType
														difficulty={this.state.difficulty}
														onSetDifficulty={this.saveDifficulty.bind(this)}
														startGame={this.startGame.bind(this)}
													/>}
					{game_step == 'start_game' && <GameMain 
														difficulty={this.state.difficulty}
														game_type={this.state.game_type}
														onEndGame={this.gameEnd.bind(this)} 
													/>}

				</div>
			</section>
		)
	}

//	------------------------	------------------------	------------------------

	saveUserName (n) {
		app.settings.curr_user = {}
		app.settings.curr_user.name = n

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------

	saveDifficulty (t) {
		this.state.difficulty = t

		this.upd_game_step();
	}

	startGame(t) {
		this.state.game_type = t;

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------

	gameEnd (t) {
		this.state.game_type = null

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------
//	------------------------	------------------------	------------------------

	upd_game_step () {

		this.setState({
			game_step: this.set_game_step(),
		})
	}

//	------------------------	------------------------	------------------------

	set_game_step () {

		if (!app.settings.curr_user || !app.settings.curr_user.name)
			return 'set_name'
		else if (!this.state.game_type)
			return 'set_game_type'
		else
			return 'start_game'
	}

}

//	------------------------	------------------------	------------------------

Ttt.propTypes = {
	params: React.PropTypes.any
}

Ttt.contextTypes = {
  router: React.PropTypes.object.isRequired
}