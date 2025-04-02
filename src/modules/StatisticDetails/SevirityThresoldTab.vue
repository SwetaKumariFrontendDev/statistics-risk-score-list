<template>
    <h5 class="sevirity-title">SEVIRITY THRESHOLDS</h5>
    <div class="container mt-4">

        <!-- Header Section -->
        <div class="row header">
            <div class="col header-critical">CRITICAL</div>
            <div class="col header-warning">HIGH</div>
            <div class="col header-yellow">MEDIUM</div>
            <div class="col header-success">LOW</div>
        </div>

        <!-- Content Section -->
        <div class="row header mt-3" v-if="testDetails?.test_thresholds?.universal">
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.universal?.critical_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.universal?.high_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.universal?.medium_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.universal?.low_score?.description }}
            </div>
        </div>

        <!-- Divider -->
        <div class="row test-name mt-3" v-if="testDetails?.test_thresholds?.polygon">
            <div class="col-12 font-weight-bold">
                {{ testDetails?.test_name }}
            </div>
        </div>

        <!-- Polygon Section -->
        <div class="row header mt-3" v-if="testDetails?.test_thresholds?.polygon">
            <div class="col-12 font-weight-bold">POLYGON:</div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.polygon?.critical_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.polygon?.high_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.polygon?.medium_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.polygon?.low_score?.description }}
            </div>
        </div>

        <!-- Geopoint Section -->
        <div class="row header mt-3" v-if="testDetails?.test_thresholds?.geopoint">
            <div class="col-12 font-weight-bold">GEOPOINT:</div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.geopoint?.critical_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.geopoint?.critical_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.geopoint?.critical_score?.description }}
            </div>
            <div class="col border p-3">
                {{ testDetails?.test_thresholds?.geopoint?.critical_score?.description }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SevirityThresoldTab',
    props: {
        testDetails: {
            type: Object,
            required: true,
        },
    },
})
</script>

<style scoped>
.sevirity-title {
    color: #94A3B8;
    margin-bottom: 1.25rem;
    font-size: 14px;
}

.header-critical {
    border-top-left-radius: 12px;
    background-color: #FECACA;
}

.header-warning{
    background-color: #FED7AA;
}

.header-success {
    border-top-right-radius: 12px;
    background-color: #BBF7D0;
}

.header-yellow {
    background-color:#FEF08A;
}

.header-critical,
.header-success,
.header-yellow,
.header-warning {
    font-weight: bold;
    height: 42px;
    padding: 15px;
    color: #334155;
}

.container {
    max-width: 1200px;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.font-weight-bold {
    font-weight: bold;
}

.test-name .font-weight-bold{
  text-align: center;
}

.border {
    border: none !important;
}

.header {
    border-bottom: 1px solid #e3dddd;
}
</style>
