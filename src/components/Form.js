import React from 'react';


class Form extends React.Component {

  state = {
    item: ""
  }


  handleChange = (e) => {
    this.setState({ item: e.target.value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: ''})
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
            <label>Item</label>
            <input 
              id="bestInputEver"
              placeholder='Item' 
              required
              autoFocus
              value={this.state.item}
              onChange={this.handleChange}
            />
          <button type='submit' color="pink" >Submit</button>
        </form>
      </div>
    );
  }
}





export default Form;