<script setup>
    // Script here 
    
    
</script>
    
<template>
    <!-- HTML here -->
    <div id="welcome-or-goodbye-message" class="m-2">
        <div v-if="mostRecentStudent.name">

            <div v-if="mostRecentStudent.present"> class="alert alert-success">
                Welcome, {{ mostRecentStudent.name }}!
            </div>

            <div v-else class="alert alert-info">
                Goodbye, {{ mostRecentStudent.name }}!
            </div>
            
        </div>
    </div>
</template>
    
<style scoped>
    /*  */
</style>