import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

class userInfo extends Component {
	logout(e) {
		e.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push(`/login`)
	}}

export default userInfo;
