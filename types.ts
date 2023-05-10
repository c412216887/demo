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
