//types
import type { IRouteItem } from '../../../types';

const enum ChemistryAppRoutingPaths {
  ROOT = '/chemistry',
  EXTRUSION = 'extrusion',
  VENEER = 'veener',
  COUNTER_VENEER = 'veener/:UNID',
  COUNTER_EXTRUSION = 'extrusion/:UNID',
  COUNTER = '/:UNID',
}

const enum ChemistryAppRoutingNames {
  ROOT = 'ROOT',
  EXTRUSION = 'EXTRUSION',
  VENEER = 'VENEER',
  COUNTER_EXTRUSION = 'COUNTER_EXTRUSION',
  COUNTER_VENEER = 'COUNTER_VENEER',
}

type IAppRoutingType = Record<ChemistryAppRoutingNames, IRouteItem>;

const ChemistryAppRouting: IAppRoutingType = {
  [ChemistryAppRoutingNames.ROOT]: {
    title: 'Strona główna',
    path: ChemistryAppRoutingPaths.ROOT,
  },
  [ChemistryAppRoutingNames.EXTRUSION]: {
    title: 'Ekstruzja',
    path: ChemistryAppRoutingPaths.EXTRUSION,
  },
  [ChemistryAppRoutingNames.VENEER]: {
    title: 'Okleina',
    path: ChemistryAppRoutingPaths.VENEER,
  },
  [ChemistryAppRoutingNames.COUNTER_EXTRUSION]: {
    title: 'Licznik - ekstruzja',
    path: ChemistryAppRoutingPaths.COUNTER_EXTRUSION,
  },
  [ChemistryAppRoutingNames.COUNTER_VENEER]: {
    title: 'Licznik - okleina',
    path: ChemistryAppRoutingPaths.COUNTER_VENEER,
  },
};

export { ChemistryAppRouting };
