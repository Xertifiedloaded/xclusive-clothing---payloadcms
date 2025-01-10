/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
    customers: CustomerAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    products: Product;
    categories: Category;
    orders: Order;
    customers: Customer;
    pages: Page;
    discounts: Discount;
    header: Header;
    footer: Footer;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    products: ProductsSelect<false> | ProductsSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    orders: OrdersSelect<false> | OrdersSelect<true>;
    customers: CustomersSelect<false> | CustomersSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    discounts: DiscountsSelect<false> | DiscountsSelect<true>;
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (Customer & {
        collection: 'customers';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface CustomerAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  caption?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  name: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  price: number;
  category: string | Category;
  images: {
    image: string | Media;
    id?: string | null;
  }[];
  sizes: {
    size?: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL') | null;
    inventory: number;
    id?: string | null;
  }[];
  colors: {
    color: string;
    colorCode: string;
    id?: string | null;
  }[];
  status: 'draft' | 'published' | 'outOfStock' | 'discontinued';
  featured?: boolean | null;
  specifications?: {
    material?: string | null;
    care?:
      | {
          instruction?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name: string;
  description?: string | null;
  image?: (string | null) | Media;
  parent?: (string | null) | Category;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  orderNumber: string;
  customer: string | Customer;
  items: {
    product: string | Product;
    quantity: number;
    size: string;
    color: string;
    price: number;
    id?: string | null;
  }[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  total: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers".
 */
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  addresses?:
    | {
        type: 'shipping' | 'billing';
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
        id?: string | null;
      }[]
    | null;
  phoneNumber?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  pageType: 'landing' | 'about' | 'contact' | 'policy' | 'custom';
  content?:
    | (
        | {
            heading: string;
            subheading?: string | null;
            backgroundImage: string | Media;
            cta?: {
              text?: string | null;
              link?: string | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero';
          }
        | {
            heading?: string | null;
            products?: (string | Product)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'featuredProducts';
          }
        | {
            content?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            categories?: (string | Category)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'categoriesShowcase';
          }
      )[]
    | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    image?: (string | null) | Media;
  };
  status?: ('draft' | 'published') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "discounts".
 */
export interface Discount {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  validFrom: string;
  validUntil: string;
  minimumPurchase?: number | null;
  active?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  name: string;
  logo: string | Media;
  navigationItems?:
    | {
        label: string;
        link: string;
        subItems?:
          | {
              label?: string | null;
              link?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  ctaButton?: {
    text?: string | null;
    link?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  name: string;
  navigationItems?:
    | {
        label: string;
        link: string;
        id?: string | null;
      }[]
    | null;
  socialLinks?:
    | {
        platform: string;
        url: string;
        icon?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  contactInfo?: {
    email?: string | null;
    phone?: string | null;
    address?: string | null;
  };
  copyrightText: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'products';
        value: string | Product;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'orders';
        value: string | Order;
      } | null)
    | ({
        relationTo: 'customers';
        value: string | Customer;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'discounts';
        value: string | Discount;
      } | null)
    | ({
        relationTo: 'header';
        value: string | Header;
      } | null)
    | ({
        relationTo: 'footer';
        value: string | Footer;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'customers';
        value: string | Customer;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'customers';
        value: string | Customer;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  caption?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products_select".
 */
export interface ProductsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  price?: T;
  category?: T;
  images?:
    | T
    | {
        image?: T;
        id?: T;
      };
  sizes?:
    | T
    | {
        size?: T;
        inventory?: T;
        id?: T;
      };
  colors?:
    | T
    | {
        color?: T;
        colorCode?: T;
        id?: T;
      };
  status?: T;
  featured?: T;
  specifications?:
    | T
    | {
        material?: T;
        care?:
          | T
          | {
              instruction?: T;
              id?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  image?: T;
  parent?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders_select".
 */
export interface OrdersSelect<T extends boolean = true> {
  orderNumber?: T;
  customer?: T;
  items?:
    | T
    | {
        product?: T;
        quantity?: T;
        size?: T;
        color?: T;
        price?: T;
        id?: T;
      };
  status?: T;
  shippingAddress?:
    | T
    | {
        street?: T;
        city?: T;
        state?: T;
        zipCode?: T;
        country?: T;
      };
  total?: T;
  paymentStatus?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers_select".
 */
export interface CustomersSelect<T extends boolean = true> {
  firstName?: T;
  lastName?: T;
  addresses?:
    | T
    | {
        type?: T;
        street?: T;
        city?: T;
        state?: T;
        zipCode?: T;
        country?: T;
        id?: T;
      };
  phoneNumber?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  pageType?: T;
  content?:
    | T
    | {
        hero?:
          | T
          | {
              heading?: T;
              subheading?: T;
              backgroundImage?: T;
              cta?:
                | T
                | {
                    text?: T;
                    link?: T;
                  };
              id?: T;
              blockName?: T;
            };
        featuredProducts?:
          | T
          | {
              heading?: T;
              products?: T;
              id?: T;
              blockName?: T;
            };
        content?:
          | T
          | {
              content?: T;
              id?: T;
              blockName?: T;
            };
        categoriesShowcase?:
          | T
          | {
              categories?: T;
              id?: T;
              blockName?: T;
            };
      };
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  status?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "discounts_select".
 */
export interface DiscountsSelect<T extends boolean = true> {
  code?: T;
  type?: T;
  value?: T;
  validFrom?: T;
  validUntil?: T;
  minimumPurchase?: T;
  active?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  name?: T;
  logo?: T;
  navigationItems?:
    | T
    | {
        label?: T;
        link?: T;
        subItems?:
          | T
          | {
              label?: T;
              link?: T;
              id?: T;
            };
        id?: T;
      };
  ctaButton?:
    | T
    | {
        text?: T;
        link?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  name?: T;
  navigationItems?:
    | T
    | {
        label?: T;
        link?: T;
        id?: T;
      };
  socialLinks?:
    | T
    | {
        platform?: T;
        url?: T;
        icon?: T;
        id?: T;
      };
  contactInfo?:
    | T
    | {
        email?: T;
        phone?: T;
        address?: T;
      };
  copyrightText?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}