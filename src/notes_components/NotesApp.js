import React from 'react'
import NotesItem from './NotesItem'
import AddNotes from './AddNotes'

let notesData =[]
        if(localStorage.getItem('data') === null){
            localStorage.setItem('data', JSON.stringify(notesData))
        }
        notesData = JSON.parse(localStorage.getItem('data'))

        function uid(){
            let date = new Date();
            let value =  date.getMilliseconds()
            return value         
        }

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.addNote = this.addNote.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
    }
    addNote() {
        const color_palettesSoft = ['#e9e4f0', '#29ffc6', '#93dbdb', '#b8dc6f', '#ffa564', '#86a8e7']
        const color_palettesHard = ['#d3cce3', '#20e3b2', '#66cccc', '#99cc32', '#ff7f24', '#7f7fd5']
        var ui_index = Math.floor(Math.random() * color_palettesHard.length)

        const newData = this.state.data.map((item) => {
            return item
        })
        newData.push({
            id: uid(),
            text: '',
            colorSoft: color_palettesSoft[ui_index],
            colorHard: color_palettesHard[ui_index]
        })
        localStorage.setItem('data', JSON.stringify(newData))
        this.setState({
            data: JSON.parse(localStorage.getItem('data'))
        })
    }
    deleteNote(id) {
        let prevData = this.state.data.map((item) => {
            return item
        })
        for (let j = 0; j < prevData.length; j++) {
            if (prevData[j].id === id) {
                var index = prevData.indexOf(prevData[j])
                prevData.splice(index, 1)
            }
        }
        localStorage.setItem('data', JSON.stringify(prevData))
        this.setState({
            data: JSON.parse(localStorage.getItem('data'))
        })
    }
    updateNote(id, text){
        let updatedData = this.state.data.map((item) =>{
            if(item.id === id){
                if(text === ''){
                    item.text = ''
                }else{
                    item.text = text
                }
               
            }
            return item
        })
        localStorage.setItem('data', JSON.stringify(updatedData))

        this.setState({
            data: JSON.parse(localStorage.getItem('data'))
        }) 
    }
    componentDidMount() {
         this.setState({
             data: JSON.parse(localStorage.getItem('data'))
         })
    }

    render() {
        const data = this.state.data.map((item, index) => <NotesItem pos={index} key={item.id} information={item} updateNote={this.updateNote} doDeleteNote={this.deleteNote} />
        
        )
        return (
            <div className="dashboard">
                {data}
                <AddNotes doAddNote={this.addNote} />
            </div>
        )
    }
}
export default NotesApp