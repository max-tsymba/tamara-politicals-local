import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
  clipboardArticleDatabaseAction,
  clipboardAttachmentsDatabaseAction,
  clipboardDescriptionDatabaseAction,
  clipboardInsurerDatabaseAction,
  clipboardPeopleDatabaseAction,
  clipboardTreatyTypeDatabaseAction,
  createArticleDatabaseAction,
  createAttachmentsDatabaseAction,
  createDescriptionDatabaseAction,
  createInsurerDatabaseAction,
  createPeopleDatabaseAction,
  createTreatyTypeDatabaseAction,
  deleteArticleDatabaseAction,
  deleteAttachmentsDatabaseAction,
  deleteDescriptionDatabaseAction,
  deleteInsurerDatabaseAction,
  deletePeopleDatabaseAction,
  deleteTreatyTypeDatabaseAction,
  getArticleDatabaseAction,
  getAttachmentsDatabaseAction,
  getDescriptionDatabseAction,
  getInsurerDatabaseAction,
  getPeopleDatabaseAction,
  getTreatyTypeDatabaseAction,
  insertArticleDatabaseAction,
  insertAttachmentsDatabaseAction,
  insertDescriptionDatabaseAction,
  insertInsurerDatabaseAction,
  insertPeopleDatabaseAction,
  insertTreatyTypeDatabaseAction,
  updateArticleDatabaseAction,
  updateAttachmentsDatabaseAction,
  updateDescriptionDatabaseAction,
  updateInsurerDatabaseAction,
  updatePeopleDatabaseAction,
  updateTreatyTypeDatabaseAction,
} from './actions';

const useAdminDatabase = () => {
  const dispatch = useDispatch();
  const {
    loading,
    peopleDatabase,
    insurerDatabase,
    treatyTypeDatabase,
    descriptionDatabase,
    attachmentsDatabase,
    articleDatabase,
    filters,
  } = useSelector((state) => state.adminDatabase);
  const isDatabaseLoading = loading === 'loading';

  // Underwriter
  const getPeopleDatabase = useCallback(async () => {
    const response = await dispatch(getPeopleDatabaseAction());
    return response.payload;
  }, [dispatch]);

  const createPeopleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(createPeopleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const updatePeopleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(updatePeopleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const deletePeopleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(deletePeopleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const clipboardPeopleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(clipboardPeopleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const insertPeopleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(insertPeopleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );
  /* --- */

  // Insurer
  const getInsurerDatabase = useCallback(async () => {
    const response = await dispatch(getInsurerDatabaseAction());
    return response.payload;
  }, [dispatch]);

  const createInsurerDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(createInsurerDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const updateInsurerDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(updateInsurerDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const deleteInsurerDatabase = useCallback(
    async (id) => {
      const response = await dispatch(deleteInsurerDatabaseAction(id));
      return response.payload;
    },
    [dispatch],
  );

  const clipboardInsurerDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(clipboardInsurerDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const insertInsurerDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(insertInsurerDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );
  /* --- */

  // Treaty Type
  const getTreatyTypeDatabase = useCallback(async () => {
    const response = await dispatch(getTreatyTypeDatabaseAction());
    return response.payload;
  }, [dispatch]);

  const createTreatyTypeDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(createTreatyTypeDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const updateTreatyTypeDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(updateTreatyTypeDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const deleteTreatyTypeDatabase = useCallback(
    async (id) => {
      const response = await dispatch(deleteTreatyTypeDatabaseAction(id));
      return response.payload;
    },
    [dispatch],
  );

  const clipboardTreatyTypeDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(
        clipboardTreatyTypeDatabaseAction(payload),
      );
      return response.payload;
    },
    [dispatch],
  );

  const insertTreatyTypeDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(insertTreatyTypeDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );
  /* --- */

  // Description
  const getDescriptionDatabase = useCallback(async () => {
    const response = await dispatch(getDescriptionDatabseAction());
    return response.payload;
  }, [dispatch]);

  const createDescriptionDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(createDescriptionDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const updateDescriptionDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(updateDescriptionDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const deleteDescriptionDatabase = useCallback(
    async (id) => {
      const response = await dispatch(deleteDescriptionDatabaseAction(id));
      return response.payload;
    },
    [dispatch],
  );

  const clipboardDescriptionDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(
        clipboardDescriptionDatabaseAction(payload),
      );
      return response.payload;
    },
    [dispatch],
  );

  const insertDescriptionDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(insertDescriptionDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );
  /* --- */

  // Attachment
  const getAttachmentsDatabase = useCallback(async () => {
    const response = await dispatch(getAttachmentsDatabaseAction());
    return response.payload;
  }, [dispatch]);

  const createAttachmentsDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(createAttachmentsDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const updateAttachmentsDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(updateAttachmentsDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const deleteAttachmentsDatabase = useCallback(
    async (id) => {
      const response = await dispatch(deleteAttachmentsDatabaseAction(id));
      return response.payload;
    },
    [dispatch],
  );

  const clipboardAttachmentsDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(
        clipboardAttachmentsDatabaseAction(payload),
      );
      return response.payload;
    },
    [dispatch],
  );

  const insertAttachmentsDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(insertAttachmentsDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );
  /* --- */

  // Articles
  const getArticleDatabase = useCallback(async () => {
    const response = await dispatch(getArticleDatabaseAction());
    return response.payload;
  }, [dispatch]);

  const createArticleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(createArticleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const updateArticleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(updateArticleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const deleteArticleDatabase = useCallback(
    async (id) => {
      const response = await dispatch(deleteArticleDatabaseAction(id));
      return response.payload;
    },
    [dispatch],
  );

  const clipboardArticleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(clipboardArticleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const insertArticleDatabase = useCallback(
    async (payload) => {
      const response = await dispatch(insertArticleDatabaseAction(payload));
      return response.payload;
    },
    [dispatch],
  );
  /* --- */

  return {
    clipboardArticleDatabase,
    insertArticleDatabase,
    filters,
    peopleDatabase,
    insurerDatabase,
    treatyTypeDatabase,
    attachmentsDatabase,
    isDatabaseLoading,
    getPeopleDatabase,
    createPeopleDatabase,
    updatePeopleDatabase,
    deletePeopleDatabase,
    clipboardPeopleDatabase,
    insertPeopleDatabase,
    getInsurerDatabase,
    clipboardInsurerDatabase,
    insertInsurerDatabase,
    getTreatyTypeDatabase,
    clipboardTreatyTypeDatabase,
    insertTreatyTypeDatabase,
    descriptionDatabase,
    getDescriptionDatabase,
    getAttachmentsDatabase,
    createInsurerDatabase,
    updateInsurerDatabase,
    deleteInsurerDatabase,
    createTreatyTypeDatabase,
    updateTreatyTypeDatabase,
    deleteTreatyTypeDatabase,
    createDescriptionDatabase,
    updateDescriptionDatabase,
    deleteDescriptionDatabase,
    createAttachmentsDatabase,
    updateAttachmentsDatabase,
    deleteAttachmentsDatabase,
    getArticleDatabase,
    createArticleDatabase,
    updateArticleDatabase,
    deleteArticleDatabase,
    articleDatabase,
    clipboardDescriptionDatabase,
    insertDescriptionDatabase,
    clipboardAttachmentsDatabase,
    insertAttachmentsDatabase,
  };
};

export default useAdminDatabase;
