interface HamburgerProps {
  onclick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onclick }) => {
  return (
    <div className="hamburger flex-col items-center" onClick={onclick}>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </div>
  );
};
