interface emailLinkProps {
  ref?: any;
}

export const EmailLink: React.FC<emailLinkProps> = ({ ref }) => {
  return (
    <a
      className="menu__link--contact ml-8 mt-4"
      href="mailto:info@sparkstudio.kz"
      ref={ref}
    >
      info@sparkstudio.kz
    </a>
  );
};
