import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: ''};

  // Our component just got rendered
  componentDidMount(){
    this.shouldNavigateAway();
  }
  // Our component just got updated
  componentDidUpdate(){
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if(!this.props.auth){
      // console.log('I need to leave.')
      this.props.history.push('/');
    }
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Cal an action creator
    // And save the comment...
    this.props.saveComment(this.state.comment);

    this.setState({ comment: ''});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
      
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth };
}

// export default CommentBox;
// export default connect(null, actions)(CommentBox);
export default connect(mapStateToProps, actions)(CommentBox);