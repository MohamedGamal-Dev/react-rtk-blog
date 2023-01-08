import classNames from 'classnames';

export const HamMenuPanel = ({
  panel = true,
  pointer = true,
  panelStyle,
  color = 'bg-transparent',
  rounded,
  children,
  ...rest
}: any) => {
  const panelClass = classNames(
    'group flex items-center justify-center p-2 ',
    {
      'cursor-pointer': pointer,
      'rounded-2xl ': rounded,
    },
    color,
    panelStyle,
    rest.className
  );
  return <>{panel ? <div className={panelClass}>{children}</div> : null}</>;
};

export const HamMenuLines = ({
  outerWidth = 'w-7',
  innerWidth = 'w-5',
  innerColor = 'bg-orange-500',
  outerColor = 'bg-slate-500 ',
  twoLines,
  close,
  ...rest
}: any) => {
  const outClass = classNames(
    'block h-1 origin-center rounded-full',
    {
      ' transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45 ':
        close,
    },
    outerWidth,
    outerColor
  );

  const inHover = outerWidth && close ? `group-hover:${outerWidth}` : null;

  const innerClass = classNames(
    'block h-1 origin-center rounded-full',
    {
      'transition-transform ease-in-out group-hover:-translate-y-1.5 group-hover:-rotate-45':
        close,
    },
    innerWidth,
    inHover,
    innerColor
  );

  const thirdLine = (
    <span
      className={`${outClass} ${close ? 'group-hover:hidden' : null}`}
    ></span>
  );
  return (
    <>
      <span className={outClass}></span>
      <span className={innerClass}></span>
      {!twoLines && thirdLine}
    </>
  );
};

export const HamMenu = ({ twoLines, ...rest }: any) => {
  return (
    <>
      <HamMenuPanel>
        <div className="space-y-2">
          <HamMenuLines close twoLines />
        </div>
      </HamMenuPanel>
    </>
  );
};
