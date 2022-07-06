import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {initialUser} from './data';

import {getStorage, settingStorage} from '@utils/storage/authStorage';

import {
  AuthContextData,
  CreateUserStepOneProps,
  CreateUserStepThreeProps,
  CredentialProps,
  DataUserProps,
  TourType,
} from './interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [user, setUser] = useState<DataUserProps>({
    ...initialUser,
    tour: false,
  });

  const [temporaryUser, setTemporaryUser] = useState<DataUserProps>({
    ...initialUser,
    tour: false,
  });

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);

  const [loadingStorage, setLoadingStorage] = useState(true);

  const settingData = useCallback(async (dataUser: DataUserProps) => {
    await settingStorage(dataUser);

    setUser(dataUser);
  }, []);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const dataStorage = await getStorage();

      if (dataStorage) {
        const dataParse = JSON.parse(dataStorage);
        await settingData(dataParse);
      } else {
        await settingData({...initialUser, tour: false});
      }
      setLoadingStorage(false);
    }
    loadStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settingTour = useCallback(
    async (type: TourType) => {
      const updateUser = {
        ...user,
        tour: true,
      };
      if (type === 'concluded') {
        await settingStorage(updateUser);
      }

      setUser(updateUser);
    },
    [user],
  );

  const createUserStepOne = useCallback(
    (createStepOne: CreateUserStepOneProps) => {
      setTemporaryUser(prevState => ({...prevState, ...createStepOne}));
      return true;
    },
    [],
  );

  const createUserStepTwo = useCallback((house: string) => {
    setTemporaryUser(prevState => ({...prevState, house}));
    return true;
  }, []);

  const createUserStepThree = useCallback(
    (createStepThree: CreateUserStepThreeProps) => {
      setTemporaryUser(prevState => ({...prevState, ...createStepThree}));
      return true;
    },
    [],
  );

  const createUserFinish = useCallback(
    async (subjects: string[]) => {
      const updateUser = {
        ...temporaryUser,
        subjects,
        isLogged: true,
      };

      setTemporaryUser({...initialUser, tour: false});

      await settingData(updateUser);

      return true;
    },
    [settingData, temporaryUser],
  );

  const signOut = useCallback(async () => {
    const updateUser = {
      ...user,
      isLogged: false,
    };
    await settingData(updateUser);
  }, [settingData, user]);

  const reviewTour = useCallback(async () => {
    const updateUser = {
      ...user,
      tour: false,
    };

    await settingData(updateUser);
  }, [settingData, user]);

  const signIn = useCallback(
    async (credentials: CredentialProps) => {
      setLoading(true);
      const dataStorage = await getStorage();

      if (!dataStorage) {
        setError('Invalid credentials');
      } else {
        const dataParse = JSON.parse(dataStorage);
        console.log('baixo Baixo', {dataParse, credentials});
        if (
          dataParse.email.toLocaleLowerCase() !==
            credentials.email.toLocaleLowerCase() ||
          dataParse.password !== credentials.password
        ) {
          setError('Invalid credentials');
        } else {
          await settingData({...dataParse, isLogged: true});
        }
        setLoading(false);
      }
    },
    [settingData],
  );
  const resetError = useCallback(() => {
    setError('');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loadingStorage,
        error,
        settingTour,
        createUserStepOne,
        createUserStepTwo,
        createUserStepThree,
        createUserFinish,
        signOut,
        reviewTour,
        signIn,
        resetError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
export {AuthProvider, useAuth};
