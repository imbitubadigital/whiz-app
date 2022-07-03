import * as yup from 'yup';
export const singUpFormStepOneSchema = yup.object().shape({
  name: yup.string().required('Required field'),
  schoolId: yup.string().required('Required field'),
});
