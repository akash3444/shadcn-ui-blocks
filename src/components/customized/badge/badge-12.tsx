import { badgeVariants } from "@/components/ui/badge";

const ClickableBadgeDemo = () => {
  return (
    <button
      className={badgeVariants({
        className: "cursor-pointer select-none focus:ring-offset-1",
      })}
    >
      Clickable
    </button>
  );
};

export default ClickableBadgeDemo;
