import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';

import {
  changeContractAction,
  compareDocumentsAction,
  deleteContractAction,
  getCountryAction,
  getCurrencyAction,
  getDescriptionAction,
  getInsurerAction,
  getOnboardTableAction,
  getPDFPreviewAction,
  getTreatyTypeAction,
  uplaodFileContractAction,
  uplaodFileIALContractAction,
  uplaodFilesAction,
} from './actions';

import { getBaseOnboardData } from 'helpers/parser';

const useOnboard = () => {
  const dispatch = useDispatch();
  const { loading, onboardTable, filters, compareDocs } = useSelector(
    (state) => state.onboard,
  );
  const isOnboardLoading = loading === 'loading';

  const onboardData = useMemo(() => {
    if (onboardTable.body) return getBaseOnboardData([...onboardTable.body]);
    return [];
  }, [onboardTable]);

  const onboardHeaders = useMemo(() => {
    if (onboardTable.headers) return onboardTable?.headers;
    return [];
  }, [onboardTable]);

  const getOnboardTable = useCallback(
    async (payload) => {
      const response = await dispatch(getOnboardTableAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const deleteContract = useCallback(
    async (id) => {
      const response = await dispatch(deleteContractAction(id));
      return response.payload;
    },
    [dispatch],
  );

  const changeContract = useCallback(
    async (payload) => {
      const response = await dispatch(changeContractAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const getCountry = useCallback(async () => {
    const response = await dispatch(getCountryAction());
    return response.payload;
  }, [dispatch]);

  const getCurrency = useCallback(async () => {
    const response = await dispatch(getCurrencyAction());
    return response.payload;
  }, [dispatch]);

  const getDescription = useCallback(async () => {
    const response = await dispatch(getDescriptionAction());
    return response.payload;
  }, [dispatch]);

  const getInsurer = useCallback(async () => {
    const response = await dispatch(getInsurerAction());
    return response.payload;
  }, [dispatch]);

  const getTreatyType = useCallback(async () => {
    const response = await dispatch(getTreatyTypeAction());
    return response.payload;
  }, [dispatch]);

  const uplaodContract = useCallback(
    async (payload) => {
      const response = await dispatch(uplaodFileContractAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const setCompareDocs = useCallback(
    async (payload) => {
      const response = await dispatch(compareDocumentsAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const uplaodIAL = useCallback(
    async (payload) => {
      const response = await dispatch(uplaodFileIALContractAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const uploadFiles = useCallback(
    async (payload) => {
      const response = await dispatch(uplaodFilesAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const getPDFPreview = useCallback(
    async (id) => {
      const response = await dispatch(getPDFPreviewAction(id));
      return response.payload;
    },
    [dispatch],
  );

  return {
    getPDFPreview,
    uploadFiles,
    changeContract,
    deleteContract,
    getCountry,
    getCurrency,
    getDescription,
    getInsurer,
    getTreatyType,
    filters,
    uplaodIAL,
    uplaodContract,
    getOnboardTable,
    onboardData,
    onboardHeaders,
    isOnboardLoading,
    onboardTable,
    compareDocs,
    setCompareDocs,
  };
};

export default useOnboard;
