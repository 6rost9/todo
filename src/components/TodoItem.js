import React from 'react';
import {useStore} from "../helpers/use-store";
import {
    makeStyles,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import {
    Save as SaveIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    secondary: {
        whiteSpace: 'pre-line',
    }
}));

export const TodoItem = ({todo}) => {
    const classes = useStyles();
    const todoList = useStore();

    const handleToggle = () => {
        todoList.toggleDone(todo.id);
    };

    const labelId = `checkbox-list-label-`;

    return (<ListItem
        role={undefined}
        dense
        button
        onClick={handleToggle}
    >
        <ListItemIcon>
            <Checkbox
                edge="start"
                checked={todo.done}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
            />
        </ListItemIcon>
        <ListItemText
            classes={{
                secondary: classes.secondary,
            }}
            id={labelId}
            primary={todo.title}
            secondary={todo.description}
        />
        <ListItemSecondaryAction>
            <IconButton  aria-label="comments">
                <EditIcon />
            </IconButton>
            <IconButton
                edge="end"
                aria-label="comments"
                onClick={todoList.remove.bind(null, todo.id)}
            >
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>);
}