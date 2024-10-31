import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api.js';

const REDUX_DATABASE = 'database';

const API_PEOPLE_ALL = '/people/underwrites/all';
const REDUX_PEOPLE_ALL = 'database/people';
const API_PEOPLE_CREATE = '/people/underwriter';
const REDUX_PEOPLE_CREATE = 'database/peopleCreate';
const API_PEOPLE_UPDATE = '/people/underwriter/update';
const REDUX_PEOPLE_UPDATE = 'database/peopleUpdate';
const API_PEOPLE_DELETE = '/people/delete';
const REDUX_PEOPLE_DELETE = 'database/peopleDelete';
const API_PEOPLE_CLIPBOARD = '/people/clipboard/parse';
const REDUX_PEOPLE_CLIPBOARD = 'database/peopleClipboard';
const API_PEOPLE_INSERT = '/people/underwriter/batch/insert';
const REDUX_PEOPLE_INSERT = 'database/peopleInsert';

const API_INSURER_ALL = '/insurer/all';
const REDUX_INSURER_ALL = 'database/insurer';
const API_INSURER_CREATE = '/insurer';
const REDUX_INSURER_CREATE = 'database/insurerCreate';
const API_INSURER_UPDATE = '/insurer/update';
const REDUX_INSURER_UPDATE = 'database/insurerUpdate';
const API_INSURER_DELETE = '/insurer/delete';
const REDUX_INSURER_DELETE = 'database/insurerDelete';
const API_INSURER_CLIPBOARD = '/insurer/clipboard/parse';
const REDUX_INSURER_CLIPBOARD = 'database/insurerClipboard';
const API_INSURER_INSERT = '/insurer/batch/insert';
const REDUX_INSURER_INSERT = 'database/insurerInsert';

const API_TREATY_TYPE_ALL = '/treaty/treaty/all';
const REDUX_TREATY_TYPE_ALL = 'database/treaty';
const API_TREATY_TYPE_CREATE = '/treaty';
const REDUX_TREATY_TYPE_CREATE = 'database/treatyCreate';
const API_TREATY_TYPE_UPDATE = '/treaty/update';
const REDUX_TREATY_TYPE_UPDATE = 'database/treatyUpdate';
const API_TREATY_TYPE_DELETE = '/treaty/delete';
const REDUX_TREATY_TYPE_DELETE = 'database/treatyDelete';
const API_TREATY_TYPE_CLIPBOARD = '/treaty/clipboard/parse';
const REDUX_TREATY_TYPE_CLIPBOARD = 'database/treatyClipboard';
const API_TREATY_TYPE_INSERT = '/treaty/batch/insert';
const REDUX_TREATY_TYPE_INSERT = 'database/treatyInsert';

const API_DESCRIPTION_ALL = '/description/all';
const REDUX_DESCRIPTION_ALL = 'databse/description';
const API_DESCRIPTION_CREATE = '/description';
const REDUX_DESCRIPTION_CREATE = 'database/descriptionCreate';
const API_DESCRIPTION_UPDATE = '/description/update';
const REDUX_DESCRIPTION_UPDATE = 'database/descriptionUpdate';
const API_DESCRIPTION_DELETE = '/description/delete';
const REDUX_DESCRIPTION_DELETE = 'database/descriptionDelete';
const API_DESCRIPTION_CLIPBOARD = '/description/clipboard/parse';
const REDUX_DESCRIPTION_CLIPBOARD = 'database/descriptionClipboard';
const API_DESCRIPTION_INSERT = '/description/batch/insert';
const REDUX_DESCRIPTION_INSERT = 'database/descriptionInsert';

const API_ATTACHMENTS_ALL = '/clauses/attachments/all';
const REDUX_ATTACHMENTS_ALL = 'database/attachments';
const API_ATTACHMENTS_CREATE = '/clauses/attachments';
const REDUX_ATTACHMENTS_CREATE = 'database/attachmentsCreate';
const API_ATTACHMENTS_UPDATE = '/clauses/attachments/update';
const REDUX_ATTACHMENTS_UPDATE = 'database/attachmentsUpdate';
const API_ATTACHMENTS_DELETE = '/clauses/delete';
const REDUX_ATTACHMENTS_DELETE = 'database/attachmentsDelete';
const API_ATTACHMENTS_CLIPBOARD = '/clauses/clipboard/parse';
const REDUX_ATTACHMENTS_CLIPBOARD = 'database/attachmentsClipboard';
const API_ATTACHMENTS_INSERT = '/clauses/attachment/batch/insert';
const REDUX_ATTACHMENTS_INSERT = 'database/attachmentsInsert';

const API_ARTICLES_ALL = '/clauses/articles/all';
const REDUX_ARTICLES_ALL = 'database/articles';
const API_ARTICLES_CREATE = '/clauses/article';
const REDUX_ARTICLES_CREATE = 'database/articlesCreate';
const API_ARTICLES_UPDATE = '/clauses/article/update';
const REDUX_ARTICLES_UPDATE = 'database/articlesUpdate';
const API_ARTICLES_DELETE = '/clauses/delete';
const REDUX_ARTICLES_DELETE = 'database/articlesDelete';
const API_ARTICLES_CLIPBOARD = '/clauses/clipboard/parse';
const REDUX_ARTICLES_CLIPBOARD = 'database/articlesClipboard';
const API_ARTICLES_INSERT = '/clauses/article/batch/insert';
const REDUX_ARTICLES_INSERT = 'database/articlesInsert';

