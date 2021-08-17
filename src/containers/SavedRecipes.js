import React, { Component } from 'react'
import { connect } from 'react-redux'


class SavedRecipes extends Component {
    render() {
        return (
            <div id="saved-container">
                <h1>SAVED RECIPES</h1>
                <p>{this.props.saved.join(" - ")}</p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        saved: state.root_saved.saved
    }
}
export default connect(mapStateToProps)(SavedRecipes)
