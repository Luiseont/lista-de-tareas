import { defineStore } from "pinia"
import { reactive } from "vue"

export const useTaskStore = defineStore('tasks', () => {
    const tasks = reactive(<any>[])

    function addTask(task){
        tasks.push(<any>task)
    }

    function removeTask(index){
        tasks.splice(index, 1)
    }

    function completeTask(index)
    {
        tasks.value = tasks.map((task, i)=>{
            if(i == index){
                task.status = true
            }

            return task
        })
    }

    return {
        tasks, 
        addTask,
        removeTask,
        completeTask
    }
})