import type { IDataService, ILocalstorageService, IAdapterService } from './services-types';
import type { IRepository } from './repository-types';
import type { LocalstorageNamesType } from './localstorage-types';
import type {
  IComponentsListDataItem,
  ComponentsListDataType,
  ItemsListDataType,
  ILogsType,
} from './data-types';
import type { IRouteItem } from './routing-types';
import type { IIncDecAction, ILogAction } from './action-types';
import { AppDispatch, RootState, AppThunk, AppDispatchType } from './store-types';
import { SetActiveLinkType } from './other-types';
import { IIconPropsType } from './icon-props-type';

export type {
  ILogAction,
  IDataService,
  ILocalstorageService,
  IAdapterService,
  IRepository,
  LocalstorageNamesType,
  IIncDecAction,
  AppDispatch,
  RootState,
  AppThunk,
  AppDispatchType,
  IIconPropsType,
  SetActiveLinkType,
  ComponentsListDataType,
  IComponentsListDataItem,
  IRouteItem,
  ItemsListDataType,
  ILogsType,
};
