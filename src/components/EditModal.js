import React, {useEffect, useState} from 'react';
import {useStore} from "../helpers/use-store";
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 600
    },
    fields: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
}));

export const EditModal = ({todo, open, handleClose}) => {
    const classes = useStyles();
    const todoList = useStore();

    const [values, setValues] = useState({
        title: todo.title,
        description: todo.description,
    });

    const [disabled ,setDisabled] = useState(true);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const save = () => {
        todoList.update(todo.id, values);
        handleClose();
    }

    useEffect(()=>{
        if (values.title !== ''){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    },[values.title])

    return(<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
            paper: classes.paper
        }}
    >
        <DialogTitle id="alert-dialog-title">Edit task</DialogTitle>
        <DialogContent className={classes.fields} >
            <TextField
                name='title'
                label='Title'
                value={values.title}
                onChange={handleChange}
            />
            <TextField
                name='description'
                label='Description'
                value={values.description}
                onChange={handleChange}
                multiline
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button
                disabled={disabled}
                onClick={save}
                color="primary"
                autoFocus
            >
                Save
            </Button>
        </DialogActions>
    </Dialog>);
}