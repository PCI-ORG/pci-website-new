export interface SITEMAPtypes {
  title: string;
  pages: Array<object>[];
}
export type Page = {
  link: string;
  name: string;
  footer: boolean;
};
const SITEMAP: { [key: string]: { title: string; pages: Array<Page> } } = {
  content: {
    title: "Content",
    pages: [
      { link: "about", name: "About Us", footer: true },
      { link: "#", name: "Projects", footer: false },
      { link: "research", name: "Research & Data", footer: true },
      { link: "media", name: "Media", footer: true },
      { link: "presentations", name: "Presentations", footer: true },
      { link: "newsletter", name: "Newsletter", footer: true },
    ],
  },
  projects: {
    title: "Projects",
    pages: [
      { link: "pci-china", name: "PCI-China", footer: true },
      { link: "pci-persennel", name: "PCI-Personnel", footer: true },
      { link: "pci-crackdown", name: "PCI-Crackdown", footer: true },
      { link: "pci-outbreak", name: "PCI-Outbreak", footer: true },
      { link: "pci-nko", name: "PCI-NKO", footer: true },
    ],
  },
};

export default SITEMAP;
