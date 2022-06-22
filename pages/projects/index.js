import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firehooks';
import { useEffect } from 'react';
import GridLayout from '../../components/GridLayout';
import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard';
import { analytics, db } from '../../firebase/clientApp';
import { logEvent } from 'firebase/analytics';

export default function Projects() {

    useEffect(() => {
        logEvent(analytics, 'screen_view', {
          firebase_screen: 'Projects'
        })
      }, [])

    return (
        <GridLayout collection={"projects"}/>
       
    )
}