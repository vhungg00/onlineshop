import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { iconCart, iconLogoOls, iconMenu, iconSearch } from '~/images';
import { ScreenUrlPath } from '@/typings/ScreenUrlPath';

import './Header.scss';

export const HeaderWrapComponent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const categories = [
    {
      id: '001',
      name: 'hoi'
    }
  ];

  useEffect(() => {
    const rootOverlay = document.createElement('div');
    rootOverlay.setAttribute('class', 'Overlay');
    document.body.append(rootOverlay)
      },[])

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-top">
          <div className="navbarTop-inner flex flex-between flex-center">
            <button type="button" className="nav-open-mobile">
              <img src={iconMenu} alt="img-onlineshop" className="img-menu-mobile" />
            </button>
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
              <div className="navbar-btns">
                <Link to="/cart" className="add-to-cart-btn flex">
                  <span className="btn-ico">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <div className="btn-txt fw-5">
                    Cart
                    <span className="cart-count-value">1</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-bottom bg-light-gray">
          <div className="navbarBotton-inner flex flex-between">
            <div className="navbarBotton-left">
              <ul className={`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ''}`}>
                <button type="button" className="navbar-hide-btn text-white" onClick={() => setIsSidebarOpen(false)}>
                  <i className="fas fa-times"></i>
                </button>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/category/${category.id}`}
                      className="nav-link text-white"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
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
