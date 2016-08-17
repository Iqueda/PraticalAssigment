import React,{ Component } from 'react';
import { Link } from 'react-router'

class Pedido extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname:'',
			surname:'',
			email:'',
			sex:'male',
			tier:'gold'
		}
		this.onSubmitForm = this.onSubmitForm.bind(this)
	}
	onSubmitForm(event) {
		event.preventDefault();
		const data = {
			FIRST_NAME: this.state.firstname,
			SURNAME: this.state.surname,
			EMAIL: this.state.email,
			SEX: this.state.sex,
			TIER: this.state.tier,
			created_at: Date.now()
		}
		console.log(data);
	}
	render() {
		const {firstname, surname,email,sex,tier} = this.state
	return (
		<div className="jumbotron" style={{background: 'transparent'}}>	
			<div className='container-fluid'>
				<h1 className='text-center'>Add Player</h1>
					<form className="form-horizontal col-sm-offset-5" id="form" onSubmit={this.onSubmitForm}>
					<div className='row'>
						<div className='col-sm-4'>
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
								<div className='col-sm-2'>
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
								<div className='col-sm-2'>
									<label htmlFor="Tier">Tier:</label>
										<select 
										className="form-control"
										ref={(node) => {this.fieldTier = node}}
										onChange={() => this.setState({tier: this.fieldTier.value})}
										value={tier}
										type="text" name="tier" id="tier"
										 >
										<option value="gold">Gold</option>
										<option value="silver">Silver</option>
										<option value="bronze">Bronze</option>
									</select>
							</div>
							</div>
							<div className='row'>
								<div className='col-sm-4'>
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
						<button type='submit' className='btn btn-primary'>Add</button>
						<Link to='/' type='button' className='btn btn-danger'>Cancel</Link>
					</form>
					</div>
				</div>
		)
	}
}

export default Pedido