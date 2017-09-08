import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term : this.props.term };
    }

    render() {
        return(
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    onKeyPress={(e) => {(e.key === 'Enter' ? this.props.goSearch(this.state.term) : null)}}
                    value={this.state.term}
                    onChange={ event =>  this.setState({ term: event.target.value } )}
                />
                  <span className="input-group-btn" >
                    <button className="btn btn-secondary" type="button" onClick={() => this.props.goSearch(this.state.term)}>Go!</button>
                  </span>
            </div>
        );
    }

}

export default  SearchBar;