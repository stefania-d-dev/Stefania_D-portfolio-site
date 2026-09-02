import React from 'react';
import { UnifiedProject } from '../../utils/projects';

interface ProjectModalProps {
  project: UnifiedProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pulsante di chiusura */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* Intestazione */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            {project.category}
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-2">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{project.description}</p>
        </div>

        {/* Immagine di Copertina */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Sezioni Specifiche del Case Study (Challenge / Solution / Philosophy) */}
        <div className="space-y-6 mb-8">
          {project.challenge && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">La Sfida</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">La Soluzione & Design</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          )}

          {project.designPhilosophy && (
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">Filosofia di Design</h4>
              <p className="text-gray-700 dark:text-gray-300 italic">{project.designPhilosophy}</p>
            </div>
          )}
        </div>

        {/* Metriche (se presenti) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
                <div className="text-2xl font-bold text-black dark:text-white">{metric.value}</div>
                <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Galleria Immagini aggiuntive */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Galleria Progetto</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
                  <img src={imgUrl} alt={`${project.title} preview ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer con Link Esterno */}
        {project.link && (
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-sm hover:opacity-95 transition-opacity"
            >
              Visita il Progetto Live &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  );
};