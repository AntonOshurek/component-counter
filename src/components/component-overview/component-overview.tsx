/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
//components
import ComponentOverviewList from './component-overview-list/component-overview-list';
import { ButtonWithIcon } from '../';
//styles
import style from './component-overview.module.scss';
//icons
import { ArrowDownIcon, ArrowUpIcon } from '../../icons';
//types
import type { ItemsDataToDisplayListType, overviewPanelStatusType } from '../../types';

interface IComponentOverviewProps {
  data: ItemsDataToDisplayListType;
  title: string;
  isOpen: overviewPanelStatusType;
  refreshStatushKey: { key: overviewPanelStatusType };
  setItemShowStatus: (status: overviewPanelStatusType, packageName: string) => void;
}

const ComponentOverview = ({
  data,
  title,
  isOpen,
  refreshStatushKey,
  setItemShowStatus,
}: IComponentOverviewProps): JSX.Element => {
  const [showList, setShowList] = useState<overviewPanelStatusType>(isOpen);

  const onShowListButtonClickHandler = () => {
    setShowList((prev) => (prev === 'close' ? 'open' : 'close'));
  };

  const onCloseListButtonClickHandler = () => {
    setShowList('close');
  };

  useEffect(() => {
    setShowList(refreshStatushKey.key);
  }, [refreshStatushKey]);

  useEffect(() => {
    setItemShowStatus(showList, title);
  }, [showList]);

  return (
    <section className={style['component-overview']}>
      <header className={style['component-overview__header']}>
        <h2
          className={`${style['component-overview__title']} unselectable content-primary-a heading-medium`}
        >
          {title}
        </h2>

        <div className={style['component-overview__fake-button']} aria-hidden="true">
          {showList === 'open' ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>

        <button
          className={style['component-overview__show-button']}
          type="button"
          onClick={onShowListButtonClickHandler}
        >
          <span className="visually-hidden">pokaz liste</span>
        </button>
      </header>

      <div
        className={`${style['component-overview__list']} ${showList === 'open' && style['component-overview__list--open']}`}
      >
        <div className={style['component-overview__list-wrap']}>
          <ComponentOverviewList data={data} />
        </div>
      </div>

      {showList === 'open' && (
        <ButtonWithIcon
          text="ukryj liste"
          fullWidth={true}
          clickHandler={onCloseListButtonClickHandler}
        >
          {<ArrowUpIcon />}
        </ButtonWithIcon>
      )}
    </section>
  );
};

export default ComponentOverview;