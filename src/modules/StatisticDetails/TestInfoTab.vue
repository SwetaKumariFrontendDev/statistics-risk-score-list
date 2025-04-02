<template>
    <div class="row">
        <div class="col-sm-4 test-details">
            <div class="card">
                <p>Group</p>
                <p><strong>{{ testDetails?.test_group }}</strong></p>
            </div>
        </div>
        <div class="col-sm-4 test-details" >
            <div class="card">
                <p>Geospatial Input </p>
                <p><strong>{{ testDetails?.geospatial_input }}</strong></p>
            </div>
        </div>
        <div class="col-sm-4 test-details">
            <div class="card">
                <p>Test version</p>
                <p><strong>{{ testDetails?.test_version }}</strong></p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-4 test-details">
            <div class="card">
                <p>Risk classification</p>
                <p><strong>{{ testDetails?.risk_classification }}</strong></p>
            </div>
        </div>
        <div class="col-sm-4 test-details">
            <div class="card">
                <p>Threshold specificity </p>
                <p><strong>{{ testDetails?.threshold_specificity }}</strong></p>
            </div>
        </div>
    </div>

    <div class="test-info-container">
        <h5 class="test-info-title">Test Info</h5>
        <div>
            <strong>Short description</strong>
            <p>{{ testDetails?.short_description }}</p> 
        </div>
        <div>
            <strong>Technical Details</strong>
            <p>{{ testDetails?.technical_details }}</p> 
        </div>
        <div>
            <strong>Background</strong>
            <p>{{ testDetails?.background }}</p> 
        </div>
        <div>
            <strong>Exceptions</strong>
            <p>{{ testDetails?.exceptions }}</p> 
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TestInfoTab',
    props: {
        testDetails: {
            type: Object,
            required: true,
        },
    },
})
</script>

<style>
.card {
    background: #F8FAFC;
    padding: 12px;
    border-radius: 4px;
    height: 80px;
    border: none;
}

.card p {
    margin-bottom: 0.5rem !important;
    color: #94A3B8;
    text-transform: uppercase;
}
.card p strong {
    color: #64748B;
    text-transform: initial;
}

.test-details{
    margin-bottom: 1.75rem;
}

.test-info-title{
    color: #94A3B8;
    margin-bottom: 1.25rem;
    font-size: 14px;
}
.test-info-container p{
    color: #64748B;
    padding-top: 0.5rem;
}
</style>