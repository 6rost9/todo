import { observable, computed, action, autorun } from 'mobx';
import { v1 } from 'uuid';

export class TodoList {

    constructor() {
        let localTasks = localStorage.getItem('tasks');

        if (localTasks !== null) {
            this.items = JSON.parse(localTasks);
        }

        autorun( reaction => {
            localStorage.setItem('tasks', JSON.stringify(this.items));
        });
    }

    @observable items = [];

    @action add = (item) => {
        this.items.push({
            id: v1(),
            done: false,
            ...item
        });
    }

    @action update = (id, values) => {
        let i = this.getIndexById(id);
        this.items[i] = {
            ...this.items[i],
            ...values
        };
    }

    @action remove = (id) => {
        this.items.splice(this.getIndexById(id), 1);
    }

    @action toggleDone = (id) => {
        let i = this.getIndexById(id);
        this.items[i] = {
            ...this.items[i],
            done: !this.items[i].done
        };
    }

    @computed get getSorted(){
        return this.items.sort((a,b) => {
            return (b.title).localeCompare(a.title);
        });
    }

    getIndexById(id) {
        return this.items.findIndex(el => el.id === id);
    }

}

