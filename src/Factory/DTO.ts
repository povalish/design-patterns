export type DTO = {
  id: number;
  type: string;
  name: string;

  // Campaign Card fields
  sumRequired?: number;
  sumCollected?: number;

  // Educational Card fields
  universatyName?: string;
  universatyLink?: string;
}
