<template>
    <div class="resolution-container">
        <h6>RESOLUTIONS</h6>
        <!-- Render the image -->
        <div class="image-wrapper">
            <img :src="testDetails?.resolution?.image_path" alt="Resolution Image" class="resolution-image" />
        </div>

        <!-- Render additional resolution information -->
        <div class="resolution-details">
            <h3>Correction</h3>
            <div v-for="(correction, index) in testDetails?.resolution?.correction" :key="index"
                class="correction-container">
                <h4>
                    <span class="title">{{ correction.title }}</span>
                    <span :class="correction.owner === 'Back Office' ? 'correction-btn' : 'correction-btn1'">{{
                        correction.owner }}</span>
                </h4>
                <p><strong></strong> {{ correction.action }}</p>
                <ol>
                    <li v-for="(step, stepIndex) in correction.steps" :key="stepIndex">{{ step }}</li>
                </ol>
            </div>

            <h3>Prevention</h3>
            <div v-for="(prevention, index) in testDetails?.resolution?.prevention" :key="index"
                class="correction-container">
                <h4>
                    <span class="title">{{ prevention.title }}</span>
                    <span class="prevention-btn">{{ prevention.owner }}</span>
                </h4>
                <p><strong>Action:</strong> {{ prevention.action }}</p>
                <ol>
                    <li v-for="(step, stepIndex) in prevention.steps" :key="stepIndex">{{ step }}</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ResolutionTab',
    props: {
        testDetails: {
            type: Object,
            required: true,
        },
    },
})
</script>

<style scoped>
.resolution-container {
    padding: 20px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
}

.image-wrapper {
    text-align: center;
    margin-bottom: 20px;
}

.resolution-image {
    max-width: 250px;
    height: 250px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.resolution-details h3 {
    margin-top: 20px;
    font-size: 18px;
    color: #000000;
    font-weight: bold;
}

.resolution-details h4 {
    margin: 10px 0;
    font-size: 18px;
    color: #555;
}

.resolution-details p {
    margin: 5px 0;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    color: black;
}

ol {
    padding-left: 20px;
    margin: 10px 0;
    list-style: auto;
    color: #64748B;
    font-size: 0.85rem;
}


.correction-container {
    background-color: white;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.correction-container h4 {
    display: flex;
    justify-content: space-between;
}

.correction-container span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    color: gray;
}

.correction-btn {
    color: #6D28D9 !important;
    border: 1px solid #DDD6FE;
    padding: 8px 15px 8px 15px;
    border-radius: 15px;
    text-transform: uppercase;
    background-color: #DDD6FE;
    font-size: 11px !important;
    text-align: center;
}

.prevention-btn {
    color: #4D7C0F !important;
    border: 1px solid #D9F99D;
    padding: 8px 15px 8px 15px;
    border-radius: 15px;
    text-transform: uppercase;
    background-color: #D9F99D;
    font-size: 11px !important;
    text-align: center;
}
</style>