<template>
    <div class="details-container justify-center">
        <h5 class="title font-bold">{{ testDetails?.test_code }} {{ testDetails?.test_name }}</h5>
        <div class="tabs border-b border-slate-200 text-lg">
            <button v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }"
                @click="activeTab = index">
                {{ tab }}
            </button>
        </div>

        <div class="tab-content">
            <div v-if="activeTab === 0">
                <TestInfoTab :testDetails="testDetails" />
            </div>

            <div v-if="activeTab === 1">
                <SevirityThresoldTab :testDetails="testDetails"/>
            </div>

            <div v-if="activeTab === 2">
                <ResolutionTab :testDetails="testDetails" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {  useRoute } from 'vue-router';
import TestInfoTab from './TestInfoTab.vue'
import ResolutionTab from './ResolutionsTab.vue'
import SevirityThresoldTab from './SevirityThresoldTab.vue'
import axios from "axios";

export default defineComponent({
    name: 'StatisticsDetailsCmp',
    components: {
        TestInfoTab,
        ResolutionTab,
        SevirityThresoldTab
    },
    props: {
        testCode: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const testDetails = ref(null);
        const activeTab = ref<number>(0);
        const tabs = ref<string[]>(["Test Info", "Severity Threshold", "Resolutions"]);
        const route = useRoute();
        const testProfile = route.query.test_profile as string;
        const testCode = route.params.testCode as string;

        const fetchTestDetails = async (): Promise<void>  => {
            try {
                const response = await axios.post("http://localhost:9100/test_detail/read", {
                    test_profile: "EUDR",
                    test_profile_version: testProfile,
                    test_code: testCode,
                });
                testDetails.value = response.data;
                console.log(testDetails.value)
            } catch (error) {
                console.error("Error fetching test details:", error);
            }
        };

        onMounted(() => fetchTestDetails());

        return { testDetails, activeTab, tabs };
    },
});
</script>

<style scoped>
.details-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    font-size: 14px;
}

.details-container h5{
    font-weight: bold;
}

.tabs {
    display: flex;
    gap: 10px;
}

button {
    padding: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    background: #f9f9f9;
    border: none;
    background: transparent;
    font-weight: 700;
    color: #23DB85;
    font-size: 14px;
}

button.active {
    color: #23DB85;
    border-bottom: 3px solid #23DB85;
    background-color: #f0fff4;
    background: transparent;
   
}

.tab-content {
    margin-top: 20px;
}

.row {
    margin-bottom: 2rem;
}
</style>