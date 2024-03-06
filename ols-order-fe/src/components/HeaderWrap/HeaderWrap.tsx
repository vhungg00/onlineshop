import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { iconCart, iconLogoOls, iconSearch } from '~/images';
import { ScreenUrlPath } from '@/typings/ScreenUrlPath';

import './Header.scss';

type Menu = {
  id: string;
  title: string;
  urlPath: string;
}

export const HeaderWrapComponent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isScrollY, setIsScrollY] = useState<boolean>(false);

  const menus: Menu[] = [
    {
      id: '000',
      title: 'OnlineShop',
      urlPath: `${ScreenUrlPath.Root}`
    },
    {
      id: '001',
      title: 'Sản phẩm',
      urlPath: `${ScreenUrlPath.AllProduct}`
    },
    {
      id: '002',
      title: 'Bài viết',
      urlPath: `${ScreenUrlPath.Blog}`
    },
    {
      id: '003',
      title: 'Liên hệ',
      urlPath: `${ScreenUrlPath.Contact}`
    },
  ]

  const openMenu = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleStopPropagation = (event: React.FormEvent<EventTarget>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        setIsScrollY(true);
      } else {
        setIsScrollY(false);
      }
    }

    window.onscroll = function () { scrollFunction() };

  }, [isScrollY])

  const handelClick = (event: React.FormEvent<EventTarget>) => {

  }

  useEffect(() => {
    const navigation = document.getElementById("navLinksInner");
    const switchButton = document.getElementById("accordionSwitch");

    const handleSwitchButton = () => {
      navigation?.style.setProperty("--childrenCount", `${navigation.children.length}`);
      navigation?.classList.toggle('active');
      switchButton?.classList.toggle('active');
    }

    switchButton?.addEventListener('click', handleSwitchButton)
  }, [])


  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className={`navbar-top ${isScrollY ? "marginBottom" : ""}`}>
          <div className="navbarTop-inner flex flex-between flex-center">
            {/* <button type="button" className="nav-open-mobile" onClick={openMenu}>
              <img src={iconMenu} alt="img-onlineshop" className="img-menu-mobile" />
            </button> */}
            <div className="navbarTop-left flex">
              <Link to={ScreenUrlPath.Root} className="navbar-brand">
                <img src={iconLogoOls} alt="logo-onlineshop" className="img-responsive" />
              </Link>
              <div className="search-content">
                <div className="nav-search bg-white flex">
                  <input type="text" placeholder="Tìm kiếm ..." />
                  <button type="submit" className="search-btn">
                    <img src={iconSearch} alt="search-onlineshop" className="search-img" />
                  </button>
                </div>
              </div>
            </div>
            <div className="navbarTop-right">
              <div className="customerBox">
                <ul className="flex">
                  <li>
                    <Link to={ScreenUrlPath.Login} className="fs-14">
                      <span>Đăng nhập</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ScreenUrlPath.Register} className="fs-14">
                      <span>/Đăng ký</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`navbar-bottom bg-light-gray ${isScrollY ? "scroll" : ""}`}>
          <div className="navbarBotton-inner flex flex-between">
            <div className="navbarBotton-left w-100">
              <div id="accordionSwitch" className="accordion w-100">
                <Link to="#" className="fs-13 w-100">
                  <span>
                    Cửa hàng trực tuyến
                  </span>
                </Link>
              </div>
              <ul className={`nav-links ${isSidebarOpen ? 'menuOpen' : 'menuClose'}`} onClick={closeMenu}>
                <div id="navLinksInner" className="nav-links-inner flex" onClick={(event) => handleStopPropagation(event)}>
                  {/* <div className="nav-menu-header">
                    <a href="#" className="nav-close-mobile" onClick={closeMenu}>
                      <span className="iconElem">
                        <img src={iconCloseMenu} alt="close-menu-mobile" className="" />
                      </span>
                    </a>
                    <div className="searchContent">a</div>
                  </div> */}
                  {/* Category l */}
                  {menus.map((menu) => (
                    <li key={menu.id}>
                      <NavLink
                        to={menu.urlPath}
                        className={({ isActive }) => `fs-14 ${isActive ? "navActive" : ""}`}
                        onClick={(event) => handelClick(event)}
                      >
                        {menu.title}
                      </NavLink>
                    </li>
                  ))}
                </div>
              </ul>
            </div>

            <div className="navbarBotton-right">
              <div className="navCart">
                <Link to={ScreenUrlPath.Cart}>
                  <img src={iconCart} alt="img-cart" className="img-cart" />
                  <span className="cart-num">3</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const HeaderWrap = React.memo(HeaderWrapComponent);
