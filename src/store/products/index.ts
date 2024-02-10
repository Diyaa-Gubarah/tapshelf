import { Product } from '../../types';
import create from 'zustand';

const placeholderProducts: Product[] = [
  {
    productName: "Product 1",
    productId: 1,
    category: "Category 1",
    buyingPrice: 10.99,
    quantity: 100,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 50
  },
  {
    productName: "Product 2",
    productId: 2,
    category: "Category 2",
    buyingPrice: 20.99,
    quantity: 150,
    unit: "boxes",
    expiryDate: "2024-12-31",
    thresholdValue: 60
  },
  {
    productName: "Product 3",
    productId: 3,
    category: "Category 1",
    buyingPrice: 15.99,
    quantity: 200,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 70
  },
  {
    productName: "Product 4",
    productId: 4,
    category: "Category 3",
    buyingPrice: 12.99,
    quantity: 120,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 40
  },
  {
    productName: "Product 5",
    productId: 5,
    category: "Category 2",
    buyingPrice: 25.99,
    quantity: 180,
    unit: "boxes",
    expiryDate: "2024-12-31",
    thresholdValue: 55
  },
  {
    productName: "Product 6",
    productId: 6,
    category: "Category 1",
    buyingPrice: 18.99,
    quantity: 220,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 65
  },
  {
    productName: "Product 7",
    productId: 7,
    category: "Category 3",
    buyingPrice: 22.99,
    quantity: 130,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 45
  },
  {
    productName: "Product 8",
    productId: 8,
    category: "Category 2",
    buyingPrice: 30.99,
    quantity: 200,
    unit: "boxes",
    expiryDate: "2024-12-31",
    thresholdValue: 60
  },
  {
    productName: "Product 9",
    productId: 9,
    category: "Category 1",
    buyingPrice: 27.99,
    quantity: 250,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 75
  },
  {
    productName: "Product 10",
    productId: 10,
    category: "Category 3",
    buyingPrice: 35.99,
    quantity: 140,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 50
  },
  {
    productName: "Product 11",
    productId: 11,
    category: "Category 2",
    buyingPrice: 40.99,
    quantity: 220,
    unit: "boxes",
    expiryDate: "2024-12-31",
    thresholdValue: 65
  },
  {
    productName: "Product 12",
    productId: 12,
    category: "Category 1",
    buyingPrice: 45.99,
    quantity: 270,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 80
  },
  {
    productName: "Product 13",
    productId: 13,
    category: "Category 3",
    buyingPrice: 50.99,
    quantity: 150,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 55
  },
  {
    productName: "Product 14",
    productId: 14,
    category: "Category 2",
    buyingPrice: 55.99,
    quantity: 240,
    unit: "boxes",
    expiryDate: "2024-12-31",
    thresholdValue: 70
  },
  {
    productName: "Product 15",
    productId: 15,
    category: "Category 1",
    buyingPrice: 60.99,
    quantity: 300,
    unit: "pieces",
    expiryDate: "2024-12-31",
    thresholdValue: 85
  },
];

interface Store {
  page: number;
  products: Product[];
  visibleProducts: Product[];
  addItem: (item: Product) => void;
  removeItem: (productId: number) => void;
  showNext: () => void;
  showPrev: () => void;
}

const MAX_VISIBLE_PRODUCTS = 10;

export const useProductStore = create<Store>((set, get) => ({
  page: 1,
  products: placeholderProducts || [],
  visibleProducts: placeholderProducts.slice(0, 10) || [],
  addItem: (item) => {
    set((state) => ({
      products: [...state.products, item],
      visibleProducts: state.visibleProducts.length < MAX_VISIBLE_PRODUCTS
        ? [...state.visibleProducts, item]
        : state.visibleProducts, // Only add to visibleProducts if it's less than MAX_VISIBLE_PRODUCTS
    }));
  },
  removeItem: (productId) => {
    set((state) => ({
      products: state.products.filter(item => item.productId !== productId),
      visibleProducts: state.visibleProducts.filter(item => item.productId !== productId), // Update visibleProducts when removing item
    }));
  },
  showNext: () => {
    const { products, page } = get();
    const nextPage = Math.min(page + 1, Math.ceil(products.length / MAX_VISIBLE_PRODUCTS));
    const startIndex = (nextPage - 1) * MAX_VISIBLE_PRODUCTS;
    const nextProducts = products.slice(startIndex, startIndex + MAX_VISIBLE_PRODUCTS);
    set({ visibleProducts: nextProducts, page: nextPage });
  },
  showPrev: () => {
    const { products, page } = get();
    const prevPage = Math.max(page - 1, 1);
    const startIndex = (prevPage - 1) * MAX_VISIBLE_PRODUCTS;
    const prevProducts = products.slice(startIndex, startIndex + MAX_VISIBLE_PRODUCTS);
    set({ visibleProducts: prevProducts, page: prevPage });
  }
}));

