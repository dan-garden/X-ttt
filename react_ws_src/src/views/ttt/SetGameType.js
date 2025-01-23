import React, {Component} from 'react'

export default class SetGameType extends Component {

	constructor (props) {
		super(props)

		this.state = {
			game_type: 'comp',
		}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<div id='SetGameType'>

				<h1>Configuration</h1>

				<div className='input_holder select_option'>
					<label>Versus</label>
					<select value={this.state.game_type} onChange={this.gameTypeSelect.bind(this)}>
						<option value='comp'>Against a computer</option>
						<option value='live'>Live against another player</option>
					</select>
				</div>

				{this.state.game_type === 'comp' ? (<div>

					<div className='input_holder select_option'>
						<label>Bot Difficulty</label>
						<select value={this.props.difficulty} onChange={this.difficultySelect.bind(this)}>
							<option value='easy'>Easy</option>
							<option value='medium'>Medium</option>
							<option value='hard'>Hard</option>
						</select>
					</div>


				</div>) : (<div></div>)}

				<button type='submit' onClick={this.startGame.bind(this)} className='button long'><span>Start Game <span className='fa fa-caret-right'></span></span></button>
			</div>
		)
	}

	difficultySelect (e) {
		this.props.onSetDifficulty(e.target.value)
	}

	gameTypeSelect (e) {
		this.setState({ game_type: e.target.value })
	}

	startGame (e) {
		this.props.startGame(this.state.game_type || 'comp')
	}

}
