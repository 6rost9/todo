import { observable, computed, action } from 'mobx';
import { v1 } from 'uuid';

export class TodoList {

    @observable items = [
        {
            id: '1',
            title: 'Some todo',
            description: 'Some description',
            done: false,
        },
        {
            id: '2',
            title: 'Another some todo',
            description: 'Some description',
            done: false,
        },
        {
            id: '3',
            title: 'Created todo item',
            description: 'Some description',
            done: true,
        }
    ];

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
