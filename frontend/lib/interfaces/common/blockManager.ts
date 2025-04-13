/**  Type definition for a generic block. */
export interface IBlock {
  /**  Unique identifier for the block. */
  id: number | string;
  /**  Unique render identifier for the block. */
  key: string;
  /**  Component identifier for rendering specific content. */
  __component: string;
  /** Scroll Id */
  scrollId?: string;
}

export type IBlocks = IBlock[];
