export interface SITEMAPtypes {
  title: string;
  pages: Array<object>[];
}
export type Page = {
  link: string;
  name: string;
  footer: boolean;
  disabled: boolean;
};
const SITEMAP: { [key: string]: { title: string; pages: Array<Page> } } = {
  content: {
    title: "Content",
    pages: [
      { link: "about", name: "About Us", footer: true, disabled: false },
      { link: "#", name: "Projects", footer: false, disabled: true },
      {
        link: "research",
        name: "Research & Data",
        footer: true,
        disabled: false,
      },
      { link: "media", name: "Media", footer: true, disabled: false },
      {
        link: "presentations",
        name: "Presentations",
        footer: true,
        disabled: false,
      },
      { link: "newsletter", name: "Newsletter", footer: true, disabled: false },
    ],
  },
  projects: {
    title: "Projects",
    pages: [
      { link: "pci-china", name: "PCI-China", footer: true, disabled: false },
      {
        link: "pci-personnel",
        name: "PCI-Personnel",
        footer: true,
        disabled: false,
      },
      {
        link: "pci-crackdown",
        name: "PCI-Crackdown",
        footer: true,
        disabled: false,
      },
      {
        link: "pci-outbreak",
        name: "PCI-Outbreak",
        footer: true,
        disabled: false,
      },
      { link: "pci-nko", name: "PCI-NKO", footer: true, disabled: false },
    ],
  },
};

export default SITEMAP;
