import { ButtonStyle } from './consts';

export interface ButtonProps {
  text?: string;
  icon?: string;
  otherClasses?: string;
  disabled?: boolean;
  styleClass?: ButtonStyle;
  onClick?: () => void;
}
function CryButton({
  text = 'Click',
  icon = '',
  onClick = () => {},
  otherClasses = '',
  disabled = false,
  styleClass = ButtonStyle.PRIMARY,
}: ButtonProps) {
  const defineStyle = () => {
    const basicStyle = `text-white p-2 rounded-md pr-5 pl-5 ${
      !disabled
        ? 'transition-colors: duration-200 ease-out active:scale-125 :hover:scale-125'
        : 'cursor-not-allowed'
    }`;
    const bgColor = getBgColor();
    return `${basicStyle} ${bgColor} ${otherClasses}`;
  };

  const getBgColor = (): string => {
    if (disabled) return 'bg-gray-400';

    switch (styleClass) {
      case ButtonStyle.PRIMARY:
        return 'bg-blue-500 hover:bg-blue-600';
      case ButtonStyle.SECONDARY:
        return 'bg-gray-500 hover:bg-gray-600';
      case ButtonStyle.SUCCESS:
        return 'bg-green-500 hover:bg-green-600';
      case ButtonStyle.DANGER:
        return 'bg-red-500 hover:bg-red-600';
      case ButtonStyle.WARNING:
        return 'bg-yellow-500 hover:bg-yellow-600';
      case ButtonStyle.INFO:
        return 'bg-blue-500 hover:bg-blue-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  return (
    <button
      type='button'
      onClick={onClick}
      className={defineStyle()}
      disabled={disabled}
    >
      {text} {icon ? <i className={`${icon} ml-2`}></i> : ''}
    </button>
  );
}

export default CryButton;
