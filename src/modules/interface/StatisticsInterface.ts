export interface Statistic {
    test_code: string;
    plots_with_critical_score: number;
    plots_with_high_score: number;
    plots_with_medium_score: number;
    plots_with_low_score: number;
    total_number_of_plots: number;
    date: string,
    profile_version: string
  }

  export interface Filters {
    startDate: string;
    endDate: string;
    profileVersion: string;
  }