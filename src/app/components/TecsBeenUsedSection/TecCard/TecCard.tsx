import { TecCardItem } from "./TectCardItem";

interface TecCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const TecCard = ({ title, children, className }: TecCardProps) => {
  return (
    <div
      className={`flex flex-col h-fit rounded-8 [border-image:var(--gray-gradient)1] border border-solid w-80 pr-8 pl-8 pt-6 pb-6 gap-4 mb-8 ${className}`}
    >
      <p className="text-white">{title}</p>
      {children}
    </div>
  );
};

TecCard.Item = TecCardItem;
