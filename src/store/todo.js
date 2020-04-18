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

    @action update = (id) => {
        // console.log(this.getIndexById(id));
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
