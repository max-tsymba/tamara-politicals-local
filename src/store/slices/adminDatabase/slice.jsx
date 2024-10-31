import { createSlice } from '@reduxjs/toolkit';

import REDUX_DATABASE, {
  getArticleDatabaseAction,
  getAttachmentsDatabaseAction,
  getDescriptionDatabseAction,
  getInsurerDatabaseAction,
  getPeopleDatabaseAction,
  getTreatyTypeDatabaseAction,
} from './actions';

const initialState = {
  loading: 'not loaded',
  peopleDatabase: [],
  insurerDatabase: [],
  treatyTypeDatabase: [],
  descriptionDatabase: [],
  attachmentsDatabase: [],
  articleDatabase: [],
  filters: {},
};

const adminDatabaseSlice = createSlice({
  name: REDUX_DATABASE,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPeopleDatabaseAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getPeopleDatabaseAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.peopleDatabase = action.payload.data;
      state.filters['underwriter'] = action.payload.data;
    });
    builder.addCase(getPeopleDatabaseAction.rejected, (state) => {
      state.loading = 'error';
      state.peopleDatabase = [];
    });

    builder.addCase(getInsurerDatabaseAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getInsurerDatabaseAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.insurerDatabase = action.payload.data;
      state.filters['insurer'] = action.payload.data;
    });
    builder.addCase(getInsurerDatabaseAction.rejected, (state) => {
      state.loading = 'error';
      state.insurerDatabase = [];
    });

    builder.addCase(getTreatyTypeDatabaseAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getTreatyTypeDatabaseAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.treatyTypeDatabase = action.payload.data;
      state.filters['treaty type'] = action.payload.data;
    });
    builder.addCase(getTreatyTypeDatabaseAction.rejected, (state) => {
      state.loading = 'error';
      state.treatyTypeDatabase = [];
    });

    builder.addCase(getDescriptionDatabseAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getDescriptionDatabseAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.descriptionDatabase = action.payload.data;
      state.filters['description'] = action.payload.data;
    });
    builder.addCase(getDescriptionDatabseAction.rejected, (state) => {
      state.loading = 'error';
      state.treatyTypeDatabase = [];
    });

    builder.addCase(getAttachmentsDatabaseAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getAttachmentsDatabaseAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.attachmentsDatabase = action.payload.data;
    });
    builder.addCase(getAttachmentsDatabaseAction.rejected, (state) => {
      state.loading = 'error';
      state.attachmentsDatabase = [];
    });

    builder.addCase(getArticleDatabaseAction.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(getArticleDatabaseAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.articleDatabase = action.payload.data;
    });
    builder.addCase(getArticleDatabaseAction.rejected, (state) => {
      state.loading = 'error';
      state.articleDatabase = [];
    });
  },
});

export default adminDatabaseSlice.reducer;
