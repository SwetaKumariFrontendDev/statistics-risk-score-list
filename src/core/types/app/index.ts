/**
 * Represents a navigation item in sidebar.
 */
export type NavigationItem =
  | {
      name: string;
      route: { name: string };
      children?: NavigationItem[];
    }
  | {
      name: string;
      link: string;
      children?: NavigationItem[];
    };

/**
 * Represents a group of navigation items.
 */
export type NavigationItemGroup = {
  name?: string;
  items: NavigationItem[];
  position: NavigationItemGroupPosition;
};

export type NavigationItemGroupPosition = 'normal' | 'bottom';
