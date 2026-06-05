export type OrderStatus =
  | "new"
  | "approved"
  | "in_production"
  | "printing"
  | "quality_check"
  | "completed"
  | "dispatched"
  | "cancelled";

export type OrderPriority =
  | "low"
  | "medium"
  | "high";

export interface Order {
  id: string;

  orderNumber: string;

  customerName: string;

  customerPhone: string;

  customerEmail?: string;

  productName: string;

  quantity: number;

  finalPrice?: number;

  status: OrderStatus;

  priority: OrderPriority;

  assignedTo?: string;

  expectedDeliveryDate: string;

  productionNotes?: string;

  createdAt: string;

  updatedAt: string;
}