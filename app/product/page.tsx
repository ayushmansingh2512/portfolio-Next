import React from 'react';
import { client } from '../lib/sanity';
import { ProjectCard } from '../lib/interface';
import ProjectsGrid from './ProjectsGrid';

async function getData() {
    const query = `*[_type == 'project'] | order(order desc) {
        name,
        projectLink,
        githubLink,
        "imageUrl": image.asset->url,
        order,
        description
    }`;

    try {
        const data = await client.fetch(query);
        console.log("Fetched project data:", data);
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
                <h1 className="text-4xl lg:pb-2 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    My Projects
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    A collection of my work and contributions
                </p>
            </div>

            <ProjectsGrid projects={data} />
        </section>
    );
};

export default ProjectsPage;
