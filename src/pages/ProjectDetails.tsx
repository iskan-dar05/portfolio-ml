import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { useState } from 'react'

export default function ProjectDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="p-6">
        <button onClick={() => window.history.back()}>
          ← Back
        </button>
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button onClick={() => window.history.back()}>
        ← Back
      </button>

      <h1 className="text-2xl font-bold">{project.title}</h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border border-border p-6 rounded-xl hover:border-accent transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-base font-semibold">{project.title}</h4>
          <span className="math-badge">{project.mathBadge}</span>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex gap-3">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[11px] text-accent font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
		  {project.github && (
		    <a
		      href={project.github}
		      target="_blank"
		      rel="noopener noreferrer"
		      className="flex items-center gap-2 text-sm text-accent hover:underline"
		    >
		      <Github size={16} />
		      GitHub
		    </a>
		  )}

		  {project.demo && (
		    <a
		      href={project.demo}
		      target="_blank"
		      rel="noopener noreferrer"
		      className="flex items-center gap-2 text-sm text-accent hover:underline"
		    >
		      <ExternalLink size={16} />
		      Live Demo
		    </a>
  			)}
		</div>
      </motion.div>
      {project.images && (
        <div className="mt-6 text-center space-y-3">
          <h3 className="text-xl font-bold">Project Images</h3>

          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="project"
              onClick={() => setSelectedImage(img)}
              className="w-3/4 object-cover mx-auto rounded-md cursor-pointer border hover:border-accent transition"
            />
          ))}
        </div>
      )}
      {selectedImage && (
  <div className="mt-6 border border-border p-4 rounded-xl">
    <p className="text-sm mb-3 text-muted">Preview</p>

    <img
      src={selectedImage}
      alt="selected"
      className="w-full max-h-[400px] object-contain rounded-lg"
    />

    <button
      onClick={() => setSelectedImage(null)}
      className="mt-4 text-sm text-accent hover:underline"
    >
      Close
    </button>
  </div>
)}
    </div>
  );
}