import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import React, { useState } from 'react';

import { HamMenuPanel, HamMenuIcon, Container } from '@/features/ui';
import { useToggle } from '@/features/utils/use-toggle';
import { navPages } from '@/routes';

export const LayoutHeader = () => {
  const [status, toggle, setToggleStatus] = useToggle(false);

  return (
    <header className="flex  flex-col justify-between space-y-4 bg-background-dark ">
      {/* min-h-screen */}

      <section className="bg-transparent px-2 py-2 sm:px-4">
        <Container
          center
          className="flex flex-wrap items-center justify-between sm-only:relative"
        >
          <div className="flex flex-row">
            <NavLink
              to="/"
              className={`decoration-3 font-sans text-2xl font-bold text-primary-main hover:underline hover:decoration-secondary-main`}
            >
              {'R-RTK BLOG'}
            </NavLink>
          </div>

          <HamMenuPanel
            className="bg-dark-primary rounded focus:outline-none md:hidden ring-2 ring-primary-main hover:ring-secondary-main"
            onClick={toggle}
            data-collapse-toggle="navbar-toggle"
            type="button"
            aria-controls="navbar-toggle"
            aria-expanded="false"
          >
            <HamMenuIcon close={!status} />
          </HamMenuPanel>

          <div
            id="navbar-toggle"
            className={classNames('w-full md:block md:w-auto', {
              ' hidden': status,
            })}
          >
            <nav
              className={classNames(
                'flex flex-col rounded-lg border-0 border-primary-main bg-background-dark p-2 mt-1 ',
                'md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium ',
                'sm-only:mt-4 sm-only:absolute sm-only:right-0 sm-only:z-50 sm-only:w-full'
              )}
            >
              {navPages.map((page) => {
                const { title, to } = page;

                return (
                  <NavLink
                    key={title}
                    to={to}
                    className={({ isActive }) =>
                      classNames(
                        'block rounded py-2 pr-4 pl-3 text-light-secondary  md:border-0 md:p-0 ',
                        'hover:bg-primary-main hover:text-light-primary  md:hover:bg-transparent',
                        {
                          'font-bold text-primary-dark hover:text-light-primary':
                            isActive,
                        }
                      )
                    }
                    end
                  >
                    {title.toUpperCase()}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </Container>
      </section>
    </header>
  );
};
