<template>
    <transition-group tag="div" class="draggable-container">
        <draggable :list="cards" v-bind="dragOptions" @start="drag = true" @end="drag = false" item-key="index" key='key'>
            <template #item="{ element }">
                <BaseCard :title="element.title" :animated="element.animated">
                    <BaseKeyValue :options="element.options" />
                    <div v-if="element.button" class="button">
                        <BaseButton @click="onRedirect" :title="element.button.title" />
                    </div>
                </BaseCard>
            </template>
        </draggable>
    </transition-group>
</template>

<script setup>
import { ref } from 'vue';
import { BaseButton, BaseCard, BaseKeyValue } from '@/components/UI';
import draggable from 'vuedraggable';

const onRedirect = () => {
    window.location.href = "/some-action";
}

const drag = ref(false);

const options = ref({
    'FLGID': 'будет позже',
    'Маркировка': 'ZGHMP',
    'Мин сумма заказа': '100000',
    'Комиссия': '7%'
});

const cards = ref([
    {
        title: 'zzz',
        options: options
    },
    {
        title: 'Настройка промокода',
        options: options,
        animated: true,
    },
    {
        title: 'Пароль и телефон',
        options: options,
        button: {
            title: 'Сменить пароль'
        }
    }
]);

const dragOptions = ref({
    animation: 200,
});
</script>

<style scoped>
.draggable-container> :first-child {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
    gap: 64px;
    justify-content: center;
}

.button {
    display: flex;
    justify-content: flex-start;
}
</style>
