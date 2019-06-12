import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class NotesItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
       
    }
    handleDelete() {
        this.props.doDeleteNote(this.props.information.id)
    }
    handleUpdate(){
        let index = this.props.pos
        this.props.updateNote(this.props.information.id, document.getElementsByClassName('notes-holder').item(index).value)
    }
    render() {
        return (
            <div className="notes-holder-main">
                <div id="notes-holder-tool-bar" style={{ backgroundColor: `${this.props.information.colorHard}` }}>
                    <i id="closeBtn" onClick={this.handleDelete}><FontAwesomeIcon icon="window-close" /></i>
                </div>
                <textarea id="input-space" onInput={this.handleUpdate} className="notes-holder" style={{ backgroundColor: `${this.props.information.colorSoft}` }} placeholder="Enter Note here">{this.props.information.text}</textarea>
            </div>

        )
    }
}

export default NotesItem