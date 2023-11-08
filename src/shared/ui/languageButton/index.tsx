import "./styles.scss";

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
      className={`language-btn cursor-pointer ${margin}`}
    >
      {language}
    </button>
  );
};
