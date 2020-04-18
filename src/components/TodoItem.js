import React, {useState} from 'react';
import {useStore} from "../helpers/use-store";
import {EditModal} from "./EditModal";
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
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        todoList.toggleDone(todo.id);
    };

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    }

    const remove = () => {
        todoList.remove(todo.id);
    }

    const labelId = `checkbox-list-label-`;

    return (<>
        <ListItem
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
                <IconButton
                    onClick={toggleDialog}
                    aria-label="comments"
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={remove}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <EditModal
            todo={todo}
            open={isOpen}
            handleClose={toggleDialog}
        />
    </>);
}