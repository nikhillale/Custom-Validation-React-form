import React, { Component } from 'react';

export interface Props {
    data: string;
}
export default class BasicForm extends Component {

    constructor(props: Props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            formErrors: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }
        }
    }

    render() {
        return (
            <div className="card" style={{ paddingLeft: 500, paddingRight: 500 }}>
                <div className="card-body">
                    <form>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label style={{ display: 'flex' }}>First name</label>
                            <input type="text" className="form-control" value={''} placeholder="Enter first name" />
                        </div>

                        <div className="form-group">
                            <label style={{ display: 'flex' }}>Last name</label>
                            <input type="text" className="form-control" value={''} placeholder="Enter last name" />
                        </div>

                        <div className="form-group">
                            <label style={{ display: 'flex' }}>Email address</label>
                            <input type="email" className="form-control" value={''} placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label style={{ display: 'flex' }}>Password</label>
                            <input type="password" className="form-control" value={''} placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}
