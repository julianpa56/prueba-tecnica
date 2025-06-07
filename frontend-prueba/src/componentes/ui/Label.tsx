type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ children, ...props }: LabelProps) {
  return (
    <>
      <label
        {...props}
        className="block text-sm/6 mb-2 font-medium text-gray-900"
      >
        {children}
      </label>
    </>
  );
}

export default Label;
