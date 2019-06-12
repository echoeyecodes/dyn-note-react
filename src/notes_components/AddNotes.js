import React from 'react'

class AddNotes extends React.Component{
    constructor(props){
        super(props)

        this.enableAddNote = this.enableAddNote.bind(this)
    }
    enableAddNote(){
        this.props.doAddNote()
    }
    render(){
        return(
            <div onClick={this.enableAddNote} className="add-note-holder">
                <p>Add Notes</p>
            </div>
        )
    }
}
export default AddNotes