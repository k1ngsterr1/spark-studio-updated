interface LanguageButtonProps {
  language: string;
  onClick: () => void;
}

export const languageButton: React.FC<LanguageButtonProps> = ({
  language,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="link cursor-pointer">
      {language}
    </button>
  );
};
