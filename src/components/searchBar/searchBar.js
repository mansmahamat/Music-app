import React, {Component} from 'react';


class Search extends Component {
    state = {
        terms : ''
    }
    handleInputChange = (event) => {
        this.setState({terms : event.target.value})
    }
    submitSearch = (event) => {
        event.preventDefault();
        let {terms} = this.state;
        this.props.searchAlbums(terms);
    }
    render() {
        return(
            <div className="search mb-2">
                <form onSubmit={(event) => this.submitSearch(event)}>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                                <input 
                                type="text"
                                placeholder="Recherche"
                                className="form-control p-4"
                                value={this.state.terms}
                                onChange={(event) =>this.handleInputChange(event)} />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;