<template>
    <div class="template-base">
        <BaseHeader />
        <div class="content-container">
            <BaseContent />
        </div>
        <BaseFooter class="footer"/>
    </div>
</template>

<script setup>
import { BaseHeader, BaseContent, BaseFooter } from '@/components';

</script>

<style scoped>
.template-base {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    max-width: 1600px;
    margin: 0 auto;
}

.content-container {
    margin-bottom: 24px;
}
.footer {
    margin-top: auto;
}


</style>