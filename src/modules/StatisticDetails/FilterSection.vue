<template>
    <div class="filters">
      <div class="filter-item">
        <label for="start-date">Start Date:</label>
        <input id="start-date" type="date" v-model="filters.startDate" />
      </div>
      <div class="filter-item">
        <label for="end-date">End Date:</label>
        <input id="end-date" type="date" v-model="filters.endDate" />
      </div>
      <div class="filter-item">
        <label for="profile-version">Profile Version:</label>
        <input id="profile-version" type="text" v-model="filters.profileVersion" placeholder="e.g., 1.04" />
      </div>
      <button class="filter-button" @click="applyFilters">Apply Filters</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { Filters } from '../interface/StatisticsInterface';
  
  export default defineComponent({
    name: 'FilterSection',
    emits: ['apply-filters'],

    setup(_, { emit }) {
      const filters = ref<Filters>({
        startDate: '',
        endDate: '',
        profileVersion: '',
      });

      const applyFilters = (): void => {
      emit('apply-filters', filters.value);
    };
  
      return {
        filters,
        applyFilters,
      };
    },
  });
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
  }
  
  .filter-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 200px;
  }
  
  .filter-item label {
    font-size: 14px;
    font-weight: bold;
    color: #555555;
  }
  
  .filter-item input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  
  .filter-item input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  .filter-button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    margin-top: 1.5rem;
  }
  
  .filter-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
  
  .filter-button:active {
    transform: translateY(0);
  }
  
  @media (max-width: 600px) {
    .filter-item {
      width: 100%;
    }
  
    .filter-button {
      width: 100%;
      text-align: center;
    }
  }
  </style>
  