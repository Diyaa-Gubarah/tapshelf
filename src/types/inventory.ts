export interface INVENTORY {
    title: string;
    value: string;
    description: string;
}

export interface INVENTORYS {
    left: INVENTORY;
    right?: Pick<INVENTORY, "value" | "description">;
    last?: boolean;
}
