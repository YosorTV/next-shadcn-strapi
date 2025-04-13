import { TID } from '@/lib/interfaces/shared';


const getEntityDetails = (slug: string[]): { entityType: TID; entityId: TID } => {
  const [entityType, entityId] = slug;

  return { entityType, entityId };
};

export default getEntityDetails;
