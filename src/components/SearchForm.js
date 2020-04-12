import React, {Component} from "react";

class SearchForm extends Component {

    handleFilterText = event => {
        this.props.handleFilterText(event.target.value)
        console.log(event.target.value)
    }

    render(){
        const {filterText} = this.props;
        return(
            <form className="form-search">
                <input
                    type="text"
                    placeholder="search..."
                    onChange={this.handleFilterText}
                    value={filterText}
                />
            </form>
        )
    }
}

export default SearchForm;