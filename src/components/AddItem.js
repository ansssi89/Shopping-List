import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddItem extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddItem(this.state.title);
        this.setState({title: ''})
    }

    onChange = (e) => ({
        [e.target.name]:e.target.value
    })

    render() {
        return (
            <form
            onSubmit={this.onSubmit}
            style={{display: 'flex'}}
            >
                <input 
                type="text"
                name="title"
                style={{flex: '10'}}
                placeholder="Add Item..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="submit"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

//PropTypes
AddItem.propTypes = {
    AddItem: PropTypes.func.isRequired
}

export default AddItem;