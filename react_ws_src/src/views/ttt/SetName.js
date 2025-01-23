import React, {Component} from 'react'

export default class SetName extends Component {

	constructor (props) {
		super(props)

		this.state = {}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<form id='SetName' onSubmit={this.saveName.bind(this)}>

				<h1>Set Name</h1>

				<div ref='nameHolder' className='input_holder left'>
					<label>Name </label>
					<input ref='name' type='text' className='input name' placeholder='Name' />
				</div>


				<button type='submit' className='button'><span>SAVE <span className='fa fa-caret-right'></span></span></button>

			</form>
		)
	}

//	------------------------	------------------------	------------------------

	saveName (e) {
		// const { name } = this.refs
		// const { onSetName } = this.props
		// onSetName(name.value.trim())

		this.props.onSetName(this.refs.name.value.trim())
	}

}
