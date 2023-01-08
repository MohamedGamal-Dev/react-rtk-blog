import classNames from 'classnames';

export const HamMenuPanel = ({
  panel = true,
  pointer = true,
  panelStyle,
  color = 'bg-transparent',
  rounded,
  panelSize = true,
  children,
  ...rest
}: any) => {
  const panelClass = classNames(
    'group flex items-center justify-center p-2 ',
    {
      'cursor-pointer': pointer,
      'rounded-2xl ': rounded,
      'h-10 w-10': panelSize,
    },
    color,
    panelStyle,
    rest.className
  );
  return <>{panel ? <div className={panelClass}>{children}</div> : null}</>;
};

export const HamMenuIcon = ({
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
    <div className="space-y-2">
      <span className={outClass}></span>
      <span className={innerClass}></span>
      {!twoLines && thirdLine}
    </div>
  );
};

export const HamMenu = ({
  panel,
  pointer,
  panelStyle,
  color,
  rounded,
  panelSize,

  outerWidth,
  innerWidth,
  innerColor,
  outerColor,
  twoLines,
  close,

  ...rest
}: any) => {
  return (
    <>
      <HamMenuPanel
        panel={panel}
        pointer={pointer}
        panelStyle={panelStyle}
        color={color}
        rounded={rounded}
        panelSize={panelSize}
      >
        <HamMenuIcon
          outerWidth={outerWidth}
          innerWidth={innerWidth}
          innerColor={innerColor}
          outerColor={outerColor}
          twoLines={twoLines}
          close={close}
        />
      </HamMenuPanel>
    </>
  );
};
