'use client';

import { useParams, Navigate } from 'react-router-dom';
import { projects as designProjects } from '../../data/designProjects'; 
import { codeProjects } from '../../data/codeProjects'; 
import CreativeLayout from './CreativeLayout';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Cerca in entrambi gli array senza eccezioni
  const currentProject = 
    designProjects.find((p) => p.id === id) || 
    codeProjects.find((p) => p.id === id);

  if (!currentProject) {
    return <Navigate to="/" replace />;
  }

  return <CreativeLayout project={currentProject} />;
};

export default ProjectDetail;