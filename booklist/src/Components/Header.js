import React, {Component} from 'react'
import SearchBar from './SearchBar'

class Header extends Component {
    render() {
        return(
            <div className="container">
                <div className="App-header">
                    <h4>Booklist</h4>
                    <SearchBar/>
                </div>
            </div>
        )
    }
}

export default Header