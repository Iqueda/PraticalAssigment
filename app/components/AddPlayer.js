import React,{ Component } from 'react';
import { Link } from 'react-router'

class AddPlayer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname:'',
			surname:'',
			email:'',
			sex:'male',
			tier:'1'
		}
		this.onSubmitForm = this.onSubmitForm.bind(this)
	}
	onSubmitForm(event) {
		event.preventDefault();
		const data = {
			firstname: this.state.firstname,
			surname: this.state.surname,
			email: this.state.email,
			sex: this.state.sex,
			tier: this.state.tier,
		}
		this.props.onClickSubmit(data)
	}
	render() {
		const {firstname, surname,email,sex,tier} = this.state
	return (
		<div className="jumbotron" style={{background: 'white', position:'fixed', left:'50%',right:'0', bottom:'0',top:'0', width:600,marginLeft:'-300px'}}>	
			<div className='container-fluid'>
				<h1 className='text-center'>Add Player</h1>
					<form className="form-horizontal" id="form" onSubmit={this.onSubmitForm} style={{padding:20}}>
					<div className='row'>
						<div className='col-sm-12' >
							<label htmlFor="firstname">First Name:</label>
								<input
								 ref={(node) => {this.fieldName = node }}
								 onChange={() => this.setState({firstname: this.fieldName.value})}
								 value={firstname}
								 type="text" name="firstname" id="firstname"
								 className="form-control"
								 placeholder="First Name" />
							<label htmlFor="Surname">Surname:</label>
								<input
								ref={(node) => {this.fieldSurName = node}}
								onChange={() => this.setState({surname: this.fieldSurName.value})}
								value={surname} 
								type="text" name="surname" id="surname"
								className="form-control" 
								placeholder="Surname" />
							</div>
							</div>
							<div className='row'>
								<div className='col-sm-4'>
									<label htmlFor="Sex">Sex:</label>
									<select
									className="form-control" 
									ref={(node) => {this.fieldSex = node}}
									onChange={() => this.setState({sex: this.fieldSex.value})}
									value={sex}
									type="text" name="sex" id="sex"
									>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								</div>
								<div className='col-sm-4'>
									<label htmlFor="Tier">Tier:</label>
										<select 
										className="form-control"
										ref={(node) => {this.fieldTier = node}}
										onChange={() => this.setState({tier: this.fieldTier.value})}
										value={tier}
										type="text" name="tier" id="tier"
										 >
										<option value="1">Gold</option>
										<option value="2">Silver</option>
										<option value="3">Bronze</option>
									</select>
							</div>
							</div>
							<div className='row'>
								<div className='col-sm-12' >
									<label htmlFor="email">Email:</label>
										<input
										ref={(node) => {this.fieldEmail = node }}
										onChange={() => this.setState({email: this.fieldEmail.value})}
										value={email}
										type="text" name="email" id="email"
										className="form-control"
										placeholder="Email" />
								</div>
							</div>
							<div style={{marginTop:20}}>
						 <button
						 type='submit' 
						 className='btn btn-primary'>
						 Add
						 </button>
						 <button 
						 onClick= {() => this.props.onClickCancel()}
						 type='button' 
						 className='btn btn-danger'
						 style={{marginLeft:10}}>
						 Cancel
						 </button>
						 </div>
					</form>
					</div>
				</div>
		)
	}
}

export default AddPlayer