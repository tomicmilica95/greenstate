import * as Yup from 'yup';

import i18n from '../../i18n';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('emailInvalid', { ns: 'common' }))
    .required(i18n.t('emailRequired', { ns: 'common' })),
  password: Yup.string().required(i18n.t('passwordRequired', { ns: 'common' }))
});
