<template>
    <table>
        <thead>
            <tr>
                <th>Tarea</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasks" :key="task">
                <td>{{ task.name }}</td>
                <td>
                    <span class="badged complete" v-if="task.status">Completada</span>
                    <span class="badged incomplete" v-else>Incompleta</span>
                </td>
                <td>
                    <div v-if="!task.status">
                        <button @click="$emit('completeTask', index)"  class="btn primary">Tarea completa</button>
                        <button @click="$emit('deleteTask', index)" class="btn danger">Eliminar</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import { toRef  } from 'vue'
    const props = defineProps(['tasks']);
    const tasks = toRef(props.tasks)


</script>
<style lang="sass" scoped>

table
    margin-top: 15px
    width: 100%
td,th 
    text-align: center
    width: 33%
    text-overflow: clip
    margin: 5px
    padding: 5px

.badged
    border-radius: 5px
    padding: 2px
.complete
    background-color: #5adb5e
    color: #ffffff

.incomplete
    background-color: #f23a3a
    color: #000000
</style>