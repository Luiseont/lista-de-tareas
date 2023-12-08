<template>
   <section>
    <div class="buttons">
        <input class="control" maxlength="30" type="text" name="task" v-model="tasksname">
        <button class="btn primary" @click="add()">
            agregar
        </button>
    </div>
    <div>
        <TaskTable :tasks="tasks" @completeTask="complete" @deleteTask="remove"></TaskTable>
    </div>
   </section>
</template>
<script setup lang="ts">
    import {ref} from 'vue' 
    import { useTaskStore } from '../stores/TaskStore'
    import { storeToRefs } from "pinia";
    
    const { tasks } = storeToRefs(useTaskStore())
    const { addTask, removeTask, completeTask } = useTaskStore()

    const tasksname = ref('')

    function add()
    {
        if(tasksname.value == ""){
            alert('La tarea no puede estar vacia')
            return false
        }
        addTask({name:tasksname.value, status:false})
        tasksname.value = ""
    }

    function remove(index)
    {
        removeTask(index)
    }

    function complete(index)
    {
        completeTask(index)
    }

</script>