class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado con un mensaje vacío
    this.state = {
      message: ''
    };
    // Enlazamos los métodos para asegurarnos de que 'this' funcione correctamente en ellos
    this.handleEnter = this.handleEnter.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Registramos el evento keydown cuando el componente se monta
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Eliminamos el evento keydown cuando el componente se desmonta
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Método que se llama cuando se presiona la tecla Enter
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '                  // Agregamos un mensaje al estado
    }));
  }

  // Método que se llama cuando se presiona la tecla de borrar (backspace)
  handleBackspace() {
    this.setState({
      message: ''                                                             // Vacía el mensaje del estado
    });
  }

  // Método que maneja las teclas presionadas
  handleKeyPress(event) {
    if (event.keyCode === 13) {                                               // Verifica si la tecla presionada es Enter (keyCode 13)
      this.handleEnter();                                                     // Llama al método handleEnter
    } else if (event.keyCode === 8) {                                         // Verifica si la tecla presionada es Backspace (keyCode 8)
      this.handleBackspace();                                                 // Llama al método handleBackspace
    }
  }

  // Renderiza el componente
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>                                         {/* Muestra el mensaje del estado */}
      </div>
    );
  }
};
