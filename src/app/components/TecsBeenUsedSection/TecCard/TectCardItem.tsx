import { Icon } from "@iconify/react";

interface TecCardItemProps {
  icon: string;
  description: string;
  iconColor?: string;
}

const ICON_SIZE = 20;

export const TecCardItem = ({
  icon,
  description,
  iconColor,
}: TecCardItemProps) => {
  return (
    <div className="flex items-center gap-3.5">
      <div className="w-9 h-9 min-w-9 min-h-9 flex justify-center items-center bg-gray-700 rounded-full">
        <Icon icon={icon} fontSize={ICON_SIZE} color={iconColor} />
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
};
