import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'
import { insertFeedback } from '../model/actions/feedbackAction'
import {connect} from 'react-redux'
import NotificationSystem from 'react-notification-system'


class Feedback extends React.Component {
    constructor(props){
        super()
        this.state = {
            fullname: '',
            email: '',
            subject: '',
            message: ''
        }
        this.notificationSystem = null;
    }
    componentDidMount(){
        this.notificationSystem = this.refs.notificationSystem
    }
    componentWillReceiveProps(newProps){
        if(newProps.status){
             let message = `Feedback anda: ${newProps.status.subject} berhasil ditambahkan.`;
            this.setState({
                fullname: '',
                email: '',
                subject: '',
                message: ''
            })
            this.addNotification(message)
        }
        console.log('newProps',newProps);
        
    }
    render(){
        console.log(this.state);
        return(
            <section>
                <div className="Title__primary">Feedback</div>
                <article className="Content">
                    Silahkan berikan tanggapan berupa Kritik, Saran, ataupun Keluhan Anda tentang perusahaan kami
                    <br/><br/>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <ControlLabel>Nama Lengkap</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.fullname}
                            onChange={(e)=>{this.setState({fullname:e.target.value})}}
                        />

                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.email}
                            onChange={(e)=>{this.setState({email: e.target.value})}}
                        />
                        
                        <ControlLabel>Subjek</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.subject}
                            onChange={(e)=>{this.setState({subject: e.target.value})}}
                        />
                        
                        <ControlLabel>Message</ControlLabel>
                        <textarea className="form-control" value={this.state.message} id="formControlsTextarea" onChange={(e)=>{this.setState({message: e.target.value})}} />
                    </FormGroup>
                    <div className="pull-right">
                        <Button bsStyle={"primary"} onClick={ () => this.handleClick() }>Submit</Button>
                    </div>
                </article>
                <NotificationSystem ref="notificationSystem"/>
            </section>
        )
    }
    handleClick(){
        this.props.insertFeedback(this.state)
    }
    addNotification(message){
        this.notificationSystem.addNotification({
            message: message,
            level: 'success'
        })
    }
}

function mapStateToProps(state){
    return {
        status: state.feedback.status,
    }
}
export default connect(mapStateToProps, { insertFeedback })(Feedback);