<template>
    <div class="button-container">
        <button class="button">{{ props.title }}</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: { type: String, default: '' },
})

</script>

<style scoped>

.button-container {
    position: relative;

}
.button {
    display: flex;
    align-items: center;

    position: relative;
    z-index: 2;

    height: 32px;
    padding: 0 24px;

    border: none;
    outline: none;
    background: #1F2634;
    color: #fff;
    border-radius: 6px;

    cursor: pointer;

    overflow: hidden;

}

.button:hover {
    padding: 0 22px;
    border: 1px solid #1F2634;
    background: #fff;
    color: #1F2634;
}

.button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1F2634;
    z-index: -1;
    transition: transform 0.3s ease; 
}
.button:hover::before {
    transform: translateX(-100%);       
}

</style>