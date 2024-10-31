import { combineReducers } from 'redux';

import { onboardSlice } from '../slices/onboard';
import { adminDatabaseSlice } from 'store/slices/adminDatabase';

export const rootReducer = combineReducers({
  onboard: onboardSlice,
  adminDatabase: adminDatabaseSlice,
});
