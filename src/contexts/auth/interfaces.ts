export interface DataUserProps {
  name: string;
  schoolId: string;
  house: string;
  email: string;
  password: string;
  subjects: string[];
  tour: boolean;
  isLogged: boolean;
}

export interface CreateUserStepOneProps {
  name: string;
  schoolId: string;
}
export interface CreateUserStepThreeProps {
  email: string;
  password: string;
}
export interface CredentialProps {
  email: string;
  password: string;
}

export type TourType = 'skip' | 'concluded';
export interface AuthContextData {
  user: DataUserProps;
  // temporaryUser: DataUserProps;
  loading: boolean;

  loadingStorage: boolean;

  error: string;

  settingTour: (type: TourType) => Promise<void>;

  createUserStepOne: (createStepOne: CreateUserStepOneProps) => boolean;
  createUserStepTwo: (house: string) => boolean;
  createUserStepThree: (createStepThree: CreateUserStepThreeProps) => boolean;
  createUserFinish: (subjects: string[]) => Promise<boolean>;

  reviewTour: () => Promise<void>;

  signOut: () => void;
  resetError: () => void;
  signIn: (credentials: CredentialProps) => Promise<void>;
}
