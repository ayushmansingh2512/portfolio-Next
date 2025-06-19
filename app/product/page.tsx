import React from 'react';
import { client } from '../lib/sanity';
import { ProjectCard } from '../lib/interface';

export interface ProjectCard {
    name: string;
    githubLink: string;
    imageUrl: string;
    projectLink: string;
}

async function getData() {
    const query = `*[_type == 'project'] {
        name,
        projectLink,
        githubLink,
        "imageUrl": image.asset->url
    }`;

    try {
        const data = await client.fetch(query);
        return data as ProjectCard[];
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

const ProjectsPage = async () => {
    const data: ProjectCard[] = await getData();

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    My Projects
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    A collection of my work and contributions
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.name}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
                        >
                            {/* Image with gradient overlay */}
                            <div className="aspect-w-16 aspect-h-9 w-full h-64 md:h-80">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name || 'Project image'}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6">
                                {/* Project name */}
                                <div>
                                    <h2 className="text-2xl font-bold text-white drop-shadow-md">
                                        {item.name}
                                    </h2>
                                </div>
                                
                                {/* Links */}
                                <div className="flex justify-end space-x-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {/* GitHub Link */}
                                    <a
                                        href={item.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
                                        aria-label="View code on GitHub"
                                    >
                                        <svg 
                                            className="w-5 h-5" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">Code</span>
                                    </a>

                                    {/* Project Link */}
                                    <a
                                        href={item.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm border border-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                                        aria-label="View live project"
                                    >
                                        <svg 
                                            className="w-5 h-5" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span className="font-medium">Live</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <div className="text-gray-500 dark:text-gray-400 text-lg">
                            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="mt-4">No projects found. Check back later!</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsPage;