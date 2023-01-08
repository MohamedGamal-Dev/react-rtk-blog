import { footerCopyright } from './consts';

export const LayoutFooter = () => {
  const { year, linkUrl, linkLabel, copyRight } = footerCopyright;
  return (
    <>
      <footer className="bg-dark-primary p-4 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-light-off sm:text-center">
          {year}
          <a href={linkUrl} className="hover:underline">
            {linkLabel}
          </a>
          {copyRight}
        </span>
      </footer>
    </>
  );
};
