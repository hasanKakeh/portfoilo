import React from "react";

export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef() as any;
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log({ entries });

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(domRef.current as any);
        }
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current as any);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
