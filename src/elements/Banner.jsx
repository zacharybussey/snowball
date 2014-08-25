
/** @jsx React.DOM */
var Banner = React.createClass({
  render: function(){
    this.props.text = "test";
    return (
      <h2 ref="header">Snowball Debt Calculator</h2>
    );
  }
});
