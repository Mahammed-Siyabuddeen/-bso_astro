interface ImageFormats {
  thumbnail: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
  };
  medium: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
  };
  small: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
  };
}

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface Image {
  data: ImageData;
}

interface ProductAttributes {
  Title: string;
  Price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  description: string,
  Image: Image;
}

export interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductType {
  data: ProductData;
  meta: Record<string, any>;
}
export interface ProductsType {
  data: ProductData[];
  meta: Record<string, any>;
}


export interface cartItemType {
  id: number,
  Title: string,
  Price: number,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  description: string,
  Image:ImageAttributes,
}

export interface userType {
  id: number,
  username: string,
  email: string,
  provider: string,
  confirmed: boolean,
  blocked: boolean,
  createdAt: string,
  updatedAt: string,
  carts: ProductData[],
}

export interface userType1 {
  id: number,
  username: string,
  email: string,
  provider: string,
  confirmed: boolean,
  blocked: boolean,
  createdAt: string,
  updatedAt: string,
  carts: cartItemType[],
}
