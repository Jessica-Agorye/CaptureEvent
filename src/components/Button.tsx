type ButtonProps = {
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string;
};


const Button:React.FC<ButtonProps> = ({children,onClick,className}) => {
  return (
 <button
 onClick={onClick}
 className={className}
 >
    {children}
 </button>
  )
}

export default Button