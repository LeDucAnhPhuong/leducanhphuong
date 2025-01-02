interface TypeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  isBeam: boolean;
  containerClass: string;
}
const Button = ({
  name,
  isBeam = false,
  containerClass,
  ...props
}: TypeProps) => {
  return (
    <button {...props} className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
