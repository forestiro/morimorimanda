export type Group = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  category: string;
  scale: string;
  rating: number;
  reviews: number;
  activities: string[];
  externalOrganization: boolean;
  externalOrganizationName?: string;
  externalOrganizationLogo?: {
    url: string;
    height: number;
    width: number;
  };
}; 