"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../lib/interface';

interface ProjectsGridProps {
    projects: ProjectCard[];
}

interface ProjectCardComponentProps {
    project: ProjectCard;
    index: number;
}

const ProjectCardComponent: React.FC<ProjectCardComponentProps> = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="group cursor-pointer flex flex-col gap-2"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
            }}
        >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-3">
                <motion.img
                    src={project.imageUrl}
                    alt={project.name || 'Project image'}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </div>

            {/* Content */}
            <div className="space-y-1">
                {/* Project Name */}
                <h3 className="font-medium text-gray-900   truncate">
                    {project.name}
                </h3>

                {/* Links Row */}
                <div className="flex items-center gap-2 text-sm">
                    {project.githubLink && (
                        <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Code
                        </motion.a>
                    )}
                    {project.projectLink && (
                        <motion.a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live
                        </motion.a>
                    )}
                </div>

                {/* Description */}
                {project.description && (
                    <div onClick={() => setIsExpanded(!isExpanded)}>
                        <AnimatePresence mode="wait">
                            {!isExpanded ? (
                                <motion.p
                                    key="truncated"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 cursor-pointer"
                                >
                                    {project.description}
                                </motion.p>
                            ) : (
                                <motion.p
                                    key="expanded"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-gray-600 dark:text-gray-400 text-sm cursor-pointer"
                                >
                                    {project.description}
                                </motion.p>
                            )}
                        </AnimatePresence>
                        
                        {project.description.length > 100 && (
                            <motion.button
                                className="text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mt-1 underline"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isExpanded ? 'Show less' : 'Show more'}
                            </motion.button>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {projects.length > 0 ? (
                projects.map((project, index) => (
                    <ProjectCardComponent 
                        key={project.name} 
                        project={project} 
                        index={index}
                    />
                ))
            ) : (
                <div className="col-span-full text-center py-12">
                    <motion.div 
                        className="text-gray-500 dark:text-gray-400 text-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="mt-4">No projects found. Please check back later!</p>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectsGrid;