var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'default message'
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
      <p>{message + '!!!'}</p>
      </div>
    );
  }
});

var firstName = "Brix";
var firstMessage = "React is fun!"

ReactDOM.render(
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);
