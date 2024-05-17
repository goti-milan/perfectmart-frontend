import { Typography, Divider } from '@mui/material'

const ProductDescription = () => {
  return (
    <div>
      <Typography variant="h6">Specifications</Typography>
      <Divider />
      <Typography>
        <strong>Category:</strong> Shoes
      </Typography>
      <Typography>
        <strong>Manufacturer:</strong> Nike
      </Typography>
      <Typography>
        <strong>Serial Number:</strong> 358607726380311
      </Typography>
      <Typography>
        <strong>Ships From:</strong> United States
      </Typography>
      

      <Typography variant="h6">Product Details</Typography>
      <Divider />
      <Typography>The foam sockliner feels soft and comfortable</Typography>
      <Typography>Pull tab</Typography>
      <Typography>Not intended for use as Personal Protective Equipment</Typography>
      <Typography>Colour Shown: White/Black/Oxygen Purple/Action Grape</Typography>
      <Typography>Style: 921826-109</Typography>
      <Typography>Country/Region of Origin: China</Typography>

      <Typography variant="h6">Benefits</Typography>
      <Divider />
      <Typography>
        <span>
        Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.
        Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushioning underfoot.
        The foam midsole feels springy and soft.
        Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.
          </span></Typography>
      <Typography>The rubber outsole adds traction and durability.</Typography>

      <Typography variant="h6">Delivery and Returns</Typography>
      <Divider />
      <Typography>Your order of $200 or more gets free standard delivery.</Typography>
      <Typography>Standard delivered 4-5 Business Days</Typography>
      <Typography>Express delivered 2-4 Business Days</Typography>
      <Typography>Orders are processed and delivered Monday-Friday (excluding public holidays)</Typography>
    </div>
  )
}

export default ProductDescription