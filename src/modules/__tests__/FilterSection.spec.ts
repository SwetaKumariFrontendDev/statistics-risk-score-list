// To run this file we have to do setup of jest and we can run this file using command "npm run test"

// import { mount } from '@vue/test-utils';
// import FilterSection from '../StatisticDetails/FilterSection.vue';

// describe('FilterSection.vue', () => {
//     it('renders the filter form correctly', () => {
//       const wrapper = mount(FilterSection);
//       expect(wrapper.find('.filters').exists()).toBe(true);
//       expect(wrapper.findAll('.filter-item').length).toBe(3);
//       expect(wrapper.find('.filter-button').exists()).toBe(true);
//     });

//     it('updates the startDate filter on input', async () => {
//         const wrapper = mount(FilterSection);
//         const startDateInput = wrapper.find('#start-date');
//         await startDateInput.setValue('2025-03-26');
//         expect(wrapper.filters.startDate).toBe('2025-03-26');
//       });

//       it('updates the endDate filter on input', async () => {
//         const wrapper = mount(FilterSection);
//         const endDateInput = wrapper.find('#end-date');
//         await endDateInput.setValue('2025-04-01');
//         expect(wrapper.vm.filters.endDate).toBe('2025-04-01');
//       });

//       it('updates the profileVersion filter on input', async () => {
//         const wrapper = mount(FilterSection);
//         const profileVersionInput = wrapper.find('#profile-version');
//         await profileVersionInput.setValue('1.04');
//         expect(wrapper.vm.filters.profileVersion).toBe('1.04');
//       });
// })