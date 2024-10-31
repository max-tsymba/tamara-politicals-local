import { createSlice } from '@reduxjs/toolkit';

import REDUX_ONBOARD, {
  changeContractAction,
  compareDocumentsAction,
  deleteContractAction,
  getCountryAction,
  getCurrencyAction,
  getDescriptionAction,
  getInsurerAction,
  getOnboardTableAction,
  getTreatyTypeAction,
} from './actions';

const initialState = {
  loading: 'not loaded',
  onboardTable: [],
  compareDocs: {},
  filters: {},
};

const onboardSlice = createSlice({
  name: REDUX_ONBOARD,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(compareDocumentsAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(compareDocumentsAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.compareDocs = action.payload.data;
    });
    builder.addCase(compareDocumentsAction.rejected, (state) => {
      state.loading = 'error';
      state.compareDocs = {};
    });

    builder.addCase(getOnboardTableAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getOnboardTableAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.onboardTable = action.payload;
    });
    builder.addCase(getOnboardTableAction.rejected, (state) => {
      state.loading = 'error';
      state.onboardTable = [];
    });

    builder.addCase(changeContractAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(changeContractAction.fulfilled, (state) => {
      state.loading = 'loaded';
    });
    builder.addCase(changeContractAction.rejected, (state) => {
      state.loading = 'error';
    });

    builder.addCase(getCountryAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getCountryAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.filters['country'] = action.payload.data;
    });
    builder.addCase(getCountryAction.rejected, (state) => {
      state.loading = 'error';
    });

    builder.addCase(getCurrencyAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getCurrencyAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.filters['currency'] = action.payload.data;
    });
    builder.addCase(getCurrencyAction.rejected, (state) => {
      state.loading = 'error';
    });

    builder.addCase(getDescriptionAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getDescriptionAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.filters['description'] = action.payload.data;
    });
    builder.addCase(getDescriptionAction.rejected, (state) => {
      state.loading = 'error';
    });

    builder.addCase(getInsurerAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getInsurerAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.filters['insurer'] = action.payload.data;
    });
    builder.addCase(getInsurerAction.rejected, (state) => {
      state.loading = 'error';
    });

    builder.addCase(getTreatyTypeAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getTreatyTypeAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.filters['treaty type'] = action.payload.data;
    });
    builder.addCase(getTreatyTypeAction.rejected, (state) => {
      state.loading = 'error';
    });

    builder.addCase(deleteContractAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(deleteContractAction.fulfilled, (state) => {
      state.loading = 'loaded';
    });
    builder.addCase(deleteContractAction.rejected, (state) => {
      state.loading = 'error';
    });
  },
});

export default onboardSlice.reducer;
