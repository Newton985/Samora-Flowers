"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
  IconButton,
  Stack,
  Chip,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";

// Mock product variants data - in real app, this would come from props or API
const PRODUCT_VARIANTS = [
  {
    id: "small",
    name: "10 Inch Stem",
    description: "Perfect for a sweet gesture",
    price: 29.0,
    originalPrice: null,
    inStock: true,
  },
  {
    id: "medium",
    name: "15 Inch Stem",
    description: "Our most popular size",
    price: 39.0,
    originalPrice: 45.0,
    inStock: true,
    isPopular: true,
  },
  {
    id: "premium",
    name: "25 Inch Stem",
    description: "Luxury arrangement with premium flowers",
    price: 89.0,
    originalPrice: null,
    inStock: false,
  },
];

interface CartItem {
  variantId: string;
  quantity: number;
}

interface AddToCartDialogProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
  productImage?: string;
  onAddToCart?: (items: CartItem[]) => void;
  onRemoveFromCart?: (variantId: string) => void;
}

export default function AddToCartDialog({
  open,
  onClose,
  productName = "Beautiful Bouquet",
  productImage = "/images/hero_img_1.png",
  onAddToCart,
  onRemoveFromCart,
}: AddToCartDialogProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateQuantity = (variantId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Remove item from cart
      const updatedItems = cartItems.filter(
        (item) => item.variantId !== variantId
      );
      setCartItems(updatedItems);
      onRemoveFromCart?.(variantId);
    } else {
      // Update or add item
      const existingItemIndex = cartItems.findIndex(
        (item) => item.variantId === variantId
      );
      let updatedItems: CartItem[];

      if (existingItemIndex >= 0) {
        updatedItems = [...cartItems];
        updatedItems[existingItemIndex].quantity = newQuantity;
      } else {
        updatedItems = [...cartItems, { variantId, quantity: newQuantity }];
      }

      setCartItems(updatedItems);
      onAddToCart?.(updatedItems);
    }
  };

  const getCartItemQuantity = (variantId: string): number => {
    const item = cartItems.find((item) => item.variantId === variantId);
    return item?.quantity || 0;
  };

  const removeAllFromCart = () => {
    setCartItems([]);
    cartItems.forEach((item) => onRemoveFromCart?.(item.variantId));
  };

  const getTotalPrice = (): number => {
    return cartItems.reduce((total, item) => {
      const variant = PRODUCT_VARIANTS.find((v) => v.id === item.variantId);
      return total + (variant?.price || 0) * item.quantity;
    }, 0);
  };

  const getTotalItems = (): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 1,
          maxHeight: "90vh",
          m: { xs: 0, sm: 2 }, // Reduced margin on mobile
        },
      }}
      sx={{
        "& .MuiDialog-container": {
          px: { xs: 0, sm: 3 }, // Reduced container padding on mobile
        },
      }}
    >
      <DialogTitle sx={{ pb: 2, px: { xs: 2, sm: 3 } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontWeight={600}>
            Add to Cart
          </Typography>
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ px: { xs: 2, sm: 3 }, py: 0 }}>
        {/* Product Header */}
        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 1,
                overflow: "hidden",
                bgcolor: "grey.100",
              }}
            >
              <Image
                src={productImage}
                alt={productName}
                width={80}
                height={80}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box flex={1}>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                {productName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Choose your preferred size and quantity
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Variants */}
        <Stack spacing={2}>
          {PRODUCT_VARIANTS.map((variant) => {
            const quantity = getCartItemQuantity(variant.id);

            return (
              <Card
                key={variant.id}
                variant="outlined"
                sx={{
                  borderColor: quantity > 0 ? "primary.main" : "divider",
                  bgcolor: quantity > 0 ? "primary.50" : "transparent",
                  transition: "all 0.2s ease",
                  borderRadius: 1,
                }}
              >
                <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box flex={1}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mb: 0.5 }}
                      >
                        <Typography
                          sx={{ flex: 1 }}
                          variant="body1"
                          fontWeight={600}
                        >
                          {variant.name}
                        </Typography>
                        {/* {variant.isPopular && (
                          <Chip
                            size="small"
                            label="Popular"
                            color="secondary"
                            sx={{ height: 20, fontSize: 11, fontWeight: 600 }}
                          />
                        )} */}
                        {!variant.inStock && (
                          <Chip
                            size="small"
                            label="Out of Stock"
                            color="error"
                            variant="outlined"
                            sx={{ height: 20, fontSize: 11 }}
                          />
                        )}
                      </Stack>

                      {/* <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {variant.description}
                      </Typography> */}

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          variant="subtitle2"
                          fontWeight={700}
                          color="primary.main"
                        >
                          ${variant.price.toFixed(2)}
                        </Typography>
                        {variant.originalPrice && (
                          <Typography
                            variant="body2"
                            sx={{
                              textDecoration: "line-through",
                              color: "text.secondary",
                            }}
                          >
                            ${variant.originalPrice.toFixed(2)}
                          </Typography>
                        )}
                      </Stack>
                    </Box>

                    {/* Quantity Controls */}
                    {variant.inStock && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        {quantity > 0 ? (
                          <>
                            <IconButton
                              size="small"
                              onClick={() =>
                                updateQuantity(variant.id, quantity - 1)
                              }
                              sx={{
                                bgcolor: "background.paper",
                                border: 1,
                                borderColor: "divider",
                                "&:hover": { bgcolor: "action.hover" },
                              }}
                            >
                              <RemoveRoundedIcon fontSize="small" />
                            </IconButton>

                            <Typography
                              variant="body2"
                              fontWeight={600}
                              sx={{ minWidth: 20, textAlign: "center" }}
                            >
                              {quantity}
                            </Typography>

                            <IconButton
                              size="small"
                              onClick={() =>
                                updateQuantity(variant.id, quantity + 1)
                              }
                              sx={{
                                bgcolor: "primary.main",
                                color: "white",
                                "&:hover": { bgcolor: "primary.dark" },
                              }}
                            >
                              <AddRoundedIcon fontSize="small" />
                            </IconButton>
                          </>
                        ) : (
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => updateQuantity(variant.id, 1)}
                            sx={{
                              borderRadius: 1.5,
                              px: 2,
                              py: 0.5,
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            Add
                          </Button>
                        )}
                      </Stack>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Stack>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <Box sx={{ mt: 3, pt: 3, borderTop: 1, borderColor: "divider" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography variant="subtitle2" fontWeight={600}>
                Cart Summary
              </Typography>
              <Button
                size="small"
                startIcon={<DeleteOutlineRoundedIcon />}
                onClick={removeAllFromCart}
                sx={{
                  color: "error.main",
                  fontSize: 12,
                  "&:hover": { bgcolor: "error.50" },
                }}
              >
                Remove All
              </Button>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  Total Items:
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {getTotalItems()}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle2" fontWeight={600}>
                  Total Price:
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  color="primary.main"
                >
                  ${getTotalPrice().toFixed(2)}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: { xs: 2, sm: 3 }, pt: 2 }}>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          {/* <Button
            variant="outlined"
            onClick={onClose}
            sx={{ flex: 1, borderRadius: 2 }}
            size="small"
          >
            Close
          </Button> */}
          {cartItems.length > 0 && (
            <Button
              variant="contained"
              startIcon={<ShoppingBagOutlinedIcon />}
              onClick={onClose}
              sx={{ flex: 1, borderRadius: 2 }}
              size="small"
            >
              Add {getTotalItems()} items - ${getTotalPrice().toFixed(2)}
            </Button>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
