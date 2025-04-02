<template>
    <div class="container justify-center">
        <h1 class="title border-b border-slate-200 text-lg font-bold">Test Statistics by Risk Score</h1>

        <FilterSection @apply-filters="applyFilters" />

        <div v-for="(item, index) in filteredStatistics" :key="index" class="test-card">
            <router-link :to="{
                name: 'StatisticsDetailsCmp',
                params: { testCode: item.test_code },
                query: {
                    test_profile: item.profile_version,
                    test_profile_version: item.profile_version,
                },
            }" class="test-code">
                {{ item.test_code }}
            </router-link>
            <ul class="statistics-list">
                <li><strong>Critical Score:</strong> {{ item.plots_with_critical_score }} plots</li>
                <li><strong>High Score:</strong> {{ item.plots_with_high_score }} plots</li>
                <li><strong>Medium Score:</strong> {{ item.plots_with_medium_score }} plots</li>
                <li><strong>Low Score:</strong> {{ item.plots_with_low_score }} plots</li>
                <li><strong>Total Plots:</strong> {{ item.total_number_of_plots }} plots</li>
                <li><strong>Profile Version:</strong> {{ item.profile_version }}</li>
                <li><strong>Date:</strong> {{ item.date }}</li>
            </ul>
        </div>
        <p v-if="filteredStatistics.length === 0" class="no-data">No statistics available.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import type { Statistic, Filters } from '../interface/StatisticsInterface';
import FilterSection from './FilterSection.vue';
import axios from 'axios';

export default defineComponent({
    name: 'statisticsList',
    components: {
        FilterSection,
    },
    setup() {
        const statistics = ref<Statistic[]>([]);
        const sortedStatistics = ref<Statistic[]>([]);

        const filters = ref<Filters>({
            startDate: '',
            endDate: '',
            profileVersion: '',
        });

        const fetchStatistics = async (): Promise<void>  => {
            try {
                const response = await axios.post(
                    'http://localhost:9100/test_statistics',
                    { offset: 0, limit: 10 },
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    }
                );
                statistics.value = response.data.data;
                //console.log(response.data.data)
                sortStatistics();
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };


        const filteredStatistics = computed(() => {
            return statistics.value.filter((item) => {
                const withinDateRange =
                    (!filters.value.startDate || new Date(item.date) >= new Date(filters.value.startDate)) &&
                    (!filters.value.endDate || new Date(item.date) <= new Date(filters.value.endDate));
                const matchesProfile =
                    !filters.value.profileVersion || item.profile_version === filters.value.profileVersion;

                return withinDateRange && matchesProfile;
            });
        });

        const applyFilters = (appliedFilters) => {
            filters.value = appliedFilters;
        };

        const sortStatistics = (): void => {
            // Sort by critical risk plots
            const sorted = statistics.value.sort((a, b) => {
                // Compare critical plots first
                if (a.plots_with_critical_score !== b.plots_with_critical_score) {
                    return b.plots_with_critical_score - a.plots_with_critical_score; // Descending order of critical plots
                }
                // If critical plots are equal, consider total plots
                return b.total_number_of_plots - a.total_number_of_plots;
            });

            sortedStatistics.value = sorted;
        };

        onMounted(() => {
            fetchStatistics();
        });

        return {
            sortedStatistics,
            applyFilters,
            filters,
            filteredStatistics,
        };
    },
});
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.title {
  font-size: 1.8rem;
  color: #333333;
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.test-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.test-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.test-code {
  font-size: 1.4rem;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 10px;
  display: inline-block;
  transition: color 0.2s;
}

.test-code:hover {
  color: #0056b3;
}

.statistics-list {
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0;
  color: #555555;
}

.statistics-list li {
  margin-bottom: 5px;
}

.statistics-list strong {
  color: #333333;
}

.no-data {
  text-align: center;
  font-size: 1.2rem;
  color: #999999;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .test-card {
    padding: 10px;
  }

  .title {
    font-size: 1.5rem;
  }

  .test-code {
    font-size: 1.2rem;
  }

  .statistics-list li {
    font-size: 0.9rem;
  }
}
</style>
