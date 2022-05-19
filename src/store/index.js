import Vue from 'vue'
import Vuex from 'vuex'
import API from "../api";

Vue.use(Vuex)
export const mutations = {
    setToDoList(state,toDo){
        state.ToDoList=toDo;
    },
    saveToDo(state,toDo){
        state.ToDoList.push(toDo);
    }
}
export const actions = {
    async TodoList({commit}){
        commit("setToDoList",await API.getToDoList())
    },
    async SaveToDo({commit},toDoData){
        commit("saveToDo",await API.postToDoList(toDoData))
    }
}
const store = new Vuex.Store({
    state: {
        ToDoList:[]
    },
    getters:{},
    mutations,
    actions
})
export default store;