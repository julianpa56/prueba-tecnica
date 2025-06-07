type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
    return (
        <>
            <button
                {...props}
                className="rounded-md block size-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {children}
            </button>
        </>
    );
}

export default Button;
