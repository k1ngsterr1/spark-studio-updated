interface LanguageButtonProps {
  language: string;
  margin?: string;
  onClick: () => void;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  margin,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`menu__link--language-btn cursor-pointer ${margin}`}
    >
      {language}
    </button>
  );
};
