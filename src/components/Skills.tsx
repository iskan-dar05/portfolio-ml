import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Full Stack",
    skills: ["Laravel", "Python", "FastAPI", "Node.js", "PostgreSQL", "MySQL", "Scalable API Design", "React", "React Native", "Tailwindcss", "HTML", "CSS", "JS", "TS"]
  },
  {
    title: "AI & Data Science",
    skills: ["ML/Deep Learning", "Neural Networks", "NLP", "Computer Vision", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "AWS", "Git", "Linux Server Mgmt"]
  }
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {skillCategories.map((category, idx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-[13px] font-semibold text-foreground">{category.title}</h3>
          <div className="flex flex-wrap">
            {category.skills.map(skill => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
