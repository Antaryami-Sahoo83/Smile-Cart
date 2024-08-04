import { Typography } from "neetoui";

const ProductListItem = ({ imageUrl, name, offerPrice }) => (
  <div className="neeto-ui-border-black neeto-ui-rounded-xl flex w-48 flex-col items-center justify-between border p-4">
    <img alt={name} className="h-40 w-40" src={imageUrl} />
    <Typography className="text-center" weight="semibold">
      {name}
    </Typography>
    <Typography>${offerPrice}</Typography>
  </div>
);

export default ProductListItem;
