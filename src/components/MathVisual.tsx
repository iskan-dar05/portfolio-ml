import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function MathVisual() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 400;
    
    svg.selectAll("*").remove();

    const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create a mathematical wave visualization (Sine waves)
    const line = d3.line<[number, number]>()
      .x(d => d[0])
      .y(d => d[1])
      .curve(d3.curveBasis);

    const generateWave = (offset: number, amplitude: number, frequency: number) => {
      const points: [number, number][] = [];
      for (let x = -width / 2; x <= width / 2; x += 10) {
        const y = Math.sin(x * frequency + offset) * amplitude;
        points.push([x, y]);
      }
      return points;
    };

    const waves = [
      { color: "#3b82f6", opacity: 0.2, amplitude: 50, frequency: 0.01 },
      { color: "#8b5cf6", opacity: 0.15, amplitude: 70, frequency: 0.008 },
      { color: "#10b981", opacity: 0.1, amplitude: 30, frequency: 0.015 },
    ];

    const paths = waves.map(w => 
      g.append("path")
        .attr("fill", "none")
        .attr("stroke", w.color)
        .attr("stroke-width", 2)
        .attr("opacity", w.opacity)
    );

    let offset = 0;
    const animate = () => {
      offset += 0.02;
      paths.forEach((path, i) => {
        const w = waves[i];
        path.attr("d", line(generateWave(offset * (i + 1), w.amplitude, w.frequency)));
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full h-[300px] flex items-center justify-center bg-sidebar rounded-xl overflow-hidden relative border border-border">
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-[10px] font-mono text-accent uppercase tracking-widest">Mathematical Modeling</h3>
        <p className="text-[10px] text-accent/40 font-mono">f(x) = Σ sin(ωx + φ)</p>
      </div>
      <svg 
        ref={svgRef} 
        viewBox="0 0 800 400" 
        className="w-full h-full max-w-4xl"
      />
    </div>
  );
}
