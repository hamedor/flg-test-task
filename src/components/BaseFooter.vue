<template>
    <div class="footer">
        <div v-if="error">
            Ошибка: {{ error }}
        </div>
        <div v-else-if="activity">
            Activity: {{ activity.activity }}
        </div>
        <div v-else>
            Загрузка
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activity = ref(null);
const error = ref(null);

onMounted(async () => {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity');
        if (!response.ok) {
            throw new Error(`Ошибка!: ${response.status}`);
        }
        
        activity.value = await response.json();
    } catch (e) {
        error.value = e.message;
    }
});
</script>

<style>
.footer {
    padding-bottom: 20px;
}
</style>