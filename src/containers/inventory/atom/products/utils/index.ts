import { Product } from "../../../../../types";

export const validateForm = (
    product: Product
): { isValid: boolean; falseKeys: (keyof Product)[] } => {
    const requiredKeys: (keyof Product)[] = [
        'productName',
        'productId',
        'category',
        'buyingPrice',
        'quantity',
        'unit',
        'expiryDate',
        'thresholdValue'
    ];
    const falseKeys: (keyof Product)[] = [];

    // Check if any required key is missing or has a falsy value in the product object
    for (const key of requiredKeys) {
        if (!(key in product) || !product[key]) {
            falseKeys.push(key);
        }
    }

    // If any required key is missing or has a falsy value, return isValid as false
    if (falseKeys.length > 0 || Object.keys(product).length !== requiredKeys.length) {
        return { isValid: false, falseKeys };
    }

    // If all required keys are present and have non-falsy values, return isValid as true
    return { isValid: true, falseKeys: [] };
};
