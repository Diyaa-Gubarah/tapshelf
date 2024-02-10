import { INVENTORY, INVENTORYS } from "../types";

export const data: INVENTORYS[] = [
    {
        left: { title: "Categorys", value: "12", description: "Last 7 days" },
    },
    {
        left: { title: "Total Products", value: "868", description: "Last 7 days" },
        right: { value: "543343$", description: "Revenue" },
    },
    {
        left: { title: "Top Selling", value: "5", description: "Last 7 days" },
        right: { value: "2455$", description: "Cost" },
    },
    {
        left: { title: "Low Stock", value: "12", description: "Ordered" },
        right: { value: "2", description: "Not in stock" }, last: true
    },

    // Add more data as needed
];
