interface emailLinkProps {
  ref?: any;
  className: string;
}

export const EmailLink: React.FC<emailLinkProps> = ({ ref, className }) => {
  return (
    <a
      className={`${className}--contact ml-8 mt-4`}
      href="mailto:info@sparkstudio.kz"
      ref={ref}
    >
      info@sparkstudio.kz
    </a>
  );
};
