interface LinkProps {
  className: string;
}

export const PhoneLink: React.FC<LinkProps> = ({ className }) => {
  return (
    <a className={`${className}--contact ml-8 mt-8`} href="tel:+77066233117">
      +7 (706) 623 31-17
    </a>
  );
};
