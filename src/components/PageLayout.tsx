import { useEffect, useMemo } from "react";
import { useNavigation } from "../context/NavigationContext";
import { ColorType } from "../types/color";
import { SectionProps } from "../components/SectionLayout";

export interface PageSectionConfig {
  id: string;
  step: string;
  label: string;
  Component: React.ComponentType<SectionProps>;
}

interface PageLayoutProps {
  sections: PageSectionConfig[];
  color: ColorType;
}

export function PageLayout({ sections, color }: PageLayoutProps) {
  const { setActiveSection, setTotalSections, setSectionTitles } =
    useNavigation();

  const sectionsKey = useMemo(
    () => sections.map((s) => s.id).join(","),
    [sections],
  );

  useEffect(() => {
    setTotalSections(sections.length);
    setSectionTitles(sections.map((sec) => `${sec.step} // ${sec.label}`));
  }, [sectionsKey, sections, setTotalSections, setSectionTitles]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sections.findIndex(
              (sec) => sec.id === entry.target.id,
            );
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex + 1);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px 0px 0px" },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionsKey, sections, setActiveSection]);

  return (
    <div className="w-full flex flex-col">
      {sections.map(({ id, step, label, Component }) => (
        <Component key={id} id={id} step={step} label={label} color={color} />
      ))}
    </div>
  );
}
