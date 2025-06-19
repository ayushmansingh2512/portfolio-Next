// sanity.js or lib/sanity.js
import {createClient} from "next-sanity"

export const client = createClient({
    projectId: 'g7styzy6', // Add your actual project ID
    dataset: 'production',
    apiVersion: "2024-01-01",
    useCdn: false
})