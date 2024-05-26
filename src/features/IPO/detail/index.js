import { Fragment, createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import IPOActions from './components/IPOActions'
import IPOAbout from './components/IPOAbout';
import IPODetailInfo from './components/IPODetailInfo';
import IPOTimeline from './components/IPOTimeline';
import { useParams } from 'react-router-dom';
import { clearSelectedIpo, fetchSingleIpo } from '../ipoSlice';

export const DetailPageContext = createContext();

const IPODetail = () => {
    const { selectedIpo } = useSelector(state => state.ipoState);
    const dispatch = useDispatch();
    const { slug } = useParams();
    const { companyInfo, company, asset, ipoTimeline } = selectedIpo || {}

    useEffect(() => {
        dispatch(fetchSingleIpo(slug))
        return (() => {
            dispatch(clearSelectedIpo())
        })
    }, [dispatch, slug])

    if (!selectedIpo) return
    return (
            <Fragment>
            <IPOActions companyInfo={companyInfo} company={company} asset={asset} />
            <IPODetailInfo selectedIpo={selectedIpo} />
            <IPOTimeline ipoTimeline={ipoTimeline} />
            <IPOAbout companyInfo={companyInfo} />
        </Fragment>
    )
}

export default IPODetail