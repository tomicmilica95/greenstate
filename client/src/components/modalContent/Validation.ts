import * as Yup from 'yup';

import i18n from '../../i18n';

export const createEditValidation = Yup.object().shape({
  title: Yup.string()
    .required(i18n.t('titleRequired', { ns: 'common' }))
    .min(2, i18n.t('nameMin', { ns: 'common' }))
    .max(50, i18n.t('nameMax', { ns: 'common' })),
  description: Yup.string()
    .required(i18n.t('descriptionRequired', { ns: 'common' }))
    .min(2, i18n.t('nameMin', { ns: 'common' }))
    .max(50, i18n.t('nameMax', { ns: 'common' }))
});
