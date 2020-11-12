import React from 'react';
import ReactDOM from 'react-dom';
import './ProgramForm.css';

class MyForm extends React.Component {
  render() {
    return (
      <div class="ProgramForm-div">
        <form>
          <input
            type="text"
          />
        </form>
      </div>
    );
  }
}
export default MyForm
//ReactDOM.render(<MyForm />, document.getElementById('root'));
