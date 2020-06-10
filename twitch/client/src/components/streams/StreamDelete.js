import React from 'react';
import Modal from '../Modal';
import History from '../../history';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteStream, fetchStream } from '../../actions/index'

class StreamDelete extends React.Component {

  componentWillMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button onClick={()=>{
          this.props.deleteStream(id)
        }} className="ui primary negative button" >Delete</button>
        <Link to="/" className="ui button" >Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if(this.props.stream)
    return ` you want to delete ${this.props.stream.title} ?`
    else 
    return 'Loading'
  }

  render() {
  return  (
        <Modal title="Delete stream"
          content= {this.renderContent()} 
          actions={this.renderActions()}
          onDismiss={() => { History.push('/') }}
        />
    )
  }
}

const mapStateToProps = (state, props) => {
  return  {stream : state.streams[props.match.params.id]}
}
export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);