// Underwriter
export const getPeopleDatabaseAction = createAsyncThunk(
  REDUX_PEOPLE_ALL,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_PEOPLE_ALL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const createPeopleDatabaseAction = createAsyncThunk(
  REDUX_PEOPLE_CREATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_PEOPLE_CREATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const updatePeopleDatabaseAction = createAsyncThunk(
  REDUX_PEOPLE_UPDATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_PEOPLE_UPDATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const deletePeopleDatabaseAction = createAsyncThunk(
  REDUX_PEOPLE_DELETE,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(API_PEOPLE_DELETE + '/' + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const clipboardPeopleDatabaseAction = createAsyncThunk(
  REDUX_PEOPLE_CLIPBOARD,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_PEOPLE_CLIPBOARD, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const insertPeopleDatabaseAction = createAsyncThunk(
  REDUX_PEOPLE_INSERT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_PEOPLE_INSERT, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);
/* --- */

// Insurer
export const getInsurerDatabaseAction = createAsyncThunk(
  REDUX_INSURER_ALL,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_INSURER_ALL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const createInsurerDatabaseAction = createAsyncThunk(
  REDUX_INSURER_CREATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_INSURER_CREATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const updateInsurerDatabaseAction = createAsyncThunk(
  REDUX_INSURER_UPDATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_INSURER_UPDATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const deleteInsurerDatabaseAction = createAsyncThunk(
  REDUX_INSURER_DELETE,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(API_INSURER_DELETE + '/' + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const clipboardInsurerDatabaseAction = createAsyncThunk(
  REDUX_INSURER_CLIPBOARD,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_INSURER_CLIPBOARD, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const insertInsurerDatabaseAction = createAsyncThunk(
  REDUX_INSURER_INSERT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_INSURER_INSERT, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);
/* --- */

// Treaty Type
export const getTreatyTypeDatabaseAction = createAsyncThunk(
  REDUX_TREATY_TYPE_ALL,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_TREATY_TYPE_ALL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const createTreatyTypeDatabaseAction = createAsyncThunk(
  REDUX_TREATY_TYPE_CREATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_TREATY_TYPE_CREATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const updateTreatyTypeDatabaseAction = createAsyncThunk(
  REDUX_TREATY_TYPE_UPDATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_TREATY_TYPE_UPDATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const deleteTreatyTypeDatabaseAction = createAsyncThunk(
  REDUX_TREATY_TYPE_DELETE,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(API_TREATY_TYPE_DELETE + '/' + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const clipboardTreatyTypeDatabaseAction = createAsyncThunk(
  REDUX_TREATY_TYPE_CLIPBOARD,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_TREATY_TYPE_CLIPBOARD, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const insertTreatyTypeDatabaseAction = createAsyncThunk(
  REDUX_TREATY_TYPE_INSERT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_TREATY_TYPE_INSERT, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);
/* --- */

// Description
export const getDescriptionDatabseAction = createAsyncThunk(
  REDUX_DESCRIPTION_ALL,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_DESCRIPTION_ALL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const createDescriptionDatabaseAction = createAsyncThunk(
  REDUX_DESCRIPTION_CREATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_DESCRIPTION_CREATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const updateDescriptionDatabaseAction = createAsyncThunk(
  REDUX_DESCRIPTION_UPDATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_DESCRIPTION_UPDATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const deleteDescriptionDatabaseAction = createAsyncThunk(
  REDUX_DESCRIPTION_DELETE,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(API_DESCRIPTION_DELETE + '/' + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const clipboardDescriptionDatabaseAction = createAsyncThunk(
  REDUX_DESCRIPTION_CLIPBOARD,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_DESCRIPTION_CLIPBOARD, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const insertDescriptionDatabaseAction = createAsyncThunk(
  REDUX_DESCRIPTION_INSERT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_DESCRIPTION_INSERT, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);
/* --- */

// Attachments
export const getAttachmentsDatabaseAction = createAsyncThunk(
  REDUX_ATTACHMENTS_ALL,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ATTACHMENTS_ALL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const createAttachmentsDatabaseAction = createAsyncThunk(
  REDUX_ATTACHMENTS_CREATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ATTACHMENTS_CREATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const updateAttachmentsDatabaseAction = createAsyncThunk(
  REDUX_ATTACHMENTS_UPDATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ATTACHMENTS_UPDATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const deleteAttachmentsDatabaseAction = createAsyncThunk(
  REDUX_ATTACHMENTS_DELETE,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(API_ATTACHMENTS_DELETE + '/' + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const clipboardAttachmentsDatabaseAction = createAsyncThunk(
  REDUX_ATTACHMENTS_CLIPBOARD,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ATTACHMENTS_CLIPBOARD, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const insertAttachmentsDatabaseAction = createAsyncThunk(
  REDUX_ATTACHMENTS_INSERT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ATTACHMENTS_INSERT, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);
/* --- */

// Articles
export const getArticleDatabaseAction = createAsyncThunk(
  REDUX_ARTICLES_ALL,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ARTICLES_ALL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const createArticleDatabaseAction = createAsyncThunk(
  REDUX_ARTICLES_CREATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ARTICLES_CREATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const updateArticleDatabaseAction = createAsyncThunk(
  REDUX_ARTICLES_UPDATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ARTICLES_UPDATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const deleteArticleDatabaseAction = createAsyncThunk(
  REDUX_ARTICLES_DELETE,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(API_ARTICLES_DELETE + '/' + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const clipboardArticleDatabaseAction = createAsyncThunk(
  REDUX_ARTICLES_CLIPBOARD,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ARTICLES_CLIPBOARD, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);

export const insertArticleDatabaseAction = createAsyncThunk(
  REDUX_ARTICLES_INSERT,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ARTICLES_INSERT, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  },
);
/* --- */

export default REDUX_DATABASE;
