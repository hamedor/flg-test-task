<template>
    <div class="card">
        <div class="card-header">
            <p class="card-title">
                {{ props.title }}
            </p>
            <GearIcon />
        </div>

        <div class="card-content" :class="{ 'sky': animated }">

            <template v-if="!animated">
                <slot ></slot>
            </template>
     
            <template v-else >
                <div class="wrapper">
                    <UfoIcon class="ufo" />
                    <div class="beam"></div> 
                    <MermaidIcon class="mermaid"/>
                </div>
                <div class="animation">
                    
                    <div class="water"></div>
                </div>
            </template>

        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import GearIcon from '@/assets/icons/GearIcon.vue';
import UfoIcon from '@/assets/icons/UfoIcon.vue';
import MermaidIcon from '@/assets/icons/MermaidIcon.vue';

const props = defineProps({
    title: { type: String, default: '' },
    animated: { type: Boolean, default: false }
})



</script>


<style scoped>
.card {
    padding: 16px;
    width: 100%;
    height: 320px;
    box-shadow: 0px 2px 8px 0px #0D335726, 0px 1px 4px 0px #0B4E9C1A;
    border-radius: 16px;
    background: #fff;
    color: #1F2025;

    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.card-content {
    position: relative;
    padding: 16px;
    flex: 1;
}

.card-header {
    border-bottom: 1px solid #C0C8D2;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-title {
    font-weight: 700;
}

.sky {
    background-color: skyblue;
    margin: 10px -32px 0;
}

.animation {
    position: relative;
    background: blue;
    height: 40px;
    bottom: -100%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

.water {
    position: absolute;
    bottom: 40px;
    width: 100%;
    height: 20px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" preserveAspectRatio="none"><path d="M0,10 Q2.5,0 5,10 Q2.5,20 0,10" fill="blue"/></svg>');
    background-size: auto;
    animation: wave 6s linear infinite;
}

.ufo {
    position: absolute;
    top: 0;
    left: 0;
    animation: moveUfo 10s forwards infinite;

}

.water::after {
    background-color: aqua;
    height: 20px;
    width: 100%;
}

.beam {
    position: absolute;
    bottom: -18px;
    left: 0;
    width: 20px;
    height: 95%;
    background-color: transparent;
    animation: beamColor 10s forwards infinite;

}

.mermaid {
    position: absolute;
    bottom: 0;
    left: 78%;
    animation: moveMermaid 10s forwards infinite;
}

@keyframes wave {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-x: 100%;
    }
}

@keyframes moveUfo {
    0% {
        left: 0;
    }
    30%, 70% {
        left: 80%;
    }
    85%, 100% {
        left: 100%;
    }
}

@keyframes beamColor {
    0% {
        left: 0;
        background-color: transparent;
    }
    30%, 70% {
        left: 82%;
        
    }
    80%,85% {
        background-color: yellow;
    }
    85%, 100% {
        left: 100%;
    }
}


@keyframes moveMermaid {
    0% {
        bottom: 0;
        left: 81%;
    }
    30%, 70% {
        bottom: 0;
        left: 81%;
        
    }
    70%,85% {
        bottom: 78%;
        left: 81%;
    }
    85%, 100% {
        bottom: 78%;
        left: 100%;
    }
}

</style>