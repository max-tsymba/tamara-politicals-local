import REDUX_ONBOARD, {
  getOnboardTableAction,
  uplaodFileContractAction,
  uplaodFileIALContractAction,
  getCountryAction,
  getCurrencyAction,
  getDescriptionAction,
  getInsurerAction,
  getTreatyTypeAction,
  deleteContractAction,
  changeContractAction,
  compareDocumentsAction,
} from './actions';

import useOnboard from './useOnboard';

import onboardSlice from './slice';

export {
  getCountryAction,
  getCurrencyAction,
  getDescriptionAction,
  getInsurerAction,
  getTreatyTypeAction,
  getOnboardTableAction,
  uplaodFileContractAction,
  uplaodFileIALContractAction,
  REDUX_ONBOARD,
  useOnboard,
  onboardSlice,
  changeContractAction,
  deleteContractAction,
  compareDocumentsAction,
};
