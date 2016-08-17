import React, { Component } from 'react';
import { Link } from 'react-router'
import AddPlayer from "./AddPlayer"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state ={
            row: []
        }
    }
    componentDidMount (){
        fetch("/data.json").then((data) =>{
            return data.json()
        }).then((json) => {
            this.setState({row: json})
        })
    }

    onClickCancel(){
        this.setState({showModal:false})}

    onClickSubmit(data){
        const previousrows = this.state.row
        this.setState({row: [data,...previousrows],showModal:false})
    }
    render() {
    return (
        <div className='cointainer'>
        <div className='row'>
        	<nav className="col-md-3">
                <img src="/app/img/Viz-logo.svg" className='img-responsive' />
            </nav>
        </div>
            <div className='row'>
                <div className='col-md-3'>
                    <button
                    onClick ={() => this.setState({showModal:true})}
                     type="button"
                      className="btn btn-primary">
                      Add Player
                    </button>
                </div>
                <div className='col-md-9'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Surname</th>
                                <th>Sex</th>
                                <th>Tier</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.state.row.map((item, index) => {
                               return (
                                   <tr key={index}>
                                   <td>{item.firstname}</td>
                                   <td>{item.surname}</td>
                                   <td>{item.sex}</td>
                                   <td>{item.tier}</td>
                                   <td>{item.email}</td>
                                   </tr>
                               )
                           })}
                        </tbody>
                    </table>
                </div>
            </div>
            {this.state.showModal?<AddPlayer 
                onClickSubmit={this.onClickSubmit.bind(this)}
                onClickCancel={this.onClickCancel.bind(this)} />:null}         
        </div>  
    )
  }
}
export default Home
