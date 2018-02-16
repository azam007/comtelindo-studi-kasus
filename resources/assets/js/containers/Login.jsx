import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import { loginUser } from '../model/actions/feedbackAction'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props){
        super()
        this.state = {
            email: null,
            password:null
        }
    }
    render(){
        return(
            <section>
                <div className="Title__primary">Login</div>
                <article className="Content">
                    <FormGroup
                        controlId="formLogin"
                    >
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.email}
                            onChange={(e)=>{this.setState({email:e.target.value})}}
                        />

                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.password}
                            onChange={(e)=>{this.setState({password: e.target.value})}}
                        />
                        <br/>
                        <div className="pull-right">
                            <Button bsStyle={"primary"} onClick={ () => this.props.loginUser() }>Login</Button>
                        </div>
                    </FormGroup>
                </article>
            </section>
        )
    }
}


export default connect(null, { loginUser })(Login)