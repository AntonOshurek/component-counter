//components
import NavigationLink from './navigation-link/navigation-link';
//variables
import { AppRouting } from '../../variables/';
//styles
import style from './nav.module.scss';
//icons
import { NavIconHome, NavIconSettings, NavIconInfo, NavIconOverview } from '../../icons';

interface INavigationProps {
  additionalNav?: JSX.Element;
}

const Navigation = ({ additionalNav }: INavigationProps): JSX.Element => {
  return (
    <nav className={`${style.nav} unselectable`}>
      {additionalNav}
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <NavigationLink to={AppRouting.ROOT.path} name={AppRouting.ROOT.title}>
            <NavIconHome />
          </NavigationLink>
        </li>
        <li className={style.nav__item}>
          <NavigationLink to={AppRouting.SETTINGS.path} name={AppRouting.SETTINGS.title}>
            <NavIconSettings />
          </NavigationLink>
        </li>
        <li className={style.nav__item}>
          <NavigationLink
            to={AppRouting.COMPONENTS_OVERVIEW.path}
            name={AppRouting.COMPONENTS_OVERVIEW.title}
          >
            <NavIconOverview />
          </NavigationLink>
        </li>
        <li className={style.nav__item}>
          <NavigationLink to={AppRouting.INFORMATION.path} name={AppRouting.INFORMATION.title}>
            <NavIconInfo />
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
