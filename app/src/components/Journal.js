import React, { useState } from 'react'
import { addJournal } from '../actions/addJournal'
import { Fab, TextField, Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Add'
import { connect } from 'react-redux'
import Modal from 'react-modal'





const initalJournal = {
    title: '',
    location: '',
    date: '',
    description: '',
    
}

export const Journal = (props) => {
    const [ newJournal, setNewJournal ] = useState(initalJournal)
    const [ modalOpen, setModalOpen ]= useState(false)


    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
    
        setNewJournal({
            ...newJournal,
            [name]: value 
        })
    }

    const addJournalEntry = (e) => {
        e.preventDefault();
        setModalOpen(false)
        props.addJournalEntry(newJournal)
        setNewJournal(initalJournal)
        
    }

    const closeModal = () => {
        setModalOpen(false)
        window.location.reload()

    }



    return (
        <Fab 
            onClick={() => {setModalOpen(true)}} 
                color="primary" 
                aria-label="add">
            <AddIcon />

        <Modal  isOpen={modalOpen}>
                <form className='addJournalForm'>
                    <div>{props.success}</div>
                    <h2>Add Your Story</h2>
                  
                    <TextField style={{marginTop:'1rem'}}
                            name='title'
                            value={newJournal.title}
                            placeholder='Title'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            name='location'
                            value={newJournal.location}
                            placeholder='Where It Happened'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            name='date'
                            value={newJournal.date}
                            placeholder='Date'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            name='description'
                            value={newJournal.description}
                            placeholder='What you did today'
                            onChange={onInputChange}
                            />
                        
                        <Button style={{marginTop:'1rem'}} variant='outlined' onClick={addJournalEntry}>Submit</Button>
                        
                        <IconButton onClick={() => {closeModal()}}>
                            <CloseIcon/>
                        </IconButton>
                        
                    </form>
                </Modal>        
            </Fab>

            
         )
        }


const mapStateToProps = (state) => {
    
    return {
        add: state.journalReducer.journal,
        success: state.journalReducer.success_message
        
    }
}

export default connect(mapStateToProps, {addJournal})(Journal)