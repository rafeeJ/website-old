import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firehooks';
import GridLayout from '../../components/GridLayout';
import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard';
import { db } from '../../firebase/clientApp';

export default function Projects() {

    // const [projects, projectsLoading, projectsError] = useCollection(
    //     query(collection(db, 'projects'))
    // );
    
    // const [events, eventsLoading, eventsError] = useCollection(
    //     query(collection(db, 'events'))
    // );

    return (
        <GridLayout collection={"projects"}/>
        // <Layout>
        //     <div className='pb-4'>
        //         <span className='text-2xl sm:text-4xl font-merri'>Projects</span>
        //     </div>
        //     <div className="md:grid grid-cols-3 gap-16 content-evenly">
        //         {projects?.docs.map((doc, i) => {
        //             return(<ProjectCard key={i} className="md:my-48" project={doc.data()}/>)
        //         })}
        //     </div>
        //     <div className='py-4'>
        //         <span className='text-2xl sm:text-4xl font-merri'>Events</span>
        //     </div>
        //     <div className="md:grid grid-cols-3 gap-16 content-evenly">
        //         {events?.docs.map((doc, i) => {
        //             return(<ProjectCard key={i} className="md:my-48" project={doc.data()}/>)
        //         })}
        //     </div>
        // </Layout>
    )
}