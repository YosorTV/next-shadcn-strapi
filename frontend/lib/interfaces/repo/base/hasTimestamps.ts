export default interface HasTimestamps {
  createdAt: string | number; // todo: need to keep one format of value
  updatedAt: string | number | null; // todo: need to keep one format of value
}
