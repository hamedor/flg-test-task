<template>
    <div class="key-value">
        <div class="key-value-item" v-for="(value, key) in props.options" :key="key">
            <p class="key">{{ key }}:</p><p class="value">{{ value }}</p>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    options: {type: Object, default: () => {}}
})

</script>

<style scoped>
.key-value-item {
    display: flex;
    gap: 16px;
}
.key {
    font-weight: 700;
}

</style>