// mutations.spec.js
import {mutations,actions} from '../index'

import API from '../../api'

// destructure assign `mutations`
const { setToDoList, saveToDo} = mutations
const { TodoList, SaveToDo} = actions

describe('mutations', () => {
    it('SetTodoList', () => {
        // mock state
        const state = { ToDoList:[] }
        // apply mutation
        setToDoList(state,[{id:1,task:"Do it"},{id:2,task:"Say hello"}])
        // assert result
        expect(state.ToDoList.length).toBe(2)
    })
    it('SaveToDo', () => {
        // mock state
        const state = { ToDoList:[]}
        // apply mutation
        saveToDo(state,{id:1,task:"Do it"});
        // assert result
        expect(state.ToDoList.length).toBe(1)
        expect(state.ToDoList[0].task).toBe("Do it")
    })
})


jest.mock('../../api.js', () => {
    return {
        getToDoList: jest.fn().mockResolvedValue([{id:1,task:"Do it"},{id:2,task:"Say hello"}]),
        postToDoList: jest.fn().mockResolvedValue({id:2,task:"Say hello"})
    }; // mocking API.
})
describe('actions', () => {
    it('SetTodoList', async () => {
        const context = {
            commit: jest.fn()
        }
        const body = {
        }
        await TodoList(context, body)
        expect(context.commit).toHaveBeenCalledWith('setToDoList', [{id:1,task:"Do it"},{id:2,task:"Say hello"}])
    })
    it('SaveTask', async () => {
        const context = {
            commit: jest.fn()
        }
        const body = {
        }
        await SaveToDo(context, body)
        expect(context.commit).toHaveBeenCalledWith('saveToDo', {id:2,task:"Say hello"})
    })
})

