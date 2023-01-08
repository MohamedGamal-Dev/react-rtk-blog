import { Container } from '@/features/ui';
import { Link } from 'react-router-dom';
import { heroHeader, heroContent, heroCTA } from './consts';
import './layout.css';

export const LayoutHeaderHero = () => {
  return (
    <section
      id="header-hero-section"
      // className="bg-no-repeat bg-bottom bg-hero-wave "
      className="bg-gradient-to-t from-black  to-background-dark "
    >
      <Container center className=" flex flex-col space-y-10 pb-4 ">
        <div className="bg-gradient-to-tr from-primary-dark via-primary-light  to-primary-dark bg-clip-text text-center	text-7xl font-bold text-transparent drop-shadow-2xl md:text-9xl">
          {heroHeader}
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center font-medium text-light-secondary md:text-xl ">
            {heroContent}
          </div>

          <div className="rounded-full bg-primary-main py-3 text-light-primary font-medium hover:bg-primary-dark hover:shadow hover:shadow-info-light md:text-xl">
            <Link className="py-3 px-4 md:px-6" to="/post">
              {heroCTA}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
