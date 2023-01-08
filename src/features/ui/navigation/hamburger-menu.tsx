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
      'rounded ': rounded,
      'h-9 w-9': panelSize,
    },
    color,
    panelStyle,
    rest.className
  );
  return (
    <>
      {panel ? (
        <button {...rest} className={panelClass}>
          <span className="sr-only">Open main menu</span>
          {children}
        </button>
      ) : null}
    </>
  );
};

export const HamMenuIcon = ({
  outerWidth = 'w-7',
  innerWidth = 'w-5',
  innerColor = 'bg-primary-main group-hover:bg-secondary-main',
  outerColor = 'bg-light-secondary group-hover:bg-light-off',
  twoLines,
  close,
  ...rest
}: any) => {
  const outClass = classNames(
    'block h-1 origin-center rounded-full  transition-transform ease-in-out ',
    {
      'translate-y-1.5 rotate-45 ': close,
    },
    outerWidth,
    outerColor
  );

  const inHover =
    outerWidth && close
      ? `${outerWidth} transition-transform ease-in-out -translate-y-1.5  -rotate-45`
      : null;

  const innerClass = classNames(
    'block h-1 origin-center rounded-full  transition-transform ease-in-out',
    {
      '-translate-y-1.5  -rotate-45': close,
    },
    outerWidth && close ? outerWidth : innerWidth,
    inHover,
    innerColor
  );

  const thirdLine = (
    <span className={`${outClass} ${close ? 'hidden' : null}`}></span>
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
