import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import GridLayout from '../../components/GridLayout';
import { analytics } from '../../firebase/clientApp';

export default function Events() {

    useEffect(() => {
        logEvent(analytics, 'screen_view', {
          firebase_screen: 'Events'
        })
      }, [])
    return (
        <GridLayout collection={"events"}/>
    )
}