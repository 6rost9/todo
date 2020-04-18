import React, {useEffect, useState} from 'react';
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

    const [values, setValues] = useState({
        title: '',
        description: '',
    });

    const [disabled ,setDisabled] = useState(true);

    const todoList = useStore();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(()=>{
        if (values.title !== ''){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    },[values.title])

    const addTodo = () => {
        todoList.add(values);
        setValues({
            title: '',
            description: '',
        });
    }

    return (<>
        <Box className={classes.root} >
            <Box className={classes.fields} >
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
            </Box>
            <IconButton
                className={classes.icon}
                color="primary"
                component="span"
                disabled={disabled}
                onClick={addTodo}
            >
                <AddIcon />
            </IconButton>
        </Box>
    </>);
}