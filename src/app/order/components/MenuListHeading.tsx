const MenuListHeading = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="space-y-1">
    <h2 className="heading-sm">{title}</h2>
    {children}
  </div>
);

export default MenuListHeading;
