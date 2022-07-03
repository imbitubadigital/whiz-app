import * as yup from 'yup';
export const singUpFormStepOneSchema = yup.object().shape({
  name: yup.string().required('Required field'),
  schoolId: yup.string().required('Required field'),
});

export const singUpFormStepThreeSchema = yup.object().shape({
  email: yup.string().required('Required field').email('Invalid e-mail'),
  password: yup
    .string()
    .required('Required field')
    .min(8, 'Must be at least 8 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password and repeat do not match'),
});
export const singInFormSchema = yup.object().shape({
  email: yup.string().required('Required field').email('Invalid e-mail'),
  password: yup.string().required('Required field'),
});
