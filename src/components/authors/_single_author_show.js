var React = require('react')

var ShowSingleAuthor = React.createClass({

  render: function(){
    console.log(this.props.authorData.name_id);
    var d = new Date(this.props.authorData.createdAt)

    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h4>
            <span className="list-group-item active">{this.props.authorData.name_id}</span> 
          </h4>
        </div>
        <div className="panel-body">
          <h5>{this.props.authorData.firstName} {this.props.authorData.lastName}</h5>
            <ul>
              <li>{this.props.authorData.age} years old</li>
              <li>Joined on: {d.getMonth()+1} / {d.getDate()} / {d.getFullYear()}</li>
              <li>Status: <strong>{this.props.authorData.active ? 'active':'inactive'}</strong></li>
            </ul>
        </div>
      </div>
    )
  }
})

module.exports = ShowSingleAuthor;