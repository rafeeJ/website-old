import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firehooks';
import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard';
import { db } from '../../firebase/clientApp';

export default function Projects() {

    const [projects, projectsLoading, projectsError] = useCollection(
        query(collection(db, 'projects'))
    );

    if (!projectsLoading && projects) {
        projects.docs.map((doc) => console.log(doc.data()));
    }

    return (
        <Layout>
            <div>
                <span className='text-2xl sm:text-4xl font-merri'>Projects</span>
            </div>
            <div className="md:grid grid-cols-3 gap-16 content-evenly">
                {projects?.docs.map((doc) => {
                    return(<ProjectCard className="md:my-48" project={doc.data()}/>)
                })}
            </div>
        </Layout>
    )
}