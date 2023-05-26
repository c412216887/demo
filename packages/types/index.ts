export type NavContent = {
  id: string;
  name: string;
  classic: [Classic];
};

export type Classic = {
  id: string;
  name: string | null;
  section: [Section] | null;
};

type Section = {
  id: string;
  name: string;
};

export type Navigation = {
  id: number;
  name: string;
  path: string;
  component: string;
};
