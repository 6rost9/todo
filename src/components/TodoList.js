import React from 'react';
import {useStore} from "../helpers/use-store";
import {useObserver} from "mobx-react";
import {TodoAdd} from "./TodoAdd";
import {TodoItem} from "./TodoItem";
import {makeStyles, Container, Grid, Typography, Paper, List} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    list: {
        flexGrow: 1,
        display: 'flex',
    },
    container: {
        flexGrow: 1,
        padding: '20px 0',
    },
    paper: {
        padding: 20,
        flexGrow: 1,
        margin: '20px 0',
    }
}));

export const TodoList = () => {
    const classes = useStyles();
    const todoList = useStore();

    return useObserver(() => (
        <Container
            className={classes.root}
            maxWidth='sm'
        >
            <Grid
                className={classes.container}
                container
                direction='column'
            >
                <Grid item>
                    <Typography variant='h3'>ToDo list</Typography>
                </Grid>
                <Grid
                    item
                    className={classes.list}
                >
                    <Paper className={classes.paper} >
                        {todoList.getSorted.length ?
                            <List>
                                {todoList.getSorted.map(todo => <TodoItem key={todo.id} todo={todo} />)}
                            </List>
                            :
                            <Typography
                                align='center'
                            >
                                Nothing to do
                            </Typography>
                        }

                    </Paper>

                </Grid>
                <Grid item>
                    <TodoAdd/>
                </Grid>
            </Grid>

        </Container>
    ));
}