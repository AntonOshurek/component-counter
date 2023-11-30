import { CHEMISTRY_STORAGE_NAME } from '../app/chemistry/variables/chemistry-data-variables';
import { GUMS_STORAGE_NAME } from '../app/gums/variables/gums-data-variables';
import { PIGMENTS_STORAGE_NAME } from '../app/pigments/variables/pigments-data-variables';

type LocalstorageNamesType =
  | typeof CHEMISTRY_STORAGE_NAME
  | typeof GUMS_STORAGE_NAME
  | typeof PIGMENTS_STORAGE_NAME;

export type { LocalstorageNamesType };
