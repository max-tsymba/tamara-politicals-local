import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api.js';

const REDUX_ONBOARD = 'onboard';

const API_GET_TABLE = '/onboard/main-table';
const REDUX_GET_TABLE = 'onboard/table';

const API_CHANGE_CONTRACT = '/onboard/update/contract';
const REDUX_CHANGE_CONTRACT = 'onboard/changeContract';

const API_UPLOAD_IAL = '/file/upload/interests-and-liabilities';
const REDUX_UPLOAD_IAL = 'onboard/fileIAL';

const API_UPLOAD_CONTRACT = '/file/upload/contract';
const REDUX_UPLOAD_CONTRACT = 'onboard/contract';

const API_GET_COUNTRY = '/onboard/filters/country';
const REDUX_GET_COUNTRY = 'onboard/country';

const API_GET_CURRENCY = '/onboard/filters/currency';
const REDUX_GET_CURRENCY = 'onboard/currency';

const API_GET_DESCRIPTION = '/onboard/filters/description';
const REDUX_GET_DESCRIPTION = 'onboard/description';

const API_GET_INSURER = '/onboard/filters/insurer';
const REDUX_GET_INSURER = 'onboard/insurer';

const API_GET_TREATY_TYPE = '/onboard/filters/treaty-type';
const REDUX_GET_TREATY_TYPE = 'onboard/treaty-type';

const API_REMOVE_CONTRACT = '/onboard/delete';
const REDUX_REMOVE_CONTRACT = 'onboard/removeContract';

const API_COMPARE_DOCUMENTS = '/comparing/compare';
const REDUX_COMPARE_DOCUMENTS = 'onboard/compareDocs';

const API_UPLOAD_FILES = '/file/upload/files';
const REDUX_UPLOAD_FILES = 'onboard/uploadFiles';

const API_PREVIEW_DOC = '/file/download-alt';
const REDUX_PREVIEW_DOC = 'onboard/previewDoc';

export const compareDocumentsAction = createAsyncThunk(
  REDUX_COMPARE_DOCUMENTS,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_COMPARE_DOCUMENTS, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const changeContractAction = createAsyncThunk(
  REDUX_CHANGE_CONTRACT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_CHANGE_CONTRACT, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const deleteContractAction = createAsyncThunk(
  REDUX_REMOVE_CONTRACT,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(API_REMOVE_CONTRACT + '/' + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const getCountryAction = createAsyncThunk(
  REDUX_GET_COUNTRY,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_GET_COUNTRY);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const getPDFPreviewAction = createAsyncThunk(
  REDUX_PREVIEW_DOC,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(API_PREVIEW_DOC + '/' + id, {
        responseType: 'arraybuffer',
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const getCurrencyAction = createAsyncThunk(
  REDUX_GET_CURRENCY,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_GET_CURRENCY);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const getDescriptionAction = createAsyncThunk(
  REDUX_GET_DESCRIPTION,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_GET_DESCRIPTION);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const getInsurerAction = createAsyncThunk(
  REDUX_GET_INSURER,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_GET_INSURER);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const getTreatyTypeAction = createAsyncThunk(
  REDUX_GET_TREATY_TYPE,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_GET_TREATY_TYPE);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const getOnboardTableAction = createAsyncThunk(
  REDUX_GET_TABLE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_GET_TABLE, payload);
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const uplaodFileContractAction = createAsyncThunk(
  REDUX_UPLOAD_CONTRACT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_UPLOAD_CONTRACT, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const uplaodFileIALContractAction = createAsyncThunk(
  REDUX_UPLOAD_IAL,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_UPLOAD_IAL, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const uplaodFilesAction = createAsyncThunk(
  REDUX_UPLOAD_FILES,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_UPLOAD_FILES, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export default REDUX_ONBOARD;
