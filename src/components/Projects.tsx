import { motion } from "motion/react";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";


export default function Projects() {
  const navigate  = useNavigate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          onClick={() => navigate(`/projects/${project.id}`)}
          className="border border-border p-6 rounded-xl hover:border-accent transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-base font-semibold">{project.title}</h4>
            <span className="math-badge">{project.mathBadge}</span>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-6">{project.description}</p>
          <div className="flex gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="text-[11px] text-accent font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
