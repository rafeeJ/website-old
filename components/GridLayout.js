import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firehooks';
import { db } from '../firebase/clientApp';
import Layout from './Layout';
import ProjectCard from './ProjectCard';

export default function GridLayout(props) {


    const [collectionInp, collectionLoading, collectionError] = useCollection(
        query(collection(db, props?.collection))
    );
    

    return (
        <Layout>
            <div className='pb-4'>
            <div className='pb-4'>
                <span className='text-2xl sm:text-4xl font-merri'>{props.collection}</span>
            </div>
            <div className="md:grid grid-cols-3 gap-16 content-evenly">
                {collectionInp?.docs.map((doc, i) => {
                    return(<ProjectCard key={i} className="md:my-48" project={doc.data()}/>)
                })}
            </div>
                </div>
        </Layout>
    )
}