import React, { useState }  from 'react';
import {useStore} from "../helpers/use-store";
import {makeStyles, TextField, IconButton, Box} from "@material-ui/core";
import {
    Add as AddIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    fields: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    icon: {
      marginLeft: 20,
    },
}));

export const TodoAdd = () => {
    const classes = useStyles();

    const [title, setTitle] = useState('');

    const todoList = useStore();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = () => {
        todoList.add({
            title,
        })
        setTitle('');
    }

    return (<>
        <Box className={classes.root} >
            <Box className={classes.fields} >
                <TextField
                    name='title'
                    label='Title'
                />
                <TextField
                    name='description'
                    label='Description'
                    multiline
                />
            </Box>
            <IconButton
                className={classes.icon}
                color="primary"
                component="span"
            >
                <AddIcon />
            </IconButton>
        </Box>
    </>);
}