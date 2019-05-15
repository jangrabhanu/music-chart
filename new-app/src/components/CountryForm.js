import React, {Component} from 'react';
import './CountryForm.css';
class CountryForm extends Component {

    render() {
        return(
            <center><form onSubmit={this.props.getMusic} ref="country" className="drop-down">
                <select name="selectCountry"  ref="country">
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="france">France</option>
                    <option value="china">China</option>
                    <option value="greece">Greece</option>
                    <option value="japan">Japan</option>
                </select>
                <button className="search-btn">Search</button>
            </form></center>
        );
    }
}

export default CountryForm;