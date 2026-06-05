/* Product Status */

export type ProductStatus =
  | "active"
  | "draft"
  | "archived";

/* Inquiry Status */

export type InquiryStatus =
  | "New"
  | "Pending"
  | "Quoted"
  | "Approved"
  | "Rejected";

  /* Order Status */

export type OrderStatus =
  | "new"
  | "approved"
  | "in_production"
  | "printing"
  | "quality_check"
  | "completed"
  | "dispatched"
  | "cancelled";

  /* Category Status */

export type CategoryStatus =
  | "active"
  | "inactive";