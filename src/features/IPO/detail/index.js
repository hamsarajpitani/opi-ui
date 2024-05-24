import { Fragment, createContext } from 'react'
import IPOActions from './components/IPOActions'
import IPOdata from '../../../data/IPO/dummy.json'
import IPOAbout from './components/IPOAbout';
import IPODetailInfo from './components/IPODetailInfo';
import IPOTimeline from './components/IPOTimeline';
export const DetailPageContext = createContext();

const IPODetail = () => {
    return (
        <DetailPageContext.Provider value={IPOdata[0]}>
            <Fragment>
                <IPOActions />
                <IPODetailInfo />
                <IPOTimeline />
                <IPOAbout />
            </Fragment>
        </DetailPageContext.Provider>
    )
}

export default IPODetail