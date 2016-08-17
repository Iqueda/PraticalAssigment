import React from 'react'
import { Link } from 'react-router'

function Home () {
    return (
        <div className='cointainer'>
        <div className='row'>
        	<nav className="col-md-3">
                <img src="/app/img/Viz-logo.svg" className='img-responsive' />
            </nav>
        </div>
            <div className='row'>
                <div className='col-md-3'>
                    <Link to='/addPlayer' type="button" className="btn btn-primary">Add Player</Link>
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
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>         
        </div>  
    )
  }

export default Home
