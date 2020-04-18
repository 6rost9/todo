import { observable, computed, action } from 'mobx';
import { v1 } from 'uuid';

export class TodoList {

    @observable items = [
        {
            id: '1',
            title: 'Some todo',
            done: false,
        },
        {
            id: '2',
            title: 'Another some todo',
            done: false,
        },
        {
            id: '3',
            title: 'Created todo item',
            done: true,
        }
    ];

    @action add = (item) => {
        this.items.push({
            id: v1(),
            ...item
        });
    }

    @action update = (el) => {

    }


    @computed get getSorted(){
        return this.items;

    }
}
