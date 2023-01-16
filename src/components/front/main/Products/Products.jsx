import React from "react";
import { StyledButton, StyledCard, StyledContainer, StyledImage, StyledPrice } from "./styles";

const Products = ({ productItems }) => {
  return (
    <StyledContainer>
      {productItems.map((productItem) => (
        <StyledCard key={productItem.id}>
          <div className="image">
            <StyledImage
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3>{productItem.name}</h3>
          </div>
          <StyledPrice>
            ${productItem.price}
            <div>
              <StyledButton>Add To Cart</StyledButton>
            </div>
          </StyledPrice>
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

export default Products;
