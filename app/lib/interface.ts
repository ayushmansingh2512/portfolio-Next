import React from 'react';
import { client } from '../lib/sanity'; // ✅ Keep this
// ✅ No import of ProjectCard here!

export interface ProjectCard {
  name: string;
  githubLink: string;
  imageUrl: string;
  projectLink: string;
}
