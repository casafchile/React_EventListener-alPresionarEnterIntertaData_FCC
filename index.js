class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown",this.handleKeyPress)        //presionar tecla hace accion
  }
  componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyPress)     //presionar tecla hace accion
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '        //mensaje
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {          //tecla enter, inserta data
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
