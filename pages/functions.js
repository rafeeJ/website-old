import axios from 'axios';
import download from 'downloadjs';

import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase/clientApp';

export const downloadCV = async () => {
    let api = 'AIzaSyBNEBsNkrtbfsfeTX9Busa7Vfxwd0jqmLY'
    let fileId = '1vc9dFEC2lAJfe0yKKrAzCPP-jTnN_uF7eyFsC3Dn_h0'
    let url = `https://www.googleapis.com/drive/v3/files/${fileId}/export?key=${api}&?mimetype=application/pdf`

    const response = await axios.get(url, { responseType: 'blob', params: { 'mimeType': 'application/pdf' } })
    try {
      download(response.data, 'Rafee_Jenkins_CV.pdf', 'application/pdf')
      logEvent(analytics, 'download_CV', { success: 'true'})
    } catch (error) {
      console.debug('Error getting file')
      console.debug(error)
    }
}