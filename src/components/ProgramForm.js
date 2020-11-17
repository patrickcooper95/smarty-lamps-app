import React from 'react';
import ReactDOM from 'react-dom';
import './ProgramForm.css';

class ProgramForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="ProgramForm-div">
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
export default ProgramForm
//ReactDOM.render(<MyForm />, document.getElementById('root'));
