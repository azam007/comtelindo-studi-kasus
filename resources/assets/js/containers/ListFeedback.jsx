import React from 'react';
import {connect} from 'react-redux';
import {fetchFeedback, handleAcceptFeedback, deleteFeedback} from '../model/actions/feedbackAction'
import _ from 'lodash'
import {Modal,Button} from 'react-bootstrap'
import NotificationSystem from 'react-notification-system'

class ListFeedback extends React.Component {
    constructor(props){
        super();
        this.state = {
            showPanel: false,
            dataToModal: null
        }
        this.notificationSystem = null;
    }
    componentWillMount(){
        this.props.fetchFeedback()                        
    }
    componentDidMount(){
        this.notificationSystem = this.refs.notificationSystem
        console.log('this.notificationSystem',this.notificationSystem);
    }
    componentWillReceiveProps(newProps){
        // console.log(newProps);
        if(newProps.feedback.status){
            newProps.fetchFeedback();
            this.setState({
                showPanel:false,
                dataToModal: null
            })
            let message = "Feedback berhasil dihapus";
            if(newProps.feedback.status === 1) {
                message = "Feedback diterima";
            }
            this.addNotification(message)
        }
        
    }
    render(){
        const feedbackData = this.props.feedback.data.data;
        console.log('feedbackData...',feedbackData);
        console.log('feedback >>>...',this.props.feedback);
        const Tbody = (props) => {            
            let tr = [];
            if(!props.data){
                return <tbody><tr><td colSpan={4}><span className={"fa fa-spinner fa-spin"}/></td></tr></tbody>
            }
            _.map(props.data, (item, index) => {
                let accept = item.status === 1 ? ' accepted' : '' 
                tr.push(
                    <tr onClick={ ()=>{this.handleClick(item)} } className={"Feedback__list" + accept} key={index}>
                        <td>{index}</td>
                        <td>{item.fullname}</td>
                        <td>{ accept && <code>(Diterima)</code> } {item.subject}</td>
                        <td>{item.created_at}</td>
                    </tr>
                )
            })
        
            return <tbody>{tr}</tbody>
        }
        
        return(
            <section>
                <div className="Title__primary">List of Feedback</div>
                <article className="Content">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Nama</th>
                                <th>Subject</th>
                                <th>Tanggal</th>
                            </tr>
                        </thead>
                        <Tbody data={ feedbackData }/>
                    </table>
                </article> 
                { this.state.dataToModal && this.renderModal() }
                <NotificationSystem ref="notificationSystem"/>
            </section>
        )
    }
    handleClick(data){
        this.setState({
            showPanel: true,
            dataToModal: data
        })
    }
    handleClose(){
        this.setState({
            showPanel: false,
            dataToModal: null
        })
    }
    addNotification(message){
        this.notificationSystem.addNotification({
            message: message,
            level: 'success'
        })
    }
    renderModal(){
        const { dataToModal } = this.state
        return(
            <Modal show={this.state.showPanel} onHide={()=>{this.handleClose()}}>
                <Modal.Header closeButton>
                    <Modal.Title>Feedback dari { dataToModal.fullname }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="TextInfo">
                        <div className="Label">Subject</div>
                        <div className="Value">{ dataToModal.subject }</div>
                    </div>
                    <div className="Label">Message</div>
                    <div className="Message">
                        {dataToModal.message}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{ this.props.deleteFeedback(dataToModal.id) }}>Hapus</Button>
                    <Button bsStyle={"primary"} onClick={ ()=>{ this.props.handleAcceptFeedback(dataToModal) } }>Terima</Button>
                </Modal.Footer>
            </Modal>
        )
    }
    
}



function mapStateToProps(state){
        console.log('feedback>>>', state.feedback)
    return {
        feedback: state.feedback
    }
} 
export default connect(mapStateToProps, { fetchFeedback, handleAcceptFeedback,deleteFeedback })(ListFeedback);