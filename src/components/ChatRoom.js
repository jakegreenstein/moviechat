import React, { Component } from 'react';

class ChatRoom extends Component {
	constructor(props, context){
		super(props, context)
		this.state = {
			message: ''
		}
	}

	updateMessage(event){
		this.setState({
			message: event.target.value
		})
	}

	submitMessage(event){
		event.preventDefault()
		console.log('submitMessage: ' + this.state.message)

		const msg = {
			id: this.props.movie.posts.length,
			text: this.state.message
		}

		firebase.database().ref('posts/'+this.props.movie.id+'/' + msg.id).set(msg)
	}

	render() {
		var currentMessages = null
		if (this.props.movie.posts != null){
			currentMessages = this.props.movie.posts.map((message, i) => {
				return (
					<li key={message.id}>{message.text}</li>
				)
			})
		}


		return (
			<div>
				<h3>{this.props.movie.title}</h3>
				<ol>{currentMessages}</ol>
				<input onChange={this.updateMessage.bind(this)} type="text" className="form-control"/>
				<br/>
				<button onClick={this.submitMessage.bind(this)} className="btn btn-info">Submit Message</button>

			</div>
		);
	}
}

export default ChatRoom