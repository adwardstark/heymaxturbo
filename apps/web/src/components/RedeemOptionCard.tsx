import { memo, ReactElement } from "react";

export type RedeemCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
  footer: string;
};

const RedeemCard = ({
  icon,
  title,
  description,
  footer,
}: RedeemCardProps) => {
  return (
    <div className="flex flex-row bg-tile my-2 px-4 py-4 rounded-2xl items-center">
      {icon}
      <div className="ml-4 space-y-1">
        <p className="text-primary text-lg">{title}</p>
        <p className="text-secondary text-md break-words">
          {description}
        </p>
        <p className="text-accent text-md">{footer}</p>
      </div>
    </div>
  );
};

export default memo(RedeemCard);
