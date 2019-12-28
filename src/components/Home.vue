<template>
    <div class="row">
        <div class="col-sm-6 col-xs-12">

        <ul class="list-group">
        
        <li v-for="index in 5" :key="index">
            <h1> #{{ index }} Server </h1>
            <app-server-status></app-server-status>
        </li>
        </ul>
        </div>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';
    export default {
        // Local component
            components: {
                'app-server-status': ServerStatus
            }
    }
</script>

<style>

</style>